## 时间复杂度

### 时间复杂度是什么？

* 一个函数，用大O表示，如 O(1)、O(n)、O(logN)...
* 定性的描述算法的运行时间，但不是算法真正的执行运算时间

### 常见的复杂度
 
O(1) < O($\log_2 n$) < O($\sqrt n$) < O(n) < O(n$\log_2 n$) < O(n²) < O($2^n$) < O(n!)


```js
 /** O(1) **/
 let i = 0;
 i + =1;
```
```js
 /** O(n) **/
 for(let i = 0; i < n; i++) {
   console.log(i)
 }
```






 
 
 
 <comment-comment/> 
 