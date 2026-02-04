import React from 'react';
import { 
  Search, PenTool, Code2, Rocket, CheckCircle, 
  Users, Layout, Settings, Zap, 
  Mail, Calendar, MessageSquare, Phone, 
  Image, MousePointer, Monitor, Smartphone,
  Edit, Save, FileText, Lock, Eye,
  GitBranch, Filter, Bell
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = t('process.steps').map((step: any, index: number) => ({
    ...step,
    id: `0${index + 1}`,
    icon: [Search, PenTool, Code2, Rocket][index]
  }));

  // Configuration for the "Ecosystem" cards with specific background icons for the visual effect
  const ecosystemConfig = [
    {
      mainIcon: Users,
      bgIcons: [Mail, Calendar, MessageSquare, Phone, Users, CheckCircle],
      color: "from-blue-500 to-indigo-500"
    },
    {
      mainIcon: Layout,
      bgIcons: [Image, Code2, MousePointer, Monitor, Smartphone, Layout],
      color: "from-brand-orange to-orange-400"
    },
    {
      mainIcon: Settings,
      bgIcons: [Edit, Save, FileText, Lock, Eye, Settings],
      color: "from-emerald-500 to-teal-400"
    },
    {
      mainIcon: Zap,
      bgIcons: [GitBranch, Filter, Bell, Rocket, Search, Zap],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const features = t('process.features').map((feature: any, index: number) => ({
    ...feature,
    ...ecosystemConfig[index]
  }));

  return (
    <section id="proceso" className="relative py-20 sm:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      
      {/* Decorative blurry spots - Enhanced */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-brand-orange/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-orange/15 blur-[100px] rounded-full pointer-events-none translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 relative z-10">
          <span className="text-brand-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 block">{t('process.label')}</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            {t('process.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-200">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg transition-colors px-4">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mb-24 sm:mb-32 z-10">
          
          {/* Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent -translate-x-1/2"></div>
          {/* Central Line Glow */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-orange/20 blur-sm -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step: any, index: number) => (
              <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Step Content Side */}
                <div className="flex-1 w-full md:text-right group">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} items-start`}>
                    
                    {/* Big Number Background */}
                    <div className={`text-6xl sm:text-[120px] leading-none font-bold text-gray-100 dark:text-white/[0.03] absolute -top-8 right-4 sm:-top-10 ${index % 2 === 0 ? 'md:right-auto md:left-full md:-ml-20' : 'md:left-auto md:right-full md:-mr-20'} select-none pointer-events-none transition-colors group-hover:text-gray-200 dark:group-hover:text-white/[0.06]`}>
                      {step.id}
                    </div>

                    <div className="relative z-10 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-lg dark:shadow-none backdrop-blur-sm hover:border-brand-orange/30 transition-all duration-300 w-full max-w-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                          <step.icon size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors text-left">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors text-left">
                        {step.description}
                      </p>

                      <ul className="space-y-2 text-left">
                        {step.points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-300 transition-colors">
                             <CheckCircle size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                             <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Center Node (Timeline Dot) */}
                <div className="hidden md:flex relative items-center justify-center w-8 h-8 flex-shrink-0 z-20">
                  <div className="w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(255,85,0,0.6)]"></div>
                  <div className="absolute w-8 h-8 rounded-full border border-brand-orange/30 animate-pulse-slow"></div>
                </div>

                {/* Empty Side for balance on Desktop */}
                <div className="hidden md:block flex-1">
                   <div className={`w-full h-full min-h-[200px] flex items-center ${index % 2 === 0 ? 'justify-start pl-10' : 'justify-end pr-10'}`}>
                      <div className="h-px w-20 bg-gradient-to-r from-brand-orange/30 to-transparent"></div>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* New Features Section - UPDATED DESIGN */}
        <div className="relative z-10">
            <div className="text-center mb-12 sm:mb-16">
                <div className="inline-block h-1 w-20 bg-brand-orange rounded-full mb-6 sm:mb-8 shadow-[0_0_15px_rgba(255,85,0,0.5)]"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors px-4">
                   {t('process.featuresTitle')}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feature: any, index: number) => {
                    const MainIcon = feature.mainIcon;
                    return (
                      <div 
                          key={index}
                          className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#0F0F0F] dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 hover:border-brand-orange/50 transition-all duration-500 shadow-xl"
                      >
                          {/* Inner Content Container */}
                          <div className="p-6 relative z-20">
                              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight transition-colors">
                                  {feature.title}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                  {feature.description}
                              </p>
                          </div>

                          {/* Visual Grid Area */}
                          <div className="relative h-40 mt-auto w-full overflow-hidden bg-gray-100 dark:bg-white/5 border-t border-gray-200 dark:border-white/5">
                               {/* Subtle Radial Gradient Background */}
                               <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                               
                               {/* Ghost Icons Grid - Background */}
                               <div className="absolute inset-0 p-4 grid grid-cols-3 gap-4 opacity-10 dark:opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                  {feature.bgIcons.map((Icon: any, i: number) => (
                                      <div key={i} className="flex items-center justify-center">
                                          <Icon size={24} className="text-gray-900 dark:text-white" />
                                      </div>
                                  ))}
                               </div>

                               {/* Fade overlay for bottom integration */}
                               <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent dark:from-[#0A0A0A] opacity-80"></div>

                               {/* Highlighted Main Icon - Centered floating */}
                               <div className="absolute inset-0 flex items-center justify-center">
                                   <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                       {/* Glow behind main icon */}
                                       <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                                       
                                       <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-2xl z-10 group-hover:border-white/30 transition-colors">
                                           <MainIcon size={28} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                                       </div>
                                   </div>
                               </div>
                          </div>
                      </div>
                    );
                })}
            </div>
            
            {/* New CTA for Ecosystem */}
            <div className="mt-12 sm:mt-16 flex justify-center relative z-20 px-4">
               <button className="font-poppins w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,85,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,85,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                  {t('hero.ctaPrimary')}
               </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Process;