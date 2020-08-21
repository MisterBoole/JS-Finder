const themeConfig = require('./theme-config');

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
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-katex'))
    }
  },
  extraWatchFiles: [
    './sidebar.json',
    './theme-config.js'
  ],
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'public'
      }
    }
  }
}
 