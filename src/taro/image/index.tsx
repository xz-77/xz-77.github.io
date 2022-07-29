import type { ImageProps } from '@tarojs/components/types/Image';
import { withNativeProps } from 'antd-mobile/es/utils/native-props';
import React from 'react';

const Image = (props: ImageProps) => {
  return withNativeProps(props, <image>{props.children}</image>);
};

export default Image;
