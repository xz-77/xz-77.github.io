import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'xiaoze',
  favicon: '/assets/seven.png',
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
