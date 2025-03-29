import React from 'react';
import { ConfigProvider } from 'antd';
import App from "./App";
// ...
const Demo = () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);

export default Demo;