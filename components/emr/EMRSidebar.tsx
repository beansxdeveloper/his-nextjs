'use client';

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MedicineBoxOutlined,
  HeartOutlined,
  AlertOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  FormOutlined,
  FileDoneOutlined,
  MailOutlined,
  ScheduleOutlined,
  EyeOutlined,
} from '@ant-design/icons';

export default function EMRSidebar() {
  const menuItems = [
    {
      key: 'opd-emr',
      icon: <AppstoreOutlined />,
      label: 'OPD EMR',
    },
    {
      key: 'ipd-emr',
      icon: <MedicineBoxOutlined />,
      label: 'IPD EMR',
    },
    {
      key: 'anc',
      icon: <HeartOutlined />,
      label: 'ANC',
    },
    {
      key: 'charting',
      icon: <FileTextOutlined />,
      label: 'Charting',
    },
    {
      key: 'allergies',
      icon: <AlertOutlined />,
      label: 'Allergies',
      className: 'text-red-500',
    },
    {
      key: 'alerts',
      icon: <AlertOutlined />,
      label: 'Alerts',
    },
    {
      key: 'orders',
      icon: <ExperimentOutlined />,
      label: 'Orders',
    },
    {
      key: 'orders-checklist',
      icon: <FileTextOutlined />,
      label: 'Orders Checklist',
    },
    {
      key: 'med-reconcile',
      icon: <FileDoneOutlined />,
      label: 'Med Reconcile',
    },
    {
      key: 'form',
      icon: <FormOutlined />,
      label: 'Form',
    },
    {
      key: 'medical-document',
      icon: <FileTextOutlined />,
      label: 'Medical Document',
    },
    {
      key: 'referral',
      icon: <MailOutlined />,
      label: 'Referral',
    },
    {
      key: 'tasks',
      icon: <FileTextOutlined />,
      label: 'Tasks',
    },
    {
      key: 'death-record',
      icon: <FileTextOutlined />,
      label: 'Death Record',
    },
    {
      key: 'emar',
      icon: <FileTextOutlined />,
      label: 'eMAR',
    },
    {
      key: 'appointments',
      icon: <ScheduleOutlined />,
      label: 'Appointments',
    },
    {
      key: 'radiology-schedule',
      icon: <ScheduleOutlined />,
      label: 'Radiology Schedule',
    },
    {
      key: 'or-schedule',
      icon: <ScheduleOutlined />,
      label: 'OR Schedule',
    },
    {
      key: 'view-or-record',
      icon: <EyeOutlined />,
      label: 'View OR Record',
    },
  ];

  return (
    <div className="w-64 bg-white border-l">
      <Menu
        mode="vertical"
        items={menuItems}
        className="h-full"
        defaultSelectedKeys={['opd-emr']}
      />
    </div>
  );
}