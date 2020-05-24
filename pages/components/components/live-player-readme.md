# LivePlayer 直播组件

### Usage

```html
<template lang="pug">
  LivePlayer.player(v-if="liveURL", ref="player", :liveURL="liveURL", @on-play="onLivePlay", @on-error="onLiveError")
    el-button(@click="handlePlay") 播放
    el-button(@click="handlePause") 暂停
</template>
<script>
import LivePlayer from './components/LivePlayer'

export default {
  components: {
    LivePlayer,
  },
  data() {
    return {
      liveURL: '',
      player: null
    }
  },
  created() {
    this.liveURL = 'http://live.com/test.flv?auth_key=233'
  },
  mounted() {
    this.$nextTick(() => {
      this.player = this.$refs.player
    })
  },
  methods: {
    handlePlay() {
      this.player.play()
    },
    handlePause() {
      this.player.pause()
    },
    onLivePlay() {},
    onLiveError({ error, detail }) {
      switch(error) {
        case -1:
          // 浏览器不兼容，提示升级浏览器
          break
        case 100:
          // 网络错误，可能是推流端暂停推流或推流过期
          break
        case 101:
          // HTTP status 403 or 404，服务端配置有问题（权限校验错误，
          break
        case 102:
          // 请求超时
          break
        case 200:
          // 媒体
          break
        default:
          break
      }
    }
  }
}
</script>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ | ----- |
| liveURL | 直播地址 | String | 拉流url，需要为flv格式 | null |

### API

| API名称 | 说明 | 参数 |
| -------- | ---- | -------- |
| play | 播放视频 | null |
| pause | 暂停视频 | null |
| stop | 停止播放 | null |
| fullScreen | 全屏切换 | enter 进入; leave 退出 |

### Events

| 事件名称 | 说明 | 回调参数 |
| -------- | ---- | -------- |
|  on-play | 直播开始播放 | null |
|  on-error  | 直播遇到错误 | 见下方LiveErrorCode |

### LiveErrorCode

| code值 | 说明 |
| -------- | ---- |
|   -1     | 当前浏览器不支持HTTP flv协议 |
|   100    | 未知的网络错误 |
|   101    | HTTP status 403 or 404，服务端配置问题（权限校验错误、不存在的直播间等） |
|   102    | 网络请求超时 |
|   200    | 媒体文件错误  |
