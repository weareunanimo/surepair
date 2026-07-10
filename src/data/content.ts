/**
 * Estrutura de conteúdo central da Surepair.
 *
 * Fórmula de copywriting: PAS (Problema · Agitação · Solução)
 *  - `pains`        → Problema + Agitação (dor concreta do dono de PME)
 *  - `solutions`    → Solução (escopos fechados, sem risco)
 *  - `benefits`     → Prova (segurança, garantia, certificação)
 *  - `faq`          → Objeções finais respondidas
 *
 * Este arquivo alimenta simultaneamente a Landing e a aba /blueprint.
 */

import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Ban,
  BadgeCheck,
  Bot,
  Boxes,
  Clock3,
  FileCheck2,
  FileWarning,
  Ghost,
  Mail,
  MessageSquare,
  RefreshCcw,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Table2,
  UserX,
} from "lucide-react";

/* ============================================================
 * 1. DOR (Pain) — comparativo freelancer genérico × Surepair
 * ========================================================== */

export interface PainPoint {
  slug: string;
  icon: LucideIcon;
  /** Headline curta da dor (usada em card). */
  title: string;
  /** Descrição narrativa (usada em card). */
  description: string;
  /** Situação real na plataforma de freelance. */
  freelancerReality: string;
  /** Como a Surepair resolve. */
  surepairFix: string;
}

export const pains: PainPoint[] = [
  {
    slug: "atrasos",
    icon: Clock3,
    title: "Prazo que nunca chega",
    description:
      "Você aprova o projeto na sexta, ouve 'entrego segunda' e três semanas depois ainda está esperando o primeiro protótipo.",
    freelancerReality:
      "O dev acumula 6 clientes ao mesmo tempo. Seu projeto vira o último da fila e cada revisão empurra a entrega em mais 10 dias.",
    surepairFix:
      "Prazo contratual de 7 a 14 dias, com PM acompanhando checkpoints. Atraso injustificado devolve 100% do valor pago.",
  },
  {
    slug: "escopo",
    icon: FileWarning,
    title: "Escopo que explode no meio",
    description:
      "O que começou como 'um botãozinho com IA' vira um projeto de R$ 20 mil porque 'faltou combinar detalhes'.",
    freelancerReality:
      "Sem escopo assinado, cada nova ideia sua vira 'hora extra'. Orçamento inicial triplica antes da metade.",
    surepairFix:
      "Escopo técnico fechado antes do primeiro real. Preço travado no contrato — sem hora extra, sem surpresa.",
  },
  {
    slug: "codigo-quebrado",
    icon: AlertTriangle,
    title: "Código que quebra na primeira semana",
    description:
      "A automação funciona na demonstração e, no primeiro cliente real, o WhatsApp trava e você perde vendas.",
    freelancerReality:
      "Sem testes, sem documentação, sem monitoramento. Você descobre o bug pelo cliente reclamando no Instagram.",
    surepairFix:
      "Todo entregável passa por checklist de QA, testes automatizados e monitoramento de erros ligado ao seu WhatsApp.",
  },
  {
    slug: "sumico",
    icon: Ghost,
    title: "O dev que sumiu",
    description:
      "Passou a garantia, deu um bug crítico e o freelancer parou de responder. Você fica no escuro com um código que ninguém entende.",
    freelancerReality:
      "Sem contrato claro, sem obrigação de suporte. Você contrata outro dev do zero — e paga tudo de novo.",
    surepairFix:
      "Código versionado no seu GitHub, documentado em português e mantido por uma rede de devs certificados. Se um sai, outro assume no dia seguinte.",
  },
];

/* ============================================================
 * 2. SOLUÇÃO (Solution) — escopos fechados para PMEs
 * ========================================================== */

export interface Deliverable {
  label: string;
  description: string;
}

