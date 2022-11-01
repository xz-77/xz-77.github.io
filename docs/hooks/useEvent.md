# useEvent

## 概括

用于定义具有始终稳定的函数标识的事件处理程序的 Hook。

## 基本示例

```javascript
function Chat() {
  const [text, setText] = useState('');

  const onClick = useEvent(() => {
    sendMessage(text);
  });

  return <SendButton onClick={onClick} />;
}
```

里面的代码 useEvent“看到”调用时的 props/state 值。即使它引用的道具/状态发生变化，返回的函数也具有稳定的标识。没有依赖数组。
