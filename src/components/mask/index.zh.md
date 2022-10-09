---
toc: content
---

# Mask 遮罩层

深色背景层。

## 何时使用

常用于模态窗口的背景层，使视觉焦点突出在模态窗口本身。

## 与`antd-mobile`的差异

暂时精简实现方式，demo 展示是一样的，下列属性暂不支持

`afterClose`,`afterShow`,`destroyOnClose`,`disableBodyScroll`,`forceRender`,`getContainer`,`stopPropagation`

## 示例

<code src="./demos/demo1.tsx"></code>

## Mask

### 属性

| 属性        | 说明             | 类型                                                            | 默认值      |
| ----------- | ---------------- | --------------------------------------------------------------- | ----------- |
| color       | 遮罩层的颜色     | `'black' \| 'white'`                                            | `'black'`   |
| onMaskClick | 点击蒙层自身触发 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -           |
| opacity     | 透明度           | `'default' \| 'thin' \| 'thick' \| number`                      | `'default'` |
| visible     | 是否可见         | `boolean`                                                       | `true`      |

### CSS 变量

| 属性      | 说明             | 默认值 | 全局变量             |
| --------- | ---------------- | ------ | -------------------- |
| --z-index | 元素的 `z-index` | `1000` | `--adm-mask-z-index` |
