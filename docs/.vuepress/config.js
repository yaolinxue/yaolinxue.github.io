module.exports = {
    title: 'bytesgo',
    description: 'Just playing around',
    theme: '@vuepress/blog',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["script", { src: "/js/demo.js" }],
        ["script", { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }]
    ],
    themeConfig: {
        dateFormat: 'YYYY年MM月',
        smoothScroll: true,
        summary: true,
        lastUpdated: 'Last Updated',
        nextLinks: true,
        prevLinks: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/' },
            { text: '标签', link: '/tag/' },
            { text: 'Github', link: 'https://github.com/leeyazhou' }
        ],
        directories: [
            {
                id: 'post',
                dirname: 'blog',
                path: '/blog/',
                itemPermalink: '/:year/:month/:day/:slug',
            },
            {
                id: 'writing',
                dirname: '_writings',
                path: '/',
                itemPermalink: '/:year/:month/:day/:slug',
            },
        ],
        globalPagination: {
            lengthPerPage: 15,
            prevText: '<',
            nextText: '>',
        },
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/bytesgo',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/leeyazhou',
                },
            ],
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2020-2021 bytesgo.com',
                    link: 'https://github.com/bytesgo',
                },
            ],
        },
    },
    markdown: {
        lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: { permalink: true },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] }
    },
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        '@vuepress/medium-zoom'
    ]
}