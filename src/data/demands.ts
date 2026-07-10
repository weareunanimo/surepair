export type Demand = {
  slug: string;
  title: string;
  desc: string;
  price: string;
  tag?: string;
};

export const demands: Demand[] = [
  {
    slug: "chatbot-whatsapp",
    title: "Chatbot no WhatsApp",
    desc: "Atendimento automatizado com IA treinada no seu negócio.",
    price: "R$ 2.400",
    tag: "Mais pedido",
  },
  {
    slug: "assistente-agendamento",
    title: "Assistente de agendamento",
    desc: "Marca horários e confirma compromissos sem intervenção humana.",
    price: "R$ 3.200",
  },
  {
    slug: "resumo-avaliacoes",
    title: "Resumo de avaliações",
    desc: "Consolida reviews do Google e responde no seu tom.",
    price: "R$ 1.800",
  },
  {
    slug: "gerador-conteudo",
    title: "Gerador de conteúdo",
    desc: "Posts semanais para Instagram baseados no seu catálogo.",
    price: "R$ 2.100",
  },
];
