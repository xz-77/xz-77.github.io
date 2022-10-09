---
toc: content
---

# Avatar 头像

用来代表用户或事物。

## 何时使用

需要更加直观的展现人物或事物特征。

## 与`antd-mobile`的差异

使用的是 `Taro` 的 `Image` 组建,所以不支持`fit`属性，新增 `fallback` 属性，其他的直接调用 `Taro` 的 `Image` 相关属性即可

## 示例

<code src="./demos/demo1.tsx"></code>

## Avatar

### 属性

| 属性     | 说明           | 类型        | 默认值     |
| -------- | -------------- | ----------- | ---------- |
| fallback | 占位图         | `ReactNode` | 默认占位图 |
| src      | 头像的图片地址 | `string`    | -          |

此外，还支持 `Taro`中`Image` 组件的所有属性。

### CSS 变量

| 属性            | 说明             | 默认值 | 全局变量                     |
| --------------- | ---------------- | ------ | ---------------------------- |
| --border-radius | 圆角             | `4px`  | `--adm-avatar-border-radius` |
| --size          | 大小，宽度和高度 | `44px` | `--adm-avatar-size`          |
