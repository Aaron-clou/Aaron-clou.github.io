<template>
  <div class="index-bigimg" style="display: none"></div>
</template>
<script>
const banner = 'banner'
const banner_arrow = 'banner-arrow'
export default {
  mounted() {
    const arrow = document.getElementById(banner_arrow)
    arrow && arrow.parentNode.removeChild(arrow)
    let a = document.createElement('a')
    a.id = banner_arrow
    a.className = banner_arrow
    document.getElementsByClassName(banner)[0].append(a)
    let targetA = document.getElementById(banner_arrow)
    targetA.addEventListener('click', (e) => {
      this.scrollFn()
    })

    let navColor = 1
    let switchNavColor = false
    let bgTimeColor = false
    let bgTimeColorArray = ['transparent', 'rgba(255, 148, 48, .2', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)']
    let descFade = false
    let desc = []
    let descFadeInTime = 200
    let descFadeOutTime = 100
    let descNextTime = 800
    let descFontSize = '1.4rem'
    let bubble = false
    let bubblePosition = 0
    let bubbleNum = 200
    if (this.$themeConfig.indexImg && Object.keys(this.$themeConfig.indexImg).length > 0) {
      navColor = this.$themeConfig.indexImg.navColor == undefined ? navColor : this.$themeConfig.indexImg.navColor
      switchNavColor = this.$themeConfig.indexImg.switchNavColor == undefined ? switchNavColor : this.$themeConfig.indexImg.switchNavColor
      bgTimeColor = this.$themeConfig.indexImg.bgTimeColor == undefined ? bgTimeColor : this.$themeConfig.indexImg.bgTimeColor
      bgTimeColorArray = this.$themeConfig.indexImg.bgTimeColorArray == undefined ? bgTimeColorArray : this.$themeConfig.indexImg.bgTimeColorArray
      descFade = this.$themeConfig.indexImg.descFade == undefined ? descFade : this.$themeConfig.indexImg.descFade
      desc = this.$themeConfig.indexImg.desc == undefined ? desc : this.$themeConfig.indexImg.desc
      descFontSize = this.$themeConfig.indexImg.descFontSize == undefined ? descFontSize : this.$themeConfig.indexImg.descFontSize
      descFadeInTime = this.$themeConfig.indexImg.descFadeInTime == undefined ? descFadeInTime : this.$themeConfig.indexImg.descFadeInTime
      descNextTime = this.$themeConfig.indexImg.descNextTime == undefined ? descNextTime : this.$themeConfig.indexImg.descNextTime
      bubble = this.$themeConfig.indexImg.bubble == undefined ? bubble : this.$themeConfig.indexImg.bubble
      bubblePosition = this.$themeConfig.indexImg.bubblePosition == undefined ? bubblePosition : this.$themeConfig.indexImg.bubblePosition
      bubbleNum = this.$themeConfig.indexImg.bubbleNum == undefined ? bubbleNum : this.$themeConfig.indexImg.bubbleNum
    }

    if (bgTimeColor) {
      this.bgTimeColor(bgTimeColorArray)
    }
    setTimeout(() => {
      this.noBgBlur()
    }, 100)
    this.blurText(navColor)
    this.watchScroll(navColor, switchNavColor)

    if (descFade) {
      this.textFadeInAndOut(desc, descFontSize, descFadeInTime, descFadeOutTime, descNextTime)
    }
    if (bubble) {
      let canvas = document.createElement('canvas')
      canvas.id = 'canvas'
      canvas.style.top = bubblePosition + '%'
      document.getElementsByClassName(banner)[0].append(canvas)
      this.canvasBubble(bubbleNum)
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == '/' && Object.keys(this.$route.query).length > 0) {
        setTimeout(() => {
          this.clickArrow()
        }, 200)
      }
    }
  },
  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName(banner)[0].clientHeight
      window.scrollTo({
        top: windowH,
        behavior: 'smooth'
      })
    },

    clickArrow() {
      const arrow = document.getElementById('banner-arrow')
      arrow.click()
    },

    watchScroll(navColor, switchNavColor) {
      const windowH = document.getElementsByClassName(banner)[0].clientHeight
      window.onscroll = () => {
        if (document.documentElement.scrollTop < windowH) {
          this.blurText(navColor)
          this.noBgBlur()
        } else {
          if (switchNavColor && navColor == 1) {
            this.blurText(2)
          } else if (switchNavColor && navColor == 2) {
            this.blurText(1)
          }
          this.bgBlur()
        }
      }
    },

    bgBlur() {
      let navbar = document.getElementsByClassName('navbar')[0]
      navbar.className = 'navbar blur'
    },

    noBgBlur() {
      let navbar = document.getElementsByClassName('navbar')[0]
      navbar.className = 'navbar navbar1 blur'
    },

    blurText(navColor) {
      let title = document.getElementsByClassName('site-name')[0]
      let search = document.getElementsByClassName('search-box')[0]
      let nav = document.getElementsByClassName('nav-links')[0]
      if (navColor == 1) {
        title.className = 'site-name can-hide'
        nav.className = 'nav-links can-hide'
        search.className = 'search-box'
      } else if (navColor == 2) {
        title.className = 'site-name site-name1 can-hide'
        nav.className = 'nav-links nav-links1 can-hide'
        search.className = 'search-box search-box1'
      }
    },

    bgTimeColor(bgTimeColorArray) {
      var hours = new Date().getHours()
      var minutes = new Date().getMinutes()
      var seconds = new Date().getSeconds()
      hours = hours < 10 ? '0' + hours : hours
      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds
      let div = document.createElement('div')
      div.className = 'banner-color'
      if (hours >= 6 && hours < 11) {
        div.style.backgroundColor = bgTimeColorArray[0]
        addTip(`早上好 Dafnyer✨,现在是 ${hours}:${minutes}:${seconds}`, 'info', 50, 4000)
      } else if (hours >= 12 && hours <= 16) {
        div.style.backgroundColor = bgTimeColorArray[0]
        addTip(`中午好 Dafnyer✨,现在是 ${hours}:${minutes}:${seconds}`, 'info', 50, 4000)
      } else if (hours >= 16 && hours <= 19) {
        div.style.backgroundColor = bgTimeColorArray[1]
        addTip(`晚上好 Dafnyer✨,现在是 ${hours}:${minutes}:${seconds}`, 'info', 50, 4000)
      } else if (hours >= 19 && hours < 24) {
        div.style.backgroundColor = bgTimeColorArray[2]
        addTip(`凌晨好 Dafnyer✨,现在是 ${hours}:${minutes}:${seconds}，该休息啦`, 'info', 50, 4000)
      } else if (hours >= 0 && hours < 6) {
        div.style.backgroundColor = bgTimeColorArray[3]
        addTip(`熬夜咯 Dafnyer✨`, 'info', 50, 4000)
      }
      document.getElementsByClassName(banner)[0].parentNode.append(div)
    },

    textFadeInAndOut(desc, descFontSize, descFadeInTime, descFadeOutTime, descNextTime) {
      let descElement = document.getElementsByClassName('description')[0]

      descElement.style.fontSize = descFontSize
      if (descElement) {
        var span = document.createElement('span')
        span.className = 'typed'
        span.innerHTML = '|'
        var index = 0
        var length = 0
        var description = descElement.innerText
        descElement.innerText = ''
        descElement.appendChild(document.createElement('span'))
        descElement.appendChild(span)

        var interval1 = setInterval(fadeIn, descFadeInTime)
        var interval2
      }

      function fadeIn() {
        if (descElement) {
          span.style.animation = 'none'
          if (desc instanceof Array && desc.length > 0) {
            description = desc[length]
          }
          descElement.firstChild.innerText = description.substring(0, index++)
          if (index > description.length) {
            clearInterval(interval1)
            span.style.animation = 'typedBlink 1s infinite'
            setTimeout(() => {
              interval2 = setInterval(fadeOut, descFadeOutTime)
            }, descNextTime)
          }
        }
      }

      function fadeOut() {
        if (index >= 0) {
          span.style.animation = 'none'
          descElement.firstChild.innerText = description.substring(0, index--)
        } else {
          clearInterval(interval2)
          span.style.animation = 'typedBlink 1s infinite'
          setTimeout(() => {
            length++
            if (length >= desc.length) {
              length = 0
            }
            interval1 = setInterval(fadeIn, descFadeInTime)
          }, descNextTime)
        }
      }
    },

    canvasBubble(bubbleNum) {
      var canvas = document.getElementById('canvas')
      var cxt = canvas.getContext('2d')
      function Dot() {
        this.alive = true
        this.x = Math.round(Math.random() * canvas.width)
        this.y = Math.round(Math.random() * canvas.height)
        this.diameter = Math.random() * 10.8
        this.ColorData = {
          Red: Math.round(Math.random() * 255),
          Green: Math.round(Math.random() * 255),
          Blue: Math.round(Math.random() * 255)
        }
        this.alpha = 0.5
        this.color = 'rgba(' + this.ColorData.Red + ', ' + this.ColorData.Green + ',' + this.ColorData.Blue + ',' + this.alpha + ')'
        this.velocity = {
          x: Math.round(Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7,
          y: Math.round(Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7
        }
      }
      Dot.prototype = {
        Draw: function () {
          cxt.fillStyle = this.color
          cxt.beginPath()
          cxt.arc(this.x, this.y, this.diameter, 0, Math.PI * 2, false)
          cxt.fill()
        },
        Update: function () {
          if (this.alpha < 0.8) {
            this.alpha += 0.01
            this.color = 'rgba(' + this.ColorData.Red + ', ' + this.ColorData.Green + ',' + this.ColorData.Blue + ',' + this.alpha + ')'
          }
          this.x += this.velocity.x
          this.y += this.velocity.y
          if (this.x > canvas.width + 5 || this.x < 0 - 5 || this.y > canvas.height + 5 || this.y < 0 - 5) {
            this.alive = false
          }
        }
      }
      var Event = {
        rArray: [],
        Init: function () {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          for (var x = 0; x < bubbleNum; x++) {
            this.rArray.push(new Dot())
          }
          this.Update()
        },
        Draw: function () {
          cxt.clearRect(0, 0, canvas.width, canvas.height)
          this.rArray.forEach(function (dot) {
            dot.Draw()
          })
        },
        Update: function () {
          if (Event.rArray.length < bubbleNum) {
            for (var x = Event.rArray.length; x < bubbleNum; x++) {
              Event.rArray.push(new Dot())
            }
          }
          Event.rArray.forEach(function (dot) {
            dot.Update()
          })
          Event.rArray = Event.rArray.filter(function (dot) {
            return dot.alive
          })
          Event.Draw()
          requestAnimationFrame(Event.Update)
        }
      }
      window.onresize = function () {
        Event.rArray = []
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      Event.Init()
    }
  }
}

function addTip(content, type, startHeight = 50, dieTime = 3000) {
  var tip = document.querySelectorAll('.index-tip')
  var time = new Date().getTime()

  var top = tip.length == 0 ? 0 : tip[tip.length - 1].getAttribute('data-top')

  var lastTop = parseInt(top) + (tip.length != 0 ? tip[tip.length - 1].offsetHeight + 17 : startHeight)

  let div = document.createElement('div')
  div.className = `index-tip tip-${type} ${time}`
  div.style.top = parseInt(top) + 'px'
  div.setAttribute('data-top', lastTop)
  if (type == 'info' || type == 1) {
    div.innerHTML = `<i class="iconfont icon-info icon"></i><p class="tip-info-content">${content}</p>`
  } else if (type == 'success' || type == 2) {
    div.innerHTML = `<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${content}</p>`
  } else if (type == 'danger' || type == 3) {
    div.innerHTML = `<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${content}</p>`
  } else if (type == 'warning' || type == 4) {
    div.innerHTML = `<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${content}</p>`
  }
  document.body.appendChild(div)

  let timeTip = document.getElementsByClassName(time)[0]
  setTimeout(() => {
    timeTip.style.top = parseInt(lastTop) + 'px'
    timeTip.style.opacity = '1'
  }, 10)

  setTimeout(() => {
    timeTip.style.top = '0px'
    timeTip.style.opacity = '0.4'

    var allTipElement = nextAllTipElement(timeTip)
    for (let i = 0; i < allTipElement.length; i++) {
      var next = allTipElement[i]
      var top = parseInt(next.getAttribute('data-top')) - next.offsetHeight - 17
      next.setAttribute('data-top', top)
      next.style.top = top + 'px'
    }
    setTimeout(() => {
      timeTip.remove()
    }, 500)
  }, dieTime)
}

function nextAllTipElement(elem) {
  var r = []
  var n = elem
  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== elem) {
      r.push(n)
    }
  }
  return r
}
</script>

