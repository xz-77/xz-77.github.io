---
toc: content
---

# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## DotLoading 点状加载中

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性  | 说明 | 类型                                          | 默认值      |
| ----- | ---- | --------------------------------------------- | ----------- |
| color | 颜色 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

`DotLoading` 的大小会自动根据当前的文字大小进行调整。
