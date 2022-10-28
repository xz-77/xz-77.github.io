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
    includes: ['docs', 'src'],
  },
  alias: {
    demos: process.cwd() + '/src/demos/index.ts',
    wrapper: process.cwd() + '/src/wrapper/index.tsx',
    'antd-mobile-taro-ui': 'antd-mobile', // 避免编译报错，指定一个路径进行重定向
    '@tarojs/components': process.cwd() + '/src/taro/index.ts',
    '@tarojs/taro': process.cwd() + '/src/taro/index.ts',
    'antd-mobile-taro-icons': process.cwd() + '/src/taro/index.ts', // 避免编译报错，指定一个路径进行重定向
  },
  menus,
  // locales: [
  //   ['en', 'English'],
  //   ['zh', '中文'],
  // ],
  // more config: https://d.umijs.org/config
};

export default config;
