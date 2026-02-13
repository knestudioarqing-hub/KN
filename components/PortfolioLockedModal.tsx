import React, { useEffect, useState } from 'react';
import { Lock, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface PortfolioLockedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PortfolioLockedModal: React.FC<PortfolioLockedModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500); // Increased duration for smoother exit
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    const handleBooking = () => {
        window.location.href = "https://calendly.com/contacto-kngrowth/30min";
    };

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-out ${isOpen ? 'opacity-100 backdrop-blur-md bg-black/60' : 'opacity-0 pointer-events-none delay-200'}`}>

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-lg mx-4 bg-[#0a0a0a] rounded-[32px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] border border-white/10 transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'}`}
            >
                {/* Background ambient lighting */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-b from-brand-orange/5 to-transparent blur-3xl pointer-events-none rounded-full radial-gradient"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 backdrop-blur-sm z-50 group"
                >
                    <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center text-center p-8 sm:p-12 relative z-10">

                    {/* Premium Icon Container */}
                    <div className="relative mb-8 group">
                        {/* Spinning faint ring */}
                        <div className="absolute inset-[-12px] border border-brand-orange/20 rounded-full w-24 h-24 sm:w-28 sm:h-28 animate-[spin_10s_linear_infinite] opacity-30 pointer-events-none"></div>
                        <div className="absolute inset-[-4px] border border-brand-orange/40 rounded-full w-20 h-20 sm:w-24 sm:h-24 animate-[spin_15s_linear_infinite_reverse] opacity-50 pointer-events-none border-dashed"></div>

                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-orange/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Icon Background */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden backdrop-blur-xl group-hover:border-brand-orange/30 transition-colors duration-500">
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Lock size={28} className="text-white drop-shadow-[0_0_15px_rgba(255,85,0,0.6)]" />
                        </div>

                        {/* Small badge */}
                        <div className="absolute -bottom-2 -right-2 bg-[#0a0a0a] rounded-full p-1.5 border border-white/10 shadow-lg">
                            <ShieldCheck size={14} className="text-brand-orange" />
                        </div>
                    </div>

                    <div className="space-y-4 max-w-sm mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-orange uppercase backdrop-blur-md">
                            {t('nav.portfolioLocked.access')}
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                            {t('nav.portfolioLocked.title')}
                        </h3>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                            {t('nav.portfolioLocked.message')}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

                    <button
                        onClick={handleBooking}
                        className="w-full py-4 bg-white text-black hover:bg-brand-orange hover:text-white rounded-xl font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_-5px_rgba(255,85,0,0.5)] flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                        {/* Button content */}
                        <span className="relative z-10 flex items-center gap-2">
                            {t('nav.portfolioLocked.cta')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button
                        onClick={onClose}
                        className="mt-6 text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest font-medium"
                    >
                        {t('nav.themePopup.no')}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PortfolioLockedModal;
