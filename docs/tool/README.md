---
title: 工具
date: 2022-05-10 16:49:16
permalink: /tool/
categories: 
  - 工具
tags: 
  - 工具
author: 
  name: scucat
  link: https://github.com/scucat
---

# 工具

## 录屏工具
### 1. FScapture

官方主页：http://www.faststone.org/

下载：http://www.cnblogs.com/leftshine/p/screenshot.html#flie-and-url

 

### 2. LICEcap

官方主页：http://www.cockos.com/licecap/

官方下载：LICEcap v1.26 for Windows 　　LICEcap v1.25 for OSX 　

Official GitHub mirror: github.com/justinfrankel/licecap

 

### 3. ScreenToGif

官方主页：http://www.screentogif.com/

官方下载：https://github.com/NickeManarin/ScreenToGif/releases/latest

github：https://github.com/NickeManarin/ScreenToGif

### yrm切换npm/yarn 源
[参考](https://learnku.com/articles/15976/yarn-accelerate-and-modify-mirror-source-in-china)

安装 yrm 
```
npm install -g yrm
```
列出当前所有镜像源
```
yrm ls

    npm -----  https://registry.npmjs.org/
    cnpm ----  http://r.cnpmjs.org/
    taobao --  https://registry.npm.taobao.org/
    nj ------  https://registry.nodejitsu.com/
    rednpm -- http://registry.mirror.cqupt.edu.cn
    skimdb -- https://skimdb.npmjs.com/registry
    yarn ----  https://registry.yarnpkg.com
```
使用 taobao 镜像
```
yrm use taobao
```
测试访问速度
```
yrm test taobao
```