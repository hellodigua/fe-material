const path = require('path')
const fs = require('fs-extra')

const genSidebar = async (title, dir) => {
  const arr = []
  const items = await getFileName(`../pages/${dir}`)

  arr.push({
    title,
    children: items
  })
  return arr
}

// 排除检查的文件
const excludes = ['.DS_Store']

const getFileName = async (rpath) => {
  const fileNames = []
  const pagePath = path.resolve(__dirname, rpath)
  // const fileTypes = /\.vue$/ // 只匹配以vue结尾的文件
  const files = await fs.readdir(pagePath)

  files.forEach((file) => {
    if (!excludes.includes(file)) {
      const filePath = pagePath + '/' + file
      const fileInfo = fs.statSync(filePath)
      if (fileInfo.isFile() && file.endsWith('.vue')) {
        fileNames.push(file.replace('.vue', ''))
      }
    }
  })

  return fileNames
}

module.exports = {
  genSidebar
}
