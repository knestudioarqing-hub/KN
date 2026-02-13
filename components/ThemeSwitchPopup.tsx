import React, { useState, useEffect } from 'react';
import { Moon, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ThemeSwitchPopupProps {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const ThemeSwitchPopup: React.FC<ThemeSwitchPopupProps> = ({ theme, setTheme }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

    useEffect(() => {
        // Only trigger if we are in light mode and haven't dismissed it
        if (theme === 'light' && !hasBeenDismissed) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [theme, hasBeenDismissed]);

    // If theme changes to dark (either by this popup or manually), hide popup
    useEffect(() => {
        if (theme === 'dark') {
            setIsVisible(false);
        }
    }, [theme]);

    if (!isVisible) return null;

    const handleSwitch = () => {
        setTheme('dark');
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
        setHasBeenDismissed(true);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 transform translate-y-0 opacity-100">
            <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 max-w-sm w-full relative overflow-hidden backdrop-blur-sm bg-opacity-95">

                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors bg-transparent p-1"
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                <div className="flex gap-4">
                    <div className="bg-neutral-900 flex items-center justify-center p-3 rounded-xl h-12 w-12 shrink-0 shadow-lg">
                        <Moon size={20} className="text-white" />
                    </div>

                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                            {t('nav.themePopup.title')}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                            {t('nav.themePopup.text')}
                        </p>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleSwitch}
                                className="bg-neutral-900 hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
                            >
                                {t('nav.themePopup.yes')}
                            </button>
                            <button
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-800 px-2 py-2 text-sm font-medium transition-colors"
                            >
                                {t('nav.themePopup.no')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitchPopup;
