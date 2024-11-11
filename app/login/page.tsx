'use client';

import { useState } from 'react';
import { Form, Input, Button, App, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useAuth } from '@/hooks/useAuth';
import '../i18n/client';

export default function Login() {
  const { message } = App.useApp();
  const { t } = useTranslation('common');
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const onFinish = async (values: { username: string; password: string }) => {
    login(
      { username: values.username, password: values.password },
      {
        onError: (error) => {
          message.error(t('LOGIN.MESSAGES.ACCESS_DENIED'));
        },
        onSuccess: () => {
          message.success(t('LOGIN.MESSAGES.SUCCESS'));
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-[60%] bg-[#4B7B7D] flex-col items-center justify-center p-8 text-white">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/chg-logo.png"
            alt={t('HOSPITAL.NAME')}
            width={150}
            height={150}
            priority
          />
          <h1 className="text-4xl font-bold text-center">
            {t('HOSPITAL.NAME')}
          </h1>
        </div>
      </div>

      <div className="w-full lg:w-[40%] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="absolute top-4 right-4">
            <LanguageSwitcher />
          </div>
          
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold">{t('LOGIN.SIGNIN')}</h2>
            <p className="mt-2 text-gray-600">{t('LOGIN.TITLE')}</p>
          </div>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            className="space-y-6"
            initialValues={{ username: 'admin', password: 'admin' }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: t('LOGIN.LOGINNAME.PLEASE_ENTER') }]}
            >
              <Input 
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder={t('LOGIN.LOGINNAME.LABEL')}
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: t('LOGIN.PASSWORD.PLEASE_ENTER') }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder={t('LOGIN.PASSWORD.LABEL')}
                className="rounded-lg"
                iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{t('LOGIN.REMEMBER')}</Checkbox>
              </Form.Item>

              <Button type="link" className="p-0">
                {t('LOGIN.FORGOT')}
              </Button>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                block
                className="h-12 rounded-lg"
              >
                {t('LOGIN.BUTTON')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}