# 常见问题

### 微信小程序的样式检查报错`Unexpected unknown type selector "page"`

规则可以添加`'selector-type-no-unknown': null`

### 错误提示`The "syntax" option is no longer available. You should install an appropriate syntax, e.g. postcss-scss, and use the "customSyntax" option`

stylelint 和 postcss-less 的版本兼容问题，可以给 stylelint 降级处理，例如在项目中安装`yarn add stylelint@x.x.x`即可
