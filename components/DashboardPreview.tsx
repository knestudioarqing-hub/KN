import React from 'react';
import { Search, Bell, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const DashboardPreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative rounded-t-xl sm:rounded-t-3xl border border-gray-200 dark:border-white/10 bg-[#0A0A0A] dark:bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden animate-float" style={{ animationDuration: '8s' }}>
      {/* Note: The interior of the dashboard remains dark by design to look like a "pro" SaaS interface, 
          but the container border adapts to the theme */}
      
      {/* Dashboard Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-orange to-orange-700 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white text-[10px]">KN</span>
                </div>
                <span className="font-semibold text-white text-sm sm:text-base truncate">KN Analytics</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
                <span className="text-white font-medium cursor-pointer">{t('dashboard.header_dashboard')}</span>
                <span className="hover:text-white cursor-pointer transition-colors">{t('dashboard.header_sales')}</span>
                <span className="hover:text-white cursor-pointer transition-colors">{t('dashboard.header_products')}</span>
            </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm w-40 lg:w-64">
                <Search size={14} />
                <span className="truncate">{t('dashboard.search')}</span>
            </div>
            <div className="sm:hidden p-2 text-gray-400">
               <Search size={18} />
            </div>
            <div className="p-2 text-gray-400 hover:text-white cursor-pointer relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full"></span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs font-medium text-white ring-2 ring-black flex-shrink-0">
                JD
            </div>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto min-h-[300px]">
        
        {/* Left Col - Top Products Table */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-medium text-white">{t('dashboard.top_products')}</h3>
                <button className="text-xs text-brand-orange hover:text-orange-400">{t('dashboard.view_all')}</button>
            </div>
            
            <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <div className="min-w-[500px] grid grid-cols-12 gap-4 p-4 text-xs font-medium text-gray-500 border-b border-white/5 uppercase tracking-wider">
                        <div className="col-span-1">#</div>
                        <div className="col-span-5">{t('dashboard.table_name')}</div>
                        <div className="col-span-4">{t('dashboard.table_pop')}</div>
                        <div className="col-span-2 text-right">{t('dashboard.table_sales')}</div>
                    </div>
                    
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="min-w-[500px] grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group">
                            <div className="col-span-1 text-gray-400">0{item}</div>
                            <div className="col-span-5 text-white font-medium flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-500 flex-shrink-0">
                                    <ShoppingBag size={14} />
                                </div>
                                <span className="truncate">{t('dashboard.item_name')} v{item}</span>
                            </div>
                            <div className="col-span-4">
                                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-orange rounded-full" style={{ width: `${85 - (item * 10)}%` }}></div>
                                </div>
                            </div>
                            <div className="col-span-2 text-right text-white font-mono">
                                ${(4500 - (item * 300)).toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Col - Visitor Insights Chart */}
        <div className="space-y-4 sm:space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-medium text-white">{t('dashboard.visitors')}</h3>
            </div>
            
            <div className="bg-white/5 rounded-xl border border-white/5 p-4 sm:p-6 h-full min-h-[250px] relative overflow-hidden group flex flex-col">
                 <div className="flex flex-col gap-1 mb-8">
                    <span className="text-2xl sm:text-3xl font-bold text-white">24.5k</span>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs sm:text-sm">
                        <ArrowUpRight size={14} />
                        <span>+12.5% {t('dashboard.vs_last')}</span>
                    </div>
                 </div>

                 {/* Simple CSS Chart Bars */}
                 <div className="flex items-end justify-between h-32 gap-2 mt-auto">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <div key={i} className="w-full bg-gray-800 rounded-t-sm relative group-hover:bg-gray-700 transition-colors overflow-hidden">
                             <div 
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-orange to-orange-400 opacity-80 transition-all duration-1000 ease-out"
                                style={{ height: `${height}%` }}
                             ></div>
                        </div>
                    ))}
                 </div>
                 
                 {/* X Axis Labels */}
                 <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-gray-500">
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