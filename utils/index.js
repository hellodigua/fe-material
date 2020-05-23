const fs = require('fs-extra')

const genSidebar = (
  title,
  children = [''],
  collapsable = true,
  sidebarDepth = 2
) => {
  const arr = []
  arr.push({
    title,
    children,
    collapsable,
    sidebarDepth
  })
  return arr
}

// 排除检查的文件
const excludes = ['.DS_Store']

const filehelper = {
  async getFileName(rpath) {
    const filenames = []
    // const fileTypes = /\.md$/ // 只匹配以md结尾的文件
    const files = await fs.read(rpath)

    console.log(files)

    // files.forEach((file) => {
    //   if (!excludes.includes(file)) {
    //     const fullpath = rpath + '/' + file
    //     const fileinfo = fs.statSync(fullpath)
    //     if (fileinfo.isFile()) {
    //       if (file.indexOf('.md') > 0) {
    //         // if(fileTypes.test(file) > 0) {
    //         if (file === 'index.md') {
    //           file = ''
    //         } else {
    //           file = file.replace('.md', '')
    //         }
    //         filenames.push(file)
    //       }
    //     }
    //   }
    // })
    // console.log(filenames)
    filenames.sort() // 排序
    return filenames
  }
}

module.exports = {
  filehelper,
  genSidebar
}
