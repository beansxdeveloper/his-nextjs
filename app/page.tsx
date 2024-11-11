'use client';

import Hero from './components/Hero';
import Features from './components/Features';
import { Layout } from 'antd';

const { Content } = Layout;

export default function Home() {
  return (
    <Layout className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
      </Content>
    </Layout>
  );
}