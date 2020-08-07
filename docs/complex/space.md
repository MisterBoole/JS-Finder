## 空间复杂度

### 空间复杂度是什么？

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
 