
const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'
 
findMarkdown(rootDir, writeComponents)
 
function writeComponents(dir) {
  // docs 根目录下的 页面不加gittalk
  console.log(dir, 'dir dir')
  if(dir == './docs/README.md') {return;}
  fs.appendFile(dir, `\n \n <comment-comment/> \n `, (err) => {
    if (err) throw err
    console.log(`add components to ${dir}`)
  })
}