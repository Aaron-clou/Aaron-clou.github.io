<template></template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.addExpand(40)
    }, 1000)
  },
  watch: {
    $route(to, from) {
      console.log('11')
      setTimeout(() => {
        this.addExpand(40)
      }, 1000)
    }
  },
  methods: {
    addExpand(hiddenHeight = 40) {
      let modes = document.getElementsByClassName('line-numbers-mode')

      Array.from(modes).forEach((item) => {
        let expand = item.getElementsByClassName('expand')[0]

        if (!expand) {
          let modeHeight = item.offsetHeight

          if (modeHeight == 0) {
            modeHeight = this.getHiddenElementHight(item)
          }

          modeHeight -= 12
          item.style.height = modeHeight + 'px'

          let pre = item.getElementsByTagName('pre')[0]
          let wrapper = item.getElementsByClassName('line-numbers-wrapper')[0]

          const div = document.createElement('div')
          div.className = 'expand icon-xiangxiajiantou iconfont'

          div.onclick = () => {
            if (parseInt(item.style.height) == hiddenHeight) {
              div.className = 'expand icon-xiangxiajiantou iconfont'
              item.style.height = modeHeight + 'px'
              setTimeout(() => {
                pre.style.display = 'block'
                wrapper.style.display = 'block'
              }, 80)
            } else {
              div.className = 'expand icon-xiangxiajiantou iconfont closed'
              item.style.height = hiddenHeight + 'px'
              setTimeout(() => {
                pre.style.display = 'none'
                wrapper.style.display = 'none'
              }, 300)
            }
          }
          item.append(div)
          item.append(this.addCircle())
        }

        this.getLanguage(item)

        let flag = false
        let interval = setInterval(() => {
          flag = this.moveCopyBlock(item)
          if (flag) {
            clearInterval(interval)
          }
        }, 1000)
      })
    },
    getHiddenElementHight(hiddenElement) {
      let modeHeight
      if (hiddenElement.parentNode.style.display == 'none' || hiddenElement.parentNode.className != 'theme-code-block theme-code-block__active') {
        hiddenElement.parentNode.style.display = 'block'
        modeHeight = hiddenElement.offsetHeight
        hiddenElement.parentNode.style.display = 'none'

        if (hiddenElement.parentNode.className == 'theme-code-block' || hiddenElement.parentNode.className == 'cardListContainer') {
          hiddenElement.parentNode.style.display = ''
        }
      }
      return modeHeight
    },

    addCircle() {
      let div = document.createElement('div')
      div.className = 'circle'
      return div
    },

    moveCopyBlock(element) {
      let copyElement = element.getElementsByClassName('code-copy')[0]
      if (copyElement && copyElement.parentNode != element) {
        copyElement.parentNode.parentNode.insertBefore(copyElement, copyElement.parentNode)
        return true
      } else {
        return false
      }
    },

    getLanguage(element) {
      let content = getComputedStyle(element, ':before').getPropertyValue('content')

      if (content.length == 2 || content == '' || content == 'none') {
        let language = element.className.substring('language'.length + 1, element.className.indexOf(' '))
        element.setAttribute('data-language', language)
      }
    }
  }
}
</script>

<style>
.line-numbers-mode {
  overflow: hidden;
  transition: height 0.3s;
  margin-top: 0.85rem;
}
.line-numbers-mode::before {
  content: attr(data-language);
}

.expand {
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 0.5em;
  color: rgba(238, 255, 255, 0.8);
  font-weight: 900;
  transition: transform 0.3s;
}

div[class*='language-'].line-numbers-mode pre {
  margin: 30px 0 0.85rem 0;
}

div[class*='language-'].line-numbers-mode .line-numbers-wrapper {
  margin-top: 30px;
}

.closed {
  transform: rotate(90deg) translateY(-3px);
  transition: all 0.3s;
}
li .closed {
  transform: rotate(90deg) translate(5px, -8px);
}

div[class*='language-']::before {
  position: absolute;
  z-index: 3;
  top: 0.3em;
  left: 4.7rem;
  font-size: 1.15em;
  color: rgba(238, 255, 255, 0.8);
  font-weight: bold;
  width: fit-content;
}

li div[class*='language-']::before,
li .expand {
  margin-top: -4px;
}

div[class*='language-'].line-numbers-mode::after {
  margin-top: 35px;
}

.circle {
  position: absolute;
  top: 0.6em;
  left: 0.7rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fc625d;
  -webkit-box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
}

.code-copy {
  position: absolute;
  top: 0.8rem;
  right: 2rem;
  fill: rgba(238, 255, 255, 0.8);
  opacity: 1;
}
.code-copy svg {
  margin: 0;
}

.theme-mode-light .expand {
  color: #666;
}
.theme-mode-light div[class*='language-']::before {
  color: #666;
}
.theme-mode-light .code-copy {
  fill: #666;
}
</style>
