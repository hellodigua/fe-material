const path = require('path')
const fs = require('fs-extra')

const genNav = async (name, dir) => {
  const items = await getFileItem(`../pages/${dir}`)

  return {
    type: 'group',
    name,
    children: items.map((item) => {
      return {
        name: item.name,
        routes: `/${dir}/${item.route}`
      }
    })
  }
}

// 排除检查的文件
const excludes = ['.DS_Store']

const getFileItem = async (rpath) => {
  const pagePath = path.resolve(__dirname, rpath)
  // const fileTypes = /\.vue$/ // 只匹配以vue结尾的文件
  const files = await fs.readdir(pagePath)

  const fileItems = []

  for (const i in files) {
    const file = files[i]
    if (!excludes.includes(file)) {
      const filePath = pagePath + '/' + file
      const fileInfo = fs.statSync(filePath)
      if (fileInfo.isFile() && file.endsWith('.vue')) {
        const fileContentBuffer = await fs.readFileSync(filePath)
        const fileContent = fileContentBuffer.toString()
        const [, pageName = '未定义 pageName'] = fileContent.match(/pageName: '([^']+)'/) || []

        fileItems.push({
          name: pageName,
          route: file.replace('.vue', '')
        })
      }
    }
  }

  return fileItems
}

module.exports = {
  genNav
}
