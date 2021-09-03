---
title: 动态规划
order: 6
toc: content
nav:
  title: leetcode
  order: 3
---

[动态规划](https://zhuanlan.zhihu.com/p/93857890)

## [环形子数组的最大和](https://leetcode-cn.com/problems/maximum-sum-circular-subarray/)

1. 求无环最大值
2. 求有环最小值，和减最小值为最大值
3. 若有环最大值等于原数组之和，返回无环最大值
4. 否则返回有环和无环的最大值

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const arr = nums.map((v) => v * -1);
  const count = nums.reduce((a, b) => a + b, 0);

  const m = getMax(arr);
  const n = getMax(nums);

  const c = count - m * -1;
  if (c !== 0) return Math.max(n, c);
  return n;
};

const getMax = (arr) => {
  let max = arr[0];
  let pre = 0;
  for (let i = 0; i < arr.length; i++) {
    pre = Math.max(pre + arr[i], arr[i]);
    max = Math.max(pre, max);
  }
  return max;
};
```
