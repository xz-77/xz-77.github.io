---
title: 题目
order: 2
toc: content
nav:
  title: leetcode
  order: 3
---

## 重复数字

输入一个数组，假设数组长度为 N，数组中的每个值的范围是 1~N-1，其中有且只有一个数是重复的，重复次数可能不止一次，找出这个数字
要求：
1：不能改变原数组
2：只能使用 O(1)的空间
3：不能使用 N^2 暴力算法

```javascript
// 时间复杂度：O(nlogn)
// 空间复杂度: O(1)
const getNum = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (num === arr[i]) {
      return num;
    } else {
      num = arr[i];
    }
  }
};
console.log(getNum([1, 2, 2, 2, 3]));
```

```javascript
// 时间复杂度：O(n);
// 空间复杂度: O(n)
const getNum = (arr) => {
  const set = new Set();
  for (let i = 1; i < arr.length; i++) {
    const size = set.size;
    set.add(arr[i]);
    const s = set.size;
    if (size === s) return arr[i];
  }
};
console.log(getNum([1, 2, 2, 2, 3]));
```

```javascript
// 时间复杂度：O(nlogn);
// 空间复杂度: O(1)
// 对长度为n的数组进行二分，如果不出现重复，小于mid的数量<=mid
const getNum = (arr) => {
  const len = arr.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= mid) {
        sum++;
      }
    }
    if (sum > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
console.log(getNum([4, 1, 2, 3, 4, 4, 4, 4]));
```
