---
title: 常用软件
order: 1
toc: content
nav:
  title: other
  order: 6
---

## tools

- 截图工具 - snipaste
- 翻译软件 - 有道云翻译
- 翻墙工具 - clashX
- 抓包工具 - charles
- 密码存储工具 - Bitwarden(google 扩展程序)
- xcode-select
- 软件包管理器 - HomeBrew
- node 管理工具 - n/nvm
- 终端 - Terminal - iTerm2
- 长图截图工具 - iShot
- 容器化技术，用于支持创建和使用 Linux 容器 - docker
- redis 数据可视化工具 - quickredis(redis)
- mongo 数据可视化工具 - robo 3T(mongo)

## xcode-select 管理

先用命令行找到安装的目录：

```bash
xcode-select --print-path
```

返回的应该是类似：

```bash
/Library/Developer/CommandLineTools
```

然后删除它就可以：

```bash
rm -rf /Library/Developer/CommandLineTools
```

[详细的参考](https://developer.apple.com/library/archive/technotes/tn2339/_index.html#//apple_ref/doc/uid/DTS40014588-CH1-HOW_CAN_I_UNINSTALL_THE_COMMAND_LINE_TOOLS_)

<https://www.it-swarm.cn/zh/macos/%E5%8D%B8%E8%BD%BD%E5%88%A0%E9%99%A4homebrew%E5%8C%85%EF%BC%8C%E5%8C%85%E6%8B%AC%E5%85%B6%E6%89%80%E6%9C%89%E4%BE%9D%E8%B5%96%E9%A1%B9/939996913/>

## HomeBrew

- [安装与卸载](https://github.com/homebrew/install#uninstall-homebrew)
- [删除包和依赖项目](https://github.com/beeftornado/homebrew-rmtree)

## node

在 M1 上安装 NVM，运行 Node@12 会出现类似`wasm code commit Allocation failed - process out of memory...`进程内存不足的错误，是因为 arm64(M1 芯片)架构的原因

- arm64 的`Node@15`：没问题
- arm64 的`Node@12`，测试用例中有一些错误
- 用于 x64 的`Node@12`：没问题
- `$ arch`获取是在 arm64 架构(Apple Silicon M1 芯片)、x64(Intel64 位)或者 i386(Intel32 位)架构
- `arch -x86_64 zsh`用于切换 Intel64 位处理或者 Intel32 位处理模式(TODO:具体切换其中哪一个的原因还不清楚，我的电脑会切换到 i386 而不是 x64)

## n

在 M1 芯片上貌似 Homebrew 和 n 会有些问题，目前解决办法是改用 nvm

## commitizen

- 第一步
  `npm install commitizen -g`

- 第二步 `npm`或者`Yarn`方式安装`cz-conventional-changelog`

`commitizen init cz-conventional-changelog --save-dev --save-exact`
`commitizen init cz-conventional-changelog --yarn --dev --exact`

```javascript
...
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```
