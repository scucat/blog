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
    head: [
      ['link', { rel: 'icon', href: '/images/logo.png' }],
      ['meta', { name: 'referrer', content: 'no-referrer' }]
    ],
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
            link: '/math/',
          },
          {
            text: '算法',
            link: '/algorithm/'
          },
          {
            text: '编程',
            link: '/code/'
          },
          {
            text: '工具',
            link: '/tool/'
          },
        ],
        sidebar: {
          '/math/':[
            {
              text: '数学',
              children:[
                '/math/calculus/',
                '/math/linear_algebra/',
                '/math/statistic/',
                '/math/optimization/'
              ]
            },
          ],
          '/algorithm/':[
            {
              text: '算法',
              collapsible: true,
              link: '/',
            },
          ],
          '/code/':[
            {
              text: '编程',
              collapsible: true,
              link: '/code/',
              children:[
                '/code/Numpy-笔记.md'
              ]
            },
          ],
          '/tool/':[
            {
              text: '工具',
              collapsible: true,
              link: '/tool/',
              children:[
                '/tool/Markdown语法.md',
                {
                  text: 'Git',
                  collapsible: true,
                  children:[
                    '/tool/git/Git操作指南.md'
                  ]
                },
                '/tool/常见问题.md'
              ]
            },
          ]
      },
    })
}