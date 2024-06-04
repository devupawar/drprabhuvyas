import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translate';
import translationHI from './locales/hi/translate';
import translationMR from './locales/mr/translate';


const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
  mr: {
    translation: translationMR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
