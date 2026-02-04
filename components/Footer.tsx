import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-white dark:bg-black py-16 sm:py-24 overflow-hidden transition-colors duration-500">
      {/* Background Noise overlay to match Stats section */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 font-medium tracking-wide transition-colors">
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