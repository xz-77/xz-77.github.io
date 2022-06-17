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
      title: '指南',
      path: '/components',
    },
    {
      title: 'Common',
      children: components.common,
    },
    {
      title: '信息录入',
      children: components.dataEntry,
    },
  ],
};
