# 数据结构之“字典”

## 什么是字典
> 字典是一种以 键-值对 形式存储数据的数据结构,ES6 中有字典，名为 Map


## 字典的创建

具体实现：
```js
  const mm = new Map();
  // 增
  mm.set('a', 'aa')
  mm.set('b', 'bb')
  console.log(mm) // Map(2) {"a" => "aa", "b" => "bb"}
  // 获取某个值
  mm.get('a') // aa
  // 删除
  mm.delete('a')
  console.log(mm) // Map(1) {"b" => "bb"}
  // 改
  mm.set('b', 'cc')
  console.log(mm) // Map(1) {"b" => "cc"}
  // 清空
  mm.clear()
  console.log(mm) // Map(0) {}
```

## 使用例子

> 例如： 求两个数组的交集

<iframe 
  src="https://tool.lu/coderunner/embed/9Uj.html"
  width="650"
  height="550"
  frameborder="0"
  mozallowfullscreen
  webkitallowfullscreen
  allowfullscreen
></iframe>

 
 <comment-comment/> 
 
 