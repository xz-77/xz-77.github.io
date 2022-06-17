import { components } from './components';

export const menus = {
  '/': [
    {
      title: 'Home',
      path: 'index',
    },
  ],
  '/components': [
    {
      title: '新手指南',
      path: '/components',
    },
    {
      title: '通用',
      children: components.common,
    },
    {
      title: '布局',
      children: components.layout,
    },
    {
      title: '信息展示',
      children: components.dataDisplay,
    },
    {
      title: '信息录入',
      children: components.dataEntry,
    },
    {
      title: '反馈',
      children: components.feedback,
    },
  ],
};
