<template>
  <div id="tcomment"></div>
</template>
<script>
let waitTime = 700
let archives = '/archives/'
export default {
  data() {
    return {
      twikoo: '',
      firstLoad: true
    }
  },
  mounted() {
    if ((this.$frontmatter.comment == undefined || this.$frontmatter.comment) && this.$route.path != '/' && this.$route.path != archives) {
      setTimeout(() => {
        this.twikooInit()
      }, waitTime)
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.path == '/' || this.$route.hash != '') {
        return
      }

      if (to.path == '/' || this.getCommentByFrontmatter(to) == false) {
        this.deleteComment()
        return
      }

      if (from.path == '/' || from.path == archives || !this.getCommentByFrontmatter(from)) {
        this.firstLoad
          ? setTimeout(() => {
              this.twikooInit()
              this.firstLoad = false
            }, waitTime)
          : this.twikooInit()
      } else if (this.$route.path != '/' && this.$route.hash == '') {
        setTimeout(() => {
          this.updateComment()
        }, waitTime)
      }
    }
  },
  methods: {
    twikooInit() {
      twikoo
        .init({
          envId: 'https://twikoo-snowy-rho.vercel.app/',
          el: '#tcomment',

          onCommentLoaded: function () {
            console.log('评论成功')
          }
        })
        .then(() => {
          this.loadTwikoo()
        })
    },

    loadTwikoo() {
      let page = document.getElementsByClassName('page')[0]
      let comment = document.getElementById('twikoo')

      comment ? (this.twikoo = comment) : (comment = this.twikoo)
      page ? (comment ? page.appendChild(comment) : page.appendChild(this.twikoo)) : ''
      this.updateComment()
    },

    updateComment() {
      let tk_icon = document.getElementsByClassName('tk-icon')[0]
      tk_icon ? tk_icon.click() : undefined
    },

    deleteComment() {
      let comment = document.getElementById('twikoo')
      comment ? comment.parentNode.removeChild(comment) : ''
    },

    getCommentByFrontmatter(route) {
      let comment = true
      this.$site.pages.forEach((item) => {
        if (item.path == route.path) {
          comment = item.frontmatter.comment
        }
      })
      return comment
    }
  }
}
</script>

<style>
.twikoo .tk-comments {
  margin-top: 20px;
}
</style>