<style>
.vdoing-index-class .home-wrapper .banner {
  margin-top: 0 !important;
  height: 100vh;
  background-attachment: fixed !important;
}

.banner-conent {
  margin-top: 23vh !important;
}

.vdoing-index-class .navbar1 {
  background-color: transparent;
  box-shadow: none;
  backdrop-filter: none;
}
.vdoing-index-class .nav-links1 > .nav-item > a,
.vdoing-index-class .nav-links1 > a,
.vdoing-index-class .nav-links1 .dropdown-title a:hover,
.vdoing-index-class .nav-links1 .title,
.vdoing-index-class .nav-links1 .dropdown-title > .link-title,
.vdoing-index-class .site-name1 {
  color: #fff !important;
}

.vdoing-index-class .footer {
  color: #fff;
}
.vdoing-index-class .search-box1 input {
  border-color: #fff;
  color: #fff;
}

.banner-arrow {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 15%;
  margin-left: -10px;
  cursor: pointer;
  z-index: 999;
}
@-webkit-keyframes bounce-in {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  80% {
    transform: translateY(0);
  }
  to {
    transform: translateY(0);
  }
}
.banner-arrow::before {
  content: '';
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
  left: 668px;
}
.banner-arrow::after {
  content: '';
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 25px;
  left: 668px;
}
/* 描述淡入淡出元素 */
.description {
  display: inline-block;
}
.typed {
  opacity: 1;
}
/* 随时间变化的背景色元素 */
.vdoing-index-class .banner-color {
  width: 100%;
  min-height: 450px;
  overflow: hidden;
  margin-top: 0;
  height: 100vh;
  position: absolute;
  top: 0;
}
/* 气泡效果的画布元素 */
#canvas {
  position: absolute;
  top: 0;
}
/* 切换第二页，继续打开 banner */
.hide-banner {
  display: block !important;
}
/* 提示框元素 */
.index-tip {
  position: fixed;
  display: flex;
  top: -10px;
  left: 50%;
  opacity: 0;
  min-width: 320px;
  transform: translateX(-50%);
  transition: opacity 0.3s linear, top 0.4s, transform 0.4s;
  z-index: 99999;
  padding: 15px 15px 15px 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  grid-row: 1;
  line-height: 17px;
}

.index-tip p {
  line-height: 17px;
  margin: 0;
  font-size: 14px;
}

.icon {
  margin-right: 10px;
  line-height: 17px;
}

.tip-success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.tip-success .tip-success-content {
  color: #67c23a;
}

.tip-danger {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.tip-danger .tip-danger-content {
  color: #f56c6c;
}

.tip-info {
  background-color: #edf2fc;
  border-color: #ebeef5;
}

.tip-info .tip-info-content {
  color: #909399;
}

.tip-warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.tip-warning .tip-warning-content {
  margin: 0;
  color: #e6a23c;
  line-height: 21px;
  font-size: 14px;
}
@keyframes typedBlink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
