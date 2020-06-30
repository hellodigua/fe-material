<template>
  <div>
    <section>
      <div id="html">
        <h3>HTML</h3>
        <textarea v-model="htmlContent" name="html"></textarea>
      </div>
      <div id="css">
        <h3>CSS</h3>
        <textarea v-model="cssContent" name="css"></textarea>
      </div>
      <div id="js">
        <h3>JavaScript</h3>
        <textarea v-model="jsContent" name="js"></textarea>
      </div>
    </section>
    <section id="output">
      <iframe></iframe>
    </section>
    <button @click="render()">Run</button>
  </div>
</template>
<script>
/**
 * JS调试器的实现原理基本都是以iframe加载，具体可参考下面的链接
 * https://www.zhihu.com/question/38502052
 */
export default {
  pageName: 'JS 调试器',
  props: {},
  data() {
    return {
      htmlContent: '',
      cssContent: '',
      jsContent: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    render() {
      const baseTpl =
        '<!doctype html>\n' +
        '<html>\n\t' +
        '<head>\n\t\t' +
        '<meta charset="utf-8">\n\t\t' +
        '<title>Test</title>\n\n\t\t\n\t' +
        '</head>\n\t' +
        '<body>\n\t\n\t' +
        '</body>\n' +
        '</html>'

      const sourceCode = () => {
        let src = ''

        src = baseTpl.replace('</body>', this.htmlContent + '</body>')

        const css = '<style>' + this.cssContent + '</style>'
        src = src.replace('</head>', css + '</head>')

        const js = '<script>' + this.jsContent + '<\\/script>'
        src = src.replace('</body>', js + '</body>')

        return src
      }

      const render = () => {
        const source = sourceCode()

        const iframe = document.querySelector('#output iframe')
        const iframeDoc = iframe.contentDocument

        iframeDoc.open()
        iframeDoc.write(source)
        iframeDoc.close()
      }
      render()
    }
  }
}
</script>
<style lang="scss" scoped>
textarea {
  width: 200px;
  height: 100px;
}
</style>
