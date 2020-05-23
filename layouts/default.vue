<template>
  <div id="app">
    <my-sidebar class="app-side" />
    <nuxt class="app-content" />
  </div>
</template>
<script>
import MySidebar from '../components/sidebar.vue'

export default {
  components: {
    MySidebar
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#__nuxt,
#__layout,
#app {
  width: 100vw;
  height: 100vh;
}

#app {
  display: flex;
}

.app {
  &-side {
    width: 250px;
    height: 100%;
  }
  &-content {
    flex: 1;
    min-height: 100%;
    margin-left: 20px;
  }
}
</style>
