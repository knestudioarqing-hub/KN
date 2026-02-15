import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const staticData = [
    { name: "João Silva" },
    { name: "Ana Oliveira" },
    { name: "Pedro Santos" }
  ];

  const testimonials = t('testimonials.items').map((item: any, index: number) => ({
    ...item,
    ...staticData[index]
  }));

  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-gray-50 dark:bg-black overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight antialiased text-gray-900 dark:text-white mb-6 transition-colors">
            {t('testimonials.title')} <br />
            <span className="text-brand-orange">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors lg:whitespace-nowrap">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 hover:border-brand-orange/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-6 right-6 text-gray-100 dark:text-white/[0.03] group-hover:text-gray-200 dark:group-hover:text-white/[0.05] transition-colors pointer-events-none">
                <Quote size={80} fill="currentColor" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6 text-brand-orange">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 flex-grow transition-colors">"{t.content}"</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;