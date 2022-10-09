---
toc: content
---

# Toast 轻提示

对操作结果的轻量级反馈，无需用户操作即可自行消失。

## 何时使用

适用于页面内容的变化不能直接反应操作结果时使用。

## 与`antd-mobile`的差异

由于`Taro`不支持`Portal`,所以相关部分进行重写实现

**注意：**

在小程序中弹窗需要在页面组件卸载的时候手动进行统一清理，尤其是需要手动关闭弹窗的情况下

原因：小程序在退出页面的情况下

```javascript
useEffect(() => {
  return () => {
    Toast.clear();
  };
});
```

另：不支持下列属性

`getContainer`、`stopPropagation`

## 示例

<code src="./demos/demo1.tsx"></code>

## Toast

### 指令式 API

`Toast` 只支持指令式调用。

### Toast.show

`show` 方法支持传入一个 `props` 对象，它包含了以下这些属性：

| 属性          | 说明                                  | 类型                                                  | 默认值     |
| ------------- | ------------------------------------- | ----------------------------------------------------- | ---------- |
| afterClose    | `Toast` 完全关闭后的回调              | `() => void`                                          | -          |
| content       | `Toast` 文本内容                      | `React.ReactNode`                                     | -          |
| duration      | 提示持续时间，若为 `0` 则不会自动关闭 | `number`                                              | `2000`     |
| icon          | `Toast` 图标                          | `'success' \| 'fail' \| 'loading' \| React.ReactNode` | -          |
| maskClassName | `Toast` 遮罩类名                      | `string`                                              | -          |
| maskClickable | 是否允许背景点击                      | `boolean`                                             | `true`     |
| maskStyle     | `Toast` 遮罩样式                      | `React.CSSProperties`                                 | -          |
| position      | 垂直方向显示位置                      | `'top' \| 'bottom' \| 'center'`                       | `'center'` |

> 同一时间只允许弹出一个轻提示，新出现的 `Toast` 会将之前正在显示中的 `Toast` 挤掉。

你也可以直接传入一个字符串，`Toast.show` 会自动把它作为 `content`。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性  | 说明             | 类型         | 默认值 |
| ----- | ---------------- | ------------ | ------ |
| close | 关闭当前 `Toast` | `() => void` | -      |

### Toast.clear

关闭所有显示中的 `Toast`。

### Toast.config

全局配置，支持配置 `duration`、`position` 和 `maskClickable`。配置方法如下：

```ts
Toast.config({ duration: 1000, position: 'top' });
```
