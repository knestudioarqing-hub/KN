import React from 'react';
import { ArrowUpRight, Target, PenTool, Code } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Team: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative bg-white dark:bg-black pt-10 sm:pt-16 pb-20 sm:pb-32 scroll-mt-24 overflow-hidden transition-colors duration-500" id="equipo">
            {/* Grid Background Effect */}
            <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    color: 'rgba(0, 0, 0, 0.1)'
                }}>
            </div>
            <div className="absolute inset-0 opacity-0 dark:opacity-10 pointer-events-none hidden dark:block"
                style={{
                    backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Decorative blurry spots */}
            <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2"></div>
            <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3 transition-colors">
                        {t('team.title')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl mb-6 transition-colors">
                        {t('team.subtitle')}
                    </p>


                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
                    {t('team.members').map((member: any, idx: number) => (
                        <div
                            key={idx}
                            className={`group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#0A0A0A] border border-gray-200 dark:border-white/10 hover:border-[#22c55e]/50 transition-all duration-500 shadow-xl ${member.role.includes('CEO') ? 'order-3 md:order-2' :
                                idx === 0 ? 'order-1 md:order-1' : 'order-2 md:order-3'
                                }`}
                        >
                            {/* Image with grayscale to color transition */}
                            <img
                                alt={member.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                src={member.img}
                            />

                            {/* Bottom UI Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                                <div className="text-white">
                                    <p className="text-white/80 text-xs font-normal mb-1.5 uppercase tracking-wider">{member.role}</p>
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{member.name}</h3>
                                </div>

                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#22c55e]/20 backdrop-blur-xl border border-[#22c55e]/40 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(34,197,94,0.2)] transform group-hover:rotate-45 transition-all duration-500 group-hover:bg-[#22c55e]/40">
                                    <ArrowUpRight size={20} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                </div>
                            </div>

                            {/* Subtle Gradient Shadow for legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
                
                {/* 3 Skill Bullets Layout */}
                <div className="mt-20 sm:mt-28 max-w-5xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 relative z-10 w-full">
                        {t('team.skills').map((skill: any, idx: number) => {
                            const icons = [<Target key="1" className="w-7 h-7 text-white" />, <PenTool key="2" className="w-7 h-7 text-white" />, <Code key="3" className="w-7 h-7 text-white" />];
                            return (
                                <div key={idx} className="relative flex flex-col items-center text-center">
                                    {/* Connecting line pointing right */}
                                    {idx < 2 && (
                                        <div className="hidden md:flex absolute top-[32px] items-center translate-y-[-50%] z-[-1]" style={{ left: 'calc(50% + 48px)', right: 'calc(-50% + 48px)' }}>
                                            <div className="h-[2px] flex-grow bg-[#22c55e]/60"></div>
                                            <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#22c55e]/60"></div>
                                        </div>
                                    )}
                                    
                                    <div 
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 relative"
                                        style={{
                                            background: 'linear-gradient(135deg, #34d47a 0%, #2BB673 45%, #1a9e5c 100%)',
                                            boxShadow: '0 4px 20px -4px rgba(43,182,115,0.55), inset 0 1px 0 rgba(255,255,255,0.18)',
                                        }}
                                    >
                                        {icons[idx]}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-[280px]">{skill.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
