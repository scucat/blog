---
date: 2022-05-24 11:34:18
categories: 
  - linux
tags: 
  - mysql
author: 
  name: scucat
  link: https://github.com/scucat
---

[参考](https://cloud.tencent.com/developer/article/1784928)

# centos 安装mysql
```bash
[user@centos ~]# mysql
-bash: mysql: command not found
[user@centos ~]# cd /home
[user@centos home]# mkdir tools 
[user@centos home]# cd tools
[user@centos tools]# yum list installed | grep mysql
Repository epel is listed more than once in the configuration
[user@centos tools]# wget http://repo.mysql.com/mysql57-community-release-el7-8.noarch.rpm
--2022-05-24 11:38:22--  http://repo.mysql.com/mysql57-community-release-el7-8.noarch.rpm
Resolving repo.mysql.com (repo.mysql.com)... 23.212.157.5
Connecting to repo.mysql.com (repo.mysql.com)|23.212.157.5|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 9116 (8.9K) [application/x-redhat-package-manager]
Saving to: ‘mysql57-community-release-el7-8.noarch.rpm’

100%[=================================================>] 9,116       --.-K/s   in 0s      

2022-05-24 11:38:23 (282 MB/s) - ‘mysql57-community-release-el7-8.noarch.rpm’ saved [9116/9116]

[user@centos tools]# ls
mysql57-community-release-el7-8.noarch.rpm
[user@centos tools]# rpm -ivh mysql57-community-release-el7-8.noarch.rpm
warning: mysql57-community-release-el7-8.noarch.rpm: Header V3 DSA/SHA1 Signature, key ID 5072e1f5: NOKEY
Preparing...                          ################################# [100%]
Updating / installing...
   1:mysql57-community-release-el7-8  ################################# [100%]
[user@centos tools]# cd /etc
[user@centos etc]# cd yum.repos.d
[user@centos yum.repos.d]# ls
CentOS-Base.repo  CentOS-x86_64-kernel.repo  epel-testing.repo     mysql-community-source.repo
CentOS-Epel.repo  epel.repo                  mysql-community.repo
[user@centos yum.repos.d]# 
```

```bash
[user@centos yum.repos.d]# yum install mysql-server
Loaded plugins: fastestmirror, langpacks
Repository epel is listed more than once in the configuration
Loading mirror speeds from cached hostfile
mysql-connectors-community                                                                             | 2.6 kB  00:00:00     
mysql-tools-community                                                                                  | 2.6 kB  00:00:00     
mysql57-community                                                                                      | 2.6 kB  00:00:00     
(1/3): mysql-tools-community/x86_64/primary_db                                                         |  86 kB  00:00:00     
(2/3): mysql-connectors-community/x86_64/primary_db                                                    |  87 kB  00:00:02     
(3/3): mysql57-community/x86_64/primary_db                                                             | 306 kB  00:00:04     
Resolving Dependencies
--> Running transaction check
---> Package mysql-community-server.x86_64 0:5.7.38-1.el7 will be installed
--> Processing Dependency: mysql-community-common(x86-64) = 5.7.38-1.el7 for package: mysql-community-server-5.7.38-1.el7.x86_64
--> Processing Dependency: mysql-community-client(x86-64) >= 5.7.9 for package: mysql-community-server-5.7.38-1.el7.x86_64
--> Processing Dependency: libnuma.so.1(libnuma_1.1)(64bit) for package: mysql-community-server-5.7.38-1.el7.x86_64
--> Processing Dependency: libnuma.so.1(libnuma_1.2)(64bit) for package: mysql-community-server-5.7.38-1.el7.x86_64
--> Processing Dependency: libnuma.so.1()(64bit) for package: mysql-community-server-5.7.38-1.el7.x86_64
--> Running transaction check
---> Package mysql-community-client.x86_64 0:5.7.38-1.el7 will be installed
--> Processing Dependency: mysql-community-libs(x86-64) >= 5.7.9 for package: mysql-community-client-5.7.38-1.el7.x86_64
---> Package mysql-community-common.x86_64 0:5.7.38-1.el7 will be installed
---> Package numactl-libs.x86_64 0:2.0.12-5.el7 will be installed
--> Running transaction check
---> Package mariadb-libs.x86_64 1:5.5.68-1.el7 will be obsoleted
--> Processing Dependency: libmysqlclient.so.18()(64bit) for package: 2:postfix-2.10.1-9.el7.x86_64
--> Processing Dependency: libmysqlclient.so.18(libmysqlclient_18)(64bit) for package: 2:postfix-2.10.1-9.el7.x86_64
---> Package mysql-community-libs.x86_64 0:5.7.38-1.el7 will be obsoleting
--> Running transaction check
---> Package mysql-community-libs-compat.x86_64 0:5.7.38-1.el7 will be obsoleting
--> Finished Dependency Resolution

Dependencies Resolved

==============================================================================================================================
 Package                                  Arch                Version                    Repository                      Size
==============================================================================================================================
Installing:
 mysql-community-libs                     x86_64              5.7.38-1.el7               mysql57-community              2.6 M
     replacing  mariadb-libs.x86_64 1:5.5.68-1.el7
 mysql-community-libs-compat              x86_64              5.7.38-1.el7               mysql57-community              1.2 M
     replacing  mariadb-libs.x86_64 1:5.5.68-1.el7
 mysql-community-server                   x86_64              5.7.38-1.el7               mysql57-community              178 M
Installing for dependencies:
 mysql-community-client                   x86_64              5.7.38-1.el7               mysql57-community               28 M
 mysql-community-common                   x86_64              5.7.38-1.el7               mysql57-community              311 k
 numactl-libs                             x86_64              2.0.12-5.el7               os                              30 k

Transaction Summary
==============================================================================================================================
Install  3 Packages (+3 Dependent packages)

Total download size: 209 M
Is this ok [y/d/N]: y
Downloading packages:
warning: /var/cache/yum/x86_64/7/mysql57-community/packages/mysql-community-common-5.7.38-1.el7.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 3a79bd29: NOKEY
Public key for mysql-community-common-5.7.38-1.el7.x86_64.rpm is not installed
(1/6): mysql-community-common-5.7.38-1.el7.x86_64.rpm                                                  | 311 kB  00:00:01     
(2/6): mysql-community-libs-5.7.38-1.el7.x86_64.rpm                                                    | 2.6 MB  00:00:01     
(3/6): mysql-community-libs-compat-5.7.38-1.el7.x86_64.rpm                                             | 1.2 MB  00:00:00     
(4/6): numactl-libs-2.0.12-5.el7.x86_64.rpm                                                            |  30 kB  00:00:00     
(5/6): mysql-community-server-5.7.38-1.el7.x86_64.rpm                                                                    | 178 MB  00:01:01     
(6/6): mysql-community-client-5.7.38-1.el7.x86_64.rpm                                                                    |  28 MB  00:14:45     
------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                           242 kB/s | 209 MB  00:14:45     
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Importing GPG key 0x5072E1F5:
 Userid     : "MySQL Release Engineering <mysql-build@oss.oracle.com>"
 Fingerprint: a4a9 4068 76fc bd3c 4567 70c8 8c71 8d3b 5072 e1f5
 Package    : mysql57-community-release-el7-8.noarch (installed)
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Is this ok [y/N]: y


Public key for mysql-community-client-5.7.38-1.el7.x86_64.rpm is not installed


 Failing package is: mysql-community-client-5.7.38-1.el7.x86_64
 GPG Keys are configured as: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql

[user@centos yum.repos.d]# 
```

## Failing package is: mysql-community-client
解决办法：执行一下命令，解决
```
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```

重新执行 `yum install mysql-server`
```

Installed:
  mysql-community-libs.x86_64 0:5.7.38-1.el7  mysql-community-libs-compat.x86_64 0:5.7.38-1.el7  mysql-community-server.x86_64 0:5.7.38-1.el7 

Dependency Installed:
  mysql-community-client.x86_64 0:5.7.38-1.el7       mysql-community-common.x86_64 0:5.7.38-1.el7       numactl-libs.x86_64 0:2.0.12-5.el7      

Replaced:
  mariadb-libs.x86_64 1:5.5.68-1.el7                                                                                                            

Complete!
```

可以查看mysql版本，注意V要大写。
```
[user@centos home]# mysql -V
mysql  Ver 14.14 Distrib 5.7.38, for Linux (x86_64) using  EditLine wrapper
[user@centos home]#
```

启动MySQL服务
```
service mysqld start 或 systemctl start mysqld.service
```

查看服务状态
```
service mysqld status 或 systemctl status mysqld.service
```

获取临时密码
```
grep “password” /var/log/mysqld.log
```

登录MySQL
```
mysql -u root -p
```
然后输入刚才获得的临时密码，密码是不可见的，输入完直接回车就进入了熟悉的界面。


之后，我们需要重新设置我们的密码。
```
ALTER USER USER() IDENTIFIED BY '你的密码*';
```
不出意外，会提示错误，进行如下设置：
```
set global validate_password_policy=0;
set global validate_password_length=1;
set global validate_password_mixed_case_count=2;
SET PASSWORD = PASSWORD('你的密码');
ALTER USER 'root'@'localhost'PASSWORD EXPIRE NEVER;

```
然后刷新
```
flush privileges;
```
退出
```
exit;
```

启动MySQL服务
```
 service mysqld start 或 systemctl start mysqld.service
```
查看服务状态
```
service mysqld status 或 systemctl status mysqld.service
```

登录MySQL，密码是刚才我们自己设置的
```
mysql -u root -p
```

开启远程所有IP访问
```
grant all privileges on *.* to root@"%" identified by “你的密码*”;
```
因为我们要使用软件的所有人都可以链接。

开启本地访问
```
grant all privileges on *.* to root@“localhost” identified by “你的密码”;
```

刷新
```
flush privileges;
```

显示信息
```
status
```


设置mysql端口3306

mysql端口
```
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --reload

```


如果出现图中错误，是因为我们没有开防火墙。

查看防火墙信息
```
systemctl status firewalld
```
看到显示dead，说明没开。

开启防火墙
```
systemctl start firewalld
```
之后输入上面的端口。


刷新服务
```
systemctl restart mysqld.service
开启服务
systemctl start mysqld.service
查看状态
systemctl status mysqld.service
```
至此，MySQL配置完毕。