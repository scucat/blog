---
date: 2022-05-12 15:10:23
categories: 
  - 工具
tags: 
  - idea
author: 
  name: scucat
  link: https://github.com/scucat
---
# 常见问题及解决办法

## idea 试用到期
[idea试用到期解决办法](https://youwu.today/blog/jetbrains-evaluate-reset/#:~:text=%E4%BA%A7%E5%93%81%E5%A4%84%E4%BA%8E%E8%AF%95%E7%94%A8%E6%9C%9F%E7%8A%B6%E6%80%81%EF%BC%8C%E8%8B%A5%E8%B6%85%E8%BF%8730%E5%A4%A9%E6%9C%AA%E5%BC%80%E5%90%AF%E8%BF%87%20ide%EF%BC%8C%E6%AD%A4%E6%97%B6%E5%9B%A0%E8%AF%95%E7%94%A8%E8%BF%87%E6%9C%9F%E6%97%A0%E6%B3%95%E8%BF%9B%E5%85%A5%E7%A8%8B%E5%BA%8F%E3%80%82%20%E5%8D%B3%E4%BD%BF%E5%AE%89%E8%A3%85%E4%BA%86%20ide,eval%20reset%20%E6%8F%92%E4%BB%B6%EF%BC%8C%E4%B9%9F%E4%BC%9A%E5%9B%A0%20ide%20%E4%B8%8D%E5%8A%A0%E8%BD%BD%E6%8F%92%E4%BB%B6%EF%BC%8C%E6%AD%A4%E6%97%B6%E8%AF%A5%E6%8F%92%E4%BB%B6%E4%B8%8D%E4%BC%9A%E5%90%AF%E5%8A%A8%EF%BC%8C%E8%AF%95%E7%94%A8%E6%9C%9F%E4%B9%9F%E6%97%A0%E6%B3%95%E9%87%8D%E7%BD%AE%E5%BB%B6%E6%9C%9F%E3%80%82)

### 手工删除试用授权后重新试用

试用授权文件位于程序配置目录下的 `eval` 文件夹

程序配置目录如下：

- windows：`%userprofile%/AppData/Roaming/JetBrains/产品名版本号`
- macos: `~/Library/ApplicationSupport/JetBrains/产品名版本号`
- linux: `~/.config/JetBrains/产品名版本号`

将程序配置路径下的 `eval` 文件夹 重命名或者删除后，重启程序即可。

![windows配置目录](https://raw.githubusercontent.com/scucat/images/master/20220523103216.png)


### Your idea evaluation is expired
参考该网站解决： 
- https://blog.csdn.net/niceHou666/article/details/95376933
- http://idea.lanyus.com/
- http://idea.javatiku.cn/

![注册成功截图](https://raw.githubusercontent.com/scucat/images/master/20220523103252.png)

## gitee 图床失效

[知乎](https://www.zhihu.com/question/524099214)

解决办法: `docs/.vuepress/config.js`添加以下代码
```js
module.exports = {
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  // 其它配置
}
```

**gitee 2022-05-18 进行严格的代码审查导致图床失效**
改用github做图床： https://www.jianshu.com/p/d51258ef5484

还好目前图片不多，从gitee再转移到github很方便

## edge可以访问github,chrome不行
https://blog.csdn.net/weixin_45867895/article/details/122214391

1. chrome 打开 `chrome://net-internals/`

2. 进入后点击左边的 Proxy 依次点击里面的 Re-apply settings 和 Clear bad proxies

然后点击左边的 DNS 点击 Host resolver cache 右边的 Clear host cache

最终亲测成功！！！！！

## yarn:无法加载文件...\yarn.ps1

管理员打开 **powershell** 窗口
```powershell
PS C:\WINDOWS\system32> get-ExecutionPolicy
Restricted
PS C:\WINDOWS\system32> set-ExecutionPolicy RemoteSigned

执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”): Y
PS C:\WINDOWS\system32> get-ExecutionPolicy
RemoteSigned
PS C:\WINDOWS\system32>

```
