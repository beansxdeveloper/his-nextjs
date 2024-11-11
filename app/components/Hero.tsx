'use client';

import { Typography, Button, Space } from 'antd';
import { RocketOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Hero() {
  return (
    <div className="text-center py-16 space-y-8">
      <Title level={1} className="text-5xl font-bold">
        Next.js + Ant Design
      </Title>
      <Paragraph className="text-xl text-gray-600 max-w-2xl mx-auto">
        Build beautiful, responsive web applications with the power of Next.js and the elegance of Ant Design
      </Paragraph>
      <Space size="large">
        <Button type="primary" size="large" icon={<RocketOutlined />}>
          Get Started
        </Button>
        <Button size="large" icon={<GithubOutlined />}>
          View on GitHub
        </Button>
      </Space>
    </div>
  );
}