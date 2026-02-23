import React, { useState, useEffect } from 'react';
import { ArrowRight, Rocket, Monitor, Layers, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import PortfolioLockedModal from './PortfolioLockedModal';

// Abstract SVG Illustrations
const Illustration1 = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s1g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2BB673" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#1F6FEB" stopOpacity="0.4" />
      </linearGradient>
      <filter id="s1blur"><feGaussianBlur stdDeviation="16" /></filter>
    </defs>
    <ellipse cx="100" cy="110" rx="85" ry="65" fill="url(#s1g1)" filter="url(#s1blur)" />
    <path d="M20 160 Q70 90 130 125 Q170 148 190 80" stroke="#2BB673" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
    <path d="M20 180 Q80 110 140 145 Q180 168 190 100" stroke="#2BB673" strokeWidth="1" strokeOpacity="0.3" fill="none" />
    <path d="M20 140 Q60 70 120 105 Q160 128 190 60" stroke="#1F6FEB" strokeWidth="1" strokeOpacity="0.35" fill="none" />
    <circle cx="130" cy="127" r="3.5" fill="#2BB673" fillOpacity="0.9" />
    <circle cx="68" cy="148" r="2.5" fill="#1F6FEB" fillOpacity="0.7" />
    <circle cx="180" cy="88" r="2" fill="#2BB673" fillOpacity="0.6" />
  </svg>
);

const Illustration2 = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s2g1" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1F6FEB" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#062F2E" stopOpacity="0.3" />
      </linearGradient>
      <filter id="s2blur"><feGaussianBlur stdDeviation="15" /></filter>
    </defs>
    <ellipse cx="100" cy="110" rx="80" ry="65" fill="url(#s2g1)" filter="url(#s2blur)" />
    {[50, 100, 150].map(x => <line key={x} x1={x} y1="40" x2={x} y2="185" stroke="#1F6FEB" strokeOpacity="0.15" strokeWidth="1" />)}
    {[80, 120, 160].map(y => <line key={y} x1="20" y1={y} x2="180" y2={y} stroke="#1F6FEB" strokeOpacity="0.15" strokeWidth="1" />)}
    <circle cx="100" cy="80" r="5" fill="#1F6FEB" fillOpacity="0.9" />
    <circle cx="150" cy="160" r="4" fill="#2BB673" fillOpacity="0.8" />
    <circle cx="50" cy="120" r="3" fill="#1F6FEB" fillOpacity="0.5" />
    <path d="M50 120 L100 80 L150 160" stroke="#1F6FEB" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
  </svg>
);

const Illustration3 = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s3g1" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2BB673" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#1F6FEB" stopOpacity="0.2" />
      </linearGradient>
      <filter id="s3blur"><feGaussianBlur stdDeviation="14" /></filter>
    </defs>
    <circle cx="100" cy="110" r="75" fill="url(#s3g1)" filter="url(#s3blur)" />
    <circle cx="100" cy="110" r="62" stroke="#2BB673" strokeOpacity="0.18" strokeWidth="1" fill="none" />
    <circle cx="100" cy="110" r="42" stroke="#2BB673" strokeOpacity="0.28" strokeWidth="1" fill="none" />
    <circle cx="100" cy="110" r="22" stroke="#2BB673" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
    <circle cx="100" cy="110" r="5" fill="#2BB673" fillOpacity="0.9" />
    <line x1="100" y1="110" x2="155" y2="62" stroke="#2BB673" strokeOpacity="0.25" strokeWidth="1" />
    <line x1="100" y1="110" x2="45" y2="62" stroke="#1F6FEB" strokeOpacity="0.25" strokeWidth="1" />
  </svg>
);

const Illustration4 = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s4g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1F6FEB" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#2BB673" stopOpacity="0.4" />
      </linearGradient>
      <filter id="s4blur"><feGaussianBlur stdDeviation="14" /></filter>
    </defs>
    <ellipse cx="100" cy="110" rx="80" ry="60" fill="url(#s4g1)" filter="url(#s4blur)" />
    <path d="M20 105 Q50 80 80 105 Q110 130 140 105 Q170 80 190 105" stroke="#1F6FEB" strokeOpacity="0.55" strokeWidth="1.5" fill="none" />
    <path d="M20 128 Q50 103 80 128 Q110 153 140 128 Q170 103 190 128" stroke="#1F6FEB" strokeOpacity="0.3" strokeWidth="1" fill="none" />
    <path d="M20 82 Q50 57 80 82 Q110 107 140 82 Q170 57 190 82" stroke="#2BB673" strokeOpacity="0.3" strokeWidth="1" fill="none" />
    <circle cx="80" cy="105" r="3.5" fill="#1F6FEB" fillOpacity="0.9" />
    <circle cx="140" cy="105" r="3.5" fill="#2BB673" fillOpacity="0.9" />
  </svg>
);

