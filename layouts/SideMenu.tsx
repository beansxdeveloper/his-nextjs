'use client';

import { Menu } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  CalendarOutlined,
  BarcodeOutlined,
  DatabaseOutlined,
  CloudUploadOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

interface SideMenuProps {
  collapsed: boolean;
}

export function SideMenu({ collapsed }: SideMenuProps) {
  const { t } = useTranslation();
  const router = useRouter();

  const menuItems = [
    {
      key: 'opd-emr',
      icon: <MedicineBoxOutlined />,
      label: 'OPD EMR',
    },
    {
      key: 'ipd-emr',
      icon: <MedicineBoxOutlined />,
      label: 'IPD EMR',
    },
    {
      key: 'anc',
      icon: <CalendarOutlined />,
      label: 'ANC',
    },
    {
      key: 'charting',
      icon: <FileTextOutlined />,
      label: 'Charting',
    },
    {
      key: 'allergies',
      icon: <WarningOutlined />,
      label: 'Allergies',
    },
    {
      key: 'alerts',
      icon: <WarningOutlined />,
      label: 'Alerts',
    },
    {
      key: 'orders',
      icon: <BarcodeOutlined />,
      label: 'Orders',
    },
    {
      key: 'orders-checklist',
      icon: <FileTextOutlined />,
      label: 'Orders Checklist',
    },
    {
      key: 'med-reconcile',
      icon: <DatabaseOutlined />,
      label: 'Med Reconcile',
    },
    {
      key: 'form',
      icon: <FileTextOutlined />,
      label: 'Form',
    },
    {
      key: 'medical-document',
      icon: <FileTextOutlined />,
      label: 'Medical Document',
    },
    {
      key: 'referral',
      icon: <UserOutlined />,
      label: 'Referral',
    },
    {
      key: 'tasks',
      icon: <FileTextOutlined />,
      label: 'Tasks',
    },
    {
      key: 'death-record',
      icon: <CalendarOutlined />,
      label: 'Death Record',
    },
    {
      key: 'emar',
      icon: <CloudUploadOutlined />,
      label: 'eMAR',
    },
    {
      key: 'appointments',
      icon: <CalendarOutlined />,
      label: 'Appointments',
    },
    {
      key: 'radiology-schedule',
      icon: <CloudUploadOutlined />,
      label: 'Radiology Schedule',
    },
    {
      key: 'or-schedule',
      icon: <CalendarOutlined />,
      label: 'OR Schedule',
    },
    {
      key: 'view-or-record',
      icon: <UserOutlined />,
      label: 'View OR Record',
    },
  ];

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultOpenKeys={['opd-emr']}
      defaultSelectedKeys={['opd-emr']}
      items={menuItems}
      className="border-r-0"
    />
  );
}