export interface Solution {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** Frase de venda curta (card). */
  tagline: string;
  /** Descrição narrativa (dialog / blueprint). */
  description: string;
  /** Para quem serve (setores). */
  idealFor: string[];
  /** Entregáveis técnicos. */
  deliverables: Deliverable[];
  /** Stack de referência. */
  stack: string[];
  /** Prazo padrão. */
  timeline: string;
  /** Preço fechado. */
  price: string;
  /** Resultado esperado (business outcome). */
  outcome: string;
  tag?: string;
}

export const solutions: Solution[] = [
  {
    slug: "chatbot-whatsapp-comercial",
    icon: MessageSquare,
    title: "Chatbot de WhatsApp Comercial",
    tagline: "Atendimento 24/7 que qualifica leads e agenda no seu calendário.",
    description:
      "Um agente conversacional treinado no catálogo, tabela de preços e políticas do seu negócio. Responde dúvidas, qualifica o lead com perguntas certas e encaminha o cliente pronto para o vendedor humano fechar.",
    idealFor: ["E-commerce", "Clínicas", "Imobiliárias", "Prestadores de serviço"],
    deliverables: [
      { label: "Integração WhatsApp Cloud API", description: "Conta oficial, template aprovado, número dedicado." },
      { label: "Base de conhecimento (RAG)", description: "Ingestão de catálogo, FAQ e políticas em um índice vetorial." },
      { label: "Handoff para humano", description: "Regras claras de escalonamento para atendente." },
      { label: "Painel de conversas", description: "Histórico, tags e exportação CSV." },
    ],
    stack: ["WhatsApp Cloud API", "OpenAI GPT-4o", "n8n", "Pinecone", "Supabase"],
    timeline: "10 a 14 dias úteis",
    price: "R$ 2.400",
    outcome: "Reduz em até 70% o tempo de primeira resposta e recupera leads fora do horário comercial.",
    tag: "Mais pedido",
  },
  {
    slug: "automacao-leads-planilhas",
    icon: Table2,
    title: "Automação de Leads com Planilhas",
    tagline: "Do formulário ao CRM, sem copiar e colar.",
    description:
      "Captura leads de formulários, anúncios e WhatsApp; enriquece com dados públicos; classifica por score de intenção; e distribui automaticamente para os vendedores certos em uma planilha ou CRM.",
    idealFor: ["Imobiliárias", "Consultorias", "Escritórios de advocacia", "Cursos e educação"],
    deliverables: [
      { label: "Coletor multi-canal", description: "Webhook para site, Meta Ads e WhatsApp." },
      { label: "Enriquecimento com IA", description: "Segmento, porte e intenção do lead inferidos automaticamente." },
      { label: "Round-robin de vendedores", description: "Distribuição justa e rastreável." },
      { label: "Alertas em tempo real", description: "Notificação por WhatsApp quando o lead é 'quente'." },
    ],
    stack: ["Google Sheets API", "Make", "OpenAI Structured Output", "Meta Conversions API"],
    timeline: "7 a 10 dias úteis",
    price: "R$ 1.900",
    outcome: "Elimina 100% do trabalho manual de digitação e acelera o primeiro contato em até 8x.",
  },
  {
    slug: "classificador-emails",
    icon: Mail,
    title: "Classificador Automático de E-mails",
    tagline: "Sua caixa de entrada organizada antes do café da manhã.",
    description:
      "Um classificador que lê cada e-mail recebido, entende o assunto (pedido, reclamação, cobrança, spam), aplica a etiqueta correta, encaminha para a pessoa certa e sugere uma resposta pronta.",
    idealFor: ["Comércio", "Suporte ao cliente", "Financeiro de PMEs"],
    deliverables: [
      { label: "Integração Gmail / Outlook", description: "OAuth seguro, sem senhas armazenadas." },
      { label: "Regras de classificação", description: "10 categorias iniciais treinadas com seus exemplos." },
      { label: "Rascunho de resposta", description: "IA sugere resposta em português no seu tom." },
      { label: "Relatório semanal", description: "Volume por categoria e tempo médio de resposta." },
    ],
    stack: ["Gmail API", "Microsoft Graph", "OpenAI GPT-4o mini", "n8n"],
    timeline: "7 dias úteis",
    price: "R$ 1.600",
    outcome: "Reduz em 60% o tempo diário gasto triando a caixa de entrada.",
  },
  {
    slug: "assistente-agendamento",
    icon: Bot,
    title: "Assistente de Agendamento",
    tagline: "Marca, confirma e reagenda sem intervenção humana.",
    description:
      "Assistente de IA que conversa por WhatsApp, checa disponibilidade no Google Calendar, marca o horário e envia lembretes automáticos. Reagendamento e cancelamento inclusos.",
    idealFor: ["Clínicas", "Salões", "Consultorias", "Estúdios"],
    deliverables: [
      { label: "Integração Google Calendar", description: "Disponibilidade real-time e bloqueio de horários." },
      { label: "Fluxo de reagendamento", description: "Cliente muda horário sozinho pelo WhatsApp." },
      { label: "Lembrete 24h antes", description: "Reduz no-show em até 40%." },
      { label: "Confirmação automática", description: "Cliente confirma com um toque." },
    ],
    stack: ["Google Calendar API", "WhatsApp Cloud API", "GPT-4o", "n8n"],
    timeline: "10 dias úteis",
    price: "R$ 2.100",
    outcome: "Elimina o vai-e-vem de mensagens e derruba a taxa de faltas em quase metade.",
  },
];

