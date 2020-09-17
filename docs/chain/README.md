# 数据结构之“链表”

## 什么是链表
> 链表用来存储有序的元素集合，与数组不同，链表中的元素并非保存在连续的存储空间内，每个元素由一个存储元素本身的节点和一个指向下一个元素的指针构成。当要移动或删除元素时，只需要修改相应元素上的指针就可以了。对链表元素的操作要比对数组元素的操作效率更高。下面是链表数据结构的示意图：

<div align="center">
  <img src="/img/chain.png"/>
</div>

要实现链表数据结构，关键在于保存head元素（即链表的头元素）以及每一个元素的next指针，有这两部分我们就可以很方便地遍历链表从而操作所有的元素。可以把链表想象成一条锁链，锁链中的每一个节点都是相互连接的，我们只要找到锁链的头，整条锁链就都可以找到了。让我们来看一下具体的实现方式。

## 链表的创建

首先我们需要一个辅助类，用来描述链表中的节点。这个类很简单，只需要两个属性，一个用来保存节点的值，一个用来保存指向下一个节点的指针。
```js
let Node = function (element) {
  this.element = element;
  this.next = null;
}; 
```

下面是我们链表的实现：
```js
class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  // 查找给定的节点
  find (item) {
    var currNode = this.head;
    while(currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 查找给定的节点前面的节点
  findPrevious (item) {
    var currNode = this.head;
    while(!(currNode.next == null) && (currNode.next.element !== item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 在链表的指定节点插入节点
  insert (newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item)
    newNode.next = current.next;
    current.next = newNode;
  }

  // 删除链表中的指定节点
  remove (item) {
    var prevNode = this.findPrevious(item);
    if(!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  // 显示链表中的元素
  display () {
    var currNode = this.head;
    while(!(currNode.next == null)) {
      console.log(currNode.next.element)
      currNode = currNode.next;
    }
  }
}
```
## 链表的使用
```js
var cities = new LinkedList();
cities.insert('A', 'head');
cities.insert('B', 'A');
cities.insert('C', 'B');
cities.display();
// A
// B
// C
cities.remove('C');
cities.display();
// A
// B
```

## 双向链表
> 双向链表中的每一个元素拥有两个指针，一个用来指向下一个节点，一个用来指向上一个节点。在双向链表中，除了可以像单向链表一样从头部开始遍历之外，还可以从尾部进行遍历。下面是双向链表的数据结构示意图：

<div align="center">
  <img src="/img/chain_two.png"/>
</div>

双向链表要为 Node 类增加一个 previous 属性：
```js
let Node = function (element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};
``` 

下面是双向链表的实现：
```js
class DoubleLinkedList {
  constructor() {
    this.head = new Node("head");
  }
  // 查找给定的节点
  find (item) {
    var currNode = this.head;
    while(currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }


  // 在链表的指定节点插入节点
  insert (newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item)
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  // 删除链表中的指定节点
  remove (item) {
    var currNode = this.find(item);
    if(!(currNode.next == null)) {
      currNode.previous.next = currNode.next;
      prevNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }

  // 查找链表中最后一个节点
  findLast () {
    var currNode = this.head;
    while(!(currNode.next == null)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 显示链表中的元素
  display () {
    var currNode = this.head;
    while(!(currNode.next == null)) {
      console.log(currNode.next.element)
      currNode = currNode.next;
    }
  }

  // 反序显示链表中的元素
  dispReverse () {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous == null)) {
      console.log(currNode.element)
      currNode = currNode.previous;
    }
  }
}
```

## 循环链表
> 循环链表的尾部指向它自己的头部。循环链表可以有单向循环链表，也可以有双向循环链表。下面是单向循环链表和双向循环链表的数据结构示意图：

<div align="center">
  <img src="/img/chain_three.png"/>
</div>

创建循环列表，只需要修改该类
```js
class LoopLinkedList {
  constructor() {
    this.head = new Node("head");
    this.head.next = this.head;
  }
  
  // 其他照样修改
  ....

  // 修改显示方法
  display () {
    var currNode = this.head;
    while(!(currNode.next == null) && !(currNode.next.element == "head")) {
      console.log(currNode.next.element)
      currNode = currNode.next;
    }
  }
}
``` 
 
 
 <comment-comment/> 
 