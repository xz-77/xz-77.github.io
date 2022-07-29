import type { ViewProps } from '@tarojs/components/types/View';
import { withNativeProps } from 'antd-mobile/es/utils/native-props';
import React from 'react';

const View = (props: ViewProps) => {
  return withNativeProps(props, <div>{props.children}</div>);
};

export default View;
