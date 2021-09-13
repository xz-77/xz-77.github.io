---
title: react
order: 1
toc: content
nav:
  title: Javascript
  order: 1
---

在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。

React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。

一个组件原则上只能负责一个功能。如果它需要负责更多的功能，这时候就应该考虑将它拆分成更小的组件

## 高级指引

### 无障碍辅助功能

HTML 语义化标签

### 代码分割

- import()动态加载
- React.lazy
- Suspense 组件中渲染 lazy 组件 接受 fallback
- React.lazy 与 React Router 第三方代码库做基于路由的代码分割

### context

Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决方案

有的时候在组件树中很多不同层级的组件需要访问同样的一批数据。Context 能让你将这些数据向组件树下所有的组件进行“广播”，所有的组件都能访问到这些数据，也能访问到后续的数据更新。使用 context 的通用的场景包括管理当前的 locale，theme，或者一些缓存数据，这比替代方案要简单的多

### 错误边界

static getDerivedStateFromError 或 componentDidCatch 这两个声明周期方法中的任意一个(或两个)

当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息

错误边界的工作方式类似于 Javascript 的 catch{}，不同的地方在于错误边界只针对 React 组件,只有 class 组件才可以成为错误边界组件

与 catch{}一样向上冒泡

### refs 转发

`React.forwardRef`的使用

高阶组件的透传

### Fragments

Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点，

```javascript
<React.Fragment key={xxx}></React.Fragment>
```

也可以用短语法`<></>`替代,但是 Fragments 支持 key，而短语法不支持

### 高阶组件

与组件一样，高阶组件和包装组件之间的契约完全基于之间传递的 props。这种依赖方式使得替换 HOC 变得容易，只要它们为包装的组件提供相同的 prop 即可。例如你需要改用其他库来获取数据的时候，这一点就很有用

```javascript
// 普通写法
const EnhancedComponent = withRouter(
  connect(componentSelector)(WrappedComponent),
);
// 函数嵌套
const enhance = compose(withRouter, connect(commentSelector));
const EnhancedComponent = enhance(WrappedComponent);
```

### 与第三方库协同

React 不会理会 React 自身之外的 DOM 操作，它根据内部虚拟 DOM 来决定是否需要更新

## 深入 JSX

`React.createElement(type[,props[,...children]])`语法糖

React 必须在作用域内

在 JSX 类型中使用点语法

用户定义的组件必须以大写字母开头

props 默认值为 true

属性展开在某些情况下很有用，但是也很容易将不必要的 props 传递给不相关的组件，或者将无效的 HTML 属性传递给 DOM。我们建议谨慎的使用该方法

JSX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格。

```javascript
// 以下几种情况等价
<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>

//以下几种值会被忽略，结果等价
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

```javascript
// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```

### 性能优化

虚拟化长列表

`React.pureComponent` 只是进行浅比较，在`shouldUpdateComponent`生命周期少些一部分代码

不可变数据的力量---避免直接修改 props 或 state 的值，意思是最好创建新对象，避免修改原对象

### Portals

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案

