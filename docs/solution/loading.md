# 唤醒 APP

![](/assets/solution/app.png)

### URL Scheme

1. 每一个 ios 中的 APP 都在安装的时候可以自定义 URL Scheme, 开头类似`zhihu://`,安卓和 ios 的协议不同

```javascript
// 核心代码
// 判断是否是微信浏览器环境
const isWechat = () => {
  return /MicroMessenger/i.test(navigator?.userAgent);
};
// 判断iphone、ipad、ipod、ios环境
return /(iPhone|iPad|iPod|iOS)/i.test(navigator?.userAgent);
// 判断安卓环境
return /(Android)/i.test(navigator?.userAgent);
// uc浏览器
return /uc browser|ucbrowser|ucweb/i.test(navigator?.userAgent);
// safari浏览器
return /webkit\W(?!.*chrome).*safari\W/i.test(navigator?.userAgent);

// 如果url scheme没有发生跳转 延迟跳转到下载页面
// 如果有跳转则说明浏览器进入后台模式，清楚定时器
const timeoutId = setTimeout(() => {
  // 判断浏览器是否切后台
  var hidden = '';
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    // @ts-ignore
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    // @ts-ignore
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
  }
  if (document[hidden]) {
    // 隐藏状态
    clearTimeout(timeoutId);
    return;
  }
  window.location.href = 'xxx';
}, 1000);
```

#### 缺点

1. scheme 被很多 App 禁止，例如微信、百度浏览器、QQ 浏览器
1. 浏览器不认可 url scheme 协议，在用户未安装 App 的情况会弹窗"无效网址",虽然不影响正常的业务逻辑,但是对于交互来说总归不是很友好

### Universal Link

1. Universal Link 将一个正常的 url 访问方式赋予了唤醒的功能,前提是在你的 App 应用中配置`apple-app-site-association`

#### 缺点

1. 这是 ios 且 ios9+特有的，android 还是需要使用 url scheme
1. Universal Link 必须要求跨域
   1. 当前网页的域名和发起跳转的域名必须是不同域名，所以一般需要一个域名来专门做 universal link 唤醒 App

参考网址：

1. [MDN]()
1. [外部 app 唤醒 app 踩坑记录](https://www.jianshu.com/p/89533c8e8e66)
1. [如何唤醒 APP？](https://www.jianshu.com/p/136fd75ab05b)
1. [APP 唤起那点破事](https://libin1991.github.io/2020/03/21/APP%E5%94%A4%E8%B5%B7%E9%82%A3%E7%82%B9%E7%A0%B4%E4%BA%8B/)
