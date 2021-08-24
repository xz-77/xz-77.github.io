---
title: 动态规划
order: 1
toc: content
nav:
  title: leecode
  order: 3
---

## 数据结构

数据结构大致包含以下几种存储结构：
线性表，还可细分为顺序表、链表、栈和队列；
树结构，包括普通树，二叉树，线索二叉树等；
图存储结构；

[动态规划](https://zhuanlan.zhihu.com/p/93857890)

[十大排序算法](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)

### 快速排序

```javascript
function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  //[4,1,5,3,235] 0 3    // 分区操作
  var pivot = left, // 0           // 设定基准值（pivot）
    index = pivot + 1; // 1
  for (var i = index; i <= right; i++) {
    // 1
    if (arr[i] < arr[pivot]) {
      // 1 0
      swap(arr, i, index); // index用来记录第一个大于基准值的位置索引
      index++; // 2
    }
  }
  swap(arr, pivot, index - 1);

  return index - 1;
}
// 1 0  1 < 4 1 1 index = 2
// 2 0 5 > 4
// 3 0 3 < 4 3 2 index = 3

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([4, 1, 5, 3, 235]));
```
