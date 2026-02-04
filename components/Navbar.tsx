import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#servicios' },
    { name: t('nav.testimonials'), href: '#depoimentos' },
    { name: t('nav.process'), href: '#proceso' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        setIsMobileMenuOpen(false);
      }
    } else {
        setIsMobileMenuOpen(false);
    }
  };

  const cycleLanguage = () => {
    if (language === 'pt') setLanguage('en');
    else setLanguage('pt');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer relative z-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white transition-colors">
              KN Growth
            </span>
          </div>

          {/* Desktop Links - Absolutely Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            {/* Language Toggle */}
            <button
              onClick={cycleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors uppercase"
            >
              <Globe size={14} />
              {language}
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <button className="font-poppins bg-brand-orange hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,85,0,0.5)] hover:shadow-[0_0_25px_-5px_rgba(255,85,0,0.7)]">
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={cycleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs font-bold text-gray-600 dark:text-gray-300 uppercase"
            >
               <Globe size={16} />
               {language}
            </button>
             <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-none border-b border-gray-100 dark:border-white/10 p-4 transition-colors duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <button className="font-poppins bg-brand-orange text-white text-sm font-medium px-5 py-3 rounded-lg w-full">
              {t('nav.cta')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;