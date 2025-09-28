import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import i18n from '../i18n/i18n';

interface LanguageState {
  currentLanguage: 'fr' | 'en';
  setLanguage: (language: 'fr' | 'en') => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      currentLanguage: 'fr',
      setLanguage: (language: 'fr' | 'en') => {
        i18n.changeLanguage(language);
        set({ currentLanguage: language });
      },
      toggleLanguage: () => {
        const currentLang = get().currentLanguage;
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
        set({ currentLanguage: newLang });
      },
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.currentLanguage) {
          i18n.changeLanguage(state.currentLanguage);
        }
      },
    }
  )
);