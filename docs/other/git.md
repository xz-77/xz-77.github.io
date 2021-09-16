---
title: git
order: 5
toc: content
nav:
  title: other
  order: 6
---

## 查看Git所有配置

`git config --list`

## 设置user.name和user.email(全局和项目)

`git config --global user.name “github’s Name”`

`git config --global user.email “github@xx.com”`

`git config user.email “github@xx.com”`

`git config user.email “github@xx.com”`

## 删除全局配置项

### 终端执行命令

`git config --global --unset user.name`

### 编辑配置文件

`git config --global --edit`
