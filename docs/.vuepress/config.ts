/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'

import dayjs from 'dayjs'

import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm包主题
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Dafny',
      description: 'Dafny中文社区'
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: 'Dafny'
      }
    ],

    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
    //   ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3114978_qe0b39no76.css' }],

    ['script', { src: 'https://cdn.jsdelivr.net/npm/twikoo@1.5.0/dist/twikoo.all.min.js' }]
  ],

  // 插件配置
  plugins: <UserPlugins>[
    //进度条
    ['reading-progress'],
    //Twikoo评论
    [
      {
        name: 'custom-plugins',
        globalUIComponents: ['Twikoo', 'BlockToggle'] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
      }
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false // 是否展示为横向样式
        }
      }
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        }
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        }
      }
    ]
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'] // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: ['.vuepress/config.ts', '.vuepress/config/htmlModules.ts'],
  themeConfig: {
    bodyBgImg: 'https://s1.ax1x.com/2022/03/24/q8PR5F.jpg', // 你的图片路径(必须位于 public 下)，可以是 URL
    bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5

    // 导航配置

    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'aaron-clou/dafnycommunity', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'lijiahai', // 必需
      link: 'https://github.com/Aaron-clou' // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://s1.ax1x.com/2022/03/25/qYqlnO.png',
      name: 'Dafny',
      slogan: '新一代验证语言'
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:894072666@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Aaron-clou/dafnycommunity'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173'
        }
      ]
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo: 'Evan Xu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>' // 博客版权信息，支持a标签或换行标签</br>
    },
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
              { text: '基础学习 Basic', link: '' },
              { text: '方法 Method', link: '' },
              { text: '关键字 Keyword', link: '' },
              { text: '函数 Function', link: '' },
              { text: '类 Class ', link: '' },
              { text: '泛型 Generics', link: '' },
              { text: '声明 Statement', link: '' },
              { text: '表达式 Expression', link: '' }
            ]
          }, //quick-reference
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
              { text: 'Lemmas and Induction', link: '' },
              { text: 'Modules', link: '' },
              { text: 'sequence', link: '' },
              { text: 'sets', link: '' },
              { text: 'Terminal', link: '' },
              { text: 'Values Types', link: '' }
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
              { text: 'Style Guide', link: '' },
              { text: 'Type System', link: '' },
              { text: 'cheet sheet', link: '' }
            ]
          }
        ]
      },

      { text: '收藏', link: '/pages/1b94a4/' },
      { text: '支持', link: '/zhichi/', items: [{ text: '推荐企业', link: '/pages/30bf81/' }] },
      { text: 'tips', link: '/tips/' },
      {
        text: '语言',
        link: '',
        items: [
          { text: '简体中文', link: '/' },
          { text: 'English', link: '/en-US/' }
        ]
      },
      { text: '更多', link: '/more/' },

      {
        text: '社区留言板',
        link: '/pages/caf1f9/'
      }
    ],
    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: '2021-10-19', // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives', // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives', // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper', // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500 // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },

    indexImg: {
      navColor: 2, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      switchNavColor: true, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      bgTimeColor: true, // 是否开启图片的背景色随一天的不同时间而变化，并且启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      bgTimeColorArray: ['rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)'], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
      descFade: true, // 是否开启图片中间描述的淡入效果，默认为 false
      desc: ['Dafny -- New Verification Langugage', 'Welcome to our Dafny community', 'Hello,explorer!'], // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
      descFontSize: '1.5rem', // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      descFadeOutTime: false, // 描述的淡出效果持续时间，descFade 为 rtue 生效，默认 100 毫秒
      descNextTime: 8000, // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      bubble: true, // 是否开启图片的气泡效果，默认为 false
      bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      bubbleNum: 10 // 气泡的个数，bubble 为 true 生效，默认 200 个
    }
  }
})
