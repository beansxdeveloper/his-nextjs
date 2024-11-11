'use client';

import { useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../locales/${language}/${namespace}.json`)
    )
  )
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    supportedLngs: ['en', 'th', 'ar'],
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (document.documentElement.dir !== i18n.dir()) {
      document.documentElement.dir = i18n.dir();
    }
  }, [i18n]);

  return children;
}