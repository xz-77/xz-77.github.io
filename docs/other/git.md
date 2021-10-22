---
title: git
order: 5
toc: content
nav:
  title: other
  order: 6
---

## 查看 Git 所有配置

`git config --list`

### 设置 user.name 和 user.email(全局和项目)

`git config --global user.name “github’s Name”`

`git config --global user.email “github@xx.com”`

`git config user.name “github’s Name”`

`git config user.email “github@xx.com”`

### 删除全局配置项

`git config --global --unset user.name`

### 终端执行命令

`git config --global --unset user.name`

### 编辑配置文件

`git config --global --edit`

## 提交规范

- feat: 新增 feature
- fix: 修复 bug
- docs: 仅仅修改了文档，如 readme.md
- style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑
- refactor: 代码重构，没有新增功能或修复 bug
- perf: 优化相关，如提升性能、用户体验等
- test: 测试用例，包括单元测试、集成测试
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 版本回滚

## 跳过 eslint 检查

`git commit --no-verify -m "commit"`

## 提交文件状态标识

![](/assets/other/git-state.png)
