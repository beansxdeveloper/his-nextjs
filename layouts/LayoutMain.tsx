'use client';

import { FC, useEffect, useState } from "react";
import { Layout, Grid, Drawer, theme } from "antd";
import { usePathname } from "next/navigation";  
import { HeaderContent } from "./HeaderContent";
import { SideMenu } from "./SideMenu";

const { Header, Content, Sider } = Layout;

const { useBreakpoint } = Grid;

interface MainProps {
  children: React.ReactNode;
  namePage?: string;
  subNamePage?: string;
  showHeader?: boolean;
}

const Main: FC<MainProps> = ({ children, namePage }) => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout hasSider>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        style={{  height: '100vh', overflow: 'auto'}}
      >
        <SideMenu collapsed={collapsed} />
      </Sider>
      
      <Layout style={{overflowY: 'auto',height: '100vh'}}>
        <Header style={{ padding: 10, background: colorBgContainer, height:'50px' }}>
          <HeaderContent collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>

        <Content
          style={{
            margin: '12px 8px',
            padding: 10,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
             overflow: 'auto'            
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
