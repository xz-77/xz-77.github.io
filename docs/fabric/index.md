GitHub: [![github](/assets/github.png)](https://github.com/xz-77/verify-fabric)

**喜欢的话，麻烦点个赞，谢谢 🙏**

## 新手指南

- 一个包含 prettier，eslint，stylelint 的配置文件合集

### 安装 verify-fabric

```bash
$ npm i verify-fabric --save-dev
# or
$ yarn add verify-fabric -D
```

### 用于自动安装 peerDependencies 依赖包

```bash
# If you're using npm
$ npm install -g install-peerdeps

# If you're using yarn
$ yarn global add install-peerdeps

cd my-project-directory

$ install-peerdeps verify-fabric -dev
```

#### in .eslintrc.js

```javascript
const eslint = require('verify-fabric/dist/eslint');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    // your rules
  },
};
```

#### in .stylelintrc.js

```javascript
const stylelint = require('verify-fabric/dist/stylelint');

module.exports = {
  ...stylelint,
  rules: {
    ...stylelint.rules,
    // your rules
  },
};
```

#### in .prettierrc.js

```javascript
const fabric = require('verify-fabric/dist/prettier');

module.exports = {
  ...fabric,
};
```

## 常见问题

### 微信小程序的样式检查报错`Unexpected unknown type selector "page"`

规则可以添加`'selector-type-no-unknown': null`

### 错误提示`The "syntax" option is no longer available. You should install an appropriate syntax, e.g. postcss-scss, and use the "customSyntax" option`

stylelint 和 postcss-less 的版本兼容问题，可以给 stylelint 降级处理，例如在项目中安装`yarn add stylelint@x.x.x`即可
