<template>
  <div>
    <p>页面标签切换到别的tab，再回来试试</p>
  </div>
</template>
<script>
export default {
  pageName: '我藏好了',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    document.addEventListener('visibilitychange', this.changeTitle)
  },
  beforeDestroy() {
    document.removeEventListener('visibilitychange', this.changeTitle)
  },
  methods: {
    changeTitle() {
      const OriginTitle = ''
      let str
      if (document.hidden) {
        document.title = '(✿◡‿◡)我藏好了哦 - '
        clearTimeout(str)
      } else {
        document.title = 'ヾ(o◕∀◕)ﾉヾ被发现啦~ '
        str = setTimeout(function() {
          document.title = OriginTitle
        }, 2000)
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
