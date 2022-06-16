---
title: 贪心算法
order: 5
toc: content
nav:
  title: leetcode
  order: 3
---

## [跳跃游戏](https://leetcode-cn.com/problems/jump-game/)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let nextIndex = 0;
  let curIndex = 0;
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
    }
  }
  return curIndex >= len - 1;
};
```

## [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let nextIndex = 0;
  let curIndex = 0;
  const len = nums.length;
  let step = 0;
  for (let i = 0; i < len - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
      step++;
    }
  }
  return step;
};
```
