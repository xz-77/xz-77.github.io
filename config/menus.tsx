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
      title: '导航',
      children: components.navigation,
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
    {
      title: '引导提示',
      children: components.guidance,
    },
  ],
  '/iconfont': [
    {
      title: '新手指南',
      path: '/iconfont',
    },
    {
      title: 'iconfont',
      path: '/iconfont/icons',
    },
  ],
  '/knowledge': [
    {
      title: '数据结构与算法',
      children: [
        '/knowledge/data-structures-and-algorithms/data-structures',
        '/knowledge/data-structures-and-algorithms/tree',
        '/knowledge/data-structures-and-algorithms/line',
        '/knowledge/data-structures-and-algorithms/stack',
        '/knowledge/data-structures-and-algorithms/kmp',
      ],
    },
    {
      title: 'Javascript',
      children: [
        '/knowledge/javascript/fn-chemistry',
        '/knowledge/javascript/tail-call',
        '/knowledge/javascript/program-paradigm',
      ],
    },
    {
      title: '计算机网络',
      children: [
        '/knowledge/computer-network/application-layer',
        '/knowledge/computer-network/network-layer',
        '/knowledge/computer-network/transport-layer',
        '/knowledge/computer-network/http-prototype',
        '/knowledge/computer-network/http-cache',
        '/knowledge/computer-network/sop',
        '/knowledge/computer-network/http-version',
      ],
    },
    {
      title: 'React',
      children: [
        '/knowledge/react/fiber',
        '/knowledge/react/diff',
        '/knowledge/react/diff2',
      ],
    },
    {
      title: 'CSS',
      children: [
        '/knowledge/css/css-design',
        '/knowledge/css/redraw-rearrange',
      ],
    },
    {
      title: '架构',
      children: [
        '/knowledge/frame/frame-design',
        '/knowledge/frame/tree-shaking',
        '/knowledge/frame/monorepo-design',
      ],
    },
  ],
};
