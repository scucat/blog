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

![666](https://raw.githubusercontent.com/scucat/images/master/20220523103414.png)

## 实现一键复制代码
修改 `theme-default/lib/client/components/Page.vue`
```js
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
 * 复制单行内容到粘贴板
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
```