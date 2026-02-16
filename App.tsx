import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SplineSceneDemo } from './components/SplineSceneDemo';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import MobileShowcase from './components/MobileShowcase';
import Footer from './components/Footer';
import ThemeSwitchPopup from './components/ThemeSwitchPopup';
import { LanguageProvider } from './LanguageContext';

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Apply theme class to html element
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300 flex flex-col relative">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <section className="relative bg-gray-50 dark:bg-black pt-0 pb-0 md:pt-32 overflow-hidden hidden md:block">
          {/* Gradient transition - Top (multiple layers for smooth blend) */}
          <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-black/50 dark:to-transparent"></div>
          </div>

          {/* Gradient transition - Bottom (Fog effect to blend with next section) */}
          <div className="absolute bottom-0 left-0 right-0 h-[50px] pointer-events-none z-30">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/90 dark:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent dark:from-black/60 dark:to-transparent backdrop-blur-[2px]"></div>
          </div>

          {/* Subtle background glow - enhanced */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 dark:bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>

          {/* Additional ambient light spots */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-orange/3 dark:bg-brand-orange/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-orange/3 dark:bg-brand-orange/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <SplineSceneDemo />
          </div>
        </section>
        <Services />
        <Process />
        <MobileShowcase />
        <Team />
        <Testimonials />
        <Stats />
      </main>
      <Footer />
      <ThemeSwitchPopup theme={theme} setTheme={setTheme} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;