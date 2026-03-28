export type NavItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type SolutionItem = {
  title: string;
  description: string;
};

export type AudienceItem = {
  title: string;
  description: string;
};

export const navigationItems: NavItem[] = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Contato", href: "#contato" },
];

export const heroHighlights: HighlightItem[] = [
  {
    title: "Estratégia antes da captação",
    description: "Placeholder para explicar planejamento e direção de conteúdo.",
  },
  {
    title: "Cobertura com visão de marca",
    description: "Placeholder para resumir presença, narrativa e execução.",
  },
  {
    title: "Conteúdo com vida longa",
    description: "Placeholder para reforçar aproveitamento pós-evento.",
  },
];

export const visualProofItems: string[] = [
  "Imagem placeholder 01",
  "Imagem placeholder 02",
  "Imagem placeholder 03",
  "Imagem placeholder 04",
];

export const solutionItems: SolutionItem[] = [
  {
    title: "Estratégia de Conteúdo para Eventos",
    description: "Placeholder para o planejamento antes, durante e depois do evento.",
  },
  {
    title: "Cobertura Audiovisual de Eventos",
    description: "Placeholder para captação, operação e entrega audiovisual.",
  },
  {
    title: "Gestão Estratégica de Redes Sociais",
    description: "Placeholder para cortes, calendário e presença digital.",
  },
];

export const differentialItems: HighlightItem[] = [
  {
    title: "Narrativa do evento",
    description: "Placeholder para mostrar intenção estratégica da cobertura.",
  },
  {
    title: "Planejamento de captação",
    description: "Placeholder para indicar o que precisa ser registrado com propósito.",
  },
  {
    title: "Aproveitamento no pós-evento",
    description: "Placeholder para explicar continuidade e posicionamento.",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    title: "Instituições e projetos",
    description: "Placeholder para organizações com agenda institucional ativa.",
  },
  {
    title: "Eventos com foco em autoridade",
    description: "Placeholder para marcas que precisam converter presença em percepção.",
  },
  {
    title: "Times que precisam de consistência",
    description: "Placeholder para equipes que querem comunicar com continuidade.",
  },
];
