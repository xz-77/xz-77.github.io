---
title: 前缀和
order: 4
toc: content
nav:
  title: leetcode
  order: 3
---

[前缀和](https://zhuanlan.zhihu.com/p/107778275)

## [航班预订统计](https://leetcode-cn.com/problems/corporate-flight-bookings/)

### 解题思路

1. 前缀和的逆向思维

### 代码

```javascript
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const nums = Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const [f, l, s] = bookings[i];
    nums[f - 1] += s;
    if (l < n) {
      nums[l] -= s;
    }
  }
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
```
