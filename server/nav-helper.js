const fs = require('fs-extra')
const { genNav, writeNavFile } = require('./utils')

const configRoute = [
  {
    name: 'CSS',
    path: 'css'
  },
  {
    name: 'HTML',
    path: 'html'
  },
  {
    name: '组件',
    path: 'components'
  },
  {
    name: 'Demo',
    path: 'demo'
  },
  {
    name: 'Function',
    path: 'function'
  }
]

/**
 * 初始化导航
 */
function initNav() {
  Promise.all(configRoute.map((item) => genNav(item.name, item.path))).then((nav) => {
    writeNavFile({
      nav
    })
  })
}

/**
 * 监听文件变化
 */
function watchFiles() {
  const fsWatcher = fs.watch('./pages/', { encoding: 'utf8', recursive: true })

  fsWatcher.on('change', (eventType, filename) => {
    // TODO 只有监听的目录下的文件发生变换时，才进行生成
    initNav()
  })
}

module.exports = {
  initNav,
  watchFiles
}
