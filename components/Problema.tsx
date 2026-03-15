import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Problema: React.FC = () => {
    const { t } = useLanguage();
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (leftRef.current) observer.observe(leftRef.current);
        return () => observer.disconnect();
    }, []);

    const tag: string = t('problema.tag');
    const titulo: string = t('problema.titulo');
    const tituloEm: string = t('problema.tituloEm');
    const texto1: string = t('problema.texto1');
    const texto2: string = t('problema.texto2');
    const texto2Bold: string = t('problema.texto2Bold');
    const texto2After: string = t('problema.texto2After');
    const destaque: string = t('problema.destaque');

    return (
        <section
            style={{
                background: '#ffffff',
                padding: '0',
            }}
        >
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '120px 48px 72px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    alignItems: 'center',
                }}
                className="problema-grid"
            >
                {/* LEFT */}
                <div
                    ref={leftRef}
                    style={{
                        position: 'relative',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(36px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease',
                    }}
                >
                    {/* Tag */}
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#22c55e',
                            marginBottom: '32px',
                        }}
                    >
                        <span
                            style={{
                                display: 'block',
                                width: '24px',
                                height: '1.5px',
                                background: '#22c55e',
                                flexShrink: 0,
                            }}
                        />
                        {tag}
                    </span>

                    {/* Título */}
                    <h2
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(32px, 3.5vw, 52px)',
                            fontWeight: 500,
                            lineHeight: 1.15,
                            color: '#0a0a0a',
                            letterSpacing: '-1.5px',
                            margin: 0,
                        }}
                    >
                        {titulo}{' '}
                        <em
                            style={{
                                fontStyle: 'normal',
                                color: '#6b6b6b',
                                fontWeight: 150,
                            }}
                        >
                            {tituloEm}
                        </em>
                    </h2>

                    {/* Divisor vertical */}
                    <div
                        style={{
                            width: '1px',
                            height: '100%',
                            background:
                                'linear-gradient(to bottom, transparent, #e0e0e0 20%, #e0e0e0 80%, transparent)',
                            position: 'absolute',
                            right: '-40px',
                            top: 0,
                        }}
                        className="problema-divisor"
                    />
                </div>

                {/* RIGHT */}
                <div
                    ref={rightRef}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(36px)',
                        transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
                    }}
                >
                    <p
                        style={{
                            fontSize: '17px',
                            fontWeight: 300,
                            lineHeight: 1.8,
                            color: '#6b6b6b',
                            fontFamily: "'Poppins', sans-serif",
                            margin: 0,
                        }}
                    >
                        {texto1}
                    </p>

                    <p
                        style={{
                            fontSize: '17px',
                            fontWeight: 300,
                            lineHeight: 1.8,
                            color: '#6b6b6b',
                            fontFamily: "'Poppins', sans-serif",
                            margin: 0,
                        }}
                    >
                        {texto2}{' '}
                        <strong style={{ color: '#0a0a0a', fontWeight: 600 }}>
                            {texto2Bold}
                        </strong>{' '}
                        {texto2After}
                    </p>

                    {/* Destaque */}
                    <div
                        style={{
                            borderLeft: '3px solid #22c55e',
                            padding: '20px 24px',
                            background: '#f5f5f5',
                            borderRadius: '0 8px 8px 0',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '16px',
                                fontWeight: 600,
                                color: '#0a0a0a',
                                lineHeight: 1.5,
                                margin: 0,
                            }}
                        >
                            {destaque}
                        </p>
                    </div>
                </div>
            </div>

            {/* Responsive styles via <style> tag */}
            <style>{`
        @media (max-width: 900px) {
          .problema-grid {
            grid-template-columns: 1fr !important;
            padding: 48px 20px 40px !important;
            gap: 24px !important;
          }
          .problema-divisor {
            display: none !important;
          }
          .problema-grid h2 {
            font-size: clamp(24px, 6vw, 36px) !important;
            letter-spacing: -0.5px !important;
          }
          .problema-grid p {
            font-size: 15px !important;
          }
          .problema-tag {
            margin-bottom: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .problema-grid {
            padding: 40px 16px 32px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Problema;