/* ============================================================
 * 3. BENEFÍCIOS (Bento Grid) — prova e segurança
 * ========================================================== */

export interface Benefit {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  /** Ponto contratual concreto que sustenta o benefício. */
  guarantee: string;
  /** Coluna preferida no bento (md:col-span-1 | 2). */
  span?: string;
}

export const benefits: Benefit[] = [
  {
    slug: "seguranca-juridica",
    icon: ScrollText,
    title: "Segurança jurídica",
    description:
      "Contrato assinado digitalmente, NDA padrão e cláusula de propriedade intelectual 100% do cliente.",
    guarantee: "Todo código-fonte e dados pertencem à sua empresa desde o primeiro commit.",
    span: "md:col-span-2",
  },
  {
    slug: "escopo-fechado",
    icon: Boxes,
    title: "Escopo fechado",
    description: "Preço travado, entregáveis listados, critérios de aceite objetivos.",
    guarantee: "Zero cobrança extra após assinatura do escopo.",
  },
  {
    slug: "dev-certificado",
    icon: BadgeCheck,
    title: "Dev certificado por testes reais",
    description:
      "Menos de 8% dos candidatos passam. Avaliação técnica em LLMs, engenharia de contexto e integração de APIs.",
    guarantee: "Prova prática auditada por um staff engineer de IA.",
  },
  {
    slug: "codigo-documentado",
    icon: FileCheck2,
    title: "Código documentado em português",
    description:
      "README, diagrama de arquitetura, variáveis de ambiente e guia de manutenção — tudo entregue.",
    guarantee: "Outro dev consegue continuar o projeto em menos de 1 dia.",
    span: "md:col-span-2",
  },
  {
    slug: "garantia-reembolso",
    icon: ShieldCheck,
    title: "Garantia de reembolso total",
    description:
      "Se a entrega não passar nos critérios de aceite acordados, você recebe 100% do valor pago de volta.",
    guarantee: "Reembolso em até 5 dias úteis, sem burocracia.",
  },
  {
    slug: "suporte-continuo",
    icon: RefreshCcw,
    title: "Suporte contínuo pós-entrega",
    description: "30 dias de ajustes, bugs e retreino do modelo cobertos sem custo adicional.",
    guarantee: "Ticket respondido em até 4 horas úteis.",
  },
];

/* ============================================================
 * 4. FAQ — objeções finais
 * ========================================================== */

export interface FaqItem {
  slug: string;
  question: string;
  answer: string;
  /** Categoria de objeção (para o blueprint). */
  category: "garantia" | "técnico" | "prazo" | "custo" | "processo";
}

