# 数据结构之“队列”

## 什么是队列
> 队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和队列一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头

<div align="center">
  <img src="/img/queue.png"/>
</div>

## 队列的创建

首先创建一个类用来表示队列，接着声明一个数组用来保存队列里的元素：
```js
class Queue {
  constructor () {
    this.dataStore = []
  }
  // 方法申明
} 
```

创建好队列之后，需要为队列声明一些方法，队列一般会包含以下几个方法：

* enqueue(): 向队尾添加一个元素
* dequeue(): 删除队首的元素
* front(): 读取队首元素
* back(): 读取队尾元素
* toString(): 显示队列内所有的元素
* isEmpty(): 判断队列是否为空

具体实现：
```js
class Queue {
  constructor () {
    this.dataStore = []
  }
  // 向队尾添加一个元素
  enqueue (element) {
    this.dataStore.push(element)
  }
  // 删除队首的元素
  dequeue () {
    return this.dataStore.shift()
  }
  // 读取队首元素
  front () {
    return this.dataStore[0]
  }
  // 读取队尾元素
  back () {
    return this.dataStore[this.dataStore.length-1]
  }
  // 显示队列内所有的元素
  toString () {
    var retStr = '';
    for(var i = 0; i < this.dataStore.length; i++) {
      retStr += this.dataStore[i] + '\n';
    }
    return retStr
  }
  // 清空队列 
  isEmpty () {
    if(this.dataStore.length == 0) { return true;}
    return false;
  }
}  
```

## 队列的使用
```js
let Queue = new Queue()
Queue.enqueue('hello')
Queue.enqueue('word')
console.log(Queue.toString()) // hello word
console.log(Queue.isEmpty()) // false  
```
 
 <comment-comment/> 
 
 