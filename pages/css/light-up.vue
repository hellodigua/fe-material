<template>
  <div class="container">
    <div ref="image" class="image" :style="clipStyle">
      <div ref="light" class="light"></div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
export default {
  pageName: '用鼠标点亮周围',
  props: {},
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  computed: {
    clipStyle() {
      return `clip-path: circle(20vh at ${this.x}px ${this.y}px); `
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.containerEl = this.$refs.image
    this.lightEl = this.$refs.light
    document.onmousemove = (event) => this.move(event)
  },
  methods: {
    move(event) {
      const lightSize = 10
      const mouseX = event.clientX - this.containerEl.offsetLeft
      const mouseY = event.clientY - this.containerEl.offsetTop

      this.x = mouseX - lightSize
      this.y = mouseY - lightSize

      this.lightEl.style.left = this.x + 'px'
      this.lightEl.style.top = this.y + 'px'
    }
  }
}
</script>
<style lang="scss" scoped>
$shine: #5fb0f7;

.container {
  width: 100%;
  height: 100vh;
  background: #000;
}

.image {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
  z-index: 0;
  overflow: hidden;
  background: url('http://static.digua.pro/202005272252490.jpg');
  clip-path: circle(10vh at 150px 50%);
  // transition: opacity 1.1s ease 167ms, -webkit-clip-path 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  // transition: clip-path 1.1s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.1s ease 167ms;
}

.light {
  position: absolute;
  margin: auto;
  height: 2vh;
  width: 2vh;
  top: 0;
  left: 0;
  border-radius: 2vh;
  background: #fff;
  z-index: 1;
  box-shadow: 0 0 1vh 0.5vh lighten($shine, 20%), 0 0 2vh 1vh lighten($shine, 20%), 0 0 5vh 1vh lighten($shine, 10%),
    0 0 10vh 1vh lighten($shine, 5%), 0 0 15vh 1vh $shine, 0 0 20vh 1vh $shine, 0 0 25vh 1vh $shine, 0 0 50vh 1vh $shine;
  transition: box-shadow 0.5s ease;
}
</style>
