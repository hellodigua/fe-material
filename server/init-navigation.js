const fs = require('fs-extra')
const { genNav } = require('./utils')

/**
 * 写入配置文件
 */
function writeNavFile(navConfig) {
  const str = JSON.stringify(navConfig)

  fs.writeFile(`./static/config.json`, str)
}

/**
 * 初始化导航
 */
async function initNav() {
  const routes = await genNav('CSS', 'css')

  const navConfig = []

  console.log(JSON.stringify(routes))

  navConfig.push(routes)

  writeNavFile({
    nav: navConfig
  })

  return navConfig
}

module.exports = initNav
