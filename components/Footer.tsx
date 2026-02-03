import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-[#101010] py-12 border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 font-medium tracking-wide transition-colors">
          {t('footer.copyright')}
        </p>
        <h1 className="text-[12vw] sm:text-[10rem] leading-[0.8] font-bold text-black dark:text-[#EAEAEA] opacity-20 tracking-tighter select-none whitespace-nowrap transition-colors">
          KN GROWTH
        </h1>
      </div>
    </footer>
  );
};

export default Footer;