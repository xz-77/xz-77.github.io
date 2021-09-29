---
title: 动态规划
order: 6
toc: content
nav:
  title: leetcode
  order: 3
---

[动态规划](https://zhuanlan.zhihu.com/p/93857890)

## [杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

- 动态规划经典入门题

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let dp = Array(numRows)
    .fill(0)
    .map((v, i) => Array(i + 1).fill(1));
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j <= i - 1; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
```

## [最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)

1. 二维动态规划
2. 同类型题[两个字符串的删除操作](https://leetcode-cn.com/problems/delete-operation-for-two-strings/)

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  const dp = Array(len1 + 1)
    .fill(0)
    .map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i++) {
    const m = text1[i - 1];
    for (let j = 1; j <= len2; j++) {
      const n = text2[j - 1];
      if (m === n) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2];
};
```

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
