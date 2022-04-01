// // import vue from 'vue/dist/vue.esm.browser'
// export default ({
//   Vue, // VuePress 正在使用的 Vue 构造函数
//   options, // 附加到根实例的一些选项
//   router, // 当前应用的路由实例
//   siteData // 站点元数据
// }) => {
//   // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
// }

let busuanzi

export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    router.beforeEach((to, from, next) => {
      next()
      if (to.path !== '/' && to.path !== from.path && siteData.themeConfig.blogInfo) {
        removeElement('.page-view-js')
        removeElement('.page-view')
        removeElement('.book-words')
        removeElement('.reading-time')
        siteData.pages.forEach((itemPage) => {
          if (itemPage.path == to.path) {
            if (itemPage.frontmatter.article == undefined || itemPage.frontmatter.article) {
              const { eachFileWords, pageView, pageIteration, readingTime } = siteData.themeConfig.blogInfo

              if (eachFileWords) {
                eachFileWords.forEach((itemFile) => {
                  if (itemFile.permalink == itemPage.frontmatter.permalink) {
                    addPageWordsCount(itemFile.wordsCount)
                    if (readingTime || readingTime == undefined) {
                      addReadTimeCount(itemFile.readingTime)
                    }
                  }
                })
              }
              if (pageView || pageView == undefined) {
                addPageView()

                setTimeout(() => {
                  getPageViewCouter(pageIteration)
                }, 1500)
              }

              return
            }
          }
        })
      }
    })
  }
}

function removeElement(selector) {
  var element = document.querySelector(selector)
  if (element) {
    element.parentNode.removeChild(element)
  }
}

function getPageViewCouter(iterationTime = 3000) {
  if (busuanzi) {
    busuanzi.fetch()
  } else {
    busuanzi = require('busuanzi.pure.js')
  }
  var i = 0
  var defaultCouter = '9999'
  setTimeout(() => {
    let interval = setInterval(() => {
      const pageView = document.querySelector('.view-data')
      if (pageView) {
        i += iterationTime
        if (i > iterationTime * 10) {
          pageView.innerText = defaultCouter
          clearInterval(interval)
        }
        if (pageView.innerText == '') {
          busuanzi.fetch()
        } else {
          clearInterval(interval)
        }
      } else {
        clearInterval(interval)
      }
    }, iterationTime)
  }, iterationTime)
}

function addPageView() {
  let template = document.createElement('div')
  template.title = '浏览量'
  template.className = 'page-view iconfont icon-view'
  template.style.float = 'left'
  template.style.marginLeft = '20px'
  template.style.fontSize = '0.8rem'

  template.innerHTML = '<a style="color: #888; margin-left: 3px" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"><i title="正在获取..." class="loading iconfont icon-loading"></i></a>'
  mountedView(template)
  let style = document.createElement('style')
  style.innerHTML = `@keyframes turn {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    display: inline-block;
    animation: turn 1s linear infinite;
    -webkit-animation: turn 1s linear infinite;
  }`
  document.head.appendChild(style)
}

function addPageWordsCount(wordsCount) {
  if (wordsCount) {
    let template = document.createElement('div')
    template.title = '文章字数'
    template.className = 'book-words iconfont icon-book'
    template.style.float = 'left'
    template.style.marginLeft = '20px'
    template.style.fontSize = '0.8rem'

    template.innerHTML = `<a href="javascript:;" style="margin-left: 3px; color: #888">${wordsCount}</a>`
    mountedView(template)
  }
}

function addReadTimeCount(readTimeCount) {
  let template = document.createElement('div')
  template.title = '预阅读时长'
  template.className = 'reading-time iconfont icon-shijian'
  template.style.float = 'left'
  template.style.marginLeft = '20px'
  template.style.fontSize = '0.8rem'
  template.innerHTML = `<a href="javascript:;" style="margin-left: 3px; color: #888">${readTimeCount}</a>`
  mountedView(template)
}

function mountedView(template, moutedParentEvent = '.articleInfo-wrap > .articleInfo > .info') {
  var i = 0
  let interval = setInterval(() => {
    i++
    const parentElement = document.querySelector(moutedParentEvent)
    if (parentElement) {
      if (!isMountedView(template, parentElement)) {
        parentElement.appendChild(template)
        clearInterval(interval)
      }
    } else if (i > 1 * 10) {
      clearInterval(interval)
    }
  }, 1000)
}

function isMountedView(element, parentElement) {
  if (element.parentNode == parentElement) {
    return true
  } else {
    return false
  }
}
