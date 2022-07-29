import type { TextProps } from '@tarojs/components/types/Text';
import { withNativeProps } from 'antd-mobile/es/utils/native-props';
import React from 'react';

const Text = (props: TextProps) => {
  return withNativeProps(props, <span>{props.children}</span>);
};

export default Text;
