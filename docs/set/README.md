# 数据结构之“集合”
## 什么是集合
> 集合是一组无序且唯一（不能重复）的项组成的。这个数据结构使用了和有限集合相同的数学概念。

* 不包含任何成员的集合称为空集，全集是包含一切可能成员的集合
* 如果两个集合的成员完全相同，则称两个集合相等
* 如果一个集合的所有成员都属于另外一个集合，则前一集合称为后一集合的子集

## 集合的创建

```js
class Set {
  constructor () {
    this.items = []
  }
  // 判断集合中是否存在该元素
  has(element) {
    return this.items.indexOf(element) > -1;
  }
  // 添加元素到集合
  add(element) {
    if(!this.has(element)) {
      this.items.push(element);
      return true;
    }
    return false;
  }
  // 删除集合中指定元素
  remove(element) {
    const pos = this.items.indexOf(element);
    if(pos > -1) {
      this.items.splice(pos, 1);
      return true;
    }
    return false;
  }
  // 集合长度
  size() {
    return this.items.length;
  }
  // 查看集合
  show() {
    return this.items;
  }
  // 集合的并集
  union(set) {
    let tempSep = new Set();
    for(let i=0; i< this.items.length; i++) {
      tempSep.add(this.items[i])
    }
    for(let j=0; j< set.items.length; j++) {
      if(!tempSep.has(set.items[j])) {
        tempSep.add(set.items[j])
      }
    }
    return tempSep;
  }
  // 集合的交集
  intersect(set) {
    let tempSep = new Set();
    for(let i=0; i< this.items.length; i++) {
      if(set.has(this.items[i])) {
        tempSep.add(this.items[i])
      }
    }
    return tempSep;
  }
  // 是否是待比较集合的子集
  subset(set) {
    if(this.size() > set.size()){
      return false;
    }else{
      for(var i=0;i < this.items.length; i++){
        if(!set.has(this.items[i])){
          return false;
        }
      }
      return true;
    }
  }
  // 求集合的补集
  difference() {
    let tempSep = new Set();
    for(let i=0; i< this.items.length; i++) {
      if(!set.has(this.items[i])) {
        tempSep.add(this.items[i])
      }
    }
    return tempSep;
  }

  
}  
```

 
 <comment-comment/> 
 