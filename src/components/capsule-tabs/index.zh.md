---
toc: content
---

# CapsuleTabs 胶囊选项卡

内容组之间进行导航切换。

## 何时使用

选项卡的另外一种样式，用在展示型界面的列表或模块中。

## 与`antd-mobile`的差异

交互不变，实现方式重写，暂时没有实现`antd mobile`的**ScrollMask 滚动两侧遮罩效果**，另外动画被替换使用微信小程序的`ScrollView`实现

## 示例

<code src="./demos/demo1.tsx"></code>

## CapsuleTabs

### 属性

| 属性             | 说明                                             | 类型                    | 默认值             |
| ---------------- | ------------------------------------------------ | ----------------------- | ------------------ |
| activeKey        | 当前激活 `tab` 面板的 `key`                      | `string \| null`        | -                  |
| defaultActiveKey | 初始化选中面板的 `key`，如果没有设置 `activeKey` | `string \| null`        | 第一个面板的 `key` |
| onChange         | 切换面板的回调                                   | `(key: string) => void` | -                  |

## CapsuleTabs.Tab

### 属性

| 属性           | 说明                        | 类型        | 默认值  |
| -------------- | --------------------------- | ----------- | ------- |
| destroyOnClose | 不可见时卸载内容            | `boolean`   | `false` |
| disabled       | 是否禁用                    | `boolean`   | `false` |
| forceRender    | 被隐藏时是否渲染 `DOM` 结构 | `boolean`   | `false` |
| key            | 对应 `activeKey`            | `string`    | -       |
| title          | 选项卡头显示文字            | `ReactNode` | -       |

CapsuleTabs 的用法和 Tabs 非常相似，所以关于更多的用法上的指引，请参阅 [Tabs](/zh/components/tabs) 的文档。
