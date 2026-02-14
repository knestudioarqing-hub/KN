import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Team: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative bg-white dark:bg-black py-20 sm:py-32 scroll-mt-24 overflow-hidden transition-colors duration-500" id="equipo">
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                        {t('team.title')}
                    </h2>

                    <div className="flex items-center gap-4 text-xs md:text-sm font-bold overflow-x-auto pb-4 md:pb-0 w-full no-scrollbar scroll-smooth px-4 md:px-0">
                        <div className="flex items-center gap-4 mx-auto min-w-max">
                            {t('team.filters').map((filter: string, i: number) => (
                                <React.Fragment key={i}>
                                    <button className={`hover:text-brand-orange transition-all whitespace-nowrap uppercase tracking-widest ${i === 0 ? 'text-brand-orange' : 'text-gray-400 dark:text-gray-500'}`}>
                                        {filter}
                                    </button>
                                    {i < t('team.filters').length - 1 && <div className="w-6 h-[1px] bg-gray-200 dark:bg-gray-800 flex-shrink-0"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {t('team.members').map((member: any, idx: number) => (
                        <div
                            key={idx}
                            className={`group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#0A0A0A] border border-gray-200 dark:border-white/10 hover:border-brand-orange/50 transition-all duration-500 shadow-xl ${member.role.includes('CEO') ? 'order-3 md:order-2' :
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

                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 transform group-hover:rotate-45 transition-transform duration-500">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            {/* Subtle Gradient Shadow for legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
