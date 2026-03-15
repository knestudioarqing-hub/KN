import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import PortfolioLockedModal from './PortfolioLockedModal';
import { motion } from 'framer-motion';

const ServiceCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => {
  const placeholderImages = [
    "https://i.imgur.com/zO6mVMb.jpg",
    "https://i.imgur.com/dgcLMys.jpg",
    "https://i.imgur.com/GgzTo03.jpg"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-4 sm:p-5"
      style={{ minHeight: 'auto' }}
    >
      {/* Text area */}
      <div className="mb-4 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors leading-tight">
          {title}
        </h3>
        <p
          className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Browser mockup */}
      <div className="mt-auto flex-shrink-0 w-full bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.08)] border border-gray-200 dark:border-white/10 overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.02]">
        <div className="h-6 sm:h-7 w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-white/5 flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <img
          src={placeholderImages[index]}
          alt={title}
          className="w-full h-auto object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          style={{ maxHeight: '180px' }}
        />
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-accent2/5 to-transparent pointer-events-none rounded-[20px] sm:rounded-[28px]" />
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [isPortfolioLockedOpen, setIsPortfolioLockedOpen] = useState(false);

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPortfolioLockedOpen(true);
  };

  return (
    <section
      id="servicios"
      className="relative py-12 sm:py-16 overflow-hidden transition-colors duration-500 bg-white dark:bg-black"
    >
      {/* Glows — kept outside the card so they bleed through */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent2/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-accent1/5 blur-[140px] rounded-full pointer-events-none" />

      {/* ── Rounded container — full width ── */}
      <div className="px-3 sm:px-6 lg:px-8">
        <div className="bg-brand-secondary dark:bg-neutral-900 rounded-[24px] sm:rounded-[32px] border border-gray-200 dark:border-white/5 px-5 sm:px-16 py-10 sm:py-20">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-20">
            <h2 className="text-2xl sm:text-5xl font-bold font-sans tracking-tight antialiased mb-4 sm:mb-6 text-gray-900 dark:text-white transition-colors text-balance">
              {t('services.title')} <br className="hidden sm:block" />
              <span style={{ color: '#22c55e' }}>{t('services.titleHighlight')}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl leading-relaxed transition-colors px-2 sm:px-4 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* 3 Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {t('services.items').slice(0, 3).map((service: any, index: number) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>


      <PortfolioLockedModal isOpen={isPortfolioLockedOpen} onClose={() => setIsPortfolioLockedOpen(false)} />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-accent2/30 shadow-[0_0_15px_rgba(43,182,115,0.5)] z-50 md:hidden" />
    </section>
  );

};

export default Services;