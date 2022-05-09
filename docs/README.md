---
title: BLOG
date: 2020-11-18 17:43:57
permalink: /
home:  ture
heroText: 清风徐来，水波不兴
tagline: 技术吾等追求
heroImage: /images/logo.png
pageClass: custom-page-class
categories: 
  - 《Git》学习笔记
tags: 
  - Git
author: 
  name: scucat
  link: https://github.com/scucat

actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary

features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
---


[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)

VuePress 2 已经发布 :tada: ！

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

这是默认主题内置的 `<Badge />` 组件 <Badge text="1" />

行高亮
```js{3-8}
const { path } = require('@vuepress/utils')

module.exports = {
  plugins: [
    registerComponentsPlugin({
      components: {
        FooBar: path.resolve(__dirname, './components/FooBar.vue'),
      },
    }),
  ],
}
```
```python
import os
a = 1
b = 2
print(a+b)
```

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

::: details
这是一个 details 标签
:::

::: warning 警告
asdfa
:::

::: danger 报错
啊打发手动阀
:::

::: tip 提示
啊打发手动阀
:::



