import { Spin } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined spin />;

const Loadable = ({ spinning, children }) => {
  return (
    <Spin spinning={spinning} indicator={antIcon}>
      {children}
    </Spin>
  );
};

export default Loadable;
