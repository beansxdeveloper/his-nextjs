'use client';

import { useState } from 'react';
import { Layout, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export default function EMRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return ( <>
    {children}
  </>
  );
}