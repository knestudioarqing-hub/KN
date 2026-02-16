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
      portfolio: 'Portfolio',
      cta: 'I want to generate results',
      themePopup: {
        title: 'Switch to Dark Mode?',
        text: 'Would you like to experience the dark mode version?',
        yes: 'Yes, switch',
        no: 'No, thanks'
      },
      portfolioLocked: {
        title: 'Exclusive Access',
        access: 'Member Access Only',
        message: 'Portfolio access is reserved for partners who take the first step. Schedule your strategic session to unlock our full case studies.',
        cta: 'Schedule Call'
      }
    },
    hero: {
      pill: 'Exclusive for B2B services and infoproductors',
      title1: 'There is nothing that generates more authority',
      title2: 'than RESULTS',
      subtitle: 'That’s why we design visual authority for companies and infoproducers, generating more sales and more qualified leads using assertive and high-impact communication.',
      ctaPrimary: 'I want to generate results',
      ctaSecondary: 'Watch Demo Reel',
      trusted: 'Trusted by 50+ innovative companies',
      floating_booking: 'New booking confirmed',
      floating_time: 'Today, 2:30 PM',
      floating_checkout: 'Checkout',
      floating_sale: 'Sale closed: $2,450.00'
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
      title: 'Without strategy, there is no impact',
      titleHighlight: 'and without impact, there are no sales',
      subtitle: 'We create acquisition systems, focused on qualification for your company and scalable sales growth.',
      more: 'Learn more',
      cta_portfolio: 'View Portfolio',
      items: [
        {
          title: "High Impact Website",
          description: "Optimized for conversion. We transform cold traffic into qualified customers through persuasive copywriting and strategic design.",
          tags: []
        },
        {
          title: "Strategic Capture and Qualification",
          description: "Build a digital authority that generates results. A complete ecosystem that your company needs to structure a high-conversion sales funnel.",
          tags: []
        },
        {
          title: "Full Pipeline",
          description: "We integrate automations that connect every stage of your sales process. The generated data allows you to scale your business with predictability and strategy.",
          tags: []
        }
      ]
    },
    process: {
      label: 'Methodology',
      title: 'From Idea to',
      titleHighlight: 'Result',
      subtitle: 'An iterative and transparent process designed to maximize results and minimize friction.',
      steps: [
        {
          title: 'Meeting & Audit',
          description: 'We will conduct an initial audit of your situation, providing a PDF report so you know exactly where you stand and how we will proceed.',
          points: ['UX/UI Audit', 'Funnel Audit', 'Audience Audit']
        },
        {
          title: 'The 4 Islands Method',
          description: 'We apply our method moving from island to island only when the ship\'s captain (you) gives the OK. This prevents planning divergences avoiding surprises.',
          points: ['Premium Visual Design', 'Interactive Prototyping', 'Persuasive Copywriting']
        },
        {
          title: 'Pre-Implementation',
          description: 'Once the 4 Islands are approved, we move to intensive implementation and integration of all functionalities.',
          points: ['Next.js / React', 'Load speed < 1s', 'Technical SEO']
        },
        {
          title: 'Launch',
          description: 'We prepare everything for this rocket launch: domain, hosting, integrations... everything 100% functional.',
          points: ['Analytics Setup', 'Post-Launch Support', 'A/B Testing']
        }
      ],
      featuresTitle: 'Complete Ecosystem',
      featuresLabel: 'Ecosystem',
      featuresSubtitle: 'We will integrate this ecosystem into your company, efficiently and quickly',
      features: [
        {
          title: 'CRM + Follow-up',
          description: 'Track every interaction and never miss any sales opportunity.'
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
          title: 'Integrations + Automations',
          description: 'We integrate your company\'s daily tools into the new conversion system, without loss of data or information.'
        }
      ],
      cta: "I want to generate results"
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
      cta: "I want to generate results"
    },
    team: {
      title: 'KN Growth Team',
      filters: ['All', 'Automations', 'Design', 'Strategy'],
      members: [
        { name: 'Carlos Coloma', role: 'CTO', img: 'https://i.imgur.com/sfFgwDa.png' },
        { name: 'Gianfranco N.', role: 'CEO KN Growth', img: 'https://i.imgur.com/KZ051q2.png' },
        { name: 'Leandro V.', role: 'Software Developer', img: 'https://i.imgur.com/vsiDMpt.png' }
      ]
    },
    footer: {
      copyright: '© 2024 - 2026. All rights reserved to KN Growth'
    },
    mobileShowcase: {
      label: 'Recent Work',
      title: 'Designed for',
      titleHighlight: 'Web Excellence',
      scrollInstructions: 'Use scroll to see more'
    },
    straton: {
      greeting1: "Hello",
      greeting2: "I am STRATON",
      greeting3: "Welcome to KN Growth",
      ctaLeft: "You can schedule a call with the KN Growth team",
      ctaRight: "It's 100% free and they\nwill guide you step by step"
    }
  },
  pt: {
    nav: {
      services: 'Serviços',
      testimonials: 'Depoimentos',
      process: 'Processo',
      contact: 'Contato',
      portfolio: 'Portfólio',
      cta: 'Quero gerar resultados',
      themePopup: {
        title: 'Mudar para Modo Escuro?',
        text: 'Gostaria de experimentar a versão em modo escuro?',
        yes: 'Sim, mudar',
        no: 'Não, obrigado'
      },
      portfolioLocked: {
        title: 'Acesso Exclusivo',
        access: 'Acesso Somente para Membros',
        message: 'O acesso ao portfólio é reservado para parceiros que dão o primeiro passo. Agende sua sessão estratégica para desbloquear nossos estudos de caso completos.',
        cta: 'Agendar Chamada'
      }
    },
    hero: {
      pill: 'Exclusivo para serviços B2B e infoprodutores',
      title1: 'Não existe nada que gere mais',
      title2: 'autoridade do que RESULTADOS',
      subtitle: 'Por isso que projetamos autoridade visual para empresas e infoprodutores, gerando mais vendas e leads mais qualificados utilizando uma comunicação assertiva e de alto impacto.',
      ctaPrimary: 'Quero gerar resultados',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Com a confiança de +50 empresas',
      floating_booking: 'Novo agendamento confirmado',
      floating_time: 'Hoje, 14:30',
      floating_checkout: 'Checkout',
      floating_sale: 'Venda realizada: R$ 2.450,00'
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
      title: 'Sem estratégia, não há impacto',
      titleHighlight: 'e sem impacto, não há vendas',
      subtitle: 'Criamos sistemas de captação, focados na qualificação para a sua empresa e aumento escalável de vendas.',
      more: 'Saiba mais',
      cta_portfolio: 'Ver Portfólio',
      items: [
        {
          title: "Site de alto impacto",
          description: "Otimizadas para conversão. Transformamos tráfego frio em clientes qualificados através de copywriting persuasivo e design estratégico.",
          tags: []
        },
        {
          title: "Captação e qualificação estratégica",
          description: "Construa uma autoridade digital que gera resultados. Um ecossistema completo que sua empresa precisa para estruturar um funil de vendas com conversão.",
          tags: []
        },
        {
          title: "Balde cheio",
          description: "Integramos automações que conectam cada etapa do seu processo de vendas. Os dados gerados permitem escalar o seu negócio com previsibilidade e estratégia.",
          tags: []
        }
      ]
    },
    process: {
      label: 'Metodologia',
      title: 'Da Ideia ao',
      titleHighlight: 'Resultado',
      subtitle: 'Um processo iterativo e transparente projetado para maximizar resultados e minimizar atritos.',
      steps: [
        {
          title: 'Reunião e Auditoria',
          description: 'Faremos uma auditoria da sua situação inicial, através de um relatório em PDF, para que você saiba onde está e como procederemos.',
          points: ['Auditoria UX/UI', 'Auditoria de funil', 'Auditoria de público']
        },
        {
          title: 'As 4 Ilhas',
          description: 'Aplicaremos o nosso método das 4 ilhas. Só avançaremos de uma ilha para a outra quando o capitão do barco (você) nos der o OK. Isso evita divergências e surpresas.',
          points: ['Design Visual Premium', 'Prototipagem Interativa', 'Copywriting Persuasivo']
        },
        {
          title: 'Pré-Implementação',
          description: 'Uma vez aprovadas as 4 ilhas, avançaremos para a implementação intensiva e integração das funcionalidades.',
          points: ['Next.js / React', 'Velocidade de carga < 1s', 'SEO Técnico']
        },
        {
          title: 'Lançamento',
          description: 'Preparamos tudo para o lançamento deste foguete: domínio, hospedagem, integrações... tudo 100% funcionando.',
          points: ['Configuração de Analytics', 'Suporte Pós-Lançamento', 'A/B Testing']
        }
      ],
      featuresTitle: 'Ecossistema Completo',
      featuresLabel: 'Ecossistema',
      featuresSubtitle: 'Integraremos este ecossistema à sua empresa, de maneira eficiente e rápida',
      features: [
        {
          title: 'CRM + Follow-up',
          description: 'Rastreie cada interação e nunca perca nenhuma oportunidade de venda.'
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
          title: 'Integrações + automações',
          description: 'Integramos as ferramentas de uso diário da sua empresa ao novo sistema de conversão, sem perda de dados ou informações.'
        }
      ],
      cta: "Quero gerar resultados"
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
          content: "Velocidade e precisão. Precisávamos lançar em 3 semanas e superaram as expectativas. O código é limpo, escalável e o site voa em dispositivos móveis."
        }
      ]
    },
    stats: {
      projects: { label: 'Projetos de Sucesso', desc: 'Landing pages e sistemas web' },
      countries: { label: 'Países Atendidos', desc: 'Presença global remota' },
      rating: { label: 'Satisfação do Cliente', desc: 'Baseado em avaliações verificadas' },
      cta: "Quero gerar resultados"
    },
    team: {
      title: 'Equipe KN Growth',
      filters: ['Tudo', 'Automações', 'Design', 'Estratégia'],
      members: [
        { name: 'Carlos Coloma', role: 'CTO', img: 'https://i.imgur.com/sfFgwDa.png' },
        { name: 'Gianfranco N.', role: 'CEO KN Growth', img: 'https://i.imgur.com/KZ051q2.png' },
        { name: 'Leandro V.', role: 'Software Developer', img: 'https://i.imgur.com/vsiDMpt.png' }
      ]
    },
    footer: {
      copyright: '© 2024 - 2026. Todos direitos reservados a KN Growth'
    },
    mobileShowcase: {
      label: 'Trabalhos Recentes',
      title: 'Projetado para',
      titleHighlight: 'Conversão Web',
      scrollInstructions: 'Use o scroll para ver mais'
    },
    straton: {
      greeting1: "Olá",
      greeting2: "Sou STRATON",
      greeting3: "Bem-vindo à KN Growth",
      ctaLeft: "Você pode agendar uma chamada com a equipe da KN Growth",
      ctaRight: "É 100% gratuito e eles\nvão te guiar passo a passo"
    }
  },
  es: {
    nav: {
      services: 'Servicios',
      testimonials: 'Testimonios',
      process: 'Proceso',
      contact: 'Contacto',
      portfolio: 'Portafolio',
      cta: 'Quiero generar resultados',
      themePopup: {
        title: '¿Cambiar a Modo Oscuro?',
        text: '¿Te gustaría experimentar la versión en modo oscuro?',
        yes: 'Sí, cambiar',
        no: 'No, gracias'
      },
      portfolioLocked: {
        title: 'Acceso Exclusivo',
        access: 'Acceso Solo para Miembros',
        message: 'El acceso al portafolio está reservado para socios que dan el primer paso. Agenda tu sesión estratégica para desbloquear nuestros casos de éxito completos.',
        cta: 'Agendar Llamada'
      }
    },
    hero: {
      pill: 'Exclusivo para servicios B2B e infoproductores',
      title1: 'No existe nada que genere más',
      title2: 'autoridad que RESULTADOS',
      subtitle: 'Por eso diseñamos autoridad visual para empresas e infoproductores, generando más ventas y leads más calificados utilizando una comunicación asertiva y de alto impacto.',
      ctaPrimary: 'Quiero generar resultados',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Con la confianza de +50 empresas',
      floating_booking: 'Nuevo agendamiento confirmado',
      floating_time: 'Hoy, 14:30',
      floating_checkout: 'Checkout',
      floating_sale: 'Venta realizada: $2,450.00'
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
      title: 'Sin estrategia, no hay impacto',
      titleHighlight: 'y sin impacto, no hay ventas',
      subtitle: 'Creamos sistemas de captación, enfocados en la cualificación para su empresa y aumento escalable de ventas.',
      more: 'Saber más',
      cta_portfolio: 'Ver Portafolio',
      items: [
        {
          title: "Sitio de Alto Impacto",
          description: "Optimizadas para conversión. Transformamos tráfico frío en clientes calificados a través de copywriting persuasivo y diseño estratégico.",
          tags: []
        },
        {
          title: "Captación y Calificación Estratégica",
          description: "Construye una autoridad digital que genera resultados. Un ecosistema completo que tu empresa necesita para estructurar un embudo de ventas con conversión.",
          tags: []
        },
        {
          title: "Pipeline Lleno",
          description: "Integramos automatizaciones que conectan cada etapa de tu proceso de ventas. Los datos generados permiten escalar tu negocio con previsibilidad y estrategia.",
          tags: []
        }
      ]
    },
    process: {
      label: 'Metodología',
      title: 'De la Idea al',
      titleHighlight: 'Resultado',
      subtitle: 'Un proceso iterativo y transparente diseñado para maximizar resultados y minimizar la fricción.',
      steps: [
        {
          title: 'Reunión y Auditoría',
          description: 'Haremos una auditoría de tu situación inicial, mediante un informe PDF para que estés al tanto de dónde te encuentras y cómo procederemos.',
          points: ['Auditoría UX/UI', 'Auditoría de embudo', 'Auditoría de público']
        },
        {
          title: 'Las 4 Islas',
          description: 'Aplicaremos nuestro método de las 4 islas. Solo avanzaremos cuando el capitán del barco (tú) nos dé el OK. Esto evita divergencias y da certeza del producto final.',
          points: ['Diseño Visual Premium', 'Prototipado Interactivo', 'Copywriting Persuasivo']
        },
        {
          title: 'Pre-Implementación',
          description: 'Una vez aprobadas las 4 islas, pasaremos a la implementación intensiva e integración de las funcionalidades.',
          points: ['Next.js / React', 'Velocidad de carga < 1s', 'SEO Técnico']
        },
        {
          title: 'Lanzamiento',
          description: 'Preparamos todo para el lanzamiento de este cohete: dominio, hosting, integraciones... todo 100% funcionando.',
          points: ['Configuración de Analytics', 'Soporte Post-Lanzamiento', 'A/B Testing']
        }
      ],
      featuresTitle: 'Ecosistema Completo',
      featuresLabel: 'Ecosistema',
      featuresSubtitle: 'Integraremos este ecosistema a tu empresa, de manera eficiente y rápida',
      features: [
        {
          title: 'CRM + Follow-up',
          description: 'Rastrea cada interacción y nunca pierdas ninguna oportunidad de venta.'
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
          title: 'Integraciones + automatizaciones',
          description: 'Integramos las herramientas de uso diario de tu empresa al nuevo sistema de conversión, sin pérdida de datos ni información.'
        }
      ],
      cta: "Quiero generar resultados"
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
      cta: "Quiero generar resultados"
    },
    team: {
      title: 'Equipo KN Growth',
      filters: ['Todo', 'Automatizaciones', 'Diseño', 'Estrategia'],
      members: [
        { name: 'Carlos Coloma', role: 'CTO', img: 'https://i.imgur.com/sfFgwDa.png' },
        { name: 'Gianfranco N.', role: 'CEO KN Growth', img: 'https://i.imgur.com/KZ051q2.png' },
        { name: 'Leandro V.', role: 'Software Developer', img: 'https://i.imgur.com/vsiDMpt.png' }
      ]
    },
    footer: {
      copyright: '© 2024 - 2026. Todos los derechos reservados a KN Growth'
    },
    mobileShowcase: {
      label: 'Trabajos Recientes',
      title: 'Diseñado para la',
      titleHighlight: 'Conversión Web',
      scrollInstructions: 'Usa el scroll para ver más'
    },
    straton: {
      greeting1: "Hola",
      greeting2: "Soy STRATON",
      greeting3: "Bienvenido a KN Growth",
      ctaLeft: "Puedes agendar una llamada con el equipo de KN Growth",
      ctaRight: "Es 100% gratis y\nte guiarán paso a paso"
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
