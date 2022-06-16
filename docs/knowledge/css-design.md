# CSS 设计

## 概念

CSS 又称为叠层样式表，是我们前端开发人员在 HTML/CSS/Javascript 中应该学习的一门技术技。HTML 用于定义内容的结构和语义，CSS 用于设计风格和布局，Javascript 允许我们在 Web 页面上完成复杂的功能。

我们可以使用 CSS 来更改内容的字体、颜色、大小、间距，将内容氛围多列，或者添加动画以及其他的装饰效果。

## 软件开发的开放/封闭原则

- 软件实体如类、模块、函数应该对扩展开放，对修改关闭
- 当系统需求发生改变时，尽量不修改系统原有代码功能，应该扩展模块的功能，来实现新的需求

## 优秀 css 架构的目标

### 可预见的

- 可预见的 css 意味着你的规则表现出预期的效果
- 当你添加或者更新规则时，它不会影响到你网站上不想要的影响的部分
- 在很少更改或者小型网站上这点其实表现的并不明显
- 在有数十个甚至数百个页面的大型网站上，可预见的 css 是必须的

### 可重复使用

- css 规则应该是抽象的
- css 规则应该充分分离
- 意味着可以从现有零件中快速构建新组件，而不必重新编码已经解决的模式和问题

### 可扩展的

- 随着网站规模的复杂性的增长，通常需要更多开发人员进行维护
- 可扩展的 css 意味着可以由一个人或庞大的工程团队轻松地对其进行管理
- 这也意味着网站的 css 体系结构可以轻松实现，而无需大量学习

### 可维护的

- 当需要在站点上添加、更新或者重新部署新的组件和功能时，不需要重构现有的 css
- 向页面添加组件 X 的时候不应该去修改这个页面上的 Y 组件

## css 的布局 layout

### 基本排版样式

```css
/* BASIC TYPOGRAPHY                       */
/* from https://github.com/oxalorg/sakura */
html {
  font-size: 62.5%;
  font-family: serif;
}
body {
  font-size: 1.8rem;
  line-height: 1.618;
  max-width: 38em;
  margin: auto;
  color: #4a4a4a;
  background-color: #f9f9f9;
  padding: 13px;
}
@media (max-width: 684px) {
  body {
    font-size: 1.53rem;
  }
}
@media (max-width: 382px) {
  body {
    font-size: 1.35rem;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 700;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
h1 {
  font-size: 2.35em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1.25em;
}
h6 {
  font-size: 1em;
}
```

### 正常布局流

正常布局流是指在不对页面进行任何布局控制时，浏览器默认的 html 布局方式

```html
<p>I love my cat.</p>

<ul>
  <li>Buy cat food</li>
  <li>Exercise</li>
  <li>Cheer up friend</li>
</ul>

<p>The end!</p>
```

### display 属性

在 css 中实现页面布局的主要方法是设定 display 属性的值。
正常流中的所有内容都有一个 display 的值，用作元素的默认行为方式

```css
/* 块级元素 */
display: block;
/* 内联元素 */
display: inline;
/* 行内块元素 */
display: inline-block;
/* 弹性盒子布局 */
display: flex;
/* 网格布局 */
display: grid;
```

### 定位(position)

- 静态定位----每个元素默认的属性----它表示“将元素放在文档布局流的默认位置----没有什么特殊的地方”
- 相对定位----允许我们相对于元素在正常的文档流中的位置移动它----包括将两个元素叠放在页面上。这对于微调和精准设计非常有用
- 绝对定位----将元素完全从页面的正常布局流中移出，类似将它单独放在一个图层中。绝对定位在创建复杂布局效果时非常有用，例如通过标签显示和隐藏的内容面板或者通过按钮控制滑动到屏幕中的信息面板。
- 固定定位----与绝对定位非常类似，但是它是将一个元素相对浏览器视口固定，而不是相对另外一个元素。这在创建类似在整个页面滚动过程中总是处于屏幕的某个位置的导航菜单时非常有用
- 粘性定位----是一种新的定位方式，它会让元素先保持和 position:static 一样的定位，当它的相对视口位置达到某一个预设值时，它就会像 position:fixed 一样定位

```css
/* 静态定位 */
positioin: static;
/* 相对定位 */
position: relative;
/* 绝对定位 */
position: absolute;
/* 固定定位 */
position: fixed;
/* 粘性定位 */
position: sticky;
```

### CSS 表格布局

使用 css 表格来进行布局，在现在这个时间点应该被认为是一种传统方法，它通常会被用于兼容一些不支持 flexbox 和 grid 的浏览器

