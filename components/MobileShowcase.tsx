import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, PieChart, Activity, ShoppingBag, CreditCard, User, Layers, Image as ImageIcon, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const MobileShowcase: React.FC = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    // Mock Projects Data (Simulating the "Images" with CSS UI)
    const projects = [
        {
            id: 'saas',
            title: 'AnalyticPro SaaS',
            category: 'Dashboard UI',
            color: 'from-violet-600 to-indigo-600',
            content: (
                <div className="w-full h-full bg-slate-900 p-4 flex flex-col gap-4 overflow-hidden relative">
                    {/* Header */}
                    <div className="flex justify-between items-center text-white mb-2">
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center"><Activity size={16} /></div>
                            <span className="font-bold text-sm">AnalyticPro</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    </div>
                    {/* Chart Area */}
                    <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                        <div className="text-xs text-slate-400 mb-1">Total Revenue</div>
                        <div className="text-xl font-bold text-white mb-3">$48,290.00</div>
                        <div className="h-24 flex items-end justify-between gap-1">
                            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                                <div key={i} className="w-full bg-indigo-500/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                            <BarChart3 size={16} className="text-emerald-400 mb-2" />
                            <div className="text-lg font-bold text-white">8,234</div>
                            <div className="text-[10px] text-slate-400">Active Users</div>
                        </div>
                        <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                            <PieChart size={16} className="text-purple-400 mb-2" />
                            <div className="text-lg font-bold text-white">24%</div>
                            <div className="text-[10px] text-slate-400">Conversion</div>
                        </div>
                    </div>
                    {/* List */}
                    <div className="flex-1 bg-slate-800 rounded-xl p-3 border border-slate-700 space-y-3">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-slate-700"></div>
                                    <div className="space-y-1">
                                        <div className="w-16 h-2 bg-slate-600 rounded"></div>
                                        <div className="w-10 h-2 bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                                <div className="w-8 h-2 bg-emerald-500/20 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'finance',
            title: 'NovaBank App',
            category: 'Fintech Mobile',
            color: 'from-blue-500 to-cyan-400',
            content: (
                <div className="w-full h-full bg-white text-slate-900 p-4 flex flex-col gap-4 overflow-hidden relative">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full"><User size={16} className="text-blue-600" /></div>
                        <div className="font-bold">NovaBank</div>
                        <div className="relative"><Globe size={18} className="text-slate-400" /></div>
                    </div>
                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-5 text-white shadow-xl shadow-blue-200">
                        <div className="text-blue-100 text-xs mb-1">Total Balance</div>
                        <div className="text-2xl font-bold mb-6">$124,500.50</div>
                        <div className="flex justify-between items-end">
                            <div className="text-xs opacity-80">**** 4567</div>
                            <div className="bg-white/20 p-1.5 rounded-lg"><CreditCard size={16} /></div>
                        </div>
                    </div>
                    {/* Operations */}
                    <div className="flex justify-between px-2">
                        {['Send', 'Request', 'Top-up', 'More'].map((label, i) => (
                            <div key={i} className="flex flex-col items-center gap-1.5">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm border border-slate-100">
                                    <ArrowUpRight size={18} />
                                </div>
                                <span className="text-[10px] font-medium text-slate-500">{label}</span>
                            </div>
                        ))}
                    </div>
                    {/* Transactions */}
                    <div className="mt-2">
                        <div className="text-sm font-bold mb-3 text-slate-800">Recent Activity</div>
                        <div className="space-y-3">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shrink-0">
                                            <ShoppingBag size={14} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold">Apple Store</div>
                                            <div className="text-[10px] text-slate-400">Electronics</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold text-slate-900">-$94.00</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'arch',
            title: 'Lumina Arch',
            category: 'Portfolio',
            color: 'from-orange-500 to-amber-500',
            content: (
                <div className="w-full h-full bg-[#f4f2f0] p-0 flex flex-col gap-0 overflow-hidden relative font-serif">
                    {/* Hero Image */}
                    <div className="h-1/2 bg-neutral-300 relative">
                        <div className="absolute inset-0 bg-neutral-400 flex items-center justify-center text-neutral-500">
                            <ImageIcon size={32} />
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <div className="text-xs uppercase tracking-widest mb-1">Architecture</div>
                            <div className="text-xl font-light">Modern villa</div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col gap-6">
                        <div className="flex justify-between items-center border-b border-black/10 pb-4">
                            <h2 className="text-2xl font-light text-neutral-800">Projects</h2>
                            <span className="text-xs font-bold uppercase tracking-widest">2024</span>
                        </div>
                        <div className="space-y-4">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className="w-16 h-16 bg-white shadow-sm shrink-0"></div>
                                    <div>
                                        <div className="text-sm font-bold text-neutral-800">Residential Complex</div>
                                        <div className="text-xs text-neutral-500">Oslo, Norway</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Floating FAB */}
                    <div className="absolute bottom-6 right-6 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-2xl">
                        <Layers size={20} />
                    </div>
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
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section className="relative py-20 sm:py-32 bg-gray-50 dark:bg-black overflow-hidden border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 sm:mb-24">
                    <span className="text-brand-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 block">
                        {t('mobileShowcase.label')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('mobileShowcase.title')} <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-200">
                            {t('mobileShowcase.titleHighlight')}
                        </span>
                    </h2>
                </div>

                {/* The Carousel Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 min-h-[500px] sm:min-h-[600px]">

                    {/* Text/Controls Side (Left on Desktop) */}
                    <div className="flex-1 w-full max-w-sm order-2 md:order-1 text-center md:text-left space-y-8 z-10">
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

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                            <button onClick={prevSlide} className="p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* The iPhone Mockup (Center/Right) */}
                    <div className="relative order-1 md:order-2 z-20">
                        {/* Phone Glow */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-b ${projects[activeIndex].color} opacity-40 blur-[80px] transition-all duration-700`}></div>

                        {/* Phone Frame */}
                        <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[620px] bg-[#1a1a1a] rounded-[55px] shadow-2xl border-[8px] border-[#2a2a2a] ring-1 ring-black overflow-hidden">

                            {/* Dynamic Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[30px] bg-[#1a1a1a] rounded-b-2xl z-30 flex justify-center items-center">
                                <div className="w-16 h-4 bg-black rounded-full"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-black relative overflow-hidden">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === activeIndex
                                                ? 'translate-x-0 opacity-100 scale-100'
                                                : index < activeIndex
                                                    ? '-translate-x-full opacity-0 scale-95'
                                                    : 'translate-x-full opacity-0 scale-95'
                                            }`}
                                    >
                                        {project.content}
                                    </div>
                                ))}
                            </div>

                            {/* Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[48px] z-40"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MobileShowcase;
