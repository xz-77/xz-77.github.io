---
toc: content
---

# DotLoading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 与`antd-mobile`的差异

由于小程序不支持`svg`，这里使用`css3`动画实现，且不支持自动适配字号

## DotLoading 点状加载中

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性  | 说明 | 类型                                          | 默认值      |
| ----- | ---- | --------------------------------------------- | ----------- |
| color | 颜色 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |
