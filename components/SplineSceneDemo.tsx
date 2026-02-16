import React, { useEffect, useRef, useState } from 'react';
import { SplineScene, SplineSceneRef } from "@/components/ui/spline";
import { motion } from "framer-motion";
import { useLanguage } from '../LanguageContext';

const GREETING_STORAGE_KEY = 'straton_has_greeted';
const GREETING_DURATION = 13500; // 4s posicionamiento + 3s textos + 3s espera + 4.5s desaparición rápida (1.5s cada uno)
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
                    if (entry.isIntersecting) {
                        // Si es la primera vez que entra
                        if (!hasGreeted.current) {
                            hasGreeted.current = true;
                            setIsVisible(true);
                            // Dar tiempo a que la escena cargue antes de iniciar
                            setTimeout(() => {
                                startGreetingSequence();
                            }, 500);
                        } else {
                            // Reanudar si ya había iniciado pero estaba pausado
                            if (splineRef.current?.play) {
                                splineRef.current.play();
                            }
                        }
                    } else {
                        // Cuando sale del viewport, detener completamente para ahorrar recursos
                        if (hasGreeted.current && splineRef.current?.stop) {
                            splineRef.current.stop();
                        }
                    }
                });
            },
            { threshold: 0.1 }
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
        // 0s-4s: Straton se posiciona
        // 4s: Aparece "Olá"
        // 5s: Aparece "Sou STRATON"
        // 6s: Aparece "Bem-vindo à KN Growth"
        // 9s (6s + 3s espera): Inicia desaparición secuencial RÁPIDA
        // 9s-10.5s: Desaparece Greeting 3 (1.5s)
        // 10.5s-12s: Desaparece Greeting 2 (1.5s)
        // 12s-13.5s: Desaparece Greeting 1 (1.5s)
        // 13.5s: Aparecen textos CTA (permanentes)

        setTimeout(() => {
            setPhase('exit');
        }, 9000);

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
        const parts = text.split('100% gratuito');
        if (parts.length > 1) {
            return <>{parts[0]}<span className="font-bold">100% gratuito</span>{parts[1]}</>;
        }
        return text;
    };

    return (
        <div
            ref={containerRef}
            className={`w-full h-[600px] md:h-[800px] relative transition-all duration-500 overflow-hidden hidden md:block`}
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
                    {/* Greeting 1: Olá - aparece 4s, desaparece 12s-13.5s (1.5s rápido) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        animate={phase === 'exit'
                            ? { opacity: 0, x: -30, filter: "blur(5px)" }
                            : { opacity: 1, x: 0, filter: "blur(0px)" }
                        }
                        transition={phase === 'exit'
                            ? { duration: 1.5, delay: 1.5, ease: "easeInOut" }
                            : {
                                opacity: { duration: 0.8, delay: 4.0, ease: "easeOut" },
                                x: { duration: 0.8, delay: 4.0, ease: "easeOut" },
                                filter: { duration: 0.8, delay: 4.0, ease: "easeOut" }
                            }
                        }
                        className="absolute top-[15%] left-[5%] md:left-[5%] z-20 pointer-events-none animate-float-strato-1"
                        style={{ willChange: 'transform' }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tighter">
                            {t('straton.greeting1')}
                        </h1>
                    </motion.div>

                    {/* Greeting 2: Sou STRATON - aparece 5s, desaparece 10.5s-12s (1.5s rápido) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                        animate={phase === 'exit'
                            ? { opacity: 0, x: -20, filter: "blur(3px)" }
                            : { opacity: 1, x: 0, filter: "blur(0px)" }
                        }
                        transition={phase === 'exit'
                            ? { duration: 1.5, delay: 0.75, ease: "easeInOut" }
                            : {
                                opacity: { duration: 0.8, delay: 5.0, ease: "easeOut" },
                                x: { duration: 0.8, delay: 5.0, ease: "easeOut" },
                                filter: { duration: 0.8, delay: 5.0, ease: "easeOut" }
                            }
                        }
                        className="absolute top-[30%] md:top-[30%] left-[5%] md:left-[5%] z-20 pointer-events-none animate-float-strato-2"
                        style={{ willChange: 'transform' }}
                    >
                        <h2 className="text-3xl md:text-5xl text-gray-500 dark:text-gray-400 font-light tracking-tight">
                            {formatGreeting2(t('straton.greeting2'))}
                        </h2>
                    </motion.div>

                    {/* Greeting 3: Bem-vindo à KN Growth - aparece 6s, desaparece 9s-10.5s (1.5s rápido) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        animate={phase === 'exit'
                            ? { opacity: 0, x: 30, filter: "blur(5px)" }
                            : { opacity: 1, x: 0, filter: "blur(0px)" }
                        }
                        transition={phase === 'exit'
                            ? { duration: 1.5, delay: 0, ease: "easeInOut" }
                            : {
                                opacity: { duration: 0.8, delay: 6.0, ease: "easeOut" },
                                x: { duration: 0.8, delay: 6.0, ease: "easeOut" },
                                filter: { duration: 0.8, delay: 6.0, ease: "easeOut" }
                            }
                        }
                        className="absolute top-[30%] -translate-y-1/2 right-[2%] md:right-[2%] z-20 pointer-events-none md:max-w-md text-right animate-float-strato-3"
                        style={{ willChange: 'transform' }}
                    >
                        <h2 className="text-4xl md:text-6xl text-gray-900 dark:text-white font-medium leading-tight tracking-tight">
                            {formatGreeting3(t('straton.greeting3'))}
                        </h2>
                    </motion.div>
                </>
            )}

            {/* CTA Texts - aparecen a los 13.5s y se mantienen visibles */}
            {(phase === 'cta' || phase === 'interactive') && (
                <>
                    {/* CTA Izquierda - más a la izquierda, desfasada arriba */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: -30, filter: "blur(0px)" }} // x: -30 para moverlo 30px a la izquierda
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut" },
                            x: { duration: 0.8, ease: "easeOut" },
                            filter: { duration: 0.8, ease: "easeOut" }
                        }}
                        className="absolute top-[20%] left-[2%] md:left-[5%] z-20 pointer-events-none max-w-[40%] md:max-w-sm text-left animate-float-strato-4"
                        style={{ willChange: 'transform' }}
                    >
                        <h2 className="text-3xl md:text-4xl font-instrument text-gray-800 dark:text-gray-200 leading-tight tracking-tight">
                            {formatCTALeft(t('straton.ctaLeft'))}
                        </h2>
                    </motion.div>

                    {/* CTA Derecha - más a la derecha, desfasada abajo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 60, filter: "blur(0px)" }} // x: 60 (30 previos + 30 nuevos) para moverlo más a la derecha
                        transition={{
                            opacity: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                            x: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                            filter: { duration: 0.8, delay: 0.3, ease: "easeOut" }
                        }}
                        className="absolute top-[68%] right-[0.5%] z-20 pointer-events-none max-w-2xl text-right animate-float-strato-5"
                        style={{ willChange: 'transform' }}
                    >
                        <h2 className="text-3xl md:text-4xl font-instrument text-brand-orange leading-tight tracking-tight whitespace-pre-line">
                            {formatCTARight(t('straton.ctaRight'))}
                        </h2>
                    </motion.div>
                </>
            )}


        </div>
    )
}