```css
/* 此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符 */
display: table;
/* 此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符 */
display: inline-table;
/* 此元素会作为一个或多个行的分组来显示（类似 <tbody>） */
display: table-row-group;
/* 此元素会作为一个或多个行的分组来显示（类似 <thead>） */
display: table-header-group;
/* 此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。 */
display: table-footer-group;
/* 此元素会作为一个表格行显示（类似 <tr>） */
display: table-row;
/* 此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。 */
display: table-column-group;
/* 此元素会作为一个单元格列显示（类似 <col>） */
display: table-column;
/* 此元素会作为一个表格单元格显示（类似 <td> 和 <th>） */
display: table-cell;
/* 此元素会作为一个表格标题显示（类似 <caption>） */
display: table-caption;
```

### 多列布局

多列布局---给我们一种把内容按列排序的方法，就像文本在报纸上排列那样。由于在 web 内容里让你的用户在一列上通过上下滚动来阅读两片相关的文本是一个非常低效的方式，那么把内容排列成多列可能是一种有用的技术

要把一个块转变称多列容器，我们可以使用`column-count`属性来告诉浏览器我们需要多少列，也可以使用`column-width`来告诉浏览器以至少某个宽度的尽可能多的列来填充容器

```html
<div class="container">
  <h1>Multi-column layout</h1>
  <p>Paragraph 1.</p>
  <p>Paragraph 2.</p>
</div>
```

```css
.container {
  column-width: 200px;
}
```

### 浮动布局

css 浮动属性最初是为了将图片浮动在一列文本的左侧或者右侧类似于报纸上的排版。早在 21 世纪初，web 开发者将这个属性的优势扩展到了任意的元素，这意味着你可以通过 div 的内容浮动创建出行和列的错觉。同样，浮动也不是基于这样的目的设计的，所以兼容上会有很多问题

参考圣杯布局和双飞翼布局

```css
 {
  position: relative;
  float: left;
}
```

### Flexbox

Flexbox 属性是在 2009 年第一次提出来的，但是到 2015 年才得到浏览器的广泛支持。Flexbox 被设计为定义一个空间在行或者列上如何分布的，这让它比浮动更适合用来做布局，这意味着在使用浮动布局十多年后，web 开发者终于不再使用带有 hack 的浮动布局方式了

这种方式和浮动布局相比更加紧凑，虽然 flexbox 一些属性和值初看起来有些困惑。

缺点：

- 浏览器的兼容，主流的现代浏览器都支持 flexbox，但是一些旧的浏览器不兼容
- css 代码本身----flexbox 虽然去掉了浮动的 hack，但是代码的可读性上变的更差了，你很难去理解 flex 的 css，并且不知道页面上是如何去布局所有元素的。在写 flexbox 布局代码的时候，有很多时候靠的是大量的猜测和尝试
- 特别需要注意：flexbox 被设计用来在单行或者单列中分割元素的------它不是设计用来给整个页面做布局的。尽管它能很好的实现(相对浮动布局好很多)

```css
/* FLEXBOX-BASED LAYOUT */
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex: 1;
}
main {
  flex: 1;
  padding: 0 20px;
}
nav {
  flex: 0 0 180px;
  padding: 0 10px;
  order: -1;
}
aside {
  flex: 0 0 130px;
  padding: 0 10px;
}
```

### grid 布局

css 网格最早在 2011 年提出的

优点：

- 摆脱了 flexbox 布局中必须使用`<div>`的限制

虽然结果看起来和基于 flexbox 的布局一样，但是 css 的很大成都上得到了改进，它清晰地表达出了期望的布局方式。行和列的大小和形状在 body 选择器中定义，每一项 item 直接通过他们所在行和列的位置定义。

一旦你习惯了 grid 语法，你会觉得它是一种非常理想的 css 布局方式。唯一缺点就是浏览器支持

```css
/* GRID-BASED LAYOUT */
body {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: min-content 1fr min-content;
}
header {
  grid-row: 1;
  grid-column: 1 / 4;
}
nav {
  grid-row: 2;
  grid-column: 1 / 2;
  padding: 0 10px;
}
main {
  grid-row: 2;
  grid-column: 2 / 3;
  padding: 0 20px;
}
aside {
  grid-row: 2;
  grid-column: 3 / 4;
  padding: 0 10px;
}
footer {
  grid-row: 3;
  grid-column: 1 / 4;
}
```

## css 设计模式

### OOCSS

面向对象的 css 是 2009 年首次提出的，主要围绕两个原则的规范

- 结构和样式的分离，指定义结构(布局)的 css 不应该和定义样式(颜色、字体)的 css 混杂在一起
- 容器和内容分离，把元素堪称是一个可重用的对象，关键核心点是一个对象不管用在页面的任何位置都应该看起来是相同的

```css
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.comment img {
  border: 1px solid grey;
}

.comment .content {
  font-size: 0.8rem;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid grey;
}

.list-item .content {
  font-size: 0.8rem;
}
```

```css
/* 在OOCSS中我们可以建立一个media的排布，里面包含所有的两种排布所共有的CSS,达到CSS可重复使用的目的*/
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content {
  font-size: 0.8rem;
}

.comment img {
  border: 1px solid grey;
}

.list-item {
  border-bottom: 1px solid grey;
}
```

