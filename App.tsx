import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import MobileShowcase from './components/MobileShowcase';
import Footer from './components/Footer';
import ThemeSwitchPopup from './components/ThemeSwitchPopup';
import ComingSoon from './components/ComingSoon';
import { LanguageProvider } from './LanguageContext';

// 🚧 Pon en `true` para mostrar la portada y ocultar el sitio
const COMING_SOON = true;

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
      {COMING_SOON ? (
        <ComingSoon />
      ) : (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="flex-grow">
            <Hero />
            <Services />
            <Process />
            <MobileShowcase />
            <Team />
            <Testimonials />
            <Stats />
          </main>
          <Footer />
          <ThemeSwitchPopup theme={theme} setTheme={setTheme} />
        </>
      )}
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