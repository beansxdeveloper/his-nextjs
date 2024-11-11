'use client';

import { Card, Col, Row, Typography } from 'antd';
import { RocketOutlined, ApiOutlined, ThunderboltOutlined, ToolOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <RocketOutlined className="text-4xl text-blue-500" />,
    title: 'Fast Performance',
    description: 'Built on Next.js for optimal speed and SEO performance'
  },
  {
    icon: <ApiOutlined className="text-4xl text-green-500" />,
    title: 'Modern UI',
    description: 'Beautiful components powered by Ant Design'
  },
  {
    icon: <ThunderboltOutlined className="text-4xl text-yellow-500" />,
    title: 'Quick Setup',
    description: 'Get started quickly with pre-configured components'
  },
  {
    icon: <ToolOutlined className="text-4xl text-purple-500" />,
    title: 'Customizable',
    description: 'Easily customize themes and components to match your brand'
  }
];

export default function Features() {
  return (
    <Row gutter={[24, 24]} className="py-16">
      {features.map((feature, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card className="h-full text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {feature.icon}
              <Title level={4}>{feature.title}</Title>
              <Paragraph className="text-gray-600">
                {feature.description}
              </Paragraph>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}