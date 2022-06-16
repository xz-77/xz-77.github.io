---
title: 概念
order: 1
toc: content
nav:
  title: Javascript
  order: 1
---

<!-- 闭包  继承  封装  this http协议 原型链  es6  函数作用域 块级作用域  作用域链 事件循环机制  词法作用域(静态作用域)

前端性能优化
请求数量：合并脚本和样式表

本地存储 localStorage  浅复制深复制  -->

![](/assets/javascript/js-mind-map.png)

## 单线程的 Javascript

- Javascript 是一个单线程弱类型语言
- 基本类型： null，undefined，boolean，number，string，symbol
- 引用类型 Object： Array ，Function， Date， RegExp 等
  ![](/assets/javascript/js-type.png)

### 好处

- JS 运行时可以阻止 UI 渲染，避免 JS 修改 DOM 的同时，UI 渲染导致错误情况发生
- 节省内存，节约上下文切换时间

### 同步

- 如果在一个函数返回的时候，调用者能够得到预期结果，那么这个函数就是同步的

### 异步

- 如果在函数返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的

## JS 内存分配

### 栈内存(Stack)

- 栈自动分配内存空间，存放基本类型和引用类型值的地址；`Number` `String` `Null` `Undefined` `Boolean` `Symbol`
- 基本数据类型在内存中占据固定大小的空间
- 栈内存是引擎执行代码时工作的内存空间，除了引擎，也用来保存基本值和引用类型值的地址
- 为一个变量赋基本值时，实际上是创建一个新值，然后把该值赋给新变量，可以说这是一种真正意义上的“赋值”
- 数据在栈内存中的存储与使用方式类似于数据结构中的堆栈数据结构，遵循 先进后出 的原则。

### 堆内存(heap)

- 引擎不允许直接访问堆内存中的位置，因此我们不能直接操作对象的堆内存空间
- 动态分配的内存，存放引用类型,可以使用栈中的键名来取得
- 引用数据类型占用空间大小不定
- 为一个变量赋引用值时，实际上是为新变量添加一个指针，指向堆内存中的一个对象，属于一种“赋址”操作

## 拷贝

### 浅拷贝

- 浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。
- 如果属性是基本类型，拷贝的就是基本类型的值；
- 如果属性是内存地址（引用类型），拷贝的就是内存地址 ，
- 因此如果其中一个对象改变了这个地址，就会影响到另一个对象。即默认拷贝构造函数只是对对象进行浅拷贝复制(逐个成员依次拷贝)，即只复制对象空间而不复制资源。
- 例如`Array.slice()`都是浅拷贝

### 深拷贝

- 深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。
- 当对象和它所引用的对象一起拷贝时即发生深拷贝。
- 深拷贝相比于浅拷贝速度较慢并且花销较大。
- 例如序列化对象为深拷贝

#### 递归版拷贝

```javascript
function deepCopy(obj) {
  let ans = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const value = obj[keys[i]];
    if (value && typeof value === 'object') {
      ans[keys[i]] = deepCopy(value);
    } else {
      ans[keys[i]] = value;
    }
  }
  return ans;
}
```

## 作用域、执行上下文、作用域链

### 作用域

- 作用域即函数或变量的可见区域
- 词法作用域(静态作用域)
  - 全局作用域
    - 定义在最外层的变量或者函数，可以在任何地方访问到它们
  - 函数作用域
    - 用函数形式以`function(){...}`类似的代码包起来的(省略号...)区域，叫做函数作用域
  - 块级作用域
    - ES6 规定，在某个花括号对`{}`的内部用`let`关键字声明的变量和函数拥有块级作用域
- 动态作用域

### 执行上下文

- 当前 Javascript 代码被解析和执行时所在的环境，也叫做执行环境

- JavaScript 中有三种执行上下文类型
  - 全局执行上下文
    - 这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：1. 创建一个全局的 window 对象（浏览器的情况下），2.设置 this 指向这个全局对象。一个程序中只会有一个全局执行上下文。
  - 函数执行上下文
    - 每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，但是只有在函数被调用的时候才会被创建。一个程序中可以存在任意数量的函数执行上下文。每当一个新的执行上下文被创建，它都会按照特定的顺序执行一系列步骤。
  - Eval 函数执行上下文
    - 执行在 eval 函数内部的代码也会有它属于自己的执行上下文，但由于 JavaScript 开发者并不经常使用 eval，所以在这里我不会讨论它。

