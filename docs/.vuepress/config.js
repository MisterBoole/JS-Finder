const sideBar = require('./sidebar.json')

module.exports = {
  title: 'JS-Finder',
  description: 'JS 数据结构与算法介绍',
  base: '/',
  dest: './dist',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo.png'
    }],
    ['link', { rel: 'stylesheet', href: '/css/katex.min.css' }],
  ],
  themeConfig: {
    editLinks: true,
    logo: '/img/logo.png',
    editLinkText: '帮助我们改善此页面！',
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '关于',
        link: '/home/'
      },
      {
        text: 'Github',
        link: 'https://github.com/StaminaWang/JS-Finder'
      },
    ],
    sidebar: sideBar,
    sidebarDepth: 0,
    repo: '/MisterBoole/JS-Finder',
    repoLabel: '贡献代码！',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true
  },
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.set({html: true})
      md.use(require("markdown-it-katex"))
    }
  }
}
 