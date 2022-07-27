import { List } from 'antd-mobile-taro-ui';
import { Image } from '@tarojs/components';
import React from 'react';
import { users } from './users';

export default () => {
  return (
    <List header="用户列表">
      {users.map((user) => (
        <List.Item
          key={user.name}
          prefix={
            <Image
              src={user.avatar}
              style={{ borderRadius: 20, width: 40, height: 40 }}
              mode="aspectFit"
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      ))}
    </List>
  );
};
