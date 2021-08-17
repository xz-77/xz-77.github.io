import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'xiaoze',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: '/assets/seven.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '打赏',
      path: 'https://dun.mianbaoduo.com/@xiaoze77',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/xiaoze77/xiaoze77.github.io',
    },
  ],
});
