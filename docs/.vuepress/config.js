const { searchPlugin } = require('@vuepress/plugin-search')
const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { defaultTheme } = require('../../theme-default')

module.exports = {
    base: '/blog/',
    lang: 'zh-CN',
    title: 'BLOG',
    description: '探索永不止步',
    
    temp: 'temp/.temp',
    cache: 'temp/.chche',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    plugins: [
      searchPlugin({
          maxSuggestions: 10,
      }),
      shikiPlugin({
          theme:'monokai'
      }),
        
    ],
    theme: defaultTheme({
            // Public 文件路径
        logo: '/images/logo.png',
        repo: 'scucat/blog',
        editLinkText: '编辑',
        lastUpdatedText: '更新时间',
        notFound:['迷路了','没有该页面','页面不存在','404'],
        backToHome:'返回主页',
        toggleDarkMode:'切换夜间模式',
        navbar: [
          {
            text: '数学',
            collapsible: true,
            link: '/',
          },
          {
            text: '工具',
            collapsible: true,
            children: ['/Git操作指南.md','/Vuepress插件开发.md'],
          },
        ],
        sidebar: [
          {
            text: '数学',
            collapsible: true,
            link: '/',
          },
          {
            text: '工具',
            collapsible: true,
            children: ['/Git操作指南.md','/Vuepress插件开发.md'],
          },
        ],
    })
}