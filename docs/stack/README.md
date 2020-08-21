# 数据结构之“栈”

## 什么是栈
> 栈是一种遵循后进先出原则的有序集合，新添加的或者待删除的元素都保存在栈的同一端，称为栈顶，另一端称为栈底，在栈里，新元素靠近栈顶，旧元素靠近栈底，用个图来看大概这样式的：

<div align="center">
  <img src="/img/stack_1.jpeg"/>
</div>

## 栈的创建

首先创建一个类用来表示栈，接着声明一个数组用来保存栈里的元素：
```js
class Stack {
  constructor () {
    this.items = []
  }
  // 方法申明
} 
```

创建好栈之后，需要为栈声明一些方法，栈一般会包含以下几个方法：

* push(): 添加新元素到栈顶
* pop(): 移除栈顶的元素，同时返回被移除的元素
* peek(): 返回栈顶的元素，不对栈做任何修改
* isEmpty(): 如果栈里没有任何元素就返回true，否则返回false
* clear(): 移除栈里的所有元素
* size(): 返回栈里的元素个数

具体实现：
```js
class Stack {
  constructor () {
    this.items = []
  }
  // 添加元素到栈顶，也就是栈的末尾
  push (element) {
    this.items.push(element)
  }
  // 栈的后进先出原则，从栈顶出栈
  pop () {
    return this.items.pop()
  }
  // 查看栈顶的元素，访问数组最后一个元素
  peek () {
    return this.items[items.length - 1]
  }
  // 检查栈是否为空
  isEmpty () {
    return this.items.length == 0
  }
  // 返回栈的长度，栈的长度就是数组的长度
  size () {
    return this.items.length
  }
  // 清空栈 
  clear () {
    this.items = []
  }
  // 打印栈元素
  print () {
    console.log(this.items.toString())
  }
}  
```

## 栈的使用
```js
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek()) // 3
console.log(stack.isEmpty()) // false
console.log(stack.size()) // 3  
```

## 使用场景
* 需要后进先出的场景
* 比如：十进制转二进制、判断字符串的括号是否有效、函数调用堆栈...

### 十进制转化为二进制
> 例如： 将十进制35转化为二进制
<div align="center">
  <img src="/img/shijinzhi.png"/>
</div>
<iframe
  src="https://tool.lu/coderunner/embed/9ze.html"
  width="650"
  height="550"
  frameborder="0"
  mozallowfullscreen
  webkitallowfullscreen
  allowfullscreen></iframe>

 
 <comment-comment/> 
 