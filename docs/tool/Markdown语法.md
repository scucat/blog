---
title: Markdown
date: 2022-05-17 11:30:55
categories: 
  - 工具 
tags: 
  - Markdown
author: 
  name: scucat
  link: https://github.com/scucat
---

# Markdown语法

## vuepress 自定义容器

**输入**
<CodeGroup>
  <CodeGroupItem title="tip">

```md
::: tip
这是一个提示
:::
```
**输出**
::: tip
这是一个提示
:::
  </CodeGroupItem>
  <CodeGroupItem title="warning">

```md
::: warning
这是一个警告
:::
```
**输出**
::: warning
这是一个警告
:::
  </CodeGroupItem>
  <CodeGroupItem title="danger">

```md
::: danger
这是一个危险警告
:::
```
**输出**
::: danger
这是一个危险警告
:::
  </CodeGroupItem>
  <CodeGroupItem title="details">

```md
::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
**输出**
::: details
这是一个详情块，在 IE / Edge 中不生效
:::
  </CodeGroupItem>
</CodeGroup>