<template>
  <div>
    <div class="bg color1"></div>
    <div class="bg color2"></div>
  </div>
</template>
<script>
export default {
  pageName: '渐变配色',
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
.bg {
  width: 800px;
  height: 300px;
}
.color1 {
  background: linear-gradient(120deg, #155799, #159957);
}
.color2 {
  background-image: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
</style>
