import React, { useState } from 'react';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import VideoModal from './VideoModal';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-colors duration-500 flex flex-col justify-center rounded-b-[50px] md:rounded-b-[90px] z-10 pb-8"
      style={{ backgroundColor: '#F4F7F9' }}
    >
      {/* ── FIGMA BACKGROUND IMAGE ── covers full hero */}
      {/* Light mode desktop: Figma-composed landscape image */}
      <div
        className="absolute inset-0 z-0 dark:hidden hidden md:block"
        style={{
          backgroundImage: 'url(https://i.imgur.com/0kT8MIc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Light mode mobile: portrait image 1080x1920 */}
      <div
        className="absolute inset-0 z-0 dark:hidden md:hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/B2dqxQc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark mode desktop: landscape image + dark overlay */}
      <div className="absolute inset-0 z-0 hidden dark:md:block" style={{ backgroundColor: '#031515' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://i.imgur.com/0kT8MIc.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
          }}
        />
      </div>

      {/* Dark mode mobile: portrait image + dark overlay */}
      <div className="absolute inset-0 z-0 hidden dark:block dark:md:hidden" style={{ backgroundColor: '#031515' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://i.imgur.com/B2dqxQc.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
          }}
        />
      </div>

      {/* Noise texture overlay — inline SVG, no HTTP request */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06] brightness-100 contrast-150 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
        {/* Mobile separator glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-accent1/30 shadow-[0_0_15px_rgba(31,111,235,0.5)] z-50 md:hidden"></div>
      </div>

      {/* Floating Widgets */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Booking Widget 1 - Lowered by another ~30px */}
        <div className="absolute top-[21%] left-[45%] animate-float" style={{ animationDuration: '8s' }}>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/60 dark:bg-brand-primary/20 backdrop-blur-md border border-white/60 dark:border-brand-accent1/20 shadow-xl">
            <div className="w-7 h-7 rounded-full bg-brand-accent2/10 flex items-center justify-center text-brand-accent2">
              <Calendar size={14} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase tracking-tighter text-gray-500 dark:text-gray-400 font-bold leading-tight">{t('hero.floating_booking')}</p>
              <p className="text-[11px] text-brand-primary dark:text-white font-medium leading-tight">{t('hero.floating_time')}</p>
            </div>
          </div>
        </div>

        {/* Booking Widget 2 */}
        <div className="absolute top-[68%] right-[5%] animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }}>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/60 dark:bg-brand-primary/20 backdrop-blur-md border border-white/60 dark:border-brand-accent1/20 shadow-xl">
            <div className="w-7 h-7 rounded-full bg-brand-accent1/10 flex items-center justify-center text-brand-accent1">
              <CheckCircle size={14} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase tracking-tighter text-gray-500 dark:text-gray-400 font-bold leading-tight">{t('hero.floating_checkout')}</p>
              <p className="text-[11px] text-brand-primary dark:text-white font-medium leading-tight">{t('hero.floating_sale')}</p>
            </div>
            <div className="ml-1 w-4 h-4 rounded-full bg-brand-accent2 flex items-center justify-center text-white">
              <CheckCircle size={8} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content — Left aligned */}
      <div className="relative z-10 w-full px-6 sm:px-16 lg:px-24 xl:px-32 flex flex-col items-start justify-center pt-[24px] sm:pt-[50px]">

        {/* Name Label */}
        <p
          className="font-poppins dark:text-gray-300 mb-[14px] tracking-wide"
          style={{ fontSize: 'clamp(13px, 3.5vw, 16px)', fontWeight: 300, color: '#3D3D3D' }}
        >
          Gianfranco N. | CEO KN Growth
        </p>

        {/* H1 */}
        <h1 className="font-poppins dark:text-white leading-tight mb-[15px]" style={{ fontSize: 'clamp(30px, 8vw, 50px)', color: '#171717', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)' }}>
          <span style={{ fontWeight: 400 }}>{t('hero.title1')}</span>
          <br />
          <span style={{
            fontWeight: 600,
            backgroundImage: 'linear-gradient(to right, #2BB673 0%, #1B764A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))'
          }}>
            {t('hero.title2')}
          </span>
        </h1>

        {/* H2 */}
        <p
          className="font-poppins dark:text-gray-300 mb-[35px] max-w-xl"
          style={{ fontSize: 'clamp(15px, 4vw, 20px)', fontWeight: 400, lineHeight: '1.6', color: '#171717' }}
        >
          <span dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />
        </p>

        {/* CTA Button */}
        <button
          onClick={() => window.open("https://calendly.com/contacto-kngrowth/30min", "_blank")}
          className="font-poppins py-3.5 text-white rounded-full font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-95 text-base whitespace-nowrap"
          style={{
            paddingLeft: '28px',
            paddingRight: '28px',
            background: 'linear-gradient(135deg, #34d47a 0%, #2BB673 45%, #1a9e5c 100%)',
            boxShadow: '0 8px 30px -6px rgba(43,182,115,0.6), inset 0 1px 0 rgba(255,255,255,0.18)',
          }}
        >
          {t('hero.ctaPrimary')}
        </button>

      </div>
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;