---
date: 2022-05-30 09:45:12
categories: 
  - 工具
tags: 
  - vscode
author: 
  name: scucat
  link: https://github.com/scucat
---
# vscode

## vscode 右键打开文件夹
1. 找到vscode的安装路径

比如我的是：D:\Programs\Microsoft VS Code

2. 新建vsCodeOpenFolder.reg（放在任何地方都可以）

将以下内容粘贴进去，注意vscode路径要根据自己电脑上的安装路径修改

3. 双击vsCodeOpenFolder.reg,确定就行

```r
Windows Registry Editor Version 5.00

 

[HKEY_CLASSES_ROOT\*\shell\VSCode]

@="Open with Code"

"Icon"="D:\\Programs\Microsoft VS Code\\Code.exe"

 

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]

@="\"D:\\Programs\\Microsoft VS Code\\Code.exe\" \"%1\""

     

Windows Registry Editor Version 5.00

 

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]

@="Open with Code"

"Icon"="D:\\Programs\\Microsoft VS Code\\Code.exe"

 

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]

@="\"D:\\Programs\\Microsoft VS Code\\Code.exe\" \"%V\""

 

Windows Registry Editor Version 5.00

 

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]

@="Open with Code"

"Icon"="D:\\Programs\\Microsoft VS Code\\Code.exe"

 

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]

@="\"D:\\Programs\\Microsoft VS Code\\Code.exe\" \"%V\""
```