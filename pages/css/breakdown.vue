<template>
  <div class="container">
    <p class="text" :data-text="text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  pageName: '故障风格文字效果',
  props: {},
  data() {
    return {
      text: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const list = [
      { title: 'three', time: 0 },
      { title: 'two', time: 1000 },
      { title: 'one', time: 2000 },
      { title: 'tiktok', time: 3000 }
    ]

    this.dynamicText(list)
  },
  methods: {
    dynamicText(list) {
      for (const i in list) {
        const { title, time } = list[i]

        setTimeout(() => {
          this.text = title
        }, time)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: black;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.text {
  color: white;
  font-size: 150px;
  position: relative;
  margin: 0 auto;
  padding: 2px;
  text-transform: uppercase;
}

.text::before {
  content: attr(data-text);
  background: black;
  position: absolute;
  text-shadow: 2px 0 red;
  left: -2px;
  clip-path: inset(0 0 0 0);
  animation: ani2 2s infinite linear alternate-reverse;
}

.text::after {
  content: attr(data-text);
  background: black;
  position: absolute;
  text-shadow: -2px 0 blue;
  left: 2px;
  clip-path: inset(0 0 0 0);
  animation: ani1 2s infinite linear alternate-reverse;
}

@keyframes ani1 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip-path: inset(random(100) + px 0 random(100) + px 0);
    }
  }
}

@keyframes ani2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip-path: inset(random(100) + px 0 random(100) + px 0);
    }
  }
}
</style>