const illustrations = [Illustration1, Illustration2, Illustration3, Illustration4];
const cardNumbers = ['01', '02', '03', '04'];

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [isPortfolioLockedOpen, setIsPortfolioLockedOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPortfolioLockedOpen(true);
  };

  // Theme-aware colors
  const theme = {
    bg: isDark ? '#0a0a0a' : '#ffffff',
    cardBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
    cardBgActive: isDark
      ? 'linear-gradient(160deg, rgba(43,182,115,0.08) 0%, rgba(10,10,10,1) 55%)'
      : 'linear-gradient(160deg, rgba(43,182,115,0.07) 0%, rgba(248,252,249,1) 55%)',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.09)',
    borderActive: 'rgba(43,182,115,0.3)',
    numberWatermark: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)',
    numberWatermarkActive: isDark ? 'rgba(43,182,115,0.12)' : 'rgba(43,182,115,0.15)',
    verticalTitle: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)',
    title: isDark ? '#ffffff' : '#0f172a',
    description: isDark ? 'rgba(155,165,175,1)' : 'rgba(80,90,100,1)',
    shadowActive: isDark
      ? '0 0 0 1px rgba(43,182,115,0.1), 0 30px 80px -20px rgba(43,182,115,0.18), 0 4px 30px rgba(0,0,0,0.5)'
      : '0 0 0 1px rgba(43,182,115,0.15), 0 20px 60px -20px rgba(43,182,115,0.15), 0 4px 20px rgba(0,0,0,0.08)',
  };

  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-32 overflow-hidden transition-colors duration-500"
      style={{ background: theme.bg }}
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent2/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-accent1/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h2
            className="text-3xl sm:text-4xl font-bold font-sans tracking-tight antialiased mb-6 transition-colors text-balance max-w-[320px] sm:max-w-4xl mx-auto"
            style={{ color: theme.title }}
          >
            {t('services.title')} <br className="hidden sm:block" />
            <span className="text-brand-accent2">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed transition-colors px-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Horizontal expanding cards — single row */}
        <div
          className="flex flex-col md:flex-row gap-3 max-w-6xl mx-auto"
          style={{ minHeight: '440px' }}
        >
          {t('services.items').map((service: any, index: number) => {
            const Illus = illustrations[index];
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 font-dm"
                style={{
                  flex: isActive ? '3 0 0%' : '1 0 0%',
                  minWidth: '80px',
                  background: isActive ? theme.cardBgActive : theme.cardBg,
                  border: `1px solid ${isActive ? theme.borderActive : theme.border}`,
                  boxShadow: isActive ? theme.shadowActive : 'none',
                  transition: 'flex 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Top-left neon corner on active */}
                {isActive && (
                  <>
                    <div className="absolute top-0 left-0 w-20 h-[1.5px] bg-gradient-to-r from-brand-accent2 to-transparent pointer-events-none z-10" />
                    <div className="absolute top-0 left-0 w-[1.5px] h-20 bg-gradient-to-b from-brand-accent2 to-transparent pointer-events-none z-10" />
                  </>
                )}

                {/* COLLAPSED: number top | icon + horizontal title bottom */}
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-between items-start"
                  style={{
                    opacity: isActive ? 0 : 1,
                    pointerEvents: isActive ? 'none' : 'auto',
                    transition: 'opacity 0.25s ease',
                  }}
                >
                  {/* Top: Large number watermark */}
                  <span
                    className="font-medium select-none leading-none tracking-tight font-albert"
                    style={{ color: theme.numberWatermark, fontVariantNumeric: 'tabular-nums', fontSize: '60px' }}
                  >
                    {cardNumbers[index]}.
                  </span>

                  {/* Bottom: Icon box + Title centered */}
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
                    >
                      {React.createElement([Rocket, Monitor, Layers, Globe][index], {
                        size: 22,
                        className: isDark ? 'text-white/50' : 'text-black/50'
                      })}
                    </div>
                    {/* Fixed height container for title to keep icons aligned */}
                    <div className="h-10 flex items-start justify-start">
                      <p
                        className="text-[14px] font-bold leading-tight text-left font-dm"
                        style={{ color: theme.title }}
                      >
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* EXPANDED: illustration + text */}
                <div
                  className="absolute inset-0 flex flex-col"
                  style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition: isActive
                      ? 'opacity 0.35s ease 0.28s'
                      : 'opacity 0.2s ease',
                  }}
                >
                  {/* Illustration (top half) */}
                  <div className="relative flex-1 overflow-hidden">
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-out"
                      style={{ transform: isActive ? 'scale(1)' : 'scale(0.92)' }}
                    >
                      <Illus />
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="mx-6 h-px flex-shrink-0"
                    style={{ background: `${theme.borderActive}` }}
                  />

                  {/* Text (bottom half) */}
                  <div className="p-6 pt-5 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(43,182,115,0.12)', border: '1px solid rgba(43,182,115,0.35)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent2 block" />
                      </div>
                      <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: 'rgba(43,182,115,0.7)' }}
                      >
                        {cardNumbers[index]}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold mb-2 leading-snug font-dm"
                      style={{ color: theme.title }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: theme.description }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <a
            href="#"
            onClick={handlePortfolioClick}
            className="group relative inline-flex items-center rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-md p-1.5 pr-10 transition-all duration-500 hover:bg-gray-300/80 dark:hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] active:scale-95"
          >
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
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-accent2/30 shadow-[0_0_15px_rgba(43,182,115,0.5)] z-50 md:hidden" />
    </section>
  );
};

export default Services;