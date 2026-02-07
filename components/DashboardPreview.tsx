import React from 'react';
import { Search, Bell, Layout, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const DashboardPreview: React.FC = () => {
    const { t } = useLanguage();

    const products = t('dashboard.products_list') || [];

    // Porcentajes de escala simulados para la demostración (ajustados < 100%)
    const growthPercentages = [94, 78, 56, 32];

    return (
        <div className="relative rounded-t-xl sm:rounded-t-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden animate-float" style={{ animationDuration: '8s' }}>
            {/* Note: The interior of the dashboard remains dark by design to look like a "pro" SaaS interface, 
          but the container border adapts to the theme */}

            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-orange to-orange-700 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-white text-[10px]">KN</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">KN Analytics</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <span className="text-gray-900 dark:text-white font-medium cursor-pointer">{t('dashboard.header_dashboard')}</span>
                        <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">{t('dashboard.header_sales')}</span>
                        <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">{t('dashboard.header_products')}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-500 dark:text-gray-400 text-sm w-40 lg:w-64">
                        <Search size={14} />
                        <span className="truncate">{t('dashboard.search')}</span>
                    </div>
                    <div className="sm:hidden p-2 text-gray-400">
                        <Search size={18} />
                    </div>
                    <div className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer relative">
                        <Bell size={18} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full"></span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs font-medium text-white ring-2 ring-white dark:ring-black flex-shrink-0">
                        JD
                    </div>
                </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto min-h-[300px]">

                {/* Left Col - Top Products Table */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">{t('dashboard.top_products')}</h3>
                        <button className="text-xs text-brand-orange hover:text-orange-400">{t('dashboard.view_all')}</button>
                    </div>

                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 overflow-hidden">
                        <div className="overflow-x-auto">
                            <div className="min-w-[400px] grid grid-cols-12 gap-4 p-4 text-xs font-medium text-gray-500 border-b border-gray-100 dark:border-white/5 uppercase tracking-wider">
                                <div className="col-span-1">#</div>
                                <div className="col-span-8">{t('dashboard.table_name')}</div>
                                <div className="col-span-3 text-right">{t('dashboard.table_sales')}</div>
                            </div>

                            {products.map((name: string, index: number) => (
                                <div key={index} className="min-w-[400px] grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-100 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-white/5 last:border-0 group">
                                    <div className="col-span-1 text-gray-400">0{index + 1}</div>
                                    <div className="col-span-8 text-gray-900 dark:text-white font-medium flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 flex-shrink-0 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                            <Layout size={14} />
                                        </div>
                                        <span className="truncate">{name}</span>
                                    </div>
                                    <div className="col-span-3 text-right text-emerald-400 font-mono font-bold shadow-emerald-400/20 drop-shadow-sm">
                                        +{growthPercentages[index] || 50}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Col - Metrics Graph */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">{t('dashboard.visitors')}</h3>
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                            <ArrowUpRight size={14} />
                            <span>+24.5%</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 p-0 h-full min-h-[250px] relative overflow-hidden group flex flex-col justify-end">
                        {/* Horizontal Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                            <div className="w-full h-px bg-gray-200/50 dark:bg-white/5 border-t border-dashed border-gray-200 dark:border-white/10"></div>
                            <div className="w-full h-px bg-gray-200/50 dark:bg-white/5 border-t border-dashed border-gray-200 dark:border-white/10"></div>
                            <div className="w-full h-px bg-gray-200/50 dark:bg-white/5 border-t border-dashed border-gray-200 dark:border-white/10"></div>
                            <div className="w-full h-px bg-gray-200/50 dark:bg-white/5 border-t border-dashed border-gray-200 dark:border-white/10"></div>
                            <div className="w-full h-px bg-gray-200/50 dark:bg-white/5 border-t border-dashed border-gray-200 dark:border-white/10"></div>
                        </div>

                        {/* SVG Area Chart */}
                        <div className="relative w-full h-[180px] z-10">
                            <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FF5500" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Area Fill */}
                                <path
                                    d="M0,150 L0,90 C40,80 60,110 90,70 S 140,20 180,50 S 240,80 300,30 L300,150 Z"
                                    fill="url(#chartGradient)"
                                />
                                {/* Stroke Line */}
                                <path
                                    d="M0,90 C40,80 60,110 90,70 S 140,20 180,50 S 240,80 300,30"
                                    fill="none"
                                    stroke="#FF5500"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="drop-shadow-[0_0_10px_rgba(255,85,0,0.5)]"
                                />
                                {/* Data Point Dot */}
                                <circle cx="300" cy="30" r="4" fill="#FFFFFF" stroke="#FF5500" strokeWidth="2" className="animate-pulse" />
                            </svg>
                        </div>

                        {/* X Axis Labels */}
                        <div className="flex justify-between px-4 pb-4 pt-2 text-[10px] sm:text-xs text-gray-500 z-20 bg-gradient-to-t from-white via-white/80 dark:from-[#0A0A0A] dark:via-[#0A0A0A]/80 to-transparent">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradients inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[60px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
    );
};

export default DashboardPreview;