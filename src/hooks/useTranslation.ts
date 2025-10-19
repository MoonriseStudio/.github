import { useMemo } from 'react';
import { translations, Language } from '@/i18n/translations';

export const useTranslation = () => {
  const language: Language = useMemo(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ru')) {
      return 'ru';
    }
    return 'en';
  }, []);

  const t = translations[language];

  return { t, language };
};
