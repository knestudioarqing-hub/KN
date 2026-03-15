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
            variants: {
                desktop: { x: '-65%', y: '-25%', rotate: 0, opacity: 1, scale: 1.15 },
            },
            zIndex: 10
        },
        {
            id: 'right',
            image: "https://i.imgur.com/7Wp94S7.jpg",
            alt: "Project Right",
            variants: {
                desktop: { x: '65%', y: '-25%', rotate: 0, opacity: 1, scale: 1.15 },
            },
            zIndex: 10
        },
        {
            id: 'center',
            image: "https://i.imgur.com/1xXk32C.jpg",
            alt: "Project Center",
            variants: {
                desktop: { x: 0, y: '30%', rotate: 0, opacity: 1, scale: 1 },
            },
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

                {/* ── MOBILE: 1 columna × 3 filas ── */}
                <div className="flex flex-col gap-5 sm:hidden">
                    {showcaseProjects.map((project: any) => (
                        <motion.img
                            key={project.id}
                            src={project.image}
                            alt={project.alt}
                            loading="lazy"
                            decoding="async"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    ))}
                </div>

                {/* ── DESKTOP: layout superpuesto / abanico ── */}
                <div className="hidden sm:block">
                    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-accent1/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative w-full max-w-5xl flex items-center justify-center">
                            {showcaseProjects.map((project: any) => (
                                <motion.img
                                    key={project.id}
                                    src={project.image}
                                    alt={project.alt}
                                    loading="lazy"
                                    decoding="async"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={project.variants.desktop}
                                    whileHover={{
                                        scale: project.variants.desktop.scale * 1.05,
                                        zIndex: 50
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1],
                                        delay: project.id === 'center' ? 0.2 : 0
                                    }}
                                    className="absolute w-[65%] h-auto select-none cursor-pointer"
                                    style={{
                                        zIndex: project.zIndex,
                                        borderRadius: project.id === 'center' ? '16px' : undefined,
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

            </div>
        </section>
    );
};

export default MobileShowcase;