export const faq: FaqItem[] = [
  {
    slug: "como-funciona-garantia",
    category: "garantia",
    question: "Como funciona a garantia de reembolso?",
    answer:
      "Se a entrega final não passar nos critérios de aceite descritos no contrato, você solicita o reembolso e recebe 100% do valor pago em até 5 dias úteis. Sem letras miúdas, sem 'crédito para próximo projeto'.",
  },
  {
    slug: "preciso-entender-tecnologia",
    category: "técnico",
    question: "Eu preciso entender de tecnologia para contratar?",
    answer:
      "Não. Nosso PM traduz cada etapa em linguagem de negócio. Você aprova o escopo em português claro, acompanha checkpoints simples e recebe treinamento gravado ao final. Se souber usar WhatsApp e planilha, está pronto.",
  },
  {
    slug: "quanto-tempo-entrega",
    category: "prazo",
    question: "Quanto tempo leva a entrega?",
    answer:
      "Entre 7 e 14 dias úteis para as demandas do catálogo. Projetos sob medida têm o prazo definido antes da assinatura. O contrato prevê multa por atraso — cumprir prazo é obrigação nossa, não favor.",
  },
  {
    slug: "custo-manutencao",
    category: "custo",
    question: "Qual o custo de manutenção depois da entrega?",
    answer:
      "Os primeiros 30 dias já vêm com suporte incluso. Depois, você escolhe: pagar por hora (R$ 180/h) quando precisar, contratar plano mensal (a partir de R$ 490) ou levar o código e cuidar internamente. Sem contrato de fidelidade.",
  },
  {
    slug: "meus-dados-seguros",
    category: "técnico",
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. Assinamos NDA padrão, usamos criptografia em trânsito e em repouso, e os dados sensíveis nunca vão para modelos de terceiros sem sua autorização explícita. Compatível com LGPD.",
  },
  {
    slug: "posso-pedir-fora-catalogo",
    category: "processo",
    question: "Posso pedir algo que não está no catálogo?",
    answer:
      "Pode. Na modalidade Sob Medida, nosso time desenha o escopo, o preço e o prazo antes de você aprovar. Se o escopo não te convencer, você não paga nada pelo estudo inicial.",
  },
  {
    slug: "quem-e-o-dev",
    category: "processo",
    question: "Como sei quem é o desenvolvedor que vai executar?",
    answer:
      "Depois do briefing, você recebe até 3 perfis compatíveis com nome, portfólio, avaliação e badge de certificação. Escolhe com quem trabalhar — ou pede outro match sem custo.",
  },
];

/* ============================================================
 * Meta — resumo do framework PAS para a aba /blueprint
 * ========================================================== */

export interface FrameworkStep {
  slug: string;
  icon: LucideIcon;
  step: "P" | "A" | "S";
  label: string;
  purpose: string;
  landingSection: string;
  dataSource: string;
}

export const marketingFramework: FrameworkStep[] = [
  {
    slug: "problema",
    icon: UserX,
    step: "P",
    label: "Problema",
    purpose: "Nomear a dor de forma reconhecível para o dono de PME.",
    landingSection: "Hero + Pain Points",
    dataSource: "pains[].title / pains[].description",
  },
  {
    slug: "agitacao",
    icon: Ban,
    step: "A",
    label: "Agitação",
    purpose:
      "Mostrar as consequências práticas — prejuízo, tempo perdido, credibilidade abalada.",
    landingSection: "Pain Points (comparativo)",
    dataSource: "pains[].freelancerReality",
  },
  {
    slug: "solucao",
    icon: Sparkles,
    step: "S",
    label: "Solução",
    purpose:
      "Apresentar o escopo fechado, os entregáveis e a prova (garantia, certificação, ROI).",
    landingSection: "Solutions + Bento + FAQ + CTA",
    dataSource: "solutions[], benefits[], faq[]",
  },
];
