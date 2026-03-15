import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const items: { question: string; answer: string }[] = t('faq.items');

  return (
    <section style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
      <div className="faq-wrapper">
        {/* LEFT */}
        <div className="faq-left">
          <span className="faq-tag">{t('faq.tag')}</span>
          <h2 className="faq-title">
            {t('faq.title')}{' '}
            <em>{t('faq.titleEm')}</em>
          </h2>
          <p className="faq-subtitle">{t('faq.subtitle')}</p>
          <div className="faq-divider" />
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          {items.map((item, idx) => {
            const isOpen = openId === idx;
            return (
              <div
                key={idx}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}${idx === 0 ? ' faq-item--first' : ''}`}
              >
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p
                      className="faq-answer-text"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="faq-highlight">
            <p>{t('faq.highlight')}</p>
          </div>
        </div>
      </div>

      <style>{`
        .faq-wrapper {
          font-family: 'DM Sans', sans-serif;
          padding: 120px 80px;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .faq-left {
          position: sticky;
          top: 80px;
          position: relative;
          animation: faqFadeUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .faq-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #22c55e;
          margin-bottom: 32px;
        }

        .faq-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1.5px;
          background: #22c55e;
        }

        .faq-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 3.5vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          color: #0a0a0a;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .faq-title em {
          font-style: normal;
          color: #6b6b6b;
          font-weight: 300;
        }

        .faq-subtitle {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6b6b;
        }

        .faq-divider {
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #e0e0e0 20%, #e0e0e0 80%, transparent);
          position: absolute;
          right: -40px;
          top: 0;
        }

        .faq-right {
          display: flex;
          flex-direction: column;
          gap: 0;
          animation: faqFadeUp 0.8s ease 0.2s forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .faq-item {
          border-bottom: 1px solid #e8e8e8;
        }

        .faq-item--first {
          border-top: 1px solid #e8e8e8;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 28px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
        }

        .faq-question-text {
          font-family: 'Sora', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .faq-item--open .faq-question-text {
          color: #22c55e;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .faq-item--open .faq-icon {
          background: #22c55e;
          border-color: #22c55e;
        }

        .faq-icon::before,
        .faq-icon::after {
          content: '';
          position: absolute;
          background: #6b6b6b;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .faq-icon::before {
          width: 10px;
          height: 1.5px;
        }

        .faq-icon::after {
          width: 1.5px;
          height: 10px;
          transform: scaleY(1);
        }

        .faq-item--open .faq-icon::before,
        .faq-item--open .faq-icon::after {
          background: #ffffff;
        }

        .faq-item--open .faq-icon::after {
          transform: scaleY(0);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }

        .faq-item--open .faq-answer {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6b6b;
          padding-bottom: 28px;
        }

        .faq-answer-text strong {
          color: #0a0a0a;
          font-weight: 600;
        }

        .faq-highlight {
          margin-top: 40px;
          border-left: 3px solid #22c55e;
          padding: 20px 24px;
          background: #f5f5f5;
          border-radius: 0 8px 8px 0;
        }

        .faq-highlight p {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1.5;
        }

        @keyframes faqFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .faq-wrapper {
            grid-template-columns: 1fr;
            padding: 80px 32px;
            gap: 48px;
          }
          .faq-divider { display: none; }
          .faq-left { position: static !important; }
        }

        @media (max-width: 480px) {
          .faq-wrapper {
            padding: 60px 20px;
          }
          .faq-question {
            padding: 22px 0;
          }
          .faq-question-text {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
