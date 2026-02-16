import React from 'react';
import { Search, PenTool, Code2, Rocket, CheckCircle, Target, Layout, Settings, Cpu, Mail, Calendar, MessageSquare, Phone, Users, Image, MousePointer, Monitor, Smartphone, Edit, Save, FileText, Lock, Eye, GitBranch, Filter, Bell, Link } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = t('process.steps').map((step: any, index: number) => ({
    ...step,
    id: `0${index + 1}`,
    icon: [Search, PenTool, Code2, Rocket][index]
  }));

  const ecosystemConfig = [
    { mainIcon: Target, bgIcons: [Mail, Calendar, MessageSquare, Phone, Users, CheckCircle], color: "from-blue-500 to-indigo-500" },
    { mainIcon: Layout, bgIcons: [Image, Code2, MousePointer, Monitor, Smartphone, Layout], color: "from-brand-orange to-orange-400" },
    { mainIcon: Settings, bgIcons: [Edit, Save, FileText, Lock, Eye, Settings], color: "from-emerald-500 to-teal-400" },
    { mainIcon: Cpu, bgIcons: [GitBranch, Filter, Bell, Rocket, Search, Link], color: "from-purple-500 to-pink-500" }
  ];

  const features = t('process.features').map((feature: any, index: number) => ({
    ...feature,
    ...ecosystemConfig[index]
  }));

  return (
    <section id="proceso" className="relative py-20 sm:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-brand-orange/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-orange/15 blur-[100px] rounded-full pointer-events-none translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24 relative z-10">
          <span className="text-brand-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 block">{t('process.label')}</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight antialiased text-gray-900 dark:text-white mb-6 transition-colors">
            {t('process.title')} <span className="text-brand-orange">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg transition-colors px-4 lg:whitespace-nowrap">{t('process.subtitle')}</p>
        </div>

        <div className="relative mb-24 sm:mb-32 z-10">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-orange/20 blur-sm -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step: any, index: number) => (
              <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 w-full md:text-right group">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} items-start`}>
                    <div className={`text-6xl sm:text-[120px] leading-none font-bold text-gray-100 dark:text-white/[0.03] absolute -top-8 right-4 sm:-top-10 ${index % 2 === 0 ? 'md:right-auto md:left-full md:-ml-20' : 'md:left-auto md:right-full md:-mr-20'} select-none pointer-events-none transition-all duration-500 group-hover:text-gray-300 dark:group-hover:text-white/10 group-hover:scale-110`}>
                      {step.id}
                    </div>
                    <div className="relative z-10 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-lg dark:shadow-none backdrop-blur-sm hover:border-brand-orange/30 transition-all duration-300 w-full max-w-lg overflow-hidden">
                      {/* Corner Neon Effect */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                        {/* Top Left Corner */}
                        <div className="absolute top-0 left-0 w-24 h-[1.5px] bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute top-0 left-0 w-[1.5px] h-24 bg-gradient-to-b from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Bottom Right Corner */}
                        <div className="absolute bottom-0 right-0 w-24 h-[1.5px] bg-gradient-to-l from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-[1.5px] h-24 bg-gradient-to-t from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Corner Sparkles */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff5500]"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff5500]"></div>
                      </div>
                      <div className="absolute bottom-8 right-8 text-brand-orange opacity-40 group-hover:opacity-100 transition-opacity z-10">
                        <step.icon size={28} />
                      </div>
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-brand-orange group-hover:drop-shadow-[0_0_10px_rgba(255,85,0,0.3)] transition-all duration-500 text-left">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors text-left">{step.description}</p>
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
                <div className="hidden md:flex relative items-center justify-center w-8 h-8 flex-shrink-0 z-20">
                  <div className="w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(255,85,0,0.6)]"></div>
                  <div className="absolute w-8 h-8 rounded-full border border-brand-orange/30 animate-pulse-slow"></div>
                </div>
                <div className="hidden md:block flex-1">
                  <div className={`w-full h-full min-h-[200px] flex items-center ${index % 2 === 0 ? 'justify-start pl-10' : 'justify-end pr-10'}`}>
                    <div className="h-px w-20 bg-gradient-to-r from-brand-orange/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-brand-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 block">
              {t('process.featuresLabel')}
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight antialiased text-gray-900 dark:text-white mb-6 transition-colors px-4">
              {t('process.featuresTitle').split(' ').slice(0, -1).join(' ')} <span className="text-brand-orange">{t('process.featuresTitle').split(' ').pop()}</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg transition-colors px-4 max-w-full mx-auto md:whitespace-nowrap">
              {t('process.featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature: any, index: number) => {
              const MainIcon = feature.mainIcon;
              return (
                <div key={index} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 hover:border-brand-orange/50 transition-all duration-500 shadow-xl min-h-[380px]">
                  {/* Corner Neon Effect */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
                    {/* Top Left Corner */}
                    <div className="absolute top-0 left-0 w-24 h-[1.5px] bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-0 left-0 w-[1.5px] h-24 bg-gradient-to-b from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Bottom Right Corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-[1.5px] bg-gradient-to-l from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-[1.5px] h-24 bg-gradient-to-t from-brand-orange via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Corner Sparkles */}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff5500]"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff5500]"></div>
                  </div>
                  <div className="px-5 pt-12 relative z-20">
                    <h4 className="text-[25px] font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-brand-orange group-hover:drop-shadow-[0_0_10px_rgba(255,85,0,0.3)] transition-all duration-500">{feature.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="relative h-40 mt-auto w-full overflow-hidden bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-white/5">
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 p-4 grid grid-cols-3 gap-4 opacity-10 dark:opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                      {feature.bgIcons.map((Icon: any, i: number) => (
                        <div key={i} className="flex items-center justify-center"><Icon size={24} className="text-gray-900 dark:text-white" /></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0A0A0A] opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-out flex items-center justify-center">
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                        <div className="relative flex items-center justify-center z-10 text-gray-900 dark:text-white transition-colors">
                          <MainIcon size={32} className="drop-shadow-[0_0_10px_rgba(255,85,0,0.3)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center relative z-20 px-4">
            <button onClick={() => window.open("https://calendly.com/contacto-kngrowth/30min", "_blank")} className="font-poppins w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,85,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,85,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
              {t('process.cta')}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-orange/50 shadow-[0_0_15px_rgba(255,85,0,1)] z-50 md:hidden"></div>
    </section>
  );
};

export default Process;