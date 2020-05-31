<template>
  <div>
    <p>如果生成文字形式的SVG的话，其实效果是更酷炫的，有需要可以实现一下</p>
    <p>https://github.com/oubenruing/svg-text-animate</p>
    <div class="container">
      <div class="img bg"></div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clipSVG" clipPathUnits="objectBoundingBox">
            <polygon points="0.178,0.297 0.356,0.000 0.000,0.000" />
            <polygon points="0.392,0.000 0.214,0.297 0.570,0.297" />
            <polygon points="0.607,0.297 0.785,0.000 0.429,0.000" />
            <polygon points="0.821,0.010 0.643,0.298 0.999,0.298" />
            <polygon points="0.178,0.326 0.000,0.623 0.357,0.623" />
            <polygon points="0.393,0.623 0.571,0.326 0.215,0.326" />
            <polygon points="0.607,0.326 0.429,0.623 0.785,0.623" />
            <polygon points="0.822,0.623 1.000,0.326 0.644,0.326" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  pageName: 'clip-path',
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
    width: 1000px;
    height: 1000px;
    background: url('https://i.loli.net/2020/05/31/keoxwi3HpWAfXs2.gif') no-repeat center;
    background-size: cover;
    clip-path: url('#clipSVG');
  }
}
</style>
