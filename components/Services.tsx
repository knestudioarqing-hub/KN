import React from 'react';
import { Rocket, Monitor, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = t('services.items').map((item: any, index: number) => ({
    ...item,
    icon: [Rocket, Monitor, Layers][index] // Re-map icons to translated items
  }));

  return (
    <section id="servicios" className="relative py-20 sm:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      
      {/* Lighting Effects - High Contrast */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            {t('services.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-200">
              {t('services.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors px-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service: any, index: number) => (
            <div 
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 hover:border-brand-orange/30 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-none overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              {/* Internal subtle lighting for card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange/5 blur-3xl rounded-full group-hover:bg-brand-orange/10 transition-colors"></div>

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-orange/50 transition-colors shadow-sm dark:shadow-none">
                <service.icon className="text-gray-500 dark:text-gray-300 group-hover:text-brand-orange transition-colors" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {service.tags.map((tag: string) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white dark:bg-white/5 text-gray-500 border border-gray-200 dark:border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-white/50 group-hover:text-brand-orange dark:group-hover:text-white transition-colors cursor-pointer relative z-10">
                <span>{t('services.more')}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;