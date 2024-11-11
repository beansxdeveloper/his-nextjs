import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, App as AntdApp } from 'antd';
import { I18nProvider } from './providers/i18n';
import QueryProvider from '@/providers/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js with Ant Design',
  description: 'Modern web application with Next.js and Ant Design',
  authors: [{ name: 'StackBlitz' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#4B7B7D',
                borderRadius: 6,
              },
            }}
          >
            <QueryProvider>
              <AntdApp>
                <I18nProvider>
                  {children}
                </I18nProvider>
              </AntdApp>
            </QueryProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}