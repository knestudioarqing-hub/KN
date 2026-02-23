import React, { useEffect, useState } from 'react';

const ComingSoon: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Fade in on mount
        const t = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
            style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease',
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Content */}
            <div className="relative flex flex-col items-center select-none">
                {/* KN GROWTH — giant watermark */}
                <h1
                    className="font-bold leading-none tracking-tight text-center"
                    style={{
                        fontSize: 'clamp(56px, 14vw, 160px)',
                        color: 'rgba(0, 0, 0, 0.10)',
                        letterSpacing: '-0.03em',
                    }}
                >
                    KN GROWTH
                </h1>

                {/* Em breve — thin subtitle */}
                <p
                    className="mt-4 text-center tracking-widest"
                    style={{
                        fontWeight: 300,
                        fontSize: 'clamp(13px, 1.4vw, 16px)',
                        color: 'rgba(0, 0, 0, 0.35)',
                        letterSpacing: '0.18em',
                    }}
                >
                    Em breve...
                </p>
            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
    );
};

export default ComingSoon;
