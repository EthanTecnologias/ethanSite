import { 
  Zap,            // BPO Financeiro (Energia/Agilidade)
  Landmark,       // Contabilidade (Institucional/Seguro)
  BarChart3,      // Business Intelligence (Dados/Crescimento)
  ShieldCheck,    // Controladoria (Proteção/Governança)
  Code2,          // Desenvolvimento Web (Tecnologia/Código)
  LineChart,
  Target,
  Database,
  Cpu,
  TrendingUp
} from 'lucide-react';

export const servicesData = {
  // 1. BPO FINANCEIRO
  bpo: {
    title: "BPO Financeiro",
    subtitle: "Gestão operacional de alta precisão.",
    icon: Zap,
    description: "Terceirize a burocracia do seu contas a pagar e receber. Nossa equipe assume o operacional diário para que você foque apenas na estratégia de crescimento.",
    benefits: [
      { item: "Conciliação Diária", detail: "Seu fluxo de caixa atualizado todas as manhãs com precisão bancária." },
      { item: "Gestão de Contas", detail: "Controle rigoroso de prazos para evitar juros e multas desnecessárias." },
      { item: "Relatórios de Caixa", detail: "Visibilidade clara de onde seu dinheiro está vindo e para onde está indo." }
    ],
    process: [
      { step: "Diagnóstico", desc: "Mapeamos suas contas e integramos seus bancos ao nosso software." },
      { step: "Padronização", desc: "Criamos categorias financeiras claras para organizar cada centavo." },
      { step: "Operação Ativa", desc: "Execução diária dos lançamentos e suporte consultivo constante." }
    ]
  },

  // 2. CONTABILIDADE
  contabilidade: {
    title: "Contabilidade",
    subtitle: "Inteligência tributária e compliance.",
    icon: Landmark,
    description: "Uma contabilidade moderna que não entrega apenas guias de impostos, mas insights para reduzir custos e manter sua empresa 100% segura perante ao fisco.",
    benefits: [
      { item: "Redução de Impostos", detail: "Planejamento tributário anual para enquadramento na menor alíquota legal." },
      { item: "Folha de Pagamento", detail: "Gestão completa de DP com foco em segurança jurídica e trabalhista." },
      { item: "Compliance Digital", detail: "Escrituração eletrônica de ponta garantindo conformidade total." }
    ],
    process: [
      { step: "Onboarding", desc: "Transição suave da sua contabilidade anterior para nossa base digital." },
      { step: "Revisão Fiscal", desc: "Análise dos últimos meses para buscar créditos tributários esquecidos." },
      { step: "Monitoramento", desc: "Fechamentos mensais com envio de balancetes e indicadores reais." }
    ]
  },

  // 3. BUSINESS INTELLIGENCE
  bi: {
    title: "Business Intelligence",
    subtitle: "Sua empresa guiada por dados, não palpites.",
    icon: BarChart3,
    description: "Conectamos todas as suas fontes de dados (ERPs, Bancos, Planilhas) em dashboards interativos que mostram a saúde real do seu negócio em segundos.",
    benefits: [
      { item: "Dashboards Reais", detail: "Acesso 24/7 aos seus KPIs principais em qualquer dispositivo." },
      { item: "Cultura Data-Driven", detail: "Decisões rápidas baseadas em estatísticas, eliminando o achismo." },
      { item: "Previsibilidade", detail: "Análise de tendências para antecipar quedas ou picos de demanda." }
    ],
    process: [
      { step: "Extração de Dados", desc: "Conectamos nossas ferramentas aos seus sistemas atuais com segurança." },
      { step: "Tratamento (ETL)", desc: "Limpamos e organizamos os dados para que fiquem fáceis de ler." },
      { step: "Visualização", desc: "Criação de painéis personalizados focados no seu lucro e performance." }
    ]
  },

  // 4. CONTROLADORIA
  controladoria: {
    title: "Controladoria",
    subtitle: "Eficiência máxima e proteção de margem.",
    icon: ShieldCheck,
    description: "Implementamos controles internos e análise orçamentária para garantir que o planejado seja executado e que sua margem de lucro seja protegida.",
    benefits: [
      { item: "Gestão Orçamentária", detail: "Criação de Budget e acompanhamento mensal de desvios (Real x Orçado)." },
      { item: "Análise de Margem", detail: "Estudo detalhado de precificação e rentabilidade por produto ou serviço." },
      { item: "Redução de Desperdícios", detail: "Identificação de custos invisíveis que estão drenando seu caixa." }
    ],
    process: [
      { step: "Auditoria Interna", desc: "Identificação de falhas nos processos de controle atuais." },
      { step: "Definição de Normas", desc: "Criação de políticas de gastos e níveis de aprovação interna." },
      { step: "Ciclo de Reporte", desc: "Reuniões mensais de performance com o board da empresa." }
    ]
  },

  // 5. DESENVOLVIMENTO WEB
  web: {
    title: "Desenvolvimento Web",
    subtitle: "Sistemas e sites de alta performance.",
    icon: Code2,
    description: "Unimos tecnologia de ponta e design focado em conversão para criar a vitrine digital ou a ferramenta interna que sua empresa precisa para escalar.",
    benefits: [
      { item: "SEO Avançado", detail: "Código otimizado para que sua empresa apareça nas buscas do Google." },
      { item: "Interface Premium", detail: "Design moderno (UX/UI) que transmite autoridade imediata à marca." },
      { item: "Velocidade Extrema", detail: "Páginas ultra-rápidas que garantem a melhor experiência ao usuário." }
    ],
    process: [
      { step: "Prototipagem", desc: "Desenhamos a experiência visual antes de iniciarmos o código." },
      { step: "Build & Dev", desc: "Codificação com as melhores tecnologias (React, Next.js, Vite)." },
      { step: "Deploy & Suporte", desc: "Lançamento em servidores de alta performance com monitoramento." }
    ]
  }
};