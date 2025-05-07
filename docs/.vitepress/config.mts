import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'
import { SponsorPlugin } from "vitepress-plugin-sponsor";

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
    // 忽略死链
    ignoreDeadLinks: true,
    // 继承博客主题(@sugarat/theme)
    extends: blogTheme,
    // 仓库名
    // base: '/yaolinxue.github.io/',
    lang: 'zh-cn',
    title: 'yaolinxue - 兴安安国, 自立立人',
    description: '为学应尽毕生力，攀高须贵少年时',
    lastUpdated: true,
    // 详见：https://vitepress.dev/zh/reference/site-config#head
    head: [
        // 配置网站的图标（显示在浏览器的 tab 上）
        // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
        ['link', { rel: 'icon', href: 'img/favicon.ico' }],
        // [
        //     'link',
        //     { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css' }
        // ],
        [
            'link',
            { rel: 'stylesheet', href: 'https://registry.npmmirror.com/lxgw-wenkai-screen-web/latest/files/style.css' }
        ],
        [
            'script',
            {},
            `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?13deb3118acd0041fe7f3fc5c44a48ef";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
            `,
          ],
    ],
    themeConfig: {
        // 展示 2,3 级标题在目录中
        outline: {
            level: [2, 3],
            label: '目录'
        },
        // 默认文案修改
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '相关文章',
        lastUpdated: {
            text: '上次更新于'
        },
        // 设置logo
        logo: '/img/favicon.ico',
        // editLink: {
        //   pattern:
        //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
        //   text: '去 GitHub 上编辑内容'
        // },
        // 导航栏
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '关于',
                link: '/about'
            },
            {
                text: '技术随笔',
                items: [
                    { text: '计算机网络', link: '/blog/ComputerNetworks/' },
                    { text: 'MySQL', link: '/blog/MySQL/' },
                    { text: 'Linux', link: '/blog/Linux/' },
                ]
            },
            { text: '力扣每日一题', link: '/blog/leet-code/' },
            {text: '随笔',link: '/blog/Life/'},
            
            { text: '量化日志', link: '/stock/' },
            {
                text: '赞助',
                items: [
                    {
                        text: '成为赞助者',
                        link: '/sponsor'
                    }
                ]
            },
        ],
        // 友链
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/yaolinxue'
            }
        ],
        // 侧边栏
        sidebar: {
            "/blog/leet-code/": [
                {
                    text: '数组',
                    collapsed: false,// 默认展开，true 为折叠
                    items: [
                        { text: '704.二分查找', link: '/blog/leet-code/704.二分查找' },
                        { text: '35.搜索插入位置', link: '/blog/leet-code/35.搜索插入位置' },
                        {
                            text: '34.在排序数组中查找元素的第一个和最后一个位置',
                            link: '/blog/leet-code/34.在排序数组中查找元素的第一个和最后一个位置'
                        },
                        { text: '69.x的平方根', link: '/blog/leet-code/69.x的平方根' },
                        { text: '367.有效的完全平方数', link: '/blog/leet-code/367.有效的完全平方数' },
                        { text: '27.移除元素', link: '/blog/leet-code/27.移除元素' },
                        { text: '26.删除有序数据中的重复项', link: '/blog/leet-code/26.删除有序数据中的重复项' },
                        { text: '80.删除有序数据中的重复项Ⅱ', link: '/blog/leet-code/80.删除有序数据中的重复项Ⅱ' },
                        { text: '283.移动零', link: '/blog/leet-code/283.移动零' },
                        { text: '844.比较含退格的字符串', link: '/blog/leet-code/844.比较含退格的字符串' },
                        { text: '977.有序数组的平方', link: '/blog/leet-code/977.有序数组的平方' },
                        { text: '3.无重复字符的最长子串', link: '/blog/leet-code/3.无重复字符的最长子串' },
                        { text: '209.长度最小的子数组', link: '/blog/leet-code/209.长度最小的子数组' },
                        { text: '904.水果成篮', link: '/blog/leet-code/904.水果成篮' },
                        { text: '76.最小覆盖子串', link: '/blog/leet-code/76.最小覆盖子串' },
                        { text: '59.螺旋矩阵Ⅱ', link: '/blog/leet-code/59.螺旋矩阵Ⅱ' },
                        { text: '54.螺旋矩阵', link: '/blog/leet-code/54.螺旋矩阵' },
                    ]
                },
                {
                    text: '链表',
                    collapsed: false,
                    items: [
                        { text: '203.移除链表元素', link: '/blog/leet-code/203.移除链表元素' },
                        { text: '707.设计链表', link: '/blog/leet-code/707.设计链表' },
                        { text: '206.反转链表', link: '/blog/leet-code/206.反转链表' },
                        { text: '24.两两交换链表中的节点', link: '/blog/leet-code/24.两两交换链表中的节点' },
                        { text: '19.删除链表的倒数第N个节点', link: '/blog/leet-code/19.删除链表的倒数第N个节点' },
                        { text: '160.相交链表', link: '/blog/leet-code/160.相交链表' },
                        { text: '142.环形链表Ⅱ', link: '/blog/leet-code/142.环形链表Ⅱ' },
                        { text: '146.LRU缓存', link: '/blog/leet-code/146.LRU缓存' }
                    ]
                },
                {
                    text: '哈希表',
                    collapsed: false,
                    items: [
                        { text: '242.有效的字母异位词', link: '/blog/leet-code/242.有效的字母异位词' },
                        { text: '383.赎金信', link: '/blog/leet-code/383.赎金信' },
                        { text: '49.字母异位词分组', link: '/blog/leet-code/49.字母异位词分组' },
                        { text: '438.找到字符串中所有字母异位词', link: '/blog/leet-code/438.找到字符串中所有字母异位词' },
                        { text: '349.两个数组的交集', link: '/blog/leet-code/349.两个数组的交集' },
                        { text: '350.两个数组的交集Ⅱ', link: '/blog/leet-code/350.两个数组的交集Ⅱ' },
                        { text: '202.快乐数', link: '/blog/leet-code/202.快乐数' },
                        { text: '1.两数之和', link: '/blog/leet-code/1.两数之和' },
                        { text: '454.四数相加Ⅱ', link: '/blog/leet-code/454.四数相加Ⅱ' },
                        { text: '15.三数之和', link: '/blog/leet-code/15.三数之和' },
                        { text: '18.四数之和', link: '/blog/leet-code/18.四数之和' },
                    ]
                },
                {
                    text: '字符串',
                    collapsed: false,
                    items: [
                        { text: '344.反转字符串', link: '/blog/leet-code/344.反转字符串' },
                        { text: '541.反转字符串Ⅱ', link: '/blog/leet-code/541.反转字符串Ⅱ' },
                        { text: '剑指Offer-05.替换空格', link: '/blog/leet-code/剑指Offer-05.替换空格' },
                        { text: '151.反转字符串中的单词', link: '/blog/leet-code/151.反转字符串中的单词' },
                        { text: '剑指Offer-58-Ⅱ.左旋转字符串', link: '/blog/leet-code/剑指Offer-58-Ⅱ.左旋转字符串' },
                        {
                            text: '28.找出字符串中第一个匹配项的下标',
                            link: '/blog/leet-code/28.找出字符串中第一个匹配项的下标'
                        },
                        { text: '459.重复的子字符串', link: '/blog/leet-code/459.重复的子字符串' },
                    ]
                },
                {
                    text: '栈与队列',
                    collapsed: false,
                    items: [
                        { text: '232.用栈实现队列', link: '/blog/leet-code/232.用栈实现队列' },
                        { text: '225.用队列实现栈', link: '/blog/leet-code/225.用队列实现栈' },
                        { text: '71.简化路径', link: '/blog/leet-code/71.简化路径' },
                        { text: '20.有效的括号', link: '/blog/leet-code/20.有效的括号' },
                        {
                            text: '1047.删除字符串中的所有相邻重复项',
                            link: '/blog/leet-code/1047.删除字符串中的所有相邻重复项'
                        },
                        { text: '150.逆波兰表达式求值', link: '/blog/leet-code/150.逆波兰表达式求值' },
                        { text: '155.最小栈', link: '/blog/leet-code/155.最小栈' },
                        { text: '239.滑动窗口最大值', link: '/blog/leet-code/239.滑动窗口最大值' },
                        { text: '347.前k个高频元素', link: '/blog/leet-code/347.前k个高频元素' }
                    ]
                },
                {
                    text: '二叉树',
                    collapsed: false,
                    items: [
                        { text: '144.二叉树的前序遍历', link: '/blog/leet-code/144.二叉树的前序遍历' },
                        { text: '145.二叉树的后序遍历', link: '/blog/leet-code/145.二叉树的后序遍历' },
                        { text: '94.二叉树的中序遍历', link: '/blog/leet-code/94.二叉树的中序遍历' },
                        { text: '102.二叉树的层序遍历', link: '/blog/leet-code/102.二叉树的层序遍历' },
                        { text: '107.二叉树的层序遍历Ⅱ', link: '/blog/leet-code/107.二叉树的层序遍历Ⅱ' },
                        { text: '199.二叉树的右视图', link: '/blog/leet-code/199.二叉树的右视图' },
                        { text: '637.二叉树的层平均值', link: '/blog/leet-code/637.二叉树的层平均值' },
                        { text: '429.N叉树的层序遍历', link: '/blog/leet-code/429.N叉树的层序遍历' },
                        { text: '515.在每个树行中找最大值', link: '/blog/leet-code/515.在每个树行中找最大值' },
                        {
                            text: '117.填充每个节点的下一个右侧节点指针Ⅱ',
                            link: '/blog/leet-code/117.填充每个节点的下一个右侧节点指针Ⅱ'
                        },
                        { text: '104.二叉树的最大深度', link: '/blog/leet-code/104.二叉树的最大深度' },
                        { text: '559.N叉树的最大深度', link: '/blog/leet-code/559.N叉树的最大深度' },
                        { text: '111.二叉树的最小深度', link: '/blog/leet-code/111.二叉树的最小深度' },
                        { text: '226.翻转二叉树', link: '/blog/leet-code/226.翻转二叉树' },
                        { text: '101.对称二叉树', link: '/blog/leet-code/101.对称二叉树' },
                        { text: '100.相同的树', link: '/blog/leet-code/100.相同的树' },
                        { text: '572.另一棵树的子树', link: '/blog/leet-code/572.另一棵树的子树' },
                        { text: '222.完全二叉树的节点个数', link: '/blog/leet-code/222.完全二叉树的节点个数' },
                        { text: '110.平衡二叉树', link: '/blog/leet-code/110.平衡二叉树' },
                        { text: '257.二叉树的所有路径', link: '/blog/leet-code/257.二叉树的所有路径' },
                        { text: '404.左叶子之和', link: '/blog/leet-code/404.左叶子之和' },
                        { text: '513.找树左下角的值', link: '/blog/leet-code/513.找树左下角的值' },
                        { text: '112.路径总和', link: '/blog/leet-code/112.路径总和' },
                        { text: '113.路径总和Ⅱ', link: '/blog/leet-code/113.路径总和Ⅱ' },
                        {
                            text: '106.从中序和后序遍历序列构造二叉树',
                            link: '/blog/leet-code/106.从中序和后序遍历序列构造二叉树'
                        },
                        { text: '654.最大二叉树', link: '/blog/leet-code/654.最大二叉树' },
                        { text: '617.合并二叉树', link: '/blog/leet-code/617.合并二叉树' },
                        { text: '700.二叉搜索树中的搜索', link: '/blog/leet-code/700.二叉搜索树中的搜索' },
                        { text: '98.验证二叉搜索树', link: '/blog/leet-code/98.验证二叉搜索树' },
                        { text: '530.二叉搜索树的最小绝对差', link: '/blog/leet-code/530.二叉搜索树的最小绝对差' },
                        { text: '501.二叉搜索树中的众数', link: '/blog/leet-code/501.二叉搜索树中的众数' },
                        { text: '236.二叉树的最近公共祖先', link: '/blog/leet-code/236.二叉树的最近公共祖先' },
                    ]
                }
            ],
            "/blog/MySQL/": [
                { text: '初识MySQL', link: '/blog/MySQL/初识MySQL' },
                { text: '数据库操作', link: '/blog/MySQL/数据库操作' },
                { text: 'DML语言', link: '/blog/MySQL/DML语言' },
                { text: '数据库中为什么不推荐使用外键约束', link: '/blog/MySQL/数据库中为什么不推荐使用外键约束' },
                { text: '使用DQL查询数据', link: '/blog/MySQL/使用DQL查询数据' },
                {
                    text: 'MySQL中的关联查询（内连接、外连接、自连接）',
                    link: '/blog/MySQL/MySQL中的关联查询（内连接、外连接、自连接）'
                },
                { text: '连接查询时on与where的区别', link: '/blog/MySQL/连接查询时on与where的区别' },
                { text: 'MySQL函数', link: '/blog/MySQL/MySQL函数' },
                { text: 'sql语句的执行顺序', link: '/blog/MySQL/sql语句的执行顺序' },
                { text: '事务和索引', link: '/blog/MySQL/事务和索引' },
                { text: '权限及如何设计数据库', link: '/blog/MySQL/权限及如何设计数据库' },
                { text: 'MySQL数据库设计规范', link: '/blog/MySQL/MySQL数据库设计规范' },
                { text: 'MySQL主从复制', link: '/blog/MySQL/MySQL主从复制' },
                { text: '一文详解数据库连接池', link: '/blog/MySQL/一文详解数据库连接池' }
            ],
            "/blog/Linux/": [
                { text: 'Linux 概述及环境搭建', link: '/blog/Linux/Linux概述及环境搭建' },
                { text: 'Linux 常用的基本命令', link: '/blog/Linux/Linux常用的基本命令' },
                { text: 'Vim 使用及账号用户管理', link: '/blog/Linux/Vim使用及账号用户管理' },
                { text: '三种软件安装方式及服务器基本环境搭建', link: '/blog/Linux/三种软件安装方式及服务器基本环境搭建' },
            ],
            "/blog/ComputerNetworks/": [
                { text: '物理层、数据链路层、网络层', link: '/blog/ComputerNetworks/物理层、数据链路层、网络层' },
                { text: '一文详解TCP', link: '/blog/ComputerNetworks/一文详解TCP' },
                { text: '一文详解Socket', link: '/blog/ComputerNetworks/一文详解Socket' },
            ],
        },
    },
    vite: {
        plugins: [
            // 打赏插件
            SponsorPlugin({
                /**
                 * 打赏模块样式
                 */
                type: 'simple',
                aliPayQR: 'https://www.yaolinxue.com/img/aliPayQR.png',
                weChatQR: 'https://www.yaolinxue.com/img/weChatQR.png'
            })
        ]
    },
    sitemap: {
        hostname: 'https://www.yaolinxue.com'
    },
    locales: {
        root: {
          label: '简体中文',
          lang: 'zh-cn'
        },
        en: {
          label: 'English',
          lang: 'en',
          link: '/en/'
        }
      }
})
