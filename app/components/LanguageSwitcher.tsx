'use client';

import { useTranslation } from 'react-i18next';
import { Button, Space } from 'antd';
import { languages } from '../i18n/settings';
import { useEffect, useState } from 'react';
import '../i18n/client';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Space className="fixed top-4 right-4">
      {languages.map((lng) => (
        <Button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          type={i18n.language === lng ? 'primary' : 'default'}
          className={i18n.language === lng ? 'font-bold' : ''}
        >
          {lng.toUpperCase()}
        </Button>
      ))}
    </Space>
  );
}