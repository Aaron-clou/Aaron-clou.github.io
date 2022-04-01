/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'

import dayjs from 'dayjs'

import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Dafny',
      description: 'Dafny中文社区'
    }
  },
  base: '/dafnycommunity/',

  /**
   * @author lijiahai
   * @description head标签
   * @params
   * { head : 注入到html文件head标签中，引用静态资源 }
   */
  head: [
    ['link', { rel: 'icon', href: '/img/bgico2.ico' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/twikoo@1.5.0/dist/twikoo.all.min.js' }]
  ],

  /**
   * @author lijiahai
   * @description 使用插件plugins
   * @params
   * { reading-progress : 页面顶部的浏览进度条 }
   * { Twikoo : Twikoo评论插件 }
   * { fulltext-search : search搜索框展示全文搜索内容(默认为tag和h1/h2标题) }
   * { one-click-copy : 代码块一键复制 }
   * { vuepress-plugin-zooming : 图片缩放 }
   * { @vuepress/last-updated : 仓库上次更新时间 }
   */
  plugins: <UserPlugins>[
    ['reading-progress'],

    [
      {
        name: 'custom-plugins',
        globalUIComponents: ['Twikoo', 'BlockToggle']
      }
    ],

    'fulltext-search',

    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false
      }
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        }
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        }
      }
    ]
  ],

  //markdown增强 - 扩展内容
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },
  extraWatchFiles: ['.vuepress/config.ts', '.vuepress/config/htmlModules.ts'],

  themeConfig: {
    /**
     * (仅说明所使用的重要接口，更多详细接口和基础配置请访问vuepress官网查看)
     * @author lijiahai
     * @description 导航栏sidebar 及 站点基本信息 配置
     * @params
     * { bodyBgImg : 首页背景大图url / public目录下相对路径 }
     * { bodyBgImgOpacity : 首页背景大图透明度 }
     * { sidebar : structuring 结构化侧边栏}
     * { sidebarDepth : 侧边导航栏深度 h1-h6标题 }
     * { logo : 导航栏处图标 }
     * { searchMaxSuggestions : 搜索列表的最大显示数量 }
     * { lastUpdated : 最近更新时间，以仓库更新时间为准 }
     */

    bodyBgImg: 'https://s1.ax1x.com/2022/04/01/q4APj1.png',
    bodyBgImgOpacity: 1,
    sidebar: 'structuring',
    sidebarDepth: 2,
    logo: '/img/logo-2.png',
    repo: 'aaron-clou/dafnycommunity',
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑',

    // 文章作者信息，显示在文章顶部
    author: {
      name: 'lijiahai',
      link: 'https://github.com/Aaron-clou'
    },

    // 博主信息，显示在首页侧边栏
    blogger: {
      avatar: 'https://s1.ax1x.com/2022/04/01/qh3tDe.png',
      name: 'Dafny',
      slogan: '新一代验证语言'
    },

    // social图标，显示在博主信息栏下方
    social: {
      iconfontCssFile: '//at.alicdn.com/t/font_3282046_m07s574tfh.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-github-fill',
          title: 'Github',
          link: 'https://github.com/Aaron-clou/dafnycommunity'
        },
        {
          iconClass: 'icon-gitee2',
          title: 'Gitee',
          link: 'https://gitee.com/leo214/dafnycommunity'
        },
        {
          iconClass: 'icon-email-fill',
          title: 'Email',
          link: '1374921025@qq.com'
        }
      ]
    },

    // footer页脚，显示在页面底部
    footer: {
      createYear: 2022,
      copyrightInfo: 'Li Jiahai | Dafny Community | 2022'
    },

    // nav导航栏配置，显示在页面顶部
    nav: [
      { text: '首页', link: '/' },
      {
        text: '配置',
        link: '/peizhi/',
        items: [
          {
            text: '入门介绍',
            link: '',
            items: [{ text: '什么是dafny?', link: '/pages/56e571/' }]
          },
          {
            text: '用起来吧！',
            link: '',
            items: [
              { text: '安装', link: '/pages/4fa796/' },
              { text: '快速上手', link: '/pages/085606/' },
              { text: '可能遇到的问题?', link: '/pages/39fb20/' }
            ]
          }
        ]
      },
      {
        text: '指南',
        link: '/zhinan/',
        items: [
          {
            text: 'Dafny快速入门',
            items: [
              { text: '基础学习 Basic', link: '/pages/6e15a6/' },
              { text: '方法 Method', link: '/pages/eba166/' },
              { text: '关键字 Keyword', link: '/pages/83cdf9/' },
              { text: '函数 Function', link: '/pages/01d76e/' },
              { text: '类 Class ', link: '/pages/0fadc1/' },
              { text: '泛型 Generics', link: '/pages/a010ab/' },
              { text: '声明 Statement', link: '/pages/c4fda3/' },
              { text: '表达式 Expression', link: '/pages/e8438e/' }
            ]
          },
          {
            text: 'Dafny简单例子',
            link: '',
            items: [
              { text: 'hello,dafny', link: '' },
              { text: '斐波那契数列', link: '' },
              { text: '111', link: '' }
            ]
          }
        ]
      },
      {
        text: '教程',
        link: '/jiaocheng/',
        items: [
          {
            text: 'Dafny指导',
            items: [
              { text: '介绍', link: '/pages/877eb3/' },
              { text: '方法 Methods', link: '/pages/bf40c0/' },
              { text: '前置/后置条件 Pre/Postconditions', link: '/pages/2e0c73/' },
              { text: '断言 Assertions', link: '/pages/36c1b4/' },
              { text: '函数 Functions', link: '/pages/a1d5a4/' },
              { text: '循环不变体 Loop Invariants', link: '/pages/d89435/' },
              { text: '数组 Arrays', link: '/pages/828a83/' },
              { text: '量词(函数) Quantifiers', link: '/pages/17e8d1/' },
              { text: '谓词(函数) Predicates', link: '/pages/cc01af/' },
              { text: '框架 Framing', link: '/pages/13bbcd/' },
              { text: '二分搜索 Binary Search', link: '/pages/1319be/' },
              { text: '总结', link: '/pages/30a8c2/' }
            ]
          },
          {
            text: 'Dafny进阶语法',
            items: [
              { text: '引理和归纳 Lemmas and Induction', link: '/pages/273cac/' },
              { text: '模块 Modules', link: '/pages/9d19b8/' },
              { text: '集合 sets', link: '/pages/b9300a/' },
              { text: '序列 sequence', link: '/pages/cb3d21/' },
              { text: '终止 Terminal', link: '/pages/fc6196/' },
              { text: '值类型 Values Types', link: '/pages/a2a107/' }
            ]
          }
        ]
      },
      {
        text: '资源',
        link: '/ziyuan/',
        items: [
          {
            text: '实践探索',
            items: [
              { text: '自动归纳', link: '/pages/718207/' },
              { text: '自动调用引理', link: '/pages/1f579f/' },
              { text: '定义、证明、算法正确性', link: '/pages/f6638c/' },
              { text: '各种推导式', link: '/pages/1d2420/' },
              { text: '不同类型的证明', link: '/pages/20c275/' },
              { text: '集合元素上的函数', link: '/pages/67167e/' },
              { text: '在集合上的迭代', link: '/pages/be298d/' }
            ]
          },
          {
            text: '常用工具',
            items: [
              { text: 'Type System', link: '/pages/8065fd/' },
              { text: 'Style Guide', link: '/pages/0f17ab/' },
              { text: 'Cheet Sheet', link: '/pages/fe5721/' }
            ]
          }
        ]
      },

      { text: '✨收藏', link: '/pages/1b94a4/' },

      {
        text: '🏷️语言',
        link: '',
        items: [
          { text: '简体中文', link: '/' },
          { text: 'English', link: '/en-US/' }
        ]
      },

      {
        text: '💬社区留言板',
        link: '/pages/caf1f9/'
      }
    ],
    // 站点配置信息

    blogInfo: {
      blogCreate: '2022-2-1',
      indexView: true,
      pageView: true,
      readingTime: true,
      eachFileWords: readEachFileWords([''], 300, 160),
      mdFileCountType: 'archives',
      totalWords: 'archives',
      moutedEvent: '.tags-wrapper',
      indexIteration: 2500,
      pageIteration: 2500
    },

    //首页背景大图配置
    indexImg: {
      navColor: 2,
      switchNavColor: true,

      bgTimeColor: true,
      bgTimeColorArray: ['rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)'],
      descFade: true,
      desc: ['Dafny -- New Verification Language', 'Welcome to our Dafny community', 'Hello,explorer!'],
      descFontSize: '1.5rem',
      descFadeInTime: 200,
      descFadeOutTime: false,
      descNextTime: 8000,
      bubble: true,
      bubblePosition: 0,
      bubbleNum: 10
    }
  }
})
