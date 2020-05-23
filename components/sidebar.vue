<template>
  <el-menu
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
      <el-menu-item v-if="item.type === 'menu'" :index="item.routes">{{
        item.name
      }}</el-menu-item>
      <el-menu-item-group v-if="item.type === 'group'">
        <span slot="title" class="group-title">{{ item.name }} </span>
        <el-menu-item
          v-for="(subItem, subIndex) in item.children"
          v-show="!subItem.hidden"
          :key="subIndex"
          :index="subItem.routes"
          >{{ subItem.name }}</el-menu-item
        >
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
      navConfig: config.nav
    }
  }
}
</script>
<style lang="scss" scoped>
.group-title {
  margin-left: -10px;
  font-size: 14px;
}
</style>
