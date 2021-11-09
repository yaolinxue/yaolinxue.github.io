module.exports = {
    title: 'bytesgo',
    description: 'Just playing around',
    theme: '@vuepress/theme-blog',
    dest: 'dist',
    head: [
        ['link', {
            rel: 'icon',
            href: '/bytesgo.png'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ["script", {
            src: "/js/demo.js"
        }],
        ["script", {
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        }]
    ],
    themeConfig: {
        dateFormat: 'YYYY年MM月',
        smoothScroll: true,
        summary: true,
        lastUpdated: 'Last Updated',
        nextLinks: true,
        prevLinks: true,
        nav: [{
                text: 'HOME',
                link: '/'
            },
            {
                text: 'BLOG',
                link: '/blog/'
            },
            {
                text: 'TAG',
                link: '/tag/'
            },
            {
                text: 'GITHUB',
                link: 'https://github.com/bytesgo'
            }
        ],
        directories: [{
            id: '博客分享',
            dirname: 'blog',
            path: '/blog/',
            itemPermalink: '/:year/:month/:slug',
        }, ],
        sitemap: {
            hostname: 'https://www.bytesgo.com'
        },
        comment: {
            // Which service you'd like to use
            service: 'disqus',
            // The owner's name of repository to store the issues and comments.
            shortname: 'www-bytesgo-com',
        },
        globalPagination: {
            lengthPerPage: 15,
            prevText: '<',
            nextText: '>',
        },
        footer: {
            contact: [{
                    type: 'github',
                    link: 'https://github.com/bytesgo',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/bytesgo',
                },
            ],
            copyright: [{
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2020-2021 bytesgo.com',
                    link: 'https://github.com/bytesgo',
                }
            ],
        },
    },
    markdown: {
        lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: {
            permalink: true
        },
        // markdown-it-toc 的选项
        toc: {
            includeLevel: [1, 2]
        }
    },
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        '@vuepress/medium-zoom'
    ]
}