```html
<div class="media comment">
  <img />
  <div class="content"></div>
</div>

<ul>
  <li class="media list-item">
    <img />
    <div class="content"></div>
  </li>
</ul>
```

### SMACSS

可扩展模块化架构的 css 是 2011 年出现的一种设计模式，它将 css 分为 5 个不同的类别

- 基本规范
- 布局规范
- 模块规范
- 状态规范
- 样式规范

SMACSS 也有一些推荐的命名规则，对于布局规范使用 l-或者 layout- 作为前缀；对于状态规范，使用 is-hidden 或者 is-collapsed 作为前缀。

相比 OOCSS，SMACSS 有了更多细节上的规范，但是 CSS 规则该划分为哪以类别的规范中，这是个需要仔细考虑的问题。后来出现的 BEM 对这一方面进行了改进，让它更易使用

缺点：它们会看起来过于复杂，尤其是对于小项目。

文档：[SMACSS](http://smacss.com/)

### BEM

(块、元素、修饰符)是在 2010 年出现的规范，它的思想主要是围绕把用户界面切分称独立的块。块是一个可重用的组件，元素是块的一部分不能单独重用，修饰符是定义了块或者元素外观、状态、或者行为的实体

BEM 的规范很容易理解，对于新手来说命名规则上也很友好，缺点就是可能会导致 class 名字非常长，并且没有遵循传统的命名规范。后来出现的 Atomic CSS 又把这个非传统方式带到了一个新的高度

BEM 在大些的 Web 项目中被广泛使用

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

### Atomic CSS

功能性 CSS 是 2014 年出现的一个规范，它的思想是基于可视化的方法创建小而功能单一化的 class。这种规范与 OOCSS、SMACSS 和 BEM 完全相反----它并不是把页面上的元素看作是可重用的对象，Atomic CSS 忽略掉了这些对象，每一个元素使用了可重用的单一功能的 classs 样式集合。

```css
.weight700 {
  font-weight: 700;
}
.size20 {
  font-size: 20px;
}
.white {
  color: #fff;
}
```

```html
<div class="weight700 size20 white"></div>
```

缺点：缺点：它们会看起来过于复杂，尤其是对于小项目。

文档：[Atomic CSS](https://acss.io/)

### CSS in JS

CSS in JS 是 2014 年推出的一种设计模式，它的核心思想是把 CSS 直接写到各自组件中，而不是单独的样式处理。这种方式在 React 框架中引入的，最早是使用内联掩饰，后来又进化称了使用 Javascript 生成 CSS 然后插入到页面的 style 标签中的方式。

CSS in JS 再一次违背了 CSS 中关于分离的最佳实践，主要原因是 web 随着时间推移发生了很大的变化。最初 web 大部门都是静态网站----这种情况下 HTML 内容和 CSS 表现分离是很有意义的，但现在大部分应用都是动态 web 构建----这种情况下可重用的组件更加有意义了。

CSS in JS 设计的目标 是定义边界清晰包含自己 HTML/CSS/JS 的独立组件，并且不受其他组件的影响。React 是最早采用这种思想的框架，React 为这些组件添加了清晰的边界，后续也影响到了如(Angular、Ember 和 Vuejs)等框架。需要注意的是，CSS in JS 模式相对来说比较新颖，一个是开发成本，一个是这种设计模式成熟度的问题。

## css 扩展语言(css 预处理器)

- 帮助 css 提升语言本身体验的工具
- 允许你使用不同的语言来定义样式，最终会帮你转换为浏览器可以理解的 css
- 第一主流的 css 预处理器是 2006 年发布的 sass

### sass

sass 是一种 css 的预编译语言，它提供了变量(variables)、嵌套(nestedrules)、混合(mixins)、函数(functions)等功能，并且完全兼容 css 语法。sass 能够帮助复杂的样式表更有条理，并且易于在项目内部或跨项目共享设计

```scss

$dark-color: #4a4a4a
$light-color: #f9f9f9
$side-color: #eee
body
  color: $dark-color

header, footer
  background-color: $dark-color
  color: $light-color

main
  background: $light-color
nav, aside
  background: $side-color
```

### less

less 同 sass 一样是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

### less 与 sass 的不同

- 编译环境不同
- 变量符不同
- 变量作用域不同等等

## 总结

**设计模式没有唯一的正确选择**

虽然 CSS 的设计模式多种多样，甚至设计模式之前的思想观点存在完全相反的情况，但是 CSS 设计模式的选择没有唯一的正确选择，我们需要做的应该是根据现实情况去选择最合适自己的。

注意：

- CSS 规范最重要的的事情是让你的 CSS 各方面保持统一。
- !import 是你的改变 css 的最后一张王牌，而王牌的作用就在于不到万不得已，不要去使用它。

参考链接:

- [CSS Architecture](https://philipwalton.com/articles/css-architecture/)
- [CSS 进化史](https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525)
