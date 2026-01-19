import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import id from './locales/id.json';
import ja from './locales/ja.json';

export type Locale = 'id' | 'en' | 'ja';

export const locales: Locale[] = ['id', 'en', 'ja'];

export const localeNames: Record<Locale, string> = {
  id: 'Indonesia',
  en: 'English',
  ja: '日本語',
};

export const localeFlags: Record<Locale, string> = {
  id: '🇮🇩',
  en: '🇺🇸',
  ja: '🇯🇵',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
      ja: { translation: ja },
    },
    supportedLngs: locales,
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // IMPORTANT: do NOT detect language from URL path.
      // With react-router routes like /projects/:slug, path detection could
      // incorrectly set the language to "projects" and break translations.
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
