# 数据结构之“列表”

## 什么是列表
> 列表它是一组有序的数据，每个列表中的数据项称为元素，在javascript中，列表中的元素可以是任意数据类型。列表中可以保存多少元素并没有限定。

## 列表的创建

首先创建一个类用来表示列表，接着声明一个数组用来保存列表里的元素：
```js
class List {
  constructor () {
    this.listSize = 0;  //初始化元素个数为0
    this.pos = 0; // 列表当前位置
    this.dataStore = [] // 初始化的列表
  }
  // 方法申明
} 
```

创建好列表之后，需要为列表声明一些方法，列表一般会包含以下几个方法：

* length(): 返回列表中总的元素个数
* toString(): 显示列表的元素
* append(): 向列表中添加一个元素
* find(): 查找列表中的某一个元素
* remove(): 删除列表中的某一元素
* insert(): 向列表某个位置添加一个元素
* clear(): 清空列表
* front(): 将列表的位置移到第一个位置上
* end(): 将列表的位置移到最后一个位置上
* prev(): 将当前位置前移一位
* next(): 将当前位置后移一位
* moveTo(): 将当前位置移动到指定位置
* currPos(): 返回列表的当前位置
* getElement(): 返回当前位置的元素
* contains(): 判断给定值是否在列表中

具体实现：
```js
class List {
  constructor() {
    this.listSize = 0;  //初始化元素个数为0
    this.pos = 0; // 列表当前位置
    this.dataStore = [] // 初始化的列表
  }
  // 返回列表中总的元素个数
  length() {
    return this.listSize;
  }
  // 显示列表的元素
  toString() {
    return this.dataStore;
  }
  // 向列表中添加一个元素
  append(element) {
    this.dataStore[this.listSize++] = element;
  }
  // 查找列表中的某一个元素
  find(element) {
    return this.dataStore.findIndex(item => item === element)
  }
  // 删除列表中的某一元素
  remove(element) {
    var foundAt = this.find(element);
    if( foundAt > -1 ){
      this.dataStore.splice( foundAt , 1 );
      --this.listSize;
      return true;
    }
    return false;
  }
  // 向列表某个位置添加一个元素
  insert(element, after) {
    var insertPos = this.find( after );
    if( insertPos > -1 ){
      this.dataStore.splice( insertPos + 1 , 0 , element );
      this.listSize++;
      return true;
    }
    return false;
  }
  // 清空列表
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
  }
  // 将列表的位置移到第一个位置上
  front() {
    this.pos = 0;
  }
  // 将列表的位置移到最后一个位置上
  end() {
    this.pos = this.listSize - 1;
  }
  // 将当前位置前移一位
  prev() {
    if( this.pos > 0 ){
      this.pos--;
    }else{
      console.log('您当前已在首位');
    }
  }
  // 将当前位置后移一位
  next() {
    if( this.pos < this.listSize - 1 ){
      ++this.pos;
    }else{
      console.log('您当前已在末尾');
    }
  }
  // 将当前位置移动到指定位置
  moveTo(position) {
    if( position < 0 || position > (this.listSize - 1) ){
      console.log('请输入正确的位置');
    }else{
      this.pos = position;
    }
  }
  // 返回列表的当前位置
  currPos() {
    return this.pos;
  }
  // 返回当前位置的元素
  getElement() {
    return this.dataStore[this.pos];
  }
  // 判断给定值是否在列表中
  contains() {
    return this.dataStore.includes( element );
  }
}  
```

## 列表的使用
```js
var fruits = new List();
//添加三个元素
fruits.append('Apple');
fruits.append('Grape');
fruits.append('Banana');
 
//打印列表
console.log( fruits.toString() )   // ["Apple", "Grape", "Banana"]
//查看列表长度
console.log( fruits.length() )    // 3
//查找 Banana 的位置
console.log( fruits.find('Banana') ) // 2
//删除 Grape
fruits.remove('Grape');
console.log( fruits.toString() )   // ["Apple", "Banana"]
fruits.insert( 'Grape' , 'Apple' );
console.log( fruits.toString() )    // ["Apple", "Grape", "Banana"]
```

 <comment-comment/> 
 
 