```javascript
render() {
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

其他的如事件冒泡等情况保持与正常的父子组件保持不变

### Profiler

`Profiler`测量渲染一个 React 应用多久渲染一次以及渲染一次的“代价”。它的目的是识别出应用中渲染较慢的部分

### 不使用 Es6

使用 createReactClass 模块来替换 class 类来定义 React 组件

- getInitialState 定义初始化 state
- 自动绑定 this，少写.bind(this)一行代码
- getDefaultProps 定义属性

```javascript
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  },
});
```

### 不使用 JSX

直接使用`React.createElement`

### 协调

`React`提供的声明式 API 让开发者可以在对 React 的底层实现没有具体了解的情况下编写应用

`Diffing`算法
React 在以下两个假设的基础之上提出了一套 O(n)的启发式算法

- 两个不同类型的元素会产生出不同的树
- 开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定

具体形态

- 比对不同类型的元素----卸载旧元素组件触发`componentWillUnmount()`生命周期，加载新元素组件触发`componentWillMount()`和`componentDidMount()`生命周期
- 比对同一类型的元素----React 会保留 DOM 节点，仅比对及更新有改变的属性
- 比对同类型的组件元素----当一个组件更新时，组件实例保持不变，这样`state`在跨越不同的渲染时保持一致。React 将更新该组件实例的`props`以跟最新的元素保持一致，并且调用该实例的`componentWillReceiveProps()`和`componentWillUpdate()`方法
- 对子节点进行递归----`React`使用`key`唯一标识符来匹配原有树上的子元素以及最新树上的子元素(也可以使用数组下标做为 key，但这个策略一旦列表有顺序修改，`diff`就会变得慢,而且基于下标的组件进行重新排序时，组件`state`可能会出现无法预期的问题)

当以下假设没有得到满足，性能会有所损耗

- 该算法不会尝试匹配不同组件类型的子树。如果你发现你在两种不同类型的组件中切换，但输出非常相似的内容，建议把它们改成同一类型。
- `Key`应该具有稳定，可预测，以及列表内唯一的特质。不稳定的`Key`(比如通过`Math.random()`生成的)会导致许多组件实例和 DOM 节点被不必要的重新创建，这可能导致性能下降和子组件中的状态丢失

### Refs and the DOM

#### 何时使用 Refs

- 管理焦点，文本选择或媒体播放
- 触发强制动画
- 集成第三方 DOM 库

(避免使用 refs 来做任何可以通过声明式实现来完成的事情)

#### 请勿过度使用 Refs

#### 创建 Refs

#### class 与 class 之间获取 ref

```javascript
import React from 'react';
import './styles.css';

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default AutoFocusTextInput;
```

#### 函数与函数之间获取 ref

```javascript
import React from 'react';
import './styles.css';

const AutoFocusTextInput = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.focus();
  }, []);
  return <CustomTextInput ref={ref} />;
};
const CustomTextInput = React.forwardRef((props, ref) => {
  const focusTextInput = () => {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    ref.current.focus();
  };

  // 告诉 React 我们想把 <input> ref 关联到
  // 构造器里创建的 `textInput` 上
  return (
    <div>
      <input type="text" ref={ref} />
      <input
        type="button"
        value="Focus the text input"
        onClick={focusTextInput}
      />
    </div>
  );
});

export default AutoFocusTextInput;
```

#### class 与函数之间获取 ref

```javascript
import React from 'react';

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}
const CustomTextInput = React.forwardRef((props, ref) => {
  const focusTextInput = () => {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    ref.current.focus();
  };
  return (
    <div>
      <input type="text" ref={ref} />
      <input
        type="button"
        value="Focus the text input"
        onClick={focusTextInput}
      />
    </div>
  );
});

export default AutoFocusTextInput;
```

#### 回调 Refs

```javascript
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInput = (element) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      // 使用原生DOM API使text输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }
  componentDidMount() {
    this.focusTextInput();
  }
  render() {
    // 使用`ref`的回调函数将text输入框DOM节点的引用存储到React
    // 实例上 (比如 this.textInput)
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

#### 组件间通过回调形式传递 refs

```javascript
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  // ...初始化this.inputElement
  render() {
    return <CustomTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}
```

### Render props

render prop 是一个用于告知组件需要渲染什么内容的函数 prop

可以与 HOC 结合使用

### 静态类型检查

使用 Typescript

[TS 体操](https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md)

### 严格模式

严格模式检查仅在研发模式下运行，它们不会影响生产构建

- 识别不安全的生命周期
- 关于使用过时字符串 ref API 的警告
- 关于使用废弃的 findDOMNode 方法的警告
- 检测意外的副作用
- 检测过时的 context API

### 使用 PropsTypes 进行类型检查

- propTypes
- defaultProps

### 受控组件

使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

### 非受控组件

表单数据将交由 DOM 节点处理
`<input type="file">`始终是一个非受控组件

### Web Components

React 和 Web Components 为了解决不同的问题而生

## API Reference

![](/assets/lifecycles.png)
