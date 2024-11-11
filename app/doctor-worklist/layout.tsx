'use client';

import { useState } from 'react';
import { Layout, theme } from 'antd';
import { SideMenu } from '../components/layout/SideMenu';
import { HeaderContent } from '../components/layout/HeaderContent';

const { Header, Sider, Content } = Layout;

export default function DoctorWorklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <SideMenu collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <HeaderContent collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}