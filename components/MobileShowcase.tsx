import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, PieChart, Activity, ShoppingBag, CreditCard, User, Layers, Image as ImageIcon, Globe, ArrowUpRight, DollarSign } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const MobileShowcase: React.FC = () => {
    const { t } = useLanguage();
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Mock Projects Data (Simulating the "Desktop/Web" with CSS UI)
    const projects = [
        {
            id: 'gym',
            title: 'Brave Gym',
            category: 'LANDING PAGE',
            color: 'from-orange-600 to-red-600',
            content: (
                <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden custom-scrollbar group/screen relative">
                    {/* Manual scrollable image */}
                    <img
                        src="https://i.imgur.com/zQU3JED.png"
                        alt="Brave Gym Landing Page"
                        className="w-full h-auto block"
                    />

                    {/* Floating Scroll Indicator - Visible on hover */}
                    <div className="sticky bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 opacity-0 group-hover/screen:opacity-100 translate-y-2 group-hover/screen:translate-y-0">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-2xl">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></div>
                            <span className="text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">Scroll para explorar</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'global',
            title: 'Global Horizon',
            category: 'LANDING PAGE',
            color: 'from-blue-500 to-cyan-400',
            content: (
                <div className="w-full h-full bg-[#050505] overflow-y-auto overflow-x-hidden custom-scrollbar group/screen relative">
                    {/* Manual scrollable image */}
                    <img
                        src="https://imgur.com/D8Jnedz.png"
                        alt="Global Horizon Landing Page"
                        className="w-full h-auto block"
                    />
                </div>
            )
        },
        {
            id: 'arch',
            title: 'Finanças',
            category: 'LANDING PAGE',
            color: 'from-orange-500 to-amber-500',
            content: (
                <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden custom-scrollbar group/screen relative border-none">
                    {/* Manual scrollable image */}
                    <img
                        src="https://i.imgur.com/V0Ia21N.png"
                        alt="Architecture Portfolio Landing Page"
                        className="w-full h-auto block"
                    />
                </div>
            )
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Auto-play
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    return (
        <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 bg-gray-50 dark:bg-black overflow-hidden border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 sm:mb-24">
                    <span className="text-brand-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 block">
                        {t('mobileShowcase.label')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight antialiased text-gray-900 dark:text-white mb-6">
                        {t('mobileShowcase.title')} <br className="hidden sm:block" />
                        <span className="text-brand-orange">
                            {t('mobileShowcase.titleHighlight')}
                        </span>
                    </h2>
                </div>

                {/* The Carousel Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 min-h-[500px] sm:min-h-[600px]">

                    {/* Text/Controls Side (Left on Desktop) */}
                    <div className="flex-1 w-full max-w-sm order-2 md:order-1 text-center md:text-left space-y-8 z-10">
                        {/* Project List - Visible ONLY on Desktop */}
                        <div className="hidden md:block space-y-8">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer transition-all duration-500 p-4 sm:p-6 rounded-2xl border ${index === activeIndex
                                        ? 'bg-white dark:bg-white/10 border-brand-orange/30 shadow-lg scale-105'
                                        : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-white/5 hover:border-gray-200 dark:hover:border-white/5 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${index === activeIndex ? 'text-brand-orange' : 'text-gray-400'}`}>
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <div className={`h-1 rounded-full bg-gradient-to-r ${project.color} transition-all duration-500 ${index === activeIndex ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls - Desktop ONLY (Mobile has them on the sides) */}
                        <div className="hidden md:flex items-center justify-center md:justify-start gap-4 pt-4">
                            <button onClick={prevSlide} className="p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Hyper-Realistic MacBook Mockup */}
                    <div
                        className="relative order-1 md:order-2 z-20 flex flex-col items-center justify-center perspective-[2000px]"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >

                        {/* Mobile Navigation Arrows - Floating styles */}
                        <button
                            onClick={prevSlide}
                            className="md:hidden absolute left-[-20px] top-[40%] -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-2xl active:scale-90 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="md:hidden absolute right-[-20px] top-[40%] -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-2xl active:scale-90 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Ambient Glow behind the laptop */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${projects[activeIndex].color} opacity-20 blur-[120px] transition-all duration-1000`}></div>

                        {/* MacBook Screen Housing (Lid) */}
                        <div className="relative group transition-all duration-700 hover:rotate-x-1">

                            {/* Outer Frame (Space Gray Metal) */}
                            <div className="relative w-[310px] h-[210px] sm:w-[620px] sm:h-[400px] lg:w-[780px] lg:h-[500px] p-[1.5px] rounded-[18px] sm:rounded-[28px] bg-gradient-to-b from-[#4a4a4a] via-[#2a2a2a] to-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">

                                {/* Bezel (Black Glass) */}
                                <div className="absolute inset-[3px] sm:inset-[8px] bg-black rounded-[15px] sm:rounded-[22px] overflow-hidden flex flex-col">

                                    {/* Screen Display Area - Now fills the bezel */}
                                    <div className="flex-1 w-full bg-[#050505] relative overflow-hidden">
                                        {/* Camera Notch - Now floats ABOVE the content for a true MacBook look */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-4 sm:h-5 bg-black rounded-b-xl z-50 flex justify-center items-center gap-2 shadow-sm border-x border-b border-white/5">
                                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-900/30 border border-blue-400/10"></div>
                                        </div>

                                        {projects.map((project, index) => (
                                            <div
                                                key={project.id}
                                                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${index === activeIndex
                                                    ? 'translate-x-0 opacity-100 scale-100'
                                                    : index < activeIndex
                                                        ? '-translate-x-full opacity-0 scale-95 blur-sm'
                                                        : 'translate-x-full opacity-0 scale-95 blur-sm'
                                                    }`}
                                            >
                                                {/* The actual product content */}
                                                <div className="w-full h-full">
                                                    {project.content}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Screen Glare / Reflection Layer */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.07] pointer-events-none z-10"></div>
                                    </div>

                                    {/* Bottom Branding Bar */}
                                    <div className="h-3 sm:h-6 flex justify-center items-center bg-black shrink-0 border-t border-white/5">
                                        <div className="text-[5px] sm:text-[8px] font-medium text-neutral-600 tracking-[0.2em] uppercase">KN Growth Studio</div>
                                    </div>
                                </div>

                                {/* Rim Light (Subtle metallic shine) */}
                                <div className="absolute inset-0 border border-white/5 rounded-[18px] sm:rounded-[28px] pointer-events-none"></div>
                            </div>
                        </div>

                        {/* MacBook Base (The Keyboard Part) */}
                        <div className="relative z-30 flex flex-col items-center">

                            {/* The "Lip" / Notch for Opening */}
                            <div className="w-[330px] h-[10px] sm:w-[660px] sm:h-[20px] lg:w-[820px] lg:h-[24px] bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#121212] rounded-b-[20px] sm:rounded-b-[40px] shadow-2xl relative overflow-hidden border-t border-white/10">
                                {/* The physical touch notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-32 lg:w-48 h-2 sm:h-4 lg:h-5 bg-gradient-to-b from-[#121212] to-[#0a0a0a] rounded-b-xl border-t border-black/50"></div>
                            </div>

                            {/* Base Bottom Shadow (The real depth) */}
                            <div className="w-[310px] sm:w-[620px] lg:w-[780px] h-4 bg-black/40 blur-xl mt-[-4px] rounded-full"></div>

                            {/* Subtle Instruction Text - BELOW the mockup */}
                            <div className="mt-8 flex items-center justify-center gap-3 animate-pulse">
                                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gray-400 dark:to-white/20"></span>
                                <span className="text-[10px] sm:text-xs text-gray-400 dark:text-white/30 uppercase tracking-[0.3em] font-medium">
                                    {t('mobileShowcase.scrollInstructions')}
                                </span>
                                <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gray-400 dark:to-white/20"></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-orange/50 shadow-[0_0_15px_rgba(255,85,0,1)] z-50 md:hidden"></div>
        </section>
    );
};

export default MobileShowcase;
