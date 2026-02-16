import React, { useEffect, useRef, useState } from 'react';
import { SplineScene, SplineSceneRef } from "@/components/ui/spline";
import { motion } from "framer-motion";
import { useLanguage } from '../LanguageContext';

const GREETING_STORAGE_KEY = 'straton_has_greeted';
const GREETING_DURATION = 14500; // 5s posicionamiento + 3s textos + 3s espera + 4.5s desaparición rápida (1.5s cada uno)
const CTA_DURATION = 5000; // 5s para mostrar los textos CTA antes de hacerlos visibles permanentemente

export type Phase = 'loading' | 'greeting' | 'exit' | 'cta' | 'interactive';

export function SplineSceneDemo() {
    const { t } = useLanguage();
    const splineRef = useRef<SplineSceneRef>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [phase, setPhase] = useState<Phase>('loading');
    const [isVisible, setIsVisible] = useState(false);
    const hasGreeted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasGreeted.current) {
                        hasGreeted.current = true;
                        setIsVisible(true);
                        // Dar tiempo a que la escena cargue antes de iniciar
                        setTimeout(() => {
                            startGreetingSequence();
                        }, 500);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const startGreetingSequence = () => {
        // Iniciar la animación de Straton
        if (splineRef.current?.play) {
            splineRef.current.play();
        }

        setPhase('greeting');

        if (splineRef.current?.pauseGameControls) {
            splineRef.current.pauseGameControls();
        }

        // Timeline:
        // 0s-5s: Straton se posiciona
        // 5s: Aparece "Olá"
        // 6s: Aparece "Sou STRATON"
        // 7s: Aparece "Bem-vindo à KN Growth"
        // 10s (7s + 3s espera): Inicia desaparición secuencial RÁPIDA
        // 10s-11.5s: Desaparece Greeting 3 (1.5s)
        // 11.5s-13s: Desaparece Greeting 2 (1.5s)
        // 13s-14.5s: Desaparece Greeting 1 (1.5s)
        // 14.5s: Aparecen textos CTA (permanentes)

        setTimeout(() => {
            setPhase('exit');
        }, 10000);

        setTimeout(() => {
            setPhase('cta');
        }, GREETING_DURATION);

        setTimeout(() => {
            setPhase('interactive');
            localStorage.setItem(GREETING_STORAGE_KEY, 'true');
            if (splineRef.current?.resumeGameControls) {
                splineRef.current.resumeGameControls();
            }
        }, GREETING_DURATION + CTA_DURATION);
    };

    const handleSplineLoad = () => {
        console.log('STRATON loaded');
    };

    const formatGreeting2 = (text: string) => {
        const parts = text.split('STRATON');
        if (parts.length > 1) {
            return <>{parts[0]}<span className="font-bold text-gray-900 dark:text-white">STRATON</span>{parts[1]}</>;
        }
        return text;
    };

    const formatGreeting3 = (text: string) => {
        const parts = text.split('KN Growth');
        if (parts.length > 1) {
            return <>{parts[0]}<span className="font-bold text-gray-900 dark:text-white">KN Growth</span>{parts[1]}</>;
        }
        return text;
    };

    const formatCTALeft = (text: string) => {
        const parts = text.split('KN Growth');
        if (parts.length > 1) {
            return <>{parts[0]}<span className="font-bold text-gray-900 dark:text-white">KN Growth</span>{parts[1]}</>;
        }
        return text;
    };

    const formatCTARight = (text: string) => {
        const parts = text.split('100%');
        if (parts.length > 1) {
            return <>{parts[0]}<span className="font-bold">100%</span>{parts[1]}</>;
        }
        return text;
    };

    return (
        <div
            ref={containerRef}
            className={`w-full h-[500px] md:h-[600px] relative transition-all duration-500 overflow-hidden hidden md:block`}
        >
            {isVisible && (
                <SplineScene
                    ref={splineRef}
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className={`w-full h-full transition-all duration-300 ${phase === 'greeting' || phase === 'exit' || phase === 'cta'
                        ? 'cursor-wait scale-[1.02]'
                        : 'cursor-grab active:cursor-grabbing'
                        }`}
                    onLoad={handleSplineLoad}
                />
            )}

            {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/50 dark:to-black/50 pointer-events-none">
                    <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Tek Text Overlay - Fase greeting y exit */}
            {(phase === 'greeting' || phase === 'exit') && (
                <>
                    {/* Greeting 1: Olá - aparece 5s, desaparece 13s-14.5s (1.5s rápido) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        animate={phase === 'exit' 
                            ? { opacity: 0, x: -30, filter: "blur(5px)" }
                            : { opacity: 1, x: 0, filter: "blur(0px)" }
                        }
                        transition={phase === 'exit'
                            ? { duration: 1.5, delay: 1.5, ease: "easeInOut" }
                            : { duration: 0.8, delay: 5.0, ease: "easeOut" }
                        }
                        className="absolute top-[15%] left-[5%] md:left-[5%] z-20 pointer-events-none"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tighter">
                            {t('straton.greeting1')}
                        </h1>
                    </motion.div>

                    {/* Greeting 2: Sou STRATON - aparece 6s, desaparece 11.5s-13s (1.5s rápido) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                        animate={phase === 'exit' 
                            ? { opacity: 0, x: -20, filter: "blur(3px)" }
                            : { opacity: 1, x: 0, filter: "blur(0px)" }
                        }
                        transition={phase === 'exit'
                            ? { duration: 1.5, delay: 0.75, ease: "easeInOut" }
                            : { duration: 0.8, delay: 6.0, ease: "easeOut" }
                        }
                        className="absolute top-[30%] md:top-[30%] left-[5%] md:left-[5%] z-20 pointer-events-none"
                    >
                        <h2 className="text-3xl md:text-5xl text-gray-500 dark:text-gray-400 font-light tracking-tight">
                            {formatGreeting2(t('straton.greeting2'))}
                        </h2>
                    </motion.div>

                    {/* Greeting 3: Bem-vindo à KN Growth - aparece 7s, desaparece 10s-11.5s (1.5s rápido) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        animate={phase === 'exit' 
                            ? { opacity: 0, x: 30, filter: "blur(5px)" }
                            : { opacity: 1, x: 0, filter: "blur(0px)" }
                        }
                        transition={phase === 'exit'
                            ? { duration: 1.5, delay: 0, ease: "easeInOut" }
                            : { duration: 0.8, delay: 7.0, ease: "easeOut" }
                        }
                        className="absolute top-[30%] -translate-y-1/2 right-[2%] md:right-[2%] z-20 pointer-events-none md:max-w-md text-right"
                    >
                        <h2 className="text-4xl md:text-6xl text-gray-900 dark:text-white font-medium leading-tight tracking-tight">
                            {formatGreeting3(t('straton.greeting3'))}
                        </h2>
                    </motion.div>
                </>
            )}

            {/* CTA Texts - aparecen a los 14.5s y se mantienen visibles */}
            {(phase === 'cta' || phase === 'interactive') && (
                <>
                    {/* CTA Izquierda - más a la izquierda, desfasada arriba */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-[20%] left-[2%] z-20 pointer-events-none max-w-lg"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight tracking-tight">
                            {formatCTALeft(t('straton.ctaLeft'))}
                        </h2>
                    </motion.div>

                    {/* CTA Derecha - más a la derecha, desfasada abajo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="absolute top-[40%] right-[2%] z-20 pointer-events-none max-w-lg text-right"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-orange leading-tight tracking-tight">
                            {formatCTARight(t('straton.ctaRight'))}
                        </h2>
                    </motion.div>
                </>
            )}

            {/* Interactive hint */}
            {phase === 'interactive' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
                >
                    <p className="text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
                        Hover & Drag to Interact
                    </p>
                </motion.div>
            )}
        </div>
    )
}