#### 执行上下文的生命周期

- 执行上下文的生命周期包括三个阶段：创建阶段->执行阶段->回收阶段

##### 创建阶段

当函数被调用，但未执行任何其内部代码之前，会做以下三件事：

- **创建变量对象**：首先初始化函数的参数 arguments,提升函数声明和变量声明(变量的声明提前有赖于 var 关键字)
- **创建作用域链**：在执行期上下文的创建阶段，作用域链是在变量对象之后创建的。作用域链本身包含变量对象。作用域链用于解析变量。当被要求解析变量时，Javascript 始终从代码嵌套的最内层开始，如果最内层没有找到变量，就会跳转到上一层父作用域中查找，直到找到该变量
- **确定`this`指向**

###### 变量对象(Variable Object，VO)

变量对象(VO)是一个类似于容器的对象，与作用域链、执行上下文息息相关

变量对象的创建过程三条规则(适用于变量对象的创建阶段，也即执行上下文的创建阶段)：

- 建立`arguments`对象。检查当前执行上下文中的参数，建立该对象下的属性与属性值
- 检查当前执行上下文的函数声明，也就是使用`function`关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用。如果该属性之前已经存在，那么该属性将会被新的引用所覆盖
- 检查当前执行上下文中的变量声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为`undefined`。如果该变量名的属性已经存在，为了防止同名的函数被修改为`undefined`,则会直接跳过，原属性值不会被修改

![](/assets/javascript/vo.png)

- 当执行上下文进入执行阶段后，变量对象会变为**活动对象**(Active Object,AO)。此时原先声明的变量会被赋值。变量对象和活动对象都是指同一个对象，只是处于执行上下文的不同阶段。
- 未进入执行上下文的执行阶段之前，变量对象中的属性都不能访问。但是进入执行阶段之后，变量对象转变为活动对象(被激活了),里面的属性可以被访问了，然后开始进行阶段的操作
- 全局执行上下文的变量对象是`window`对象，而这个特殊，在`this`指向上也同样适用，`this`也是指向`window`.除此之外，全局执行上下文的生命周期，与程序的生命周期一致，只要程序运行不结束(比如关掉浏览器窗口),全局执行上下文就会一直存在。其他所有的执行上下文，都能直接访问全局执行上下文里的内容

###### 作用域链

##### 执行阶段

创建完成之后，就会开始执行代码，在这个阶段，会完成变量赋值、函数引用、以及执行其他代码

##### 回收阶段

函数调用完毕后，函数出栈，对应的执行上下文也出栈，等待垃圾回收器回收执行上下文

### 执行上下文栈（执行栈，调用栈，call Stack）

在代码开始执行时，首先会产生一个全局执行上下文，调用函数时，会产生函数执行上下文，函数调用完成后，它的执行上下文以及其中的数据会被销毁，重新回到全局执行环境，网页关闭后全局执行环境也会销毁。其实这是一个入栈出栈的过程，全局上下文永远在栈底，而当前正在执行的函数值上下文在栈顶。

- 调用栈是解释器(比如浏览器中的 Javascript 解释器)追踪函数执行流的一种机制。当执行环境中调用了多个函数时，通过这种机制，我们能够追踪到哪个函数正在执行，执行的函数体中又调用了哪个函数
  - 每调用一个函数，解释器就会把该函数添加进调用栈并开始执行
  - 正在调用栈中执行的函数还调用了其他函数，那么新函数也将会被添加进调用栈，一旦这个函数被调用，便会立即执行
  - 当前函数执行完毕后，解释器将其清出调用栈，继续执行当前执行环境下的剩余的代码
  - 当分配的调用栈空间占满时，会引发“堆栈溢出”错误

