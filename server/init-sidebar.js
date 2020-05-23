const { genSidebar, filehelper } = require('../utils/index')

// const rootpath = ''

function initSidebar() {
  const a = genSidebar('首页', filehelper.getFileName('/pages/'), true)

  // eslint-disable-next-line no-console
  console.log(a)
}

module.exports = initSidebar
