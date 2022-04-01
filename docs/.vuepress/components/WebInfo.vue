<template>
  <div class="web-info card-box">
    <div class="webinfo-title">
      <i class="iconfont icon-award" style="font-size: 0.875rem; font-weight: 900; width: 1.25em"></i>
      <span>站点信息</span>
    </div>
    <div class="webinfo-item">
      <div class="webinfo-item-title">文章：</div>
      <div class="webinfo-content">{{ mdFileCount }} 篇</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">运行时间：</div>
      <div class="webinfo-content">
        {{ createToNowDay != 0 ? createToNowDay + ' 天' : '不到一天' }}
      </div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">总字数：</div>
      <div class="webinfo-content">{{ totalWords }} 字</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">最后活动时间：</div>
      <div class="webinfo-content">
        {{ lastActiveDate == '刚刚' ? '刚刚' : lastActiveDate + '前' }}
      </div>
    </div>

    <div v-if="indexView" class="webinfo-item">
      <div class="webinfo-item-title">本站被访问了：</div>
      <div class="webinfo-content">
        <span id="busuanzi_value_site_pv" class="web-site-pv"><i title="正在获取..." class="loading iconfont icon-loading"></i> </span>
        次
      </div>
    </div>

    <div v-if="indexView" class="webinfo-item">
      <div class="webinfo-item-title">您的访问排名：</div>
      <div class="webinfo-content busuanzi">
        <span id="busuanzi_value_site_uv" class="web-site-uv"><i title="正在获取..." class="loading iconfont icon-loading"></i> </span>
        名
      </div>
    </div>
  </div>
</template>

<script>
import { dayDiff, timeDiff, lastUpdatePosts } from '../webSiteInfo/utils'
let busuanzi
export default {
  data() {
    return {
      mdFileCount: 0, // markdown 文档总数
      createToNowDay: 0, // 博客创建时间距今多少天
      lastActiveDate: '', // 最后活动时间
      totalWords: 0, // 本站总字数
      indexView: true // 开启访问量和排名统计
    }
  },
  computed: {
    $lastUpdatePosts() {
      return lastUpdatePosts(this.$filterPosts)
    }
  },
  mounted() {
    if (Object.keys(this.$themeConfig.blogInfo).length > 0) {
      const { blogCreate, mdFileCountType, totalWords, moutedEvent, eachFileWords, indexIteration, indexView } = this.$themeConfig.blogInfo
      this.createToNowDay = dayDiff(blogCreate)
      if (mdFileCountType != 'archives') {
        this.mdFileCount = mdFileCountType.length
      } else {
        this.mdFileCount = this.$filterPosts.length
      }
      if (totalWords == 'archives' && eachFileWords) {
        let archivesWords = 0
        eachFileWords.forEach((itemFile) => {
          if (itemFile.wordsCount < 1000) {
            archivesWords += itemFile.wordsCount
          } else {
            let wordsCount = itemFile.wordsCount.slice(0, itemFile.wordsCount.length - 1)
            archivesWords += wordsCount * 1000
          }
        })
        this.totalWords = Math.round(archivesWords / 100) / 10 + 'k'
      } else if (totalWords == 'archives') {
        this.totalWords = 0
        console.log('如果 totalWords 使用 archives，必须传入 eachFileWords，你并没有传入！')
      } else {
        this.totalWords = totalWords
      }

      this.lastActiveDate = timeDiff(this.$lastUpdatePosts[0].lastUpdated)
      this.mountedWebInfo(moutedEvent)

      this.indexView = indexView == undefined ? true : indexView
      if (this.indexView) {
        this.getIndexViewCouter(indexIteration)
      }
    }
  },
  methods: {
    mountedWebInfo(moutedEvent = '.tags-wrapper') {
      let interval = setInterval(() => {
        const tagsWrapper = document.querySelector(moutedEvent)
        const webInfo = document.querySelector('.web-info')
        if (tagsWrapper && webInfo) {
          if (!this.isSiblilngNode(tagsWrapper, webInfo)) {
            tagsWrapper.parentNode.insertBefore(webInfo, tagsWrapper.nextSibling)
            clearInterval(interval)
          }
        }
      }, 200)
    },

    isSiblilngNode(element, siblingNode) {
      if (element.siblingNode == siblingNode) {
        return true
      } else {
        return false
      }
    },

    getIndexViewCouter(iterationTime = 3000) {
      if (busuanzi) {
        busuanzi.fetch()
      } else {
        busuanzi = require('busuanzi.pure.js')
      }
      var i = 0
      var defaultCouter = '9999'
      setTimeout(() => {
        let interval = setInterval(() => {
          const indexUv = document.querySelector('.web-site-pv')
          const indexPv = document.querySelector('.web-site-uv')
          if (indexPv || indexUv) {
            i += iterationTime
            if (i > iterationTime * 10) {
              indexPv.innerText = defaultCouter
              indexUv.innerText = defaultCouter
              clearInterval(interval)
            }
            if (indexPv.innerText == '' && indexUv.innerText == '') {
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
  }
}
</script>

<style scoped>
.web-info {
  font-size: 0.875rem;
  padding: 0.95rem;
}
.webinfo-title {
  text-align: center;
  color: #888;
  font-weight: bold;
  padding: 0 0 10px 0;
}
.webinfo-item {
  padding: 8px 0 0;
  margin: 0;
}
.webinfo-item-title {
  display: inline-block;
}
.webinfo-content {
  display: inline-block;
  float: right;
}
@keyframes turn {
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
}
</style>