```javascript
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  // ...some code
  foo(x * y);
  // ...some code
}

console.log(bar(7)); // 返回 42

// 忽略前面所有函数，直到 bar 函数被调用
// 当调用 bar 时，把greeting 添加进调用栈列表，包含了 bar 的参数和局部变量。
// 执行 bar 函数题中的所有代码
// 调用栈列表
// bar
// 代码执行到 foo 时，该函数被调用
// 把 foo 添加进调用栈列表
// 执行 foo 函数体中的代码，直到全部执行完毕
// 调用栈列表
// foo
// bar
// 返回来继续执行 bar 函数体中 foo 后面的代码
// 删除调用栈列表中 foo 函数
// 当 bar 函数体中的代码全部执行完毕，返回到调用 bar 的代码行，继续执行剩下的JS代码
// 调用栈列表
// bar
// 删除调用栈列表中的 bar 函数
```

- 一开始，我们得到一个空空如也的调用栈，随后，每当有函数被调用都会自动地添加进调用栈，执行完函数体中的代码后，调用栈又会自动移除这个函数。最后我们又得到了一个空空如何的调用栈
- 全局执行上下文在代码开始执行时就创建，有且只有一个，永远在执行上下文栈的栈底，浏览器窗口关闭时它才出栈
- 函数被调用的时候创建函数的执行上下文环境，并且入栈
- 只有栈顶的执行上下文才是处于活动状态的，也即只有栈顶的变量对象才会变成活动对象

### 作用域链

- 多个作用域对应的变量对象串联起来组成的链表就是作用域链，这个链表是以引用的形式保持对变量对象的访问。作用域链保证了当前执行上下文对符合访问权限的变量和函数的有序访问。

作用域链的最顶端一定是当前作用域(local scope)对应的变量对象，最底端一定是全局作用域对应的变量对象(全局 VO)

![](/assets/javascript/scope-chain.png)

### 变量/函数的查找机制

查找变量/函数时 JS 引擎是从离它最近作用域开始查找的，也就是从离它最近的变量对象(VO)开始查找。

如果在当前的变量对象里面找不到目标变量/函数，就在上一级作用域的变量对象里面查找。若这时找到了目标变量/函数，则停止查找；若找不到，一直回溯到全局作用域的变量对象里查找，若仍找不到目标变量/函数，停止查找

### 函数柯里化

```javascript
// 简单版
const primaryCurrying = (fn, ...args) => {
  return function (...args2) {
    const newArgs = args2.concat(args);
    return fn.call(this, ...newArgs);
  };
};

function add(a, b) {
  return a + b;
}

const a = primaryCurrying(add, 2);
const result = a(3);
console.log(result);

const add2 = (arg1) => {
  let sum = arg1;
  const tmp = function (arg2) {
    sum += arg2;
    return tmp;
  };
  tmp.toString = () => {
    return sum;
  };
  return tmp;
};

console.log(add2(2)(3)(4)(123).toString());
```

```javascript
// 中等版
var primaryCurrying = function (fn, ...args) {
  return function (...args2) {
    var newArgs = args.concat(args2);
    return fn.apply(this, newArgs);
  };
};

function curry(fn, length) {
  length = length || fn.length;
  return function (...arg2) {
    if (arg2.length < length) {
      const combinedArgs = [fn].concat(arg2);
      return curry(
        primaryCurrying.apply(this, combinedArgs),
        length - arg2.length,
      );
    } else {
      return fn.apply(this, arg2);
    }
  };
}

const p = curry(function (a, b, c) {
  return [a, b, c];
});

console.log(p('a', 'b', 'c'));
console.log(p('a', 'b')('c'));
console.log(p('a')('b')('c'));
```

### proxy 和 Reflect

```javascript
// 观察者模式

const queueObservable = new Set();

const observe = (fn) => queueObservable.add(fn);
const observable = (obj) => new Proxy(obj, { set });

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queueObservable.forEach((v) => v());
  return result;
}

const person = observable({
  name: '章三',
  age: 20,
});

function print1() {
  console.log(`${person.name} ${person.age}`);
}

observe(print1);
person.name = '李四';
```

## 参考链接

- [浅析 JS 堆、栈、执行栈和 EventLoop](https://juejin.cn/post/6844904159045500936)
- [什么是堆和栈，它们在哪儿？--堆栈](https://www.cnblogs.com/valor-xh/p/6535421.html)
- [Array、HashMap](https://juejin.cn/post/6844903630156333069#heading-1)
- [RBAC 权限设计](https://www.imqianduan.com/server/511.html)
- [ACL 权限设计]
- [前端知识图谱](https://f2e.tech/)
