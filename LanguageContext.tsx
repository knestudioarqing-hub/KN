import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'pt';

type Translations = {
  [key in Language]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  es: {
    nav: {
      services: 'Servicios',
      testimonials: 'Depoimentos',
      process: 'Proceso',
      contact: 'Contacto',
      cta: 'Agendar Llamada'
    },
    hero: {
      pill: 'Nuevos slots disponibles para Q4',
      title1: 'Convierte Visitas en',
      title2: 'Clientes Recurrentes',
      subtitle: 'Diseñamos landing pages y sitios web de alto rendimiento. Potencia tu marca con estrategias de conversión validadas y diseño de clase mundial.',
      ctaPrimary: 'Empezar Proyecto Gratis',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Con la confianza de +200 empresas innovadoras'
    },
    dashboard: {
      header_dashboard: 'Panel',
      header_sales: 'Reporte Ventas',
      header_products: 'Productos',
      search: 'Buscar aquí...',
      top_products: 'Productos Top',
      view_all: 'Ver Todo',
      table_name: 'Nombre',
      table_pop: 'Popularidad',
      table_sales: 'Ventas',
      item_name: 'Landing Page Pro',
      visitors: 'Visitas',
      vs_last: 'vs mes anterior'
    },
    services: {
      title: 'Soluciones Digitales que',
      titleHighlight: 'Impulsan tu Crecimiento',
      subtitle: 'No solo diseñamos webs bonitas. Construimos activos digitales enfocados en rentabilidad, velocidad y experiencia de usuario.',
      more: 'Más información',
      items: [
        {
          title: "Landing Pages de Alto Impacto",
          description: "Optimizadas para la conversión. Transformamos tráfico frío en clientes cualificados mediante copywriting persuasivo y diseño estratégico.",
          tags: ["CRO", "Copywriting", "A/B Testing"]
        },
        {
          title: "Sitios Web Corporativos",
          description: "Eleva tu autoridad digital. Construimos sitios web escalables, rápidos y seguros que reflejan la excelencia de tu marca.",
          tags: ["Next.js", "Escalabilidad", "SEO"]
        },
        {
          title: "Sistemas de Diseño & UI/UX",
          description: "Coherencia visual en todos los puntos de contacto. Creamos interfaces intuitivas que enamoran a los usuarios y refuerzan tu identidad.",
          tags: ["Figma", "Branding", "User Flow"]
        }
      ]
    },
    process: {
      label: 'Metodología',
      title: 'De la Idea a la',
      titleHighlight: 'Conversión',
      subtitle: 'Un proceso iterativo y transparente diseñado para maximizar resultados y minimizar fricción.',
      steps: [
        {
          title: 'Estrategia & Discovery',
          description: 'Analizamos tu modelo de negocio, audiencia y competidores. No escribimos una sola línea de código sin tener un plan claro para la conversión.',
          points: ['Auditoría de UX actual', 'Definición de KPIs', 'User Personas']
        },
        {
          title: 'Diseño UI/UX de Alto Nivel',
          description: 'Creamos wireframes y prototipos de alta fidelidad. Cada píxel está pensado para guiar al usuario hacia la acción deseada.',
          points: ['Diseño Visual Premium', 'Prototipado Interactivo', 'Copywriting Persuasivo']
        },
        {
          title: 'Desarrollo & Optimización',
          description: 'Transformamos el diseño en código limpio y rápido. Usamos las últimas tecnologías para asegurar un rendimiento perfecto en cualquier dispositivo.',
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
        { title: 'CRM y seguimiento' },
        { title: 'Landing pages de alta conversión' },
        { title: 'Control total sobre la landing page' },
        { title: 'Automatización y flujos de calificación' }
      ]
    },
    testimonials: {
      title: 'Lo que dicen nuestros',
      titleHighlight: 'Partners & Clientes',
      subtitle: 'Resultados reales para empresas que buscan liderar su sector.',
      items: [
        {
          role: "CEO @ TechFlow",
          content: "La transformación de nuestra web fue radical. Pasamos de una tasa de conversión del 1.2% al 4.5% en solo dos meses. El diseño no solo es bonito, realmente vende."
        },
        {
          role: "Marketing Dir @ Luxify",
          content: "Entendieron perfectamente nuestra estética premium. El equipo logró capturar la esencia de la marca y plasmarla en una experiencia digital fluida y rápida."
        },
        {
          role: "Founder @ StartScale",
          content: "Velocidad y precisión. Necesitábamos lanzar en 3 semanas y cumplieron con creces. El código es limpio, escalable y la web vuela en móviles."
        }
      ]
    },
    stats: {
      projects: { label: 'Proyectos Exitosos', desc: 'Landing pages y sistemas web' },
      countries: { label: 'Países Atendidos', desc: 'Presencia global remota' },
      rating: { label: 'Satisfacción Cliente', desc: 'Basado en reseñas verificadas' }
    }
  },
  en: {
    nav: {
      services: 'Services',
      testimonials: 'Testimonials',
      process: 'Process',
      contact: 'Contact',
      cta: 'Book a Call'
    },
    hero: {
      pill: 'New slots available for Q4',
      title1: 'Turn Visits into',
      title2: 'Recurring Customers',
      subtitle: 'We design high-performance landing pages and websites. Boost your brand with validated conversion strategies and world-class design.',
      ctaPrimary: 'Start Free Project',
      ctaSecondary: 'Watch Demo Reel',
      trusted: 'Trusted by 200+ innovative companies'
    },
    dashboard: {
      header_dashboard: 'Dashboard',
      header_sales: 'Sales Report',
      header_products: 'Products',
      search: 'Search here...',
      top_products: 'Top Products',
      view_all: 'View All',
      table_name: 'Name',
      table_pop: 'Popularity',
      table_sales: 'Sales',
      item_name: 'Landing Page Pro',
      visitors: 'Visitor Insights',
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
        { title: 'CRM and follow-up' },
        { title: 'High-conversion landing pages' },
        { title: 'Full control over the landing page' },
        { title: 'Automation and lead-qualification flows' }
      ]
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
      rating: { label: 'Client Satisfaction', desc: 'Based on verified reviews' }
    }
  },
  pt: {
    nav: {
      services: 'Serviços',
      testimonials: 'Depoimentos',
      process: 'Processo',
      contact: 'Contato',
      cta: 'Agendar Chamada'
    },
    hero: {
      pill: 'Novas vagas disponíveis para Q4',
      title1: 'Transforme Visitas em',
      title2: 'Clientes Recorrentes',
      subtitle: 'Projetamos landing pages e sites de alto desempenho. Potencialize sua marca com estratégias de conversão validadas e design de classe mundial.',
      ctaPrimary: 'Começar Projeto Grátis',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Com a confiança de +200 empresas inovadoras'
    },
    dashboard: {
      header_dashboard: 'Painel',
      header_sales: 'Relatório Vendas',
      header_products: 'Produtos',
      search: 'Buscar aqui...',
      top_products: 'Produtos Top',
      view_all: 'Ver Tudo',
      table_name: 'Nome',
      table_pop: 'Popularidade',
      table_sales: 'Vendas',
      item_name: 'Landing Page Pro',
      visitors: 'Insights Visitantes',
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
          description: 'Analisamos seu modelo de negócio, audiência e concorrentes. Não escrevemos uma única linha de código sem um plano claro para conversão.',
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
        { title: 'CRM e acompanhamento' },
        { title: 'Landing pages de alta conversão' },
        { title: 'Controle total sobre a landing page' },
        { title: 'Automação e fluxos de qualificação' }
      ]
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
          content: "Entenderam perfeitamente nossa estética premium. A equipe conseguiu capturar a essência da marca e traduzi-la em uma experiência digital fluida e rápida."
        },
        {
          role: "Founder @ StartScale",
          content: "Velocidad e precisão. Precisávamos lançar em 3 semanas e superaram as expectativas. O código é limpo, escalável e o site voa em dispositivos móveis."
        }
      ]
    },
    stats: {
      projects: { label: 'Projetos de Sucesso', desc: 'Landing pages e sistemas web' },
      countries: { label: 'Países Atendidos', desc: 'Presença global remota' },
      rating: { label: 'Satisfação do Cliente', desc: 'Baseado em avaliações verificadas' }
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
  const [language, setLanguage] = useState<Language>('es');

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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