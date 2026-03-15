import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const MobileShowcase: React.FC = () => {
    const { t } = useLanguage();

    const showcaseProjects = [
        {
            id: 'left',
            image: "https://i.imgur.com/1bXvduM.jpg",
            alt: "Project Left",
            initial: { x: -150, y: -100, rotate: 0, opacity: 0, scale: 0.9 },
            whileInView: { x: '-65%', y: '-25%', rotate: 0, opacity: 1, scale: 1.15 },
            zIndex: 10
        },
        {
            id: 'right',
            image: "https://i.imgur.com/q7Fqzxm.jpg",
            alt: "Project Right",
            initial: { x: 150, y: -100, rotate: 0, opacity: 0, scale: 0.9 },
            whileInView: { x: '65%', y: '-25%', rotate: 0, opacity: 1, scale: 1.3 },
            zIndex: 10
        },
        {
            id: 'center',
            image: "https://i.imgur.com/9HqmXeL.jpg",
            alt: "Project Center",
            initial: { y: 150, rotate: 0, opacity: 0, scale: 0.9 },
            whileInView: { y: '30%', rotate: 0, opacity: 1, scale: 1 },
            zIndex: 20
        }
    ];

    return (
        <section id="portfolio" className="relative py-16 sm:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-24 relative z-40">
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                        {t('mobileShowcase.title')}{' '}
                        <span style={{ color: '#22c55e' }}>{t('mobileShowcase.titleHighlight')}</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-xl max-w-2xl mx-auto px-4">
                        {t('mobileShowcase.label')}
                    </p>
                </div>

                {/* Stacked Cards Container */}
                <div className="relative h-[300px] sm:h-[500px] md:h-[600px] flex items-center justify-center">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-accent1/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative w-full max-w-5xl flex items-center justify-center translate-y-[-10%] sm:translate-y-0">
                        {showcaseProjects.map((project) => (
                            <motion.img
                                key={project.id}
                                src={project.image}
                                alt={project.alt}
                                loading="lazy"
                                decoding="async"
                                initial={project.initial}
                                whileInView={project.whileInView}
                                whileHover={{ scale: (project.whileInView as any).scale * 1.06, y: ((project.whileInView as any).y ?? 0) }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: project.id === 'center' ? 0.2 : 0
                                }}
                                className="absolute w-[75%] sm:w-[65%] h-auto select-none cursor-pointer"
                                style={{
                                    zIndex: project.zIndex,
                                    WebkitMaskImage: project.id === 'center'
                                        ? 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,1) 50%)'
                                        : 'none',
                                    maskImage: project.id === 'center'
                                        ? 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,1) 50%)'
                                        : 'none'
                                }}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MobileShowcase;
