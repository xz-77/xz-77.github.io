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
- 密码存储工具 - Bitwarden
- xcode-select
- 软件包管理器 - HomeBrew
- node 管理工具 - n
- 终端 - Terminal - iTerm2
- 长图截图工具 - iShot
- 容器化技术，用于支持创建和使用 Linux 容器 - docker
- redis 数据可视化工具 - quickredis(redis)
- mongo 数据可视化工具 - robo 3T(mongo)
- 邮箱 - Spark

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
