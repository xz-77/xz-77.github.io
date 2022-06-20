---
title: husky
order: 10
toc: content
nav:
  title: other
  order: 6
---

husky 是一个 Git Hook 工具。 husky 其实就是一个为 git 客户端增加 hook 的工具。 将其安装到所在仓库的过程中它会自动在 .git/ 目录下增加相应的钩子实现在 pre-commit 阶段就执行一系列流程保证每一个 commit 的正确性。

## husky7

- [官网](https://typicode.github.io/husky/#/)
- [husky-4-to-7](https://github.com/typicode/husky-4-to-7)

### 创建`pre-commit`文件

- [地址](https://typicode.github.io/husky/#/?id=automatic-recommended)

```linux

npx husky-init && yarn              # Yarn 1

```

### 创建`commit-msg`文件

[commitlint 官网](https://github.com/conventional-changelog/commitlint#getting-started)

```bash
# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev

# Activate hooks
npx husky install
# or
yarn husky install

# Add hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
