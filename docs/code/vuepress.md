---
title: vuepress
date: 2022-05-19 17:30:57
categories: 
  - 编程
tags: 
  - vuepress
author: 
  name: scucat
  link: https://github.com/scucat
---

>  本站基于vuepress2搭建，对theme-default样式进行了自定义开发

## 修改默认主题样式
> 官方没有给出具体的修改样式的指导，因此通过自己摸索实现

**1. 将 `node_modules/@vuepress/theme-default` 文件夹移动到项目根目录下**

我的vuepress项目结构：

![666](https://raw.githubusercontent.com/scucat/images/master/20220523103414.png)

**2. 修改 `docs/.vuepress/config.js`**
```js
const { defaultTheme } = require('../../theme-default')
module.exports = {
  ...
  theme: defaultTheme({
    ...
  })
}
```
**3. 然后就可以修改根目录下的 `theme-default/lib/client` 里面的文件进行自定义主题开发了**

## 实现一键复制代码
注意：该方法仅适用于 `const { shikiPlugin } = require('@vuepress/plugin-shiki')`

修改 `theme-default/lib/client/components/Page.vue`
```html
<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, ComputedRef, onMounted } from 'vue'
import type { 
  DefaultThemeNormalPageFrontmatter,
  DefaultThemePageFrontmatter,
  DefaultThemePageData,
   } from '../../shared'

const page = usePageData<DefaultThemePageData>()
console.log(page)

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const author = frontmatter.value.author.name 
var date = frontmatter.value.date
date = date.toString().substring(0,10)

/**
 * 复制多行内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copyToClip(content, message) {
    var aux = document.createElement("textarea"); 
    // aux.setAttribute("value", content); // 这样写没有保留换行符
    aux.value = content
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}

onMounted(() => {
  console.log('mounted')
  var codes = document.getElementsByClassName('shiki')
  console.log(codes.length)
  for (let i = 0; i < codes.length; i++) {
    var code = codes[i]
    var copy_div = document.createElement("div")
    copy_div.classList.add("code-copy")
    copy_div.setAttribute('title','复制代码')
    copy_div.innerText = '复制'
    code.appendChild(copy_div)
    copy_div.onclick = function(){
      var previous = this.previousSibling.textContent
      copyToClip(previous,null)
      this.innerText = '复制成功'
    }
    copy_div.onmouseleave = function(){
      let that = this
      setTimeout(function(){ that.innerText = '复制'; }, 5000);
    }
  }
})
</script>

<template>
  <main class="page">
    
    <slot name="top" />
    
    <div class="theme-default-content">
      <div class="page-bar no-print" style="padding-top:1rem;">
        &nbsp;
        <span style="float:right;color:#999;"> 👤{{ author }}  &nbsp;&nbsp; 📅{{ date }}</span>
      </div>
      <Content />
    </div>
    <PageMeta />
    <PageNav />
    <slot name="bottom" />
  </main>
</template>
<style lang="scss" scoped>
.theme-default-content{
  margin-top: 1rem;
}

</style>

```

同时在 `theme-default/lib/client/styles/code.scss` 添加以下样式
```css
.code-copy {
  font-family: var(--font-family-code);
  font-size: 0.5rem;
  color: rgb(158, 158, 158);
  position: absolute;
  top: .8rem;
  right: 2rem;
  cursor: pointer;
}
.code-copy:hover{
  color:white;
}
.shiki:hover{
  .code-copy{
    display: block;
  }
}
```

## 自动生成侧边栏
**1. 新建 `docs/.vuepress/autobar.js`**
```js
var fs = require('fs');
var path = require('path');
const yaml = require('js-yaml');
const docs_dir = path.resolve(__dirname,'../');


function getMarkdownYaml(filePath){
    const content = fs.readFileSync(filePath, 'utf8')
    let re = /---(.*?)---/sg
    let s = re.exec(content)[1]
    let yaml_data = yaml.load(s)
    return yaml_data
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
 function fileDisplayAsync(filePath) {
    var result = []
    var files = fs.readdirSync(filePath)
    files.forEach(function(filename) {
        var filepath = path.join(filePath, filename);
        var stats = fs.statSync(filepath)
        var isFile = stats.isFile(); //是文件
        var isDir = stats.isDirectory(); //是文件夹
        var link = filepath.replace(docs_dir,'')
        link = link.replace(/\\/g,'/')
        if (isFile) {
            if (filename!='README.md') {
                result.push(link)
            }
        }
        if (isDir) {
            item = {
                text:filename
            }
            var file_readme_path = path.join(filepath,"README.md")
            
            if (fs.existsSync(file_readme_path)) {
                item.link = link + '/'
                var yaml_data = getMarkdownYaml(file_readme_path)
                if (yaml_data && yaml_data.title) {
                    item.text = yaml_data.title
                }
            }
            var children = fileDisplayAsync(filepath) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            if (children.length>0) {
                item.children = children
                item.collapsible = true
            }
            result.push(item)
        }

    })
    
    return result
}


//要遍历的文件夹所在的路径
var sidebar = {}

var bases = fs.readdirSync(docs_dir)
bases.forEach(function(name){
    if (name!=".vuepress" && name!="README.md") {
        var link = "/"+name+"/"
        var list = [link+"README.md"]
        var filepath = path.resolve(docs_dir,name)
        var children = fileDisplayAsync(filepath)
        children.forEach(function(item){
            list.push(item)
        })
        sidebar[link] = list
    }
})

exports.sidebar = sidebar
```

**2. 修改同路径下的 `config.js`**
```js
...
var { sidebar } = require('./autobar')
module.exports = {
  ...
  theme: defaultTheme({
    ...
    sidebar:sidebar,
  })
}
```

## 添加百度统计

https://blog.csdn.net/weixin_40532650/article/details/116058032