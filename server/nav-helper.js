const fs = require('fs-extra')
const { genNav, writeNavFile } = require('./utils')

/**
 * 初始化导航
 */
async function initNav() {
  const routes = await genNav('CSS', 'css')

  const navConfig = []

  navConfig.push(routes)

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
