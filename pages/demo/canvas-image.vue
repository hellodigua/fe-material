<template>
  <div id="container" ref="canvasContainer">
    <canvas id="myCanvas"></canvas>
    <input id="file" type="file" />
    <input v-model="text" type="text" @keyup="changeText" />
    <button @click="createImg">保存图片</button>
  </div>
</template>
<script>
export default {
  pageName: '表情包生成器',
  props: {},
  data() {
    return {
      canvas: null,
      cxt: null,
      bounds: null,
      otherCanvas: null,
      otherCxt: null,
      text: '这里是文字'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const file = document.getElementById('file')

    file.addEventListener('change', (e) => {
      const file = e.target.files[0]

      const reader = new FileReader()
      reader.onload = (e) => {
        this.loadCanvas(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  },
  methods: {
    loadCanvas(src) {
      this.canvas = document.getElementById('myCanvas')
      this.cxt = this.canvas.getContext('2d')
      this.otherCanvas = document.createElement('Canvas')
      this.otherCxt = this.otherCanvas.getContext('2d')

      const img = new Image()

      img.onload = () => {
        //  初始化两个canvas
        this.otherCanvas.width = this.canvas.width = img.width
        this.otherCanvas.height = this.canvas.height = img.height
        this.otherCanvas.style.cssText = 'position: absolute; top: 0; left: 0; z-index: 1;'
        this.$refs.canvasContainer.appendChild(this.otherCanvas)

        this.bounds = this.canvas.getBoundingClientRect()

        this.cxt.drawImage(img, 0, 0)
      }
      img.src = src

      this.otherCanvas.addEventListener('click', this.write)
    },
    write(e) {
      const { x, y } = this.getMousePos(e)
      this.addText({ x, y })
    },
    /**
     * 得到鼠标点击位置
     */
    getMousePos(e) {
      const x = e.clientX - this.bounds.left
      const y = e.clientY - this.bounds.top

      return {
        x,
        y
      }
    },
    /**
     * 添加文字
     */
    addText({ x, y }) {
      const { width, height } = this.otherCanvas

      this.otherCxt.clearRect(0, 0, width, height)
      this.otherCxt.font = '30px Georgia'
      this.otherCxt.fillText(this.text, x, y)
    },
    changeText(e) {
      if (this.otherCanvas && this.otherCxt) {
        this.addText(e)
      }
    },
    createImg() {
      this.cxt.drawImage(this.otherCanvas, 0, 0)

      window.open(this.canvas.toDataURL())
    }
  }
}
</script>
<style lang="scss" scoped>
#container {
  position: relative;
}
input,
canvas {
  display: block;
  margin: 10px;
}
</style>
