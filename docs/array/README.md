# 数据结构之“数组”

## 什么是数组
> 一个储存元素的线性集合，元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间储存位置的偏移量。

## 数组的创建及使用

数组的定义
```js
// 无参数构造
var arr = new Array();
// 单参数构造(该参数不能为负数)
var arr = new Array(10);
// 多参数构造
var arr = new Array(1, -1, 8, 10);
// 字面量创建数组
var arr = [];
```

数组的使用
```js
var arr = [1, 1, 3, 4];
// 获取数组长度
console.log(arr.length); // 4
// 设置数组的长度
// * 长度变化会导致数组变化，多出来的长度会用undefined进行填充，而少了的则从数组的尾部开始删除
arr.length = 10;
console.log(arr.length); // 4
// 通过数组的索引获取数组的值(索引从0开始)
console.log(arr[0]); // 1
// 通过数组的索引改变数组的值(索引从0开始)
arr[0] = 100；
console.log(arr); // [100, 1, 3, 4]
```

## 数组的操作方案
> 数组的操作方法比较多，大致可以分为以下几类：
### * 基本方法：
* push(): 添加一个值到数组的最后一位
* pop(): 删除数组中的最后一位值，同时返回被删除的元素
* shift(): 删除数组中的第一位值，并返回这个值
* unshift(): 添加一个值到数组的第一位，然后返回添加后的数组长度
* splice(): 它可以接受两个、三个或多个参数，它的第一个参数代表需要操作的值的索引，第二个参数是需要删除的值的个数，第三个参数可以是多个参数，代表需要添加进去的值

```js
var arr = [1, 1, 3, 4];
arr.splice(1,2)
console.log(arr); // [1, 4]
```
### * 数组的组合和分割:
* concat(): 用于将两个数组结合成一个数组，参数为需要结合的数组，该方法不会对原数组产生影响，返回的是一个新的数组，生成的新数组一般通过赋值进行使用
```js
var arr1 = [11, 55];
var arr2 = [22, 66];
var arr = arr1.concat(arr2);
console.log(arr); // [11, 55, 22, 66]
```

* slice(): 用于分割数组，它接受两个参数，第一个是分割的起始索引（包括该值），第二个是结束索引（分割不包括该值），参数允许负数，该方法不会影响原数组，而是返回一个新的数组
```js
var arr = [11, 55, 22, 66];
var arr2 = arr.slice(0, 2); // [11, 55]
```

### * 数组的排序：
* reverse(): 可以将数组反转，逆向排序，这个方法会对原数组产生影响

```js
var arr = [1, 2, 3, 4];
arr.reverse()
console.log(arr); // [4，3，2，1]
```
* sort(): 它可以按照我们想要的方式对数组进行排序，无参数时按照ASCII码的大小进行排序，此外它可以接收一个回调函数作为参数，然后按照该函数返回的值对数组进行排序，这个方法也会对原数组产生影响：

```js
// 无参数时
var arr = [11, 56, 128, 488];
arr.sort()
console.log(arr); // [11, 128, 488, 56]
// 传入回调函数，该函数返回的是正数的话，则按照从小到大的顺序排序：返回的如果是负数，则按照从大到小的顺序排序：
var arr = [11, 56, 128, 488];
arr.sort(function(a,b){return a - b})
console.log(arr); // [11, 56, 128, 488]
```

### * 数组和字符串的转化：
* join(): 数组可以通过join()方法将数组转化为字符串，该方法可以传入一个参数，用作分隔转化后的字符串的参照物，该参数可以是空字符串，没有参数则默认使用逗号进行分隔，这个方法不会对原数组产生影响
```js
// 无参转化
var arr = [1, 5, 6, 8];
arr.join() // "1,5,6,8"
// 有参数转化
var arr = [1, 5, 6, 8];
arr.join('') // "1568"
```
* string.split(separator,limit): 用于把一个字符串分割成字符串数组
</br> 提示： 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割
</br> split() 方法不改变原始字符串

```js
var str="How are you doing today?";
str.split(" "); // ["How", "are", "you", "doing", "today?"]
```

### * 数组扩展的新方法：
* Array.isArray(): 用于判断一个数据是否是数组，参数为需要判断的数据，返回一个布尔值
```js
var arr = [1, 5, 6, 8];
Array.isArray(arr) // true
```
* indexOf(): 正向查找元素, 接收一个被查找的元素作为参数，返回该元素第一次出现的索引, 没有找到则返回-1
```js
var arr = [1, 5, 6, 5, 8];
arr.indexOf(5) // 1
arr.indexOf(2) // -1
```
* lastIndexOf(): 反向查找元素, 接收一个被查找的元素作为参数，返回该元素最后一次出现的索引，没有找到则返回-1
```js
var arr = [1, 5, 6, 5, 8];
arr.lastIndexOf(5) // 3
arr.lastIndexOf(2) // -1
```
* every(): 可以判断数组内的元素是否符合要求，返回的都是布尔值, 所有元素都符合规则才返回true
```js
var arr = [1, 5, 6, 5, 8];
var has = arr.every(function(item, index, arry) {
  console.log(item, index, arry)
  return item > 5
})
// 1 0 [1, 5, 6, 5, 8]
console.log(has)
// false

```
* some(): 可以判断数组内的元素是否符合要求，返回的都是布尔值, 只要有一个元素符合规则就返回true
```js
var arr = [1, 5, 6, 5, 8];
var has = arr.some(function(item, index, arry) {
  console.log(item, index, arry)
  return item > 5
})
// 1 0 [1, 5, 6, 5, 8]
// 5 1 [1, 5, 6, 5, 8]
// 6 2 [1, 5, 6, 5, 8]
console.log(has)
// true
```

* forEach: 可以用来遍历数组，并且对数组的每个元素做出一些操作，它接收一个回调函数做参数，该回调函数接收三个参数，第一个代表属组内的元素，第二个代表索引，第三个是数组，这个方法不会对原数组产生影响
```js
var arr = [1, 5, 6, 8];
arr.forEach(function(item, index, arry) {
  console.log(item, index, arry)
})
// 1 0 [1, 5, 6, 8]
// 5 1 [1, 5, 6, 8]
// 6 2 [1, 5, 6, 8]
// 8 3 [1, 5, 6, 8]
```
* map: 与forEach()方法类似，也是传入回调函数作为参数，该回调函数接收三个参数，不同的是forEach()只为每个数组中的元素执行一次回调函数，而map()在执行完回调函数后会返回一个新的数组
```js
var arr = [1, 5, 6, 8];
var arr_new = arr.map(function(item, index, arry) {
  console.log(item, index, arry)
  return item * item
})
// 1 0 [1, 5, 6, 8]
// 5 1 [1, 5, 6, 8]
// 6 2 [1, 5, 6, 8]
// 8 3 [1, 5, 6, 8]
console.log(arr)
// [1, 5, 6, 8]
console.log(arr_new)
// [1, 25, 36, 64]
```
* filter: 用来过滤一个数组，将符合要求的元素组成一个新的数组，原数组不变，接收一个回调函数作为参数
```js
var arr = [1, 5, 6, 8];
var arr_new = arr.filter(function(item, index, arry) {
  console.log(item, index, arry)
  return item > 5
})
// 1 0 [1, 5, 6, 8]
// 5 1 [1, 5, 6, 8]
// 6 2 [1, 5, 6, 8]
// 8 3 [1, 5, 6, 8]
console.log(arr)
// [1, 5, 6, 8]
console.log(arr_new)
// [6, 8]
```
 
 <comment-comment/> 
 