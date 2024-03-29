---
toc: content
---

# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。

## 与`antd-mobile`的差异

[由于 Taro 获取 node 高度的机制问题](https://github.com/NervJS/taro/issues/7491#issuecomment-684795515)

使用`Taro.nextTick`无法满足动态内容的节点高度的获取

这里的解决办法是使用`Taro.nextTick`、`setTimeout`和`transition`的方式，来替代`@react-spring`实现动画的过度

由于节点`id`的获取是根据小程序编译后自动生成的`id`（小程序节点会有一个`sid`属性）来进行高度获取，所以`h5`端是不兼容的，目前在`h5`端没有动画过度，可以[扫描二维码](http://localhost:8000/components#%E7%BB%84%E4%BB%B6%E5%B1%95%E7%A4%BA%E5%B0%8F%E7%A8%8B%E5%BA%8F)在小程序上进行查看

其他方面目前应该没什么区别

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Collapse

### 属性

| 属性             | 说明                                                                      | 类型                                                                                                   | 默认值  |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| accordion        | 是否开启手风琴模式                                                        | `boolean`                                                                                              | `false` |
| activeKey        | 当前展开面板的 `key`                                                      | 手风琴模式：`string \| null` <br/>非手风琴模式：`string[]`                                             | -       |
| arrow            | 自定义箭头，如果是 ReactNode，那么 antd-mobile 会自动为你增加旋转动画效果 | `ReactNode \| ((active: boolean) => React.ReactNode)`                                                  | -       |
| defaultActiveKey | 默认展开面板的 `key`                                                      | 手风琴模式：`string \| null` <br/>非手风琴模式：`string[]`                                             | -       |
| onChange         | 切换面板时触发                                                            | 手风琴模式：`(activeKey: string \| null) => void` <br /> 非手风琴模式：`(activeKey: string[]) => void` | -       |

## Collapse.Panel

### 属性

| 属性           | 说明                        | 类型                                                     | 默认值  |
| -------------- | --------------------------- | -------------------------------------------------------- | ------- |
| arrow          | 自定义箭头                  | `ReactNode \| ((active: boolean) => React.ReactNode)`    | -       |
| destroyOnClose | 不可见时卸载内容            | `boolean`                                                | `false` |
| disabled       | 是否为禁用状态              | `boolean`                                                | `false` |
| forceRender    | 被隐藏时是否渲染 `DOM` 结构 | `boolean`                                                | `false` |
| key            | 唯一标识符                  | `string`                                                 | -       |
| onClick        | 标题栏的点击事件            | `(event: React.MouseEvent<Element, MouseEvent>) => void` | -       |
| title          | 标题栏左侧内容              | `ReactNode`                                              | -       |
