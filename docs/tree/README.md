# 数据结构之“树”

## 什么是树
> 一种分层数据的抽象模型，前端工作中常见的树包括：DOM, 树, 级联选择, 树形控件....
* JS 中没有树，但可以用Object 和 Array 构建树
* 树的常用操作： 深度/广度优先遍历、先中后序遍历

## 什么是深度优先遍历
> 深度优先遍历：尽可能深的搜索树的分支

<div align="center">
  <img src="/img/shendu.jpg" width="200"/>
</div>

* 访问根节点
* 对跟节点的 children 挨个进行深度优先遍历

<iframe
  src="https://tool.lu/coderunner/embed/9UH.html"
  width="650"
  height="550"
  frameborder="0"
  mozallowfullscreen
  webkitallowfullscreen
  allowfullscreen
></iframe>


## 什么是广度优先遍历
> 广度优先遍历：先访问离根节点最近的节点

<div align="center">
  <img src="/img/guangdu.png" width="200"/>
</div>

* 新建一个队列，把跟节点入队
* 把对头出对并访问
* 把对头的 children 挨个入队
* 重复第二、三步，直到队列为空

<iframe
  src="https://tool.lu/coderunner/embed/9UI.html"
  width="650"
  height="550"
  frameborder="0"
  mozallowfullscreen
  webkitallowfullscreen
  allowfullscreen
></iframe>

## 什么是二叉树
> 二叉树是一种特殊的树，它的子节点个数不超过两个, 在 JS 中通常用 Object 来模拟二叉树
* 二叉树的两个节点分别叫做做节点和右节点
* 二叉搜索树（BST）：二叉树的一种，它只允许在左侧节点存储比父节点小的值，在右侧节点存储比父节点大或相等的值。

<div align="center">
  <img src="/img/tree.webp"/>
</div>

## 二叉树的示例

```js
  const binaryTree = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
```
 
 <comment-comment/> 
 
 