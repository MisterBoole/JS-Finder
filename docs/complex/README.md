# 算法之“复杂度”

> 常见的算法复杂度包括时间复杂度和空间复杂度。

## 时间复杂度是什么？

* 一个函数，用大O表示，如 O(1)、O(n)、O(logN)...
* 定性的描述算法的运行时间，但不是算法真正的执行运算时间
* 两个时间复杂度相加取增长曲线更快的那个 O(1) + O(n) = O(n)

### 常见的复杂度
 
O(1) < O($\log_2 n$) < O($\sqrt n$) < O(n) < O(n$\log_2 n$) < O(n²) < O($2^n$) < O(n!)


```js
 /** O(1) **/
 let i = 0;
 i += 1;
```

```js
 /** O(logN) **/
 let i = 1; 
 while(i < n) {
   console.log(i)
   i *= 2;
 }
```

```js
 /** O(n) **/
 for(let i = 0; i < n; i++) {
   console.log(i)
 }
```

```js
 /** O(n²) **/
 for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    console.log(i,j)
  }
 }
```

## 空间复杂度是什么？

* 一个函数，用大O表示，如 O(1)、O(n)、O(n²)...
* 算法在运行过程中临时占用存储空间大小的度量

### 常见的复杂度例子

```js
 /** O(1) **/
 let i = 0;
 i += 1;
```

```js
 /** O(n) **/
 const arr = [];
 for(let i = 0; i < n; i++) {
   arr.push(i)
 }
```

```js
 /** O(n²) **/
 const matrix = [];
 for(let i = 0; i < n; i++) {
  matrix.push(i)
  for(let j = 0; j < n; j++) {
    matrix[i].push(j)
  }
 }
```
 
 <comment-comment/> 
 