'use client';

import { Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  CalendarOutlined,
  DollarOutlined,
  BarcodeOutlined,
  DatabaseOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SideMenuProps {
  collapsed: boolean;
}

export function SideMenu({ collapsed }: SideMenuProps) {
  const { t } = useTranslation();
  const router = useRouter();

  const menuItems = [
    {
      key: 'registration',
      icon: <TeamOutlined />,
      label: 'Registration',
    },
    {
      key: 'opd',
      icon: <MedicineBoxOutlined />,
      label: 'OPD',
      children: [
        {
          key: 'doctor-worklist',
          icon: <FileTextOutlined />,
          label: 'Doctor Worklist',
          onClick: () => router.push('/doctor-worklist'),
        },
        {
          key: 'appointments',
          icon: <CalendarOutlined />,
          label: 'Appointments',
        },
        {
          key: 'search-and-book',
          icon: <DatabaseOutlined />,
          label: 'Search And Book',
        },
        {
          key: 'careprovider-schedule',
          icon: <CalendarOutlined />,
          label: 'Careprovider Schedule',
        },
        {
          key: 'request-appointment',
          icon: <CalendarOutlined />,
          label: 'Request Appointment',
        },
      ],
    },
    {
      key: 'inpatient',
      icon: <MedicineBoxOutlined />,
      label: 'Inpatient',
    },
    {
      key: 'laboratory',
      icon: <BarcodeOutlined />,
      label: 'Laboratory',
    },
    {
      key: 'radiology',
      icon: <CloudUploadOutlined />,
      label: 'Radiology',
    },
    {
      key: 'op-billing',
      icon: <DollarOutlined />,
      label: 'OP Billing',
    },
    {
      key: 'ip-billing',
      icon: <DollarOutlined />,
      label: 'IP Billing',
    },
  ];

  return (
    <>
      <div className="p-4">
        {/* <Image
          src="/chg-logo.png"
          alt="CHG Logo"
          width={collapsed ? 32 : 120}
          height={collapsed ? 32 : 40}
          className="transition-all duration-300"
        /> */}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={['opd']}
        defaultSelectedKeys={['doctor-worklist']}
        items={menuItems}
        className="border-r-0"
      />
    </>
  );
}