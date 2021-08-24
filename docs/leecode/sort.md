---
title: 排序算法
order: 2
toc: content
nav:
  title: leetcode
  order: 3
---

[十大排序算法](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)

## 快速排序

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
