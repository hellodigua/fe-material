const fs = require('fs-extra')
const { genNav, writeNavFile } = require('./utils')

/**
 * 初始化导航
 */
async function initNav() {
  const routes = await genNav('CSS', 'css')
  const routes1 = await genNav('HTML', 'html')
  const routes2 = await genNav('组件', 'components')
  const routes3 = await genNav('Demo', 'demo')
  const routes4 = await genNav('Function', 'function')

  const navConfig = []

  navConfig.push(routes)
  navConfig.push(routes1)
  navConfig.push(routes2)
  navConfig.push(routes3)
  navConfig.push(routes4)

  writeNavFile({
    nav: navConfig
  })

  return navConfig
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
