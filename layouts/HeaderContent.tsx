'use client';

import { Button, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface HeaderContentProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function HeaderContent({ collapsed, setCollapsed }: HeaderContentProps) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    Cookies.remove('auth_token');
    router.push('/login');
  };

  const languageItems = [
    { key: 'th', label: 'ไทย' },
    { key: 'en', label: 'English' },
  ];

  const profileItems = [
    {
      key: 'profile',
      label: t('PROFILE.MY_PROFILE'),
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: t('PROFILE.LOGOUT'),
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  const handleLanguageChange = ({ key }: { key: string }) => {
    i18n.changeLanguage(key);
    Cookies.set('i18next', key);
  };

  return (
    <div className="flex justify-between items-center px-4">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
      />
      <div className="flex items-center space-x-4">
        <Dropdown
          menu={{
            items: languageItems,
            onClick: handleLanguageChange,
          }}
          placement="bottomRight"
        >
          <Button type="text" icon={<GlobalOutlined />} />
        </Dropdown>
        <Dropdown menu={{ items: profileItems }} placement="bottomRight">
          <Button type="text" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
}