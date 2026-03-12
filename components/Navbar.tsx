import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import PortfolioLockedModal from './PortfolioLockedModal';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isPortfolioLockedOpen, setIsPortfolioLockedOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      // Only trigger after scrolling past 80px from top
      if (currentY > 80) {
        if (diff > 8) {
          setIsHidden(true);  // scrolling down → hide
        } else if (diff < -8) {
          setIsHidden(false); // scrolling up → show
        }
      } else {
        setIsHidden(false); // near top → always show
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#servicios' },
    { name: t('nav.testimonials'), href: '#depoimentos' },
    { name: t('nav.process'), href: '#proceso' },
    { name: t('nav.portfolio'), href: '#', isPortfolio: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPortfolio: boolean = false) => {
    e.preventDefault();

    if (isPortfolio) {
      setIsPortfolioLockedOpen(true);
      setIsMobileMenuOpen(false);
      return;
    }

    if (href.startsWith('#') && href.length > 1) {
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
    } else if (!href.startsWith('#') && href) {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const cycleLanguage = () => {
    if (language === 'pt') setLanguage('en');
    else if (language === 'en') setLanguage('es');
    else setLanguage('pt');
  };

  const handleBooking = () => {
    window.open("https://calendly.com/contacto-kngrowth/30min", "_blank");
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 py-5 bg-transparent transition-transform duration-500 ease-in-out ${isHidden ? '-translate-y-[120%]' : 'translate-y-0'}`}
      >
        <div className="w-full px-6 sm:px-16 lg:px-24 xl:px-32">
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

            <div
              className="hidden md:flex items-center py-[5px] pr-[5px] pl-[100px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              {/* Pill background — starts 70px from outer div left = 30px before Serviços */}
              <div
                className="absolute top-0 bottom-0 right-0 pointer-events-none"
                style={{
                  left: '70px',
                  background: 'rgba(255, 255, 255, 0.20)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '9999px',
                  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
                  zIndex: -1,
                }}
              />
              {/* Nav Links */}
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isPortfolio)}
                    className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-brand-accent1 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Toggles (Language & Theme) - 50px from Portfólio */}
              <div className="flex items-center gap-5 ml-[50px]">
                <button
                  onClick={cycleLanguage}
                  className="flex items-center gap-1 text-xs font-bold text-gray-600 dark:text-gray-200 hover:text-brand-accent1 dark:hover:text-white transition-colors uppercase"
                >
                  <Globe size={14} />
                  {language}
                </button>

                <button
                  onClick={toggleTheme}
                  className="hidden p-1.5 rounded-full text-gray-600 dark:text-gray-200 hover:text-brand-accent1 dark:hover:text-white transition-colors focus:outline-none"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBooking}
                className="font-poppins text-white text-sm font-semibold px-5 py-[10px] flex items-center justify-center rounded-full transition-all duration-300 whitespace-nowrap ml-[85px] hover:scale-[1.04] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #34d47a 0%, #2BB673 45%, #1a9e5c 100%)',
                  boxShadow: '0 4px 20px -4px rgba(43,182,115,0.55), inset 0 1px 0 rgba(255,255,255,0.18)',
                }}
              >
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
                className="hidden p-2 text-gray-600 dark:text-gray-300"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-none border-b border-gray-100 dark:border-white/10 p-4 transition-colors duration-300 h-screen">
            <div className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isPortfolio)}
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-white text-center py-2"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleBooking}
                className="font-poppins text-white text-base font-semibold px-5 py-4 rounded-xl w-full mt-4 transition-all duration-300 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #34d47a 0%, #2BB673 45%, #1a9e5c 100%)',
                  boxShadow: '0 4px 20px -4px rgba(43,182,115,0.55), inset 0 1px 0 rgba(255,255,255,0.18)',
                }}
              >
                {t('nav.cta')}
              </button>
            </div>
          </div>
        )}
      </nav>

      <PortfolioLockedModal
        isOpen={isPortfolioLockedOpen}
        onClose={() => setIsPortfolioLockedOpen(false)}
      />
    </>
  );
};

export default Navbar;