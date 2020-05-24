<template>
  <VueDPlayer ref="player" class="live-player" :options="options" @play="onPlay" />
</template>

<script>
import flvjs from 'flv.js'
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  components: {
    VueDPlayer
  },
  props: {
    liveUrl: {
      type: String,
      value: '',
      required: true
    }
  },
  data() {
    return {
      player: null,
      flvPlayer: null,
      options: {
        live: true,
        autoplay: true,
        video: {
          url: '',
          type: 'customFlv',
          customType: {}
        }
      }
    }
  },
  watch: {},
  created() {
    this.initVideo(this.liveUrl)
  },
  mounted() {
    this.$nextTick(() => {
      this.player = this.$refs.player.dp
    })
  },
  methods: {
    /**
     * 初始化视频
     */
    initVideo(url) {
      this.options.video.url = url
      this.options.video.customType = {
        customFlv: (video, player) => {
          // flv.js can support HTTP FLV live stream on Chrome 43+, FireFox 42+, Edge 15.15048+ and Safari 10.1+ for now.
          if (flvjs.isSupported()) {
            this.flvPlayer = flvjs.createPlayer({
              type: 'flv',
              isLive: true,
              url: video.src
            })
            // 绑定媒体元素并加载视频流
            this.flvPlayer.attachMediaElement(video)
            this.flvPlayer.load()

            // catch error
            this.flvPlayer.on(flvjs.Events.ERROR, (errorType, errorDetail) => {
              let error
              if (errorType === flvjs.ErrorTypes.NETWORK_ERROR) {
                error = 100
                if (errorDetail === flvjs.ErrorDetails.NETWORK_STATUS_CODE_INVALID) {
                  // HTTP status 403 or 404
                  error = 101
                } else if (errorDetail === flvjs.ErrorDetails.NETWORK_TIMEOUT) {
                  error = 102
                }
              } else {
                error = 200
              }
              this.$emit('on-error', { error, detail: { errorType, errorDetail } })
            })
          } else {
            // not support
            this.$emit('on-error', { error: -1, detail: {} })
          }
        }
      }
    },
    /**
     * 监听播放事件
     */
    onPlay() {
      this.$emit('on-play')
    },
    /* ============== 以下是父级组件调用API ============== */
    /**
     * 继续播放
     */
    async play() {
      await this.flvPlayer.load()
      await this.flvPlayer.play()
    },
    /**
     * 暂停
     */
    pause() {
      this.flvPlayer.unload()
    },
    /**
     * 停止播放
     */
    stop() {
      if (this.flvPlayer) {
        this.flvPlayer.detachMediaElement()
        this.flvPlayer.destroy()
        this.flvPlayer = null
      }
    },
    /**
     * 进入全屏
     * @params type enter 进入, leave 退出
     */
    fullScreen(type) {
      if (type === 'enter') {
        this.player.fullScreen.request('web')
      } else {
        this.player.fullScreen.cancel('web')
      }
    }
  }
}
</script>

<style lang="scss"></style>
