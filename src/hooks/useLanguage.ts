import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../stores/languageStore';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();
  const { currentLanguage, setLanguage, toggleLanguage } = useLanguageStore();

  const changeLanguage = (language: 'fr' | 'en') => {
    setLanguage(language);
  };

  const getCurrentLanguage = () => {
    return currentLanguage;
  };

  const isCurrentLanguage = (language: 'fr' | 'en') => {
    return currentLanguage === language;
  };

  return {
    t,
    i18n,
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    getCurrentLanguage,
    isCurrentLanguage,
  };
};