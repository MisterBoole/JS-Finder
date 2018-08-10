module.exports = {
  title: 'JS-Finder',
  description: '一个 JS 算法库',
  base: '/JS-Finder/',
  dest: './dist',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/logo.png'
    }],
  ],
  themeConfig: {
    editLinks: true,
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
    sidebar: {
      '/home/': [""],
    },
    sidebarDepth: 2,
    // lastUpdated: 'Last Updated',
  },
  serviceWorker: true
}