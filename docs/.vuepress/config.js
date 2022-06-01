const { searchPlugin } = require('@vuepress/plugin-search')
const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { defaultTheme } = require('../../theme-default')
var { sidebar } = require('./autobar')
module.exports = {
    base: '/blog/',
    lang: 'zh-CN',
    title: 'BLOG',
    description: '探索永不止步',
    
    temp: 'temp/.temp',
    cache: 'temp/.chche',
    head: [
      ['link', { rel: 'icon', href: '/images/logo.png' }],
      [
        'script',
        {},
        `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?81fae81312afdc486043636c52b4a4f4";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      ],
      // 这是为了解决 gitee 图片无法加载，图床已经切换至github了
      // ['meta', { name: 'referrer', content: 'no-referrer' }] 
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
            text: '深度学习',
            link: '/deeplearn/',
          },
          {
            text: '数学',
            link: '/math/',
          },
          {
            text: '算法',
            link: '/algorithm/'
          },
          {
            text: '代码',
            link: '/code/'
          },
          {
            text: '资源',
            children:[
              {
                text: '工具',
                link: '/tool/',
              },
              {
                text: '书籍',
                link: '/book/',
              },
              {
                text: '网站',
                link: '/book/',
              },
              {
                text: '软件',
                link: '/software/',
              },
            ]
          },
        ],
        sidebar:sidebar,
    })
}