import React, { useState, useEffect, useRef } from 'react';
import { Layers, Globe, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Hook personalizado para la animación de conteo
const useCounter = (end: number, duration: number = 2000, start: boolean, isFloat: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth effect (easeOutExpo)
      const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentCount = easeValue * end;
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return isFloat ? count.toFixed(1) : Math.floor(count);
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animar solo una vez
        }
      },
      { threshold: 0.3 } // Disparar cuando el 30% sea visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const countProjects = useCounter(50, 2000, isVisible);
  const countCountries = useCounter(10, 2000, isVisible);
  const countRating = useCounter(4.9, 2000, isVisible, true);

  const stats = [
    {
      id: 1,
      value: countProjects,
      suffix: '+',
      label: t('stats.projects.label'),
      icon: Layers,
      description: t('stats.projects.desc')
    },
    {
      id: 2,
      value: countCountries,
      suffix: '',
      label: t('stats.countries.label'),
      icon: Globe,
      description: t('stats.countries.desc')
    },
    {
      id: 3,
      value: countRating,
      suffix: '/5',
      label: t('stats.rating.label'),
      icon: Star,
      description: t('stats.rating.desc')
    }
  ];

  return (
    <section ref={sectionRef} className="relative pt-16 pb-16 sm:pt-20 sm:pb-24 bg-white dark:bg-black border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-500">

      {/* Background Grid & Glow - Enhanced */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Top Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent shadow-[0_0_30px_rgba(255,85,0,0.5)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10 mb-16">

          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">

              {/* Icon & Label Container */}
              <div className="flex items-center gap-2 mb-4 text-brand-orange/80">
                <stat.icon size={20} />
                <span className="text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>

              {/* The Number */}
              <div className="relative mb-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/40 tracking-tight transition-colors">
                  {stat.value}{stat.suffix}
                </span>
                {/* Subtle text shadow/glow behind the number */}
                <span className="absolute left-0 top-0 text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-orange/10 blur-xl select-none pointer-events-none -z-10">
                  {stat.value}{stat.suffix}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-500 font-medium transition-colors text-sm sm:text-base">
                {stat.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center relative z-10 px-4">
          <button
            onClick={() => window.open("https://calendly.com/contacto-kngrowth/30min", "_blank")}
            className="font-poppins w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,85,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,85,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {t('hero.ctaPrimary')}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Stats;