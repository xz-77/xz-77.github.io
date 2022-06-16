import type { IConfig } from 'dumi';
import { menus } from './menus';
import { navs } from './navs';

const config: IConfig = {
  title: 'design',
  favicon: '/assets/seven.png',
  logo: '/assets/seven.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  // 单语言配置方式如下
  navs,
  resolve: {
    includes: ['docs', 'packages/ui/src'],
  },
  menus,
  // locales: [
  //   ['en', 'English'],
  //   ['zh', '中文'],
  // ],
  // more config: https://d.umijs.org/config
};

export default config;
