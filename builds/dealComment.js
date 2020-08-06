const fs = require('fs')
const rootDir = './docs'

function findMarkdown(dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err
    files.forEach((fileName) => {
      let innerDir = `${dir}/${fileName}`
      if (fileName.indexOf('.') !== 0) {
        fs.stat(innerDir, function (err, stat) {
          if (stat.isDirectory()) {
            findMarkdown(innerDir, callback)
          } else {
            callback(innerDir)
          }
        })
      }
 
    })
  })
}

function writeComponents(dir) {
  // docs 根目录下的 页面不加gittalk
  console.log(dir, 'dir dir')
  if(dir == './docs/README.md') {return;}
  fs.appendFile(dir, `\n \n <comment-comment/> \n `, (err) => {
    if (err) throw err
    console.log(`add components to ${dir}`)
  })
}

function delComponents(dir) {
	fs.readFile(dir, 'utf-8', (err, content) => {
		if (err) throw err
		// 判断该组件是否已经存在
		// fs.writeFile(dir, content.replace(/\n \n <comment-comment\/> \n /g, ''), (err) => {
		// 	if (err) throw err
		// 	console.log(`del components from ${dir}`)
		// })
		if(content.indexOf('<comment-comment/>') < 0) {
      writeComponents(dir)
		}
	})
}

findMarkdown(rootDir, delComponents)
