import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

type Language = 'en' | 'pt' | 'es';

type Translations = {
  [key in Language]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  en: {
    nav: {
      services: 'Services',
      testimonials: 'Testimonials',
      process: 'Process',
      contact: 'Contact',
      cta: 'Get results now'
    },
    hero: {
      pill: 'Exclusive for B2B services and infoproductors',
      title1: 'Nothing generates more authority',
      title2: 'than RESULTS',
      subtitle: 'That’s why we build high-conversion landing pages and websites for B2B businesses and infoproductors, scaling their sales operations through world-class design and strategy.',
      ctaPrimary: 'Get results now',
      ctaSecondary: 'Watch Demo Reel',
      trusted: 'Trusted by 50+ innovative companies'
    },
    dashboard: {
      header_dashboard: 'Dashboard',
      header_sales: 'Sales Report',
      header_products: 'Products',
      search: 'Search here...',
      top_products: 'Top Products',
      view_all: 'View All',
      table_name: 'Name',
      table_sales: 'Growth',
      products_list: [
        'Architecture Studio LP',
        'Medical Clinic Pro',
        'E-commerce Storefront',
        'SaaS Dashboard UI'
      ],
      visitors: 'Growth Metrics',
      vs_last: 'vs last month'
    },
    services: {
      title: 'Digital Solutions that',
      titleHighlight: 'Drive Your Growth',
      subtitle: 'We don\'t just design pretty websites. We build digital assets focused on profitability, speed, and user experience.',
      more: 'Learn more',
      items: [
        {
          title: "High Impact Landing Pages",
          description: "Optimized for conversion. We transform cold traffic into qualified customers through persuasive copywriting and strategic design.",
          tags: ["CRO", "Copywriting", "A/B Testing"]
        },
        {
          title: "Corporate Websites",
          description: "Elevate your digital authority. We build scalable, fast, and secure websites that reflect your brand's excellence.",
          tags: ["Next.js", "Scalability", "SEO"]
        },
        {
          title: "Design Systems & UI/UX",
          description: "Visual coherence across all touchpoints. We create intuitive interfaces that users love and reinforce your identity.",
          tags: ["Figma", "Branding", "User Flow"]
        }
      ]
    },
    process: {
      label: 'Methodology',
      title: 'From Idea to',
      titleHighlight: 'Conversion',
      subtitle: 'An iterative and transparent process designed to maximize results and minimize friction.',
      steps: [
        {
          title: 'Strategy & Discovery',
          description: 'We analyze your business model, audience, and competitors. We don\'t write a single line of code without a clear conversion plan.',
          points: ['Current UX Audit', 'KPI Definition', 'User Personas']
        },
        {
          title: 'High-Level UI/UX Design',
          description: 'We create wireframes and high-fidelity prototypes. Every pixel is crafted to guide the user towards the desired action.',
          points: ['Premium Visual Design', 'Interactive Prototyping', 'Persuasive Copywriting']
        },
        {
          title: 'Development & Optimization',
          description: 'We transform design into clean, fast code. We use the latest technologies to ensure perfect performance on any device.',
          points: ['Next.js / React', 'Load speed < 1s', 'Technical SEO']
        },
        {
          title: 'Launch & Growth',
          description: 'We deploy your project and configure tracking tools. But the work doesn\'t stop there; we iterate based on real data.',
          points: ['Analytics Setup', 'Post-Launch Support', 'A/B Testing']
        }
      ],
      featuresTitle: 'Complete Ecosystem',
      features: [
        { 
          title: 'CRM & Follow-up', 
          description: 'Track every lead interaction and never miss a sales opportunity.' 
        },
        { 
          title: 'High-conversion LPs', 
          description: 'Pages scientifically designed to turn visitors into buyers.' 
        },
        { 
          title: 'CMS Control', 
          description: 'Update text and images instantly without touching code.' 
        },
        { 
          title: 'Smart Automation', 
          description: 'Connect your favorite tools and automate workflows seamlessly.' 
        }
      ],
      cta: "Build your Ecosystem"
    },
    testimonials: {
      title: 'What our',
      titleHighlight: 'Partners & Clients Say',
      subtitle: 'Real results for companies looking to lead their sector.',
      items: [
        {
          role: "CEO @ TechFlow",
          content: "The transformation of our website was radical. We went from a 1.2% conversion rate to 4.5% in just two months. The design isn't just pretty, it really sells."
        },
        {
          role: "Marketing Dir @ Luxify",
          content: "They perfectly understood our premium aesthetic. The team managed to capture the brand essence and translate it into a fast, fluid digital experience."
        },
        {
          role: "Founder @ StartScale",
          content: "Speed and precision. We needed to launch in 3 weeks and they delivered beyond expectations. The code is clean, scalable, and the site flies on mobile."
        }
      ]
    },
    stats: {
      projects: { label: 'Successful Projects', desc: 'Landing pages & web systems' },
      countries: { label: 'Countries Served', desc: 'Global remote presence' },
      rating: { label: 'Client Satisfaction', desc: 'Based on verified reviews' },
      cta: "Become our next Success Story"
    },
    footer: {
      copyright: '© 2024 - 2026. All rights reserved to KN Growth'
    }
  },
  pt: {
    nav: {
      services: 'Serviços',
      testimonials: 'Depoimentos',
      process: 'Processo',
      contact: 'Contato',
      cta: 'Quero gerar resultados'
    },
    hero: {
      pill: 'Exclusivo para serviços B2B e infoprodutores',
      title1: 'Não existe nada que gere mais',
      title2: 'autoridade do que o RESULTADO',
      subtitle: 'Por isso, projetamos landing pages e sites de alta conversão para negócios B2B e infoprodutores, escalando suas operações de vendas por meio de design e estratégia de padrão mundial.',
      ctaPrimary: 'Quero gerar resultados',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Com a confiança de +50 empresas'
    },
    dashboard: {
      header_dashboard: 'Painel',
      header_sales: 'Relatório Vendas',
      header_products: 'Produtos',
      search: 'Buscar aqui...',
      top_products: 'Produtos Top',
      view_all: 'Ver Tudo',
      table_name: 'Nome',
      table_sales: 'Crescimento',
      products_list: [
        'Landing de Arquitetura',
        'Landing Clínica Médica',
        'E-commerce High-End',
        'SaaS Dashboard'
      ],
      visitors: 'Métricas de Crescimento',
      vs_last: 'vs mês anterior'
    },
    services: {
      title: 'Soluções Digitais que',
      titleHighlight: 'Impulsionam seu Crescimento',
      subtitle: 'Não apenas projetamos sites bonitos. Construímos ativos digitais focados em rentabilidade, velocidade e experiência do usuário.',
      more: 'Saiba mais',
      items: [
        {
          title: "Landing Pages de Alto Impacto",
          description: "Otimizadas para conversão. Transformamos tráfego frio em clientes qualificados através de copywriting persuasivo e design estratégico.",
          tags: ["CRO", "Copywriting", "A/B Testing"]
        },
        {
          title: "Sites Corporativos",
          description: "Eleve sua autoridade digital. Construímos sites escaláveis, rápidos e seguros que refletem a excelência da sua marca.",
          tags: ["Next.js", "Escalabilidade", "SEO"]
        },
        {
          title: "Sistemas de Design & UI/UX",
          description: "Coerência visual em todos os pontos de contato. Criamos interfaces intuitivas que encantam os usuários e reforçam sua identidade.",
          tags: ["Figma", "Branding", "User Flow"]
        }
      ]
    },
    process: {
      label: 'Metodologia',
      title: 'Da Ideia à',
      titleHighlight: 'Conversão',
      subtitle: 'Um processo iterativo e transparente projetado para maximizar resultados e minimizar atritos.',
      steps: [
        {
          title: 'Estratégia & Discovery',
          description: 'Analisamos seu modelo de negócio, audiência e concorrentes. Não escrevemos una única linha de código sem um plano claro para conversão.',
          points: ['Auditoria de UX atual', 'Definição de KPIs', 'User Personas']
        },
        {
          title: 'Design UI/UX de Alto Nível',
          description: 'Criamos wireframes e protótipos de alta fidelidade. Cada pixel é pensado para guiar o usuário para a ação desejada.',
          points: ['Design Visual Premium', 'Prototipagem Interativa', 'Copywriting Persuasivo']
        },
        {
          title: 'Desenvolvimento & Otimização',
          description: 'Transformamos o design em código limpo e rápido. Usamos as últimas tecnologias para garantir desempenho perfeito em qualquer dispositivo.',
          points: ['Next.js / React', 'Velocidade de carga < 1s', 'SEO Técnico']
        },
        {
          title: 'Lançamento & Crescimento',
          description: 'Implantamos seu projeto e configuramos as ferramentas de medição. Mas o trabalho não para aí; iteramos com base em dados reais.',
          points: ['Configuração de Analytics', 'Suporte Pós-Lançamento', 'A/B Testing']
        }
      ],
      featuresTitle: 'Ecossistema Completo',
      features: [
        { 
          title: 'CRM e Acompanhamento', 
          description: 'Rastreie cada interação e nunca perca uma oportunidade de venda.' 
        },
        { 
          title: 'LPs de Alta Conversão', 
          description: 'Páginas projetadas cientificamente para transformar visitantes em compradores.' 
        },
        { 
          title: 'Controle via CMS', 
          description: 'Atualize textos e imagens instantaneamente sem tocar em código.' 
        },
        { 
          title: 'Automação Inteligente', 
          description: 'Conecte suas ferramentas favoritas e automatize fluxos sem esforço.' 
        }
      ],
      cta: "Construa seu Ecossistema"
    },
    testimonials: {
      title: 'O que dizem nossos',
      titleHighlight: 'Parceiros & Clientes',
      subtitle: 'Resultados reais para empresas que buscam liderar seu setor.',
      items: [
        {
          role: "CEO @ TechFlow",
          content: "A transformação do nosso site foi radical. Passamos de uma taxa de conversão de 1.2% para 4.5% em apenas dois meses. O design não é apenas bonito, ele realmente vende."
        },
        {
          role: "Marketing Dir @ Luxify",
          content: "Entenderam perfeitamente nossa estética premium. A equipe conseguiu capturar a essência da marca e traduzi-la em uma experiencia digital fluida e rápida."
        },
        {
          role: "Founder @ StartScale",
          content: "Velocidade e precisão. Precisávamos lançar em 3 semanas e superaram as expectativas. O código é limpo, escalável e o site voa em dispositivos móveis."
        }
      ]
    },
    stats: {
      projects: { label: 'Projetos de Sucesso', desc: 'Landing pages e sistemas web' },
      countries: { label: 'Países Atendidos', desc: 'Presença global remota' },
      rating: { label: 'Satisfação do Cliente', desc: 'Baseado em avaliações verificadas' },
      cta: "Seja nosso próximo Case de Sucesso"
    },
    footer: {
      copyright: '© 2024 - 2026. Todos direitos reservados a KN Growth'
    }
  },
  es: {
    nav: {
      services: 'Servicios',
      testimonials: 'Testimonios',
      process: 'Proceso',
      contact: 'Contacto',
      cta: 'Quiero generar resultados'
    },
    hero: {
      pill: 'Exclusivo para servicios B2B e infoproductores',
      title1: 'No existe nada que genere más',
      title2: 'autoridad que el RESULTADO',
      subtitle: 'Por eso, diseñamos landing pages y sitios web de alta conversión para negocios B2B e infoproductores, escalando sus operaciones de ventas a través de diseño y estrategia de clase mundial.',
      ctaPrimary: 'Quiero generar resultados',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Con la confianza de +50 empresas'
    },
    dashboard: {
      header_dashboard: 'Panel',
      header_sales: 'Reporte de Ventas',
      header_products: 'Productos',
      search: 'Buscar aquí...',
      top_products: 'Productos Top',
      view_all: 'Ver Todo',
      table_name: 'Nombre',
      table_sales: 'Crecimiento',
      products_list: [
        'Landing de Arquitectura',
        'Landing Clínica Médica',
        'E-commerce High-End',
        'SaaS Dashboard UI'
      ],
      visitors: 'Métricas de Crecimiento',
      vs_last: 'vs mes anterior'
    },
    services: {
      title: 'Soluciones Digitales que',
      titleHighlight: 'Impulsan tu Crecimiento',
      subtitle: 'No solo diseñamos sitios bonitos. Construimos activos digitales enfocados en la rentabilidad, velocidad y experiencia del usuario.',
      more: 'Saber más',
      items: [
        {
          title: "Landing Pages de Alto Impacto",
          description: "Optimizadas para conversión. Transformamos tráfico frío en clientes calificados a través de copywriting persuasivo y diseño estratégico.",
          tags: ["CRO", "Copywriting", "A/B Testing"]
        },
        {
          title: "Sitios Corporativos",
          description: "Eleva tu autoridad digital. Construimos sitios escalables, rápidos y seguros que reflejan la excelencia de tu marca.",
          tags: ["Next.js", "Escalabilidad", "SEO"]
        },
        {
          title: "Sistemas de Diseño & UI/UX",
          description: "Coherencia visual en todos los puntos de contacto. Creamos interfaces intuitivas que encantan a los usuarios y refuerzan tu identidad.",
          tags: ["Figma", "Branding", "User Flow"]
        }
      ]
    },
    process: {
      label: 'Metodología',
      title: 'De la Idea a la',
      titleHighlight: 'Conversión',
      subtitle: 'Un proceso iterativo y transparente diseñado para maximizar resultados y minimizar la fricción.',
      steps: [
        {
          title: 'Estrategia & Discovery',
          description: 'Analizamos tu modelo de negocio, audiencia y competidores. No escribimos una sola línea de código sin un plan claro para la conversión.',
          points: ['Auditoría de UX actual', 'Definición de KPIs', 'User Personas']
        },
        {
          title: 'Diseño UI/UX de Alto Nivel',
          description: 'Creamos wireframes y prototipos de alta fidelidad. Cada píxel está pensado para guiar al usuario hacia la acción deseada.',
          points: ['Diseño Visual Premium', 'Prototipado Interactivo', 'Copywriting Persuasivo']
        },
        {
          title: 'Desarrollo & Optimización',
          description: 'Transformamos el diseño en código limpio y rápido. Usamos las últimas tecnologías para garantizar un rendimiento perfecto en cualquier dispositivo.',
          points: ['Next.js / React', 'Velocidad de carga < 1s', 'SEO Técnico']
        },
        {
          title: 'Lanzamiento & Crecimiento',
          description: 'Desplegamos tu proyecto y configuramos las herramientas de medición. Pero el trabajo no termina ahí; iteramos basándonos en datos reales.',
          points: ['Configuración de Analytics', 'Soporte Post-Lanzamiento', 'A/B Testing']
        }
      ],
      featuresTitle: 'Ecosistema Completo',
      features: [
        { 
          title: 'CRM y Seguimiento', 
          description: 'Rastrea cada interacción y nunca pierdas una oportunidad de venta.' 
        },
        { 
          title: 'LPs de Alta Conversión', 
          description: 'Páginas diseñadas científicamente para convertir visitantes en compradores.' 
        },
        { 
          title: 'Control vía CMS', 
          description: 'Actualiza textos e imágenes instantáneamente sin tocar código.' 
        },
        { 
          title: 'Automatización Inteligente', 
          description: 'Conecta tus herramientas favoritas y automatiza flujos sin esfuerzo.' 
        }
      ],
      cta: "Construye tu Ecosistema"
    },
    testimonials: {
      title: 'Lo que dicen nuestros',
      titleHighlight: 'Socios & Clientes',
      subtitle: 'Resultados reales para empresas que buscan liderar su sector.',
      items: [
        {
          role: "CEO @ TechFlow",
          content: "La transformación de nuestro sitio fue radical. Pasamos de una tasa de conversión de 1.2% a 4.5% en solo dos meses. El diseño no es solo bonito, realmente vende."
        },
        {
          role: "Marketing Dir @ Luxify",
          content: "Entendieron perfectamente nuestra estética premium. El equipo logró capturar la esencia de la marca y traducirla en una experiencia digital fluida y rápida."
        },
        {
          role: "Founder @ StartScale",
          content: "Velocidad y precisión. Necesitábamos lanzar en 3 semanas y superaron las expectativas. El código es limpio, escalable y el sitio vuela en dispositivos móviles."
        }
      ]
    },
    stats: {
      projects: { label: 'Proyectos Exitosos', desc: 'Landing pages y sistemas web' },
      countries: { label: 'Países Atendidos', desc: 'Presencia global remota' },
      rating: { label: 'Satisfacción del Cliente', desc: 'Basado en reseñas verificadas' },
      cta: "Sé nuestro próximo Caso de Éxito"
    },
    footer: {
      copyright: '© 2024 - 2026. Todos los derechos reservados a KN Growth'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = useCallback((path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (!current || current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }
    return current;
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};