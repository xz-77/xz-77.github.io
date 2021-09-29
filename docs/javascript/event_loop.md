---
title: 事件循环
order: 3
toc: content
nav:
  title: Javascript
  order: 1
---

## 定时器

- `setTimeout`
- `clearTimeout`
- `setInterval`
- `clearInterval`

### `setTimeout`替换`setInterval`

```javascript
let timeoutId;

const timeout = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    console.log(new Date().getTime());
    timeout();
  }, 1000);
};

timeout();

setTimeout(() => {
  clearTimeout(timeoutId);
}, 10000);
```
