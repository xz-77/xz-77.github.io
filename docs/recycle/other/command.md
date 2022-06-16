---
title: command
order: 9
toc: content
nav:
  title: other
  order: 6
---

- [linux](http://www.imooc.com/learn/175)

## 查看

- `ls`

## 新建文件

- `touch <name>`

## 新建目录

- `mkdir <name>`

## 进入目录

- `cd`

## 打开成可视化文件夹

- `open`

- `open .`当前目录打开成可视化文件夹

## 删除文件

- `rm -f xxx`

## 删除文件夹

- `rm -rf xxx`
- 注意为彻底删除

## 编辑

- `vim`

## 拷贝

- `cp`
- 案例（拷贝一个 test.txt 文件并重新命名为 test2.txt）：cp test.txt test2.txt

## 查找

- `find`
- 案例（查找当前目录下所有的 txt 文件）：find \*.txt

## 显示当前的目录

- `pwd`

## 设置权限

- 进入要修改权限的文件夹所在目录
- `sudo chmod -R 777 文件夹名`
- 【注】`-R` 是指级联应用到目录里的所有子目录和文件
- 777 是所有用户都拥有最高权限
