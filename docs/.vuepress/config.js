module.exports = {
  title: 'JS-Finder',
  description: '一个 JS 算法库',
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
    lastUpdated: 'Last Updated',
  },
  serviceWorker: true
}