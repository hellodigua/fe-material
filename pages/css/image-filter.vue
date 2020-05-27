<template>
  <div class="page-container">
    <div class="images">
      <div class="block">
        <span class="demonstration">效果图</span>
        <el-image class="img" :style="imgStyle" :src="imgUrl" />
      </div>
      <div class="block">
        <span class="demonstration">原图</span>
        <el-image class="img" :src="imgUrl" />
      </div>
    </div>
    <div class="filter">
      <el-form label-position="left" label-width="160px">
        <el-form-item label="老照片 sepia">
          <el-slider v-model="form.sepia" class="form-item" label="%" :min="0" :max="100" />
          <span>{{ form.sepia }}%</span>
        </el-form-item>
        <el-form-item label="模糊 blur">
          <el-slider v-model="form.blur" class="form-item" :min="0" :max="100" />
          <span>{{ form.blur }}px</span>
        </el-form-item>
        <el-form-item label="透明 opacity">
          <el-slider v-model="form.opacity" class="form-item" :min="0" :max="100" />
          <span>{{ form.opacity }}%</span>
        </el-form-item>
        <el-form-item label="色相 hue-rotate">
          <el-slider v-model="form.hueRotate" class="form-item" :min="0" :max="360" />
          <span>{{ form.hueRotate }}deg</span>
        </el-form-item>
        <el-form-item label="反相 invert">
          <el-slider v-model="form.invert" class="form-item" :min="0" :max="100" />
          <span>{{ form.invert }}%</span>
        </el-form-item>
        <el-form-item label="饱和度 saturate">
          <el-slider v-model="form.saturate" class="form-item" :min="0" :max="200" />
          <span>{{ form.saturate }}%</span>
        </el-form-item>
        <el-form-item label="亮度 brightness">
          <el-slider v-model="form.brightness" class="form-item" :min="0" :max="200" />
          <span>{{ form.brightness }}%</span>
        </el-form-item>
        <el-form-item label="对比度 contrast">
          <el-slider v-model="form.contrast" class="form-item" :min="0" :max="200" />
          <span>{{ form.contrast }}%</span>
        </el-form-item>
        <el-form-item label="灰度 grayscale">
          <el-slider v-model="form.grayscale" class="form-item" :min="0" :max="100" />
          <span>{{ form.grayscale }}%</span>
        </el-form-item>
      </el-form>
      <el-button @click="handleClickReset">重置</el-button>
    </div>
    <p>
      还有更好玩的效果mix-blend-mode，可以参考这篇文章的后半部分
      <a href="https://zhuanlan.zhihu.com/p/28422426" target="_blank">如何用CSS修好看的照片</a>
    </p>
  </div>
</template>
<script>
const defaultForm = {
  sepia: 0,
  blur: 0,
  opacity: 100,
  hueRotate: 0,
  invert: 0,
  saturate: 100,
  brightness: 100,
  contrast: 100,
  grayscale: 0
}

export default {
  pageName: '图片滤镜',
  props: {},
  data() {
    return {
      imgUrl: 'http://static.digua.pro/202005272252490.jpg',
      form: { ...defaultForm }
    }
  },
  computed: {
    imgStyle() {
      const { form } = this

      return `filter: sepia(${form.sepia}%) blur(${form.blur}px) opacity(${form.opacity}%) hue-rotate(${form.hueRotate}deg) invert(${form.invert}%) saturate(${form.saturate}%) brightness(${form.brightness}%) contrast(${form.contrast}%) grayscale(${form.grayscale}%)`
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClickReset() {
      this.form = {
        ...defaultForm
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  width: 980px;
  margin: 0 auto;
}

.images {
  display: flex;
  .img {
    width: 500px;
    margin: 10px;
  }
}

.filter {
  width: 500px;
  .form-item {
    width: 250px;
    float: left;
    margin-right: 20px;
  }
}
</style>
