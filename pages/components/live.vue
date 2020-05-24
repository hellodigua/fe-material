<template>
  <div>
    <el-input v-model="liveUrl" placeholder="输入拉流url，接受flv格式" />
    <!-- <LivePlayer v-if="liveUrl" :live-url="liveUrl" class="player" /> -->
  </div>
</template>
<script>
// import LivePlayer from './components/live-player'

export default {
  pageName: '直播组件',
  components: {},
  props: {},
  data() {
    return {
      liveUrl: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.player {
  width: 640px;
  height: 320px;
}
</style>
