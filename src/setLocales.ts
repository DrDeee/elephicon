import i18next from 'i18next';

import en from './locales/en.json';
import ja from './locales/ja.json';
import de from './locales/de.json';

export const setLocales = (locale: string): void => {
  i18next.init({
    lng: locale,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ja: { translation: ja },
      de: { translation: de },
    },
  });
};
