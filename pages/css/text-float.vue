<template>
  <div class="text-float">
    <button v-if="!isStart" @click="clickBegin">开始</button>
    <div class="slogan"></div>
    <audio ref="audio">
      <source src="https://static.digua.pro/15920630541027.mp3" />
    </audio>
  </div>
</template>
<script>
export default {
  pageName: '歌词动效',
  props: {},
  data() {
    return {
      sloganWords: [
        {
          text: '此时已莺飞草长 爱的人正在路上',
          times: 4000
        },
        {
          text: '我知他风雨兼程 途经日暮不赏',
          times: 3700
        },
        {
          text: '穿越人海 只为与你相拥',
          times: 6500
        },
        {
          text: '此刻已皓月当空 爱的人手捧星光',
          times: 4000
        },
        {
          text: '我知他乘风破浪 去了黑暗一趟',
          times: 3500
        },
        {
          text: '感同身受 给你救赎热望',
          times: 5500
        }
      ],
      currentSlogan: [],
      sloganIndex: 0,
      isStart: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    clickBegin() {
      this.isStart = true
      this.$refs.audio.play()
      setTimeout(() => {
        this.requestSlogan()
      }, 900)
    },
    requestSlogan() {
      const sloganContainer = document.querySelector('.slogan')
      const { text: sloganText, times: sloganTimes } = this.sloganWords[this.sloganIndex]
      this.currentSlogan = sloganText.split('')

      const dom = document.createElement('p')
      dom.classList.add('in')
      sloganContainer.appendChild(dom)

      for (let i = 0; i < this.currentSlogan.length; i++) {
        const text = this.currentSlogan[i]
        const el = document.createElement('span')
        el.classList.add(`letter-${i + 1}`)
        el.textContent = text
        dom.appendChild(el)
      }

      setTimeout(() => {
        if (this.sloganIndex === this.sloganWords.length - 1) {
          return
        } else {
          this.sloganIndex++
        }
        dom.classList.remove('in')
        dom.classList.add('out')
        setTimeout(() => {
          sloganContainer.removeChild(dom)
        }, 2000)
        this.requestSlogan()
      }, sloganTimes)
    }
  }
}
</script>
<style lang="scss">
.text-float {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 10px;
    font-size: 30px;
  }
  .slogan {
    position: relative;
    font-size: 30px;
    height: 30px;
    line-height: 30px;
    margin: 60px 0 70px 0;
    p {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      &.in {
        span {
          animation: slogan_in 0.5s ease-out both;
          -webkit-animation: slogan_in 0.5s ease-out both;
        }
      }
      &.out {
        span {
          animation: slogan_out 0.5s ease-out both;
          -webkit-animation: slogan_out 0.5s ease-out both;
        }
      }
      span {
        position: relative;
        top: 0;
        left: 0;
        padding: 4px;
      }
    }
  }
}

@for $i from 1 through 15 {
  .letter-#{$i} {
    animation-delay: $i/16 + s !important;
  }
}

@keyframes slogan_in {
  from {
    opacity: 0;
    top: 20px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}

@keyframes slogan_out {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: -20px;
  }
}
</style>
