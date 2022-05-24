---
date: 2022-05-23 11:48:02
categories: 
  - linux
tags: 
  - crontab
author: 
  name: scucat
  link: https://github.com/scucat
---

# crontab 定时器
定时器在线工具：

https://tool.lu/crontab/
https://crontab.guru/#0_*_30_6_*

```bash
例子：
# 每月的最后1天
0 0 L * * *

说明：
Linux
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- day of week (0 - 7) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
|    |    |    +---------- month (1 - 12) OR jan,feb,mar,apr ...
|    |    +--------------- day of month (1 - 31)
|    +-------------------- hour (0 - 23)
+------------------------- minute (0 - 59)
```
