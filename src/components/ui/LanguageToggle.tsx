import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

export const LanguageToggle: React.FC = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-16 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${currentLanguage === 'fr' ? 'English' : 'French'}`}
    >
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {currentLanguage === 'fr' ? 'FR' : 'EN'}
      </span>
    </motion.button>
  );
};