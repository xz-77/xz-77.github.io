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

## 插入排序

1. 将第一待排序序列第一个元素看作一个有序序列，把第二个元素到最后一个元素当成是未排序序列
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。(如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面)

```javascript
const sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let l = i - 1;
    let cur = arr[i];
    let currIndex = l;
    while (currIndex >= 0 && arr[currIndex] > cur) {
      // 轮番插入排序
      arr[currIndex + 1] = arr[currIndex];
      currIndex--;
    }

    arr[currIndex + 1] = cur;
    console.log(currIndex, arr);
  }
  return arr;
};

console.log([1, 2, 5, 3, 4, 2]);
```
