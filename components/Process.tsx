import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import PortfolioLockedModal from './PortfolioLockedModal';

// ─── Placeholder Visual Cards ─────────────────────────────────────────────────

const AuditCard = () => (
  <div className="relative w-full h-full min-h-[280px] rounded-[50px] overflow-hidden">
    <img
      src="https://i.imgur.com/Tie7h5W.jpg"
      alt="Audit visual"
      className="w-full h-full object-cover object-center"
    />
  </div>
);




const IslandsCard = () => (
  <div className="relative w-full h-full min-h-[260px] rounded-[50px] overflow-hidden">
    <img
      src="https://i.imgur.com/uNdbi2u.jpg"
      alt="As 4 Ilhas"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

const ImplementationCard = () => (
  <div className="relative w-full h-full min-h-[260px] rounded-[50px] overflow-hidden">
    <img
      src="https://i.imgur.com/ymPJyYV.jpg"
      alt="Pré-Implementação visual"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

const LaunchCard = () => (
  <div className="relative w-full h-full min-h-[260px] rounded-[50px] overflow-hidden">
    <img
      src="https://i.imgur.com/BCe8x2N.jpg"
      alt="Lançamento"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

const visualCards = [AuditCard, IslandsCard, ImplementationCard, LaunchCard];

// ─── Main Component ────────────────────────────────────────────────────────────

const Process: React.FC = () => {
  const { t } = useLanguage();
  const [isPortfolioLockedOpen, setIsPortfolioLockedOpen] = useState(false);

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPortfolioLockedOpen(true);
  };

  const steps = t('process.steps').map((step: any, index: number) => ({
    ...step,
    id: `0${index + 1}`,
    Visual: visualCards[index],
  }));

  return (
    <section id="proceso" className="relative py-14 sm:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent2/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6">
            {t('process.title')}{' '}
            <span style={{ color: '#22c55e' }}>{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl leading-relaxed max-w-none mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Center vertical guide line — hidden on mobile */}
          <div className="hidden sm:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center pointer-events-none z-10">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-300 dark:via-white/10 to-transparent" />
          </div>

          <div className="space-y-12 sm:space-y-24">
            {steps.map((step: any, index: number) => {
              const isEven = index % 2 === 0;
              const Visual = step.Visual;

              const textBlock = (
                <div className="flex flex-col justify-center h-full">
                  {/* Big watermark number */}
                  <span
                    className="font-poppins font-bold leading-none select-none mb-4 text-white"
                    style={{
                      fontSize: 'clamp(48px, 15vw, 100px)',
                      filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.35))'
                    }}
                  >
                    {step.id}
                  </span>
                  <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-poppins text-gray-500 dark:text-gray-400 text-base leading-relaxed sm:max-w-sm">
                    {step.description}
                  </p>
                </div>
              );

              const visualBlock = (
                <motion.div
                  className="rounded-[30px] sm:rounded-[50px] overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm h-full"
                  whileHover={{
                    scale: 1.015,
                    y: -3,
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Visual />
                </motion.div>
              );

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.82, y: 48, rotateX: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.08,
                  }}
                  style={{ transformPerspective: 1000 }}
                >
                  {/* Mobile layout: stacked (visual top, text bottom) */}
                  <div className="flex flex-col gap-6 sm:hidden">
                    <div className="rounded-[30px] overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
                      <Visual />
                    </div>
                    <div className="px-2">{textBlock}</div>
                  </div>

                  {/* Desktop layout: alternating 3-column grid */}
                  <div className="relative hidden sm:grid grid-cols-[1fr_40px_1fr] items-start gap-0">
                    {/* Left column */}
                    <div className="pr-12 flex justify-start">
                      {isEven ? textBlock : visualBlock}
                    </div>

                    {/* Center dot */}
                    <div className="flex flex-col items-center justify-center relative z-20 self-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black" />
                    </div>

                    {/* Right column */}
                    <div className="pl-12">
                      {isEven ? visualBlock : textBlock}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Portfolio CTA */}
        <div className="mt-24 text-center">
          <a
            href="#"
            onClick={handlePortfolioClick}
            className="group relative inline-flex items-center rounded-full bg-gray-100 dark:bg-white/10 backdrop-blur-md p-1.5 pr-10 transition-all duration-500 hover:bg-gray-200 dark:hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl active:scale-95 border border-gray-200 dark:border-white/5"
          >
            <div className="bg-white px-10 py-4 rounded-full shadow-lg text-[#111] font-bold border border-gray-100 transition-transform duration-500 ease-in-out group-hover:translate-x-5 relative z-10">
              <span className="tracking-tight">{t('services.cta_portfolio')}</span>
            </div>
            <div className="absolute right-6 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-0">
              <ArrowRight size={22} className="text-[#111] dark:text-white" />
            </div>
          </a>
        </div>

      </div>

      <PortfolioLockedModal isOpen={isPortfolioLockedOpen} onClose={() => setIsPortfolioLockedOpen(false)} />
    </section>
  );
};

export default Process;