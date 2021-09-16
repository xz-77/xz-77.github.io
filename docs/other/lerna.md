---
title: lerna
order: 6
toc: content
nav:
  title: other
  order: 6
---

[lerna](http://www.febeacon.com/lerna-docs-zh-cn/)

## lerna init

- `lerna init` 常见的心的 lerna 仓库(repo)或将现有的仓库升级为适配当前版本的 lerna

### options

- `--independent / -i` 使用独立的版本控制模式

## lerna bootstrap

- `lerna bootstrap` 在当前 lerna 仓库中执行引导流程(bootstrap),安装所有依赖项并链接任何交叉依赖

**此命令至关重要，因为它让你可以在`require()`中直接通过软件包的名称进行加载，就好像此软件包已经存在于你的`node_modules`目录下一样**

## lerna import

- `lerna import <pathToRepo>`将本地路径<pathToRepo>中的软件包导入(import) packages/<directory-name>中并提交 commit

## lerna publish

- `lerna publish` 发布最新 commit 的修改
- `lerna publish <commit-id>` 发布指定 commit-id 的代码

### options

- `--npm-tag [tagname]` 使用给定的 npm dist-tag(默认为 latest)发布到 npm
- `--canary / -c` -创建一个 canary 版本
- `--skip-git` 不要运行任何 git 命令
- `--force-publish [packages]` 强制发布指定的一个或多个软件包(已逗号分隔)或使用\*表示所有软件包(对于修改过的软件包跳过 git diff 检查)

## lerna changed

- `lerna changed` 检查自上次发布以来哪些软件包被修改过

## lerna diff

- `lerna diff [package?]` 列出所有或某个软件包自上次发布以来的修改情况

## lerna run

- `lerna run [script]` 在每一个包含[script]脚本的软件包中运行此 npm 脚本

## lerna ls

- `lerna ls` 列出当前 lerna 仓库中的所有公共软件包(public packages)

## lerna clean

- `lerna clean` 从所有包中删除 node_modules 目录

## yarn add -W

- `yarn add <package> -W` 安装第三方依赖包到根目录
