<template>
  <div>
    <p>
      原理很简单，两个图片绝对定位到同一个位置，上层的图片通过clip-path只显示部分可见区域，并设置模糊效果即可，之后需要可以写个组件
    </p>
    <div class="container">
      <div class="img bg"></div>
      <div class="shadow">
        <div class="img glass"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  pageName: '毛玻璃效果',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 1000px;
  height: 1000px;
  .img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('http://static.digua.pro/202005272252490.jpg') no-repeat center;
  }
  .shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.3));
    .glass {
      filter: blur(10px) drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.3));
      clip-path: inset(300px 200px 420px);
    }
  }
}
</style>
