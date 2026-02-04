import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import DashboardPreview from './DashboardPreview';
import VideoModal from './VideoModal';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative pt-28 pb-0 sm:pt-40 sm:pb-0 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      {/* Background Stars Effect (Dark Mode only) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        {/* Stars - hidden in light mode */}
        <div className="hidden dark:block">
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-75"></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
        </div>
      </div>

      {/* The Massive Orange Glow (The "Horizon") */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] sm:w-[150%] h-[400px] sm:h-[600px] bg-brand-orange/10 dark:bg-brand-orange/20 blur-[80px] sm:blur-[120px] rounded-[100%] pointer-events-none z-0 translate-y-1/3 transition-colors duration-500"></div>
      
      {/* Another focused glow for the text area */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[400px] bg-brand-orange/5 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-orange/50 transition-colors cursor-pointer mb-6 sm:mb-8 group shadow-sm dark:shadow-none mx-auto max-w-full">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-brand-orange dark:group-hover:text-white transition-colors truncate">
            {t('hero.pill')}
          </span>
          <ArrowRight size={14} className="text-gray-400 group-hover:text-brand-orange transition-colors flex-shrink-0" />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 transition-colors duration-300 px-2">
          {t('hero.title1')} <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/60">
            {t('hero.title2')}
          </span>
        </h1>

        {/* Subheadline - Font size reduced to text-sm on mobile + tracking-tight */}
        <p className="max-w-2xl mx-auto text-sm sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed tracking-tight sm:tracking-normal transition-colors duration-300 px-4">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20 px-4">
          <button className="font-poppins w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,85,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,85,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
            {t('hero.ctaPrimary')}
          </button>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="font-poppins w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group shadow-sm dark:shadow-none text-sm sm:text-base"
          >
            <div className="w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={10} fill="currentColor" className="ml-0.5" />
            </div>
            <span>{t('hero.ctaSecondary')}</span>
          </button>
        </div>

        {/* Dashboard Preview Section (The bottom visual anchor) */}
        <div className="relative w-full max-w-6xl mx-auto z-20 -mb-16 sm:-mb-32 px-2 sm:px-0">
          <DashboardPreview />
          
          {/* Overlay gradient to fade bottom of dashboard into black/white */}
           <div className="absolute -bottom-1 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent z-30 pointer-events-none transition-colors duration-500"></div>
        </div>
        
      </div>

      {/* Final Section Gradient to ensure perfect blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-gray-50 to-transparent dark:from-black dark:to-transparent z-20 pointer-events-none transition-colors duration-500"></div>

      {/* Video Pop-up Modal */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;