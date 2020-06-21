module.exports = {
  title: "bytesgo.com",
  description: 'bytesgo.com',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ["script", { src: "/js/demo.js" }]
  ],
  theme: 'reco',
  plugins: ['@vuepress-reco/vuepress-plugin-screenfull'],
  themeConfig: {
    smoothScroll:true,
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: '文档',
        icon: 'reco-message',
        items: [
          { text: 'api', link: '/api/' }
        ]
      },
      {
        text: '联系我',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/bytesgo', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/api/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    // friendLink: [
    //   {
    //     title: 'leeyazhou',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: 'coderhook@gmail.com',
    //     link: 'https://blog.bytesgo.com'
    //   },
    //   {
    //     title: 'bytesgo.com',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     link: 'https://blog.bytesgo.com'
    //   },
    // ],
    logo: '/img/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'leeyazhou',
    // 作者头像
    // authorAvatar: '/avatar.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2020',
    showAccessNumber:true
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
