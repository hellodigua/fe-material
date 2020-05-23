const { genSidebar } = require('../utils/index')

async function initSidebar() {
  const routes = await genSidebar('CSS', 'css')

  return routes
}

module.exports = initSidebar
