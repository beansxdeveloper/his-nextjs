'use client';

import { Row, Col, Card, Statistic } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('DASHBOARD.ACTIVE_USERS'),
      value: 1234,
      icon: <UserOutlined className="text-blue-500" />,
      prefix: '',
    },
    {
      title: t('DASHBOARD.TOTAL_ORDERS'),
      value: 456,
      icon: <ShoppingCartOutlined className="text-green-500" />,
      prefix: '',
    },
    {
      title: t('DASHBOARD.REVENUE'),
      value: 89012,
      icon: <DollarOutlined className="text-yellow-500" />,
      prefix: '$',
    },
    {
      title: t('DASHBOARD.GROWTH'),
      value: 23.45,
      icon: <LineChartOutlined className="text-purple-500" />,
      prefix: '',
      suffix: '%',
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{t('DASHBOARD.TITLE')}</h1>
      
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card hoverable>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{stat.icon}</div>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}