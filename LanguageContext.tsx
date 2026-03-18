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
      cta: 'I want a website for my clinic',
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
      pill: 'Exclusive for private clinics and health professionals',
      title1: 'You are a reference in what you do.',
      title2: 'Your website should be too.',
      subtitle: '<strong>Custom-built</strong> websites for healthcare professionals who are building their authority.',
      ctaPrimary: 'I want a website for my clinic',
      ctaSecondary: 'Watch Demo Reel',
      trusted: 'Trusted by 50+ clinics and health professionals',
      floating_booking: 'Assessment Scheduled',
      floating_time: 'Dr. Arthur M. - Today, 11:00 AM',
      floating_checkout: 'NEW APPOINTMENT',
      floating_sale: 'Gabriel Souza - Today, 10:15 AM'
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
      title: 'Everything your website needs to convert,',
      titleHighlight: 'all in one place.',
      subtitle: 'Design, development and copy working together so your patient feels trust before even meeting you.',
      more: 'Learn more',
      cta_portfolio: 'View Portfolio',
      items: [
        {
          title: "High-impact design",
          description: "Every visual element crafted to convey <strong>authority</strong> and <strong>trust</strong> before the patient reads a single word.",
          tags: []
        },
        {
          title: "Custom-built code",
          description: "No Wix or WordPress. Your site is built <strong>from scratch</strong> — fast, secure and <strong>100% proprietary</strong>, with no dependency on third-party platforms.",
          tags: []
        },
        {
          title: "Copy that converts",
          description: "The <strong>right words</strong> to turn visitors into <strong>patients</strong>. Every sentence written to answer the question the patient has <strong>before booking</strong>.",
          tags: []
        },
        {
          title: "Digital Authority & Medical SEO",
          description: "Position your clinic at the top of search results. We implement specialized SEO strategies for healthcare to attract patients searching for your specialties.",
          tags: []
        }
      ]
    },
    process: {
      label: 'Methodology',
      title: 'From diagnosis to',
      titleHighlight: 'launch',
      subtitle: 'Every stage has your approval. You follow everything, no surprises and no rework.',
      steps: [
        {
          title: 'Meeting & Audit',
          description: 'We will conduct a complete audit of your digital presence and provide a PDF report with everything that needs to be done. No guesswork, no surprises.',
          points: ['UX/UI Audit', 'Funnel Audit', 'Audience Audit']
        },
        {
          title: 'The 4 Islands Method',
          description: 'Our method divides the project into 4 stages with your approval at each one. You always know what is being done and have full control of the process.',
          points: ['Premium Visual Design', 'Interactive Prototyping', 'Persuasive Copywriting']
        },
        {
          title: 'Pre-Implementation',
          description: 'With everything approved, we enter execution mode. Every detail is implemented with precision so the final result is exactly what you imagined.',
          points: ['Next.js / React', 'Load speed < 1s', 'Technical SEO']
        },
        {
          title: 'Launch',
          description: 'We take care of everything: domain, hosting, integrations. You just need to push the button and see your site live, 100% functional.',
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
      cta: "I want a website for my clinic"
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
      cta: "I want a website for my clinic"
    },
    team: {
      title: 'KN Growth Team',
      subtitle: 'Who will build your website',
      filters: ['All', 'Automations', 'Design', 'Strategy'],
      members: [
        { name: 'Gianfranco N.', role: 'CEO KN Growth', img: 'https://i.imgur.com/KZ051q2.png' },
        { name: 'Leandro V.', role: 'Software Developer', img: 'https://i.imgur.com/vsiDMpt.png' }
      ],
      skills: [
        {
          title: "Strategic Positioning",
          description: "We don't just build. We think about your entire business to maximize your authority."
        },
        {
          title: "Premium UX/UI Design",
          description: "Refined aesthetics exclusively designed to build instant trust with your patients."
        },
        {
          title: "High-Performance Code",
          description: "Custom-built development. Lightning-fast sites optimized for search engines."
        }
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
      ctaLeft: "Schedule a video call with the KN Growth team",
      ctaRight: "It's 100% free and they\nwill guide you step by step"
    },
    problema: {
      tag: 'The Problem',
      titulo: 'You dedicate years to building your career.',
      tituloEm: 'Your website should do the same for your patient.',
      texto1: 'Most healthcare professionals enter the digital world with a generic site, built on Wix or WordPress, that talks about credentials, specialties, and years of experience.',
      texto2: 'But the patient who lands on that page',
      texto2Bold: 'does not want to know who you are.',
      texto2After: 'They want to feel they can trust you before they even meet you.',
      destaque: 'A website that does not convey that trust does not convert. Simple as that.'
    },
    faq: {
      tag: 'Frequently Asked Questions',
      title: 'Everything you need to know',
      titleEm: 'before getting started.',
      subtitle: 'We answer the questions every healthcare professional asks before investing in their own website.',
      highlight: 'Still have questions? Schedule a no-commitment call with our team.',
      items: [
        {
          question: 'How long does the website take to be ready?',
          answer: 'The complete process takes <strong>between 5 and 10 business days</strong>, depending on the complexity of the project. We work in focused stages — strategy, design and development — so everything is aligned and ready to go live without delays.'
        },
        {
          question: 'Do I need to understand technology to work with you?',
          answer: 'No. You focus on what you know — taking care of your patients. <strong>We take care of everything:</strong> domain, hosting, development and maintenance. You just need to approve the result.'
        },
        {
          question: 'Why not use Wix or WordPress?',
          answer: 'Ready-made platforms deliver generic, slow and third-party-dependent websites. Your site is built <strong>from scratch, with proprietary code</strong> — faster, more secure and 100% yours. No platform subscriptions, no template limitations.'
        },
        {
          question: 'What if I don\'t like the result?',
          answer: 'The process is built to avoid that. Before a single line of code, we align strategy, references and expectations. During development, you follow and approve each stage. <strong>Adjustments are part of the process</strong> — not a surprise.'
        },
        {
          question: 'Will my website appear on Google?',
          answer: 'All delivered websites come configured with <strong>basic technical SEO</strong> — meta tags, loading speed, semantic structure. For advanced ranking strategies, we offer complementary services.'
        }
      ]
    }
  },
  pt: {
    nav: {
      services: 'Serviços',
      testimonials: 'Depoimentos',
      process: 'Processo',
      contact: 'Contato',
      portfolio: 'Portfólio',
      cta: 'Quero um site para minha clínica',
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
      pill: 'Exclusivo para clínicas privadas e profissionais de saúde',
      title1: 'Você é referência no que faz.',
      title2: 'Seu site deveria ser também.',
      subtitle: 'Sites desenvolvidos <strong>sob medida</strong> para profissionais da saúde que estão construindo sua autoridade.',
      ctaPrimary: 'Quero um site para minha clínica',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Confiança de +50 clínicas e profissionais de saúde',
      floating_booking: 'Avaliação Agendada',
      floating_time: 'Dr. Arthur M. - Hoje, 11:00',
      floating_checkout: 'NOVO AGENDAMENTO',
      floating_sale: 'Gabriel Souza - Hoje, 10:15'
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
      title: 'Tudo que seu site precisa para converter,',
      titleHighlight: 'em um só lugar.',
      subtitle: 'Design, desenvolvimento e copy trabalhando juntos para que seu paciente sinta confiança antes mesmo de te conhecer.',
      more: 'Saiba mais',
      cta_portfolio: 'Ver Portfólio',
      items: [
        {
          title: "Design de alto impacto",
          description: "Cada elemento visual pensado para transmitir <strong>autoridade</strong> e <strong>confiança</strong> antes mesmo do paciente ler uma palavra.",
          tags: []
        },
        {
          title: "Código sob medida",
          description: "Nada de Wix ou WordPress. Seu site é construído <strong>do zero</strong>, rápido, seguro e <strong>100% proprietário</strong> — sem dependência de plataformas terceiras.",
          tags: []
        },
        {
          title: "Copy que converte",
          description: "As <strong>palavras certas</strong> para transformar visitantes em <strong>pacientes</strong>. Cada frase escrita para responder a dúvida que o paciente tem <strong>antes de agendar</strong>.",
          tags: []
        },
        {
          title: "Autoridade Digital & SEO Médico",
          description: "Posicione sua clínica no topo dos resultados de busca. Implementamos estratégias de SEO especializadas para saúde para atrair pacientes que buscam suas especialidades.",
          tags: []
        }
      ]
    },
    process: {
      label: 'Metodologia',
      title: 'Do diagnóstico ao',
      titleHighlight: 'lançamento',
      subtitle: 'Cada etapa tem sua aprovação. Você acompanha tudo, sem surpresas e sem retrabalho.',
      steps: [
        {
          title: 'Reunião e Auditoria',
          description: 'Faremos uma auditoria completa da sua presença digital e te entregaremos um relatório em PDF com tudo o que precisa ser feito. Sem achismos, sem surpresas.',
          points: ['Auditoria UX/UI', 'Auditoria de funil', 'Auditoria de público']
        },
        {
          title: 'As 4 Ilhas',
          description: 'Nosso método divide o projeto em 4 etapas com sua aprovação em cada uma. Você sempre sabe o que está sendo feito e tem controle total do processo.',
          points: ['Design Visual Premium', 'Prototipagem Interativa', 'Copywriting Persuasivo']
        },
        {
          title: 'Pré-Implementação',
          description: 'Com tudo aprovado, entramos em modo de execução. Cada detalhe é implementado con precisão para que o resultado final seja exatamente o que você imaginou.',
          points: ['Next.js / React', 'Velocidade de carga < 1s', 'SEO Técnico']
        },
        {
          title: 'Lançamento',
          description: 'Cuidamos de tudo: domínio, hospedagem, integrações. Você só precisa apertar o botão e ver seu site no ar, 100% funcionando.',
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
      cta: "Quero um site para minha clínica"
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
      cta: "Quero um site para minha clínica"
    },
    team: {
      title: 'Equipe KN Growth',
      subtitle: 'Quem vai construir o seu site',
      filters: ['Tudo', 'Automações', 'Design', 'Estratégia'],
      members: [
        { name: 'Gianfranco N.', role: 'CEO KN Growth', img: 'https://i.imgur.com/KZ051q2.png' },
        { name: 'Leandro V.', role: 'Software Developer', img: 'https://i.imgur.com/vsiDMpt.png' }
      ],
      skills: [
        {
          title: "Posicionamento Estratégico",
          description: "Não apenas criamos. Pensamos no seu negócio como um todo para maximizar sua autoridade."
        },
        {
          title: "Design UX/UI Premium",
          description: "Estética refinada e pensada exclusivamente para transmitir confiança ao seu paciente."
        },
        {
          title: "Código de Alta Performance",
          description: "Desenvolvimento sob medida. Site ultra rápido e otimizado para os motores de busca."
        }
      ]
    },
    footer: {
      copyright: '© 2024 - 2026. Todos direitos reservados a KN Growth'
    },
    mobileShowcase: {
      label: 'Cada projeto construído do zero, pensado para converter visitantes em pacientes.',
      title: 'Resultados que',
      titleHighlight: 'falam por si mesmos',
      scrollInstructions: 'Use o scroll para ver mais'
    },
    straton: {
      greeting1: "Olá",
      greeting2: "Sou STRATON",
      greeting3: "Bem-vindo à KN Growth",
      ctaLeft: "Agende uma videochamada com a equipe da KN Growth",
      ctaRight: "É 100% gratuito e eles\nvão te guiar passo a passo"
    },
    problema: {
      tag: 'O problema',
      titulo: 'Você se dedica anos para construir sua carreira.',
      tituloEm: 'Seu site deveria fazer o mesmo pelo seu paciente.',
      texto1: 'A maioria dos profissionais da saúde chega no digital com um site genérico, criado em Wix ou WordPress, que fala sobre formação, especialidades e anos de experiência.',
      texto2: 'Mas o paciente que chega nessa página',
      texto2Bold: 'não quer saber quem você é.',
      texto2After: 'Ele quer sentir que pode confiar em você antes mesmo de te conhecer.',
      destaque: 'Um site que não transmite essa confiança não converte. Simples assim.'
    },
    faq: {
      tag: 'Dúvidas frequentes',
      title: 'Tudo que você precisa saber',
      titleEm: 'antes de começar.',
      subtitle: 'Respondemos as perguntas que todo profissional de saúde faz antes de investir no próprio site.',
      highlight: 'Ainda tem dúvidas? Agende uma conversa sem compromisso com nossa equipe.',
      items: [
        {
          question: 'Quanto tempo leva para o site ficar pronto?',
          answer: 'O processo completo leva <strong>entre 5 e 10 dias úteis</strong>, dependendo da complexidade do projeto. Trabalhamos em etapas focadas — estratégia, design e desenvolvimento — para que tudo esteja alinhado e pronto para ir ao ar sem atrasos.'
        },
        {
          question: 'Preciso entender de tecnologia para trabalhar com vocês?',
          answer: 'Não. Você foca no que sabe fazer — cuidar dos seus pacientes. <strong>Nós cuidamos de tudo:</strong> domínio, hospedagem, desenvolvimento e manutenção. Você só precisa aprovar o resultado.'
        },
        {
          question: 'Por que não usar Wix ou WordPress?',
          answer: 'Plataformas prontas entregam sites genéricos, lentos e dependentes de terceiros. Seu site é construído <strong>do zero, com código próprio</strong> — mais rápido, mais seguro e 100% seu. Sem mensalidades de plataforma, sem limitações de template.'
        },
        {
          question: 'E se eu não gostar do resultado?',
          answer: 'O processo é construído para evitar isso. Antes de qualquer linha de código, alinhamos estratégia, referências e expectativas. Durante o desenvolvimento, você acompanha e aprova cada etapa. <strong>Ajustes fazem parte do processo</strong> — não são surpresa.'
        },
        {
          question: 'O site vai aparecer no Google?',
          answer: 'Todos os sites entregues já saem configurados com <strong>SEO técnico básico</strong> — meta tags, velocidade de carregamento, estrutura semântica. Para estratégias avançadas de ranqueamento, oferecemos serviços complementares.'
        }
      ]
    }
  },
  es: {
    nav: {
      services: 'Servicios',
      testimonials: 'Testimonios',
      process: 'Proceso',
      contact: 'Contacto',
      portfolio: 'Portafolio',
      cta: 'Quiero una web para mi clínica',
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
      pill: 'Exclusivo para clínicas privadas y profesionales de salud',
      title1: 'Eres una referencia en lo que haces.',
      title2: 'Tu sitio debería serlo también.',
      subtitle: 'Sitios desarrollados <strong>a medida</strong> para profesionales de la salud que están construyendo su autoridad.',
      ctaPrimary: 'Quiero una web para mi clínica',
      ctaSecondary: 'Ver Demo Reel',
      trusted: 'Con la confianza de +50 clínicas y profesionales de salud',
      floating_booking: 'Evaluación Agendada',
      floating_time: 'Dr. Arthur M. - Hoy, 11:00',
      floating_checkout: 'NUEVA CITA',
      floating_sale: 'Gabriel Souza - Hoy, 10:15'
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
      title: 'Todo lo que tu sitio necesita para convertir,',
      titleHighlight: 'en un solo lugar.',
      subtitle: 'Diseño, desarrollo y copy trabajando juntos para que tu paciente sienta confianza antes de conocerte.',
      more: 'Saber más',
      cta_portfolio: 'Ver Portafolio',
      items: [
        {
          title: "Diseño de alto impacto",
          description: "Cada elemento visual pensado para transmitir <strong>autoridad</strong> y <strong>confianza</strong> antes de que el paciente lea una sola palabra.",
          tags: []
        },
        {
          title: "Código a medida",
          description: "Nada de Wix ni WordPress. Tu sitio se construye <strong>desde cero</strong> — rápido, seguro y <strong>100% propio</strong>, sin dependencia de plataformas de terceros.",
          tags: []
        },
        {
          title: "Copy que convierte",
          description: "Las <strong>palabras correctas</strong> para transformar visitantes en <strong>pacientes</strong>. Cada frase escrita para responder la duda que el paciente tiene <strong>antes de agendar</strong>.",
          tags: []
        },
        {
          title: "Autoridad Digital y SEO Médico",
          description: "Posicione su clínica en la cima de los resultados de búsqueda. Implementamos estrategias de SEO especializadas para salud para atraer pacientes que buscan sus especialidades.",
          tags: []
        }
      ]
    },
    process: {
      label: 'Metodología',
      title: 'Del diagnóstico al',
      titleHighlight: 'lanzamiento',
      subtitle: 'Cada etapa tiene su aprobación. Acompañas todo, sin sorpresas y sin retrabajo.',
      steps: [
        {
          title: 'Reunión y Auditoría',
          description: 'Haremos una auditoría completa de tu presencia digital y te entregaremos un informe en PDF con todo lo que necesita hacerse. Sin suposiciones, sin sorpresas.',
          points: ['Auditoría UX/UI', 'Auditoría de embudo', 'Auditoría de público']
        },
        {
          title: 'Las 4 Islas',
          description: 'Nuestro método divide el proyecto en 4 etapas con tu aprobación en cada una. Siempre sabrás qué se está haciendo y tendrás control total del proceso.',
          points: ['Diseño Visual Premium', 'Prototipado Interactivo', 'Copywriting Persuasivo']
        },
        {
          title: 'Pre-Implementación',
          description: 'Con todo aprobado, entramos en modo de ejecución. Cada detalle se implementa con precisión para que el resultado final sea exactamente el que imaginaste.',
          points: ['Next.js / React', 'Velocidad de carga < 1s', 'SEO Técnico']
        },
        {
          title: 'Lanzamiento',
          description: 'Nos encargamos de todo: dominio, hosting, integraciones. Solo tienes que pulsar el botón y ver tu sitio al aire, 100% funcionando.',
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
      cta: "Quiero una web para mi clínica"
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
      cta: "Quiero una web para mi clínica"
    },
    team: {
      title: 'Equipo KN Growth',
      subtitle: 'Quiénes van a construir tu sitio',
      filters: ['Todo', 'Automatizaciones', 'Diseño', 'Estrategia'],
      members: [
        { name: 'Gianfranco N.', role: 'CEO KN Growth', img: 'https://i.imgur.com/KZ051q2.png' },
        { name: 'Leandro V.', role: 'Software Developer', img: 'https://i.imgur.com/vsiDMpt.png' }
      ],
      skills: [
        {
          title: "Posicionamiento Estratégico",
          description: "No solo creamos. Pensamos en tu negocio como un todo para maximizar tu autoridad."
        },
        {
          title: "Diseño UX/UI Premium",
          description: "Estética refinada y diseñada exclusivamente para transmitir confianza a tu paciente."
        },
        {
          title: "Código de Alta Performance",
          description: "Desarrollo a medida. Sitio ultra rápido y optimizado para los motores de búsqueda."
        }
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
      ctaLeft: "Agende una videollamada con el equipo de KN Growth",
      ctaRight: "Es 100% gratis y\nte guiarán paso a paso"
    },
    problema: {
      tag: 'El problema',
      titulo: 'Te dedicas años a construir tu carrera.',
      tituloEm: 'Tu sitio debería hacer lo mismo por tu paciente.',
      texto1: 'La mayoría de los profesionales de la salud llegan al mundo digital con un sitio genérico, creado en Wix o WordPress, que habla sobre formación, especialidades y años de experiencia.',
      texto2: 'Pero el paciente que llega a esa página',
      texto2Bold: 'no quiere saber quién eres.',
      texto2After: 'Quiere sentir que puede confiar en ti antes de siquiera conocerte.',
      destaque: 'Un sitio que no transmite esa confianza no convierte. Así de simple.'
    },
    faq: {
      tag: 'Preguntas frecuentes',
      title: 'Todo lo que necesitas saber',
      titleEm: 'antes de empezar.',
      subtitle: 'Respondemos las preguntas que todo profesional de la salud hace antes de invertir en su propio sitio.',
      highlight: '¿Todavía tienes dudas? Agenda una llamada sin compromiso con nuestro equipo.',
      items: [
        {
          question: '¿Cuánto tiempo tarda en estar listo el sitio?',
          answer: 'El proceso completo toma <strong>entre 5 y 10 días hábiles</strong>, dependiendo de la complejidad del proyecto. Trabajamos en etapas enfocadas — estrategia, diseño y desarrollo — para que todo esté alineado y listo para salir al aire sin demoras.'
        },
        {
          question: '¿Necesito entender de tecnología para trabajar con ustedes?',
          answer: 'No. Tú te enfocas en lo que sabes hacer — atender a tus pacientes. <strong>Nosotros nos encargamos de todo:</strong> dominio, hosting, desarrollo y mantenimiento. Solo necesitas aprobar el resultado.'
        },
        {
          question: '¿Por qué no usar Wix o WordPress?',
          answer: 'Las plataformas listas entregan sitios genéricos, lentos y dependientes de terceros. Tu sitio se construye <strong>desde cero, con código propio</strong> — más rápido, más seguro y 100% tuyo. Sin suscripciones de plataforma, sin limitaciones de plantilla.'
        },
        {
          question: '¿Y si no me gusta el resultado?',
          answer: 'El proceso está diseñado para evitar eso. Antes de cualquier línea de código, alineamos estrategia, referencias y expectativas. Durante el desarrollo, acompañas y apruebas cada etapa. <strong>Los ajustes son parte del proceso</strong> — no una sorpresa.'
        },
        {
          question: '¿Mi sitio aparecerá en Google?',
          answer: 'Todos los sitios entregados ya salen configurados con <strong>SEO técnico básico</strong> — meta tags, velocidad de carga, estructura semántica. Para estrategias avanzadas de posicionamiento, ofrecemos servicios complementarios.'
        }
      ]
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
