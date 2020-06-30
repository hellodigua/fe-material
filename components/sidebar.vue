<template>
  <el-menu
    v-show="!hideMenu"
    mode="vertical"
    :show-timeout="200"
    :default-active="$route.path"
    router
    :collapse="false"
    background-color="#f7f7fa"
    text-color="#333"
    active-text-color="#409EFF"
  >
    <div v-for="(item, index) in navConfig" :key="index">
      <el-menu-item v-if="item.type === 'menu'" :index="item.routes">{{ item.name }}</el-menu-item>
      <el-menu-item-group v-if="item.type === 'group'">
        <span slot="title" class="group-title">{{ item.name }} </span>
        <el-menu-item
          v-for="(subItem, subIndex) in item.children"
          v-show="!subItem.hidden"
          :key="subIndex"
          :index="subItem.routes"
        >
          <span>{{ subItem.name }}</span>
          <span v-show="$route.path === subItem.routes" class="code" @click="handleClickOpenSource(subItem)">源码</span>
        </el-menu-item>
      </el-menu-item-group>
    </div>
  </el-menu>
</template>

<script>
import config from '../static/config'

export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {
      navConfig: config.nav,
      hideMenu: false
    }
  },
  created() {
    const {
      query: { h = 'true' }
    } = this.$route

    this.hideMenu = h === 'true'
  },
  methods: {
    handleClickOpenSource(subItem) {
      const url = `https://github.com/hellodigua/fe-material/blob/master/pages${subItem.routes}.vue`

      window.open(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.group-title {
  margin-left: -10px;
  font-size: 14px;
}

.code {
  float: right;
  cursor: pointer;
  font-size: 12px;
}
</style>
