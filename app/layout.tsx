// import './globals.css';
'use client';

import './globals.css';
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider, App as AntdApp } from "antd";
import { I18nProvider } from "@/i18n";
import StoreProvider from "./StoreProvider";
import theme from "@/theme/themeConfig";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Next.js with Ant Design",
//   description: "Modern web application with Next.js and Ant Design",
//   authors: [{ name: "StackBlitz" }],
// };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Enable client-side rendering after the initial render
  }, []);

  if (!isClient) {
    return null; // Prevents server-client mismatch during hydration
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ConfigProvider
            theme={theme}
          >
              <I18nProvider>{children}</I18nProvider>
          </ConfigProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
