import React, { useState } from 'react';
import { Rocket, Monitor, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import PortfolioLockedModal from './PortfolioLockedModal';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [isPortfolioLockedOpen, setIsPortfolioLockedOpen] = useState(false);

  const services = t('services.items').map((item: any, index: number) => ({
    ...item,
    icon: [Rocket, Monitor, Layers][index]
  }));

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPortfolioLockedOpen(true);
  };

  return (
    <section id="servicios" className="relative py-20 sm:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight antialiased text-gray-900 dark:text-white mb-6 transition-colors text-balance max-w-[300px] sm:max-w-4xl mx-auto">
            {t('services.title')} <br className="hidden sm:block" />
            <span className="text-brand-orange">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed transition-colors px-4 lg:whitespace-nowrap">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service: any, index: number) => (
            <div key={index} className="group relative p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 hover:border-brand-orange/30 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              {/* Corner Neon Effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                {/* Top Left Corner */}
                <div className="absolute top-0 left-0 w-24 h-[1.5px] bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-[1.5px] h-24 bg-gradient-to-b from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-[1.5px] bg-gradient-to-l from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-[1.5px] h-24 bg-gradient-to-t from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Corner Sparkles */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff5500]"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff5500]"></div>
              </div>

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange/5 blur-3xl rounded-full group-hover:bg-brand-orange/10 transition-colors"></div>

              <div className="absolute bottom-8 right-8 text-gray-400 dark:text-gray-500 group-hover:text-brand-orange transition-colors z-10">
                <service.icon size={28} />
              </div>

              <h3 className="text-[25px] font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange group-hover:drop-shadow-[0_0_10px_rgba(255,85,0,0.3)] transition-all duration-500 relative z-10">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 relative z-10">{service.description}</p>

              {service.tags && service.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {service.tags.map((tag: string) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white dark:bg-white/5 text-gray-500 border border-gray-200 dark:border-white/5">{tag}</span>
                  ))}
                </div>
              )}


            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a href="#" onClick={handlePortfolioClick} className="group relative inline-flex items-center rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-md p-1.5 pr-10 transition-all duration-500 hover:bg-gray-300/80 dark:hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] active:scale-95">
            <div className="bg-white px-10 py-3.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-[#111] font-bold border border-white/50 transition-transform duration-500 ease-in-out group-hover:translate-x-5 relative z-10">
              <span className="tracking-tight">{t('services.cta_portfolio')}</span>
            </div>
            <div className="absolute right-6 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-0">
              <ArrowRight size={22} className="text-[#111] dark:text-white" />
            </div>
          </a>
        </div>
      </div>

      <PortfolioLockedModal isOpen={isPortfolioLockedOpen} onClose={() => setIsPortfolioLockedOpen(false)} />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-orange/50 shadow-[0_0_15px_rgba(255,85,0,1)] z-50 md:hidden"></div>
    </section>
  );
};

export default Services;