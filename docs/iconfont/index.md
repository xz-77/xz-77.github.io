GitHub: [![github](/assets/github.png)](https://github.com/xz-77/antd-mobile-taro-icons)

**喜欢的话，麻烦点个赞，谢谢 🙏**

## 新手指南

```bash
$ yarn add antd-mobile-taro-icons
# or
$ npm install antd-mobile-taro-icons --save
```

## 引入

直接引入组件即可，`antd-mobile-taro-icons`的相关 css 文件会自动加载

```javascript
import { CheckIcon } from 'antd-mobile-taro-icons';
```

## Icon 图标

[图标网址](https://xz-77.github.io/antd-mobile-taro-icons/)

## 核心思想

- 由于小程序不支持`svg`，在[iconfont](https://www.iconfont.cn/)上也没有找到`antd-mobile`的矢量图，所以这里使用的是[iconfont](https://www.iconfont.cn/)中[手机淘宝图标库](https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.5&type=1&page=4)转`base64`，与`antd-mobile`的图标库会有细微的差别

## 兼容问题

_`Taro3.5.5`版本对于`iconfont`的样式引入在 h5 方面有兼容性问题，需要手动引入`iconfont.css`文件，小程序展示没问题_
