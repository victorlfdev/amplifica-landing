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
  items: string[];
};

export type AudienceItem = {
  title: string;
  description: string;
};

export type VisualProofItem = {
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
    description: "Cada cobertura começa com clareza sobre mensagem, público e objetivos.",
  },
  {
    title: "Cobertura com visão de marca",
    description: "O registro do evento é pensado para reforçar posicionamento institucional.",
  },
  {
    title: "Conteúdo com vida longa",
    description: "O material captado se transforma em presença digital e comunicação contínua.",
  },
];

export const visualProofItems: VisualProofItem[] = [
  {
    title: "Cobertura de eventos",
    description: "Espaço para imagens de palco, público, bastidores e operação técnica.",
  },
  {
    title: "Ambiente institucional",
    description: "Espaço para mostrar presença de marca, estrutura e organização.",
  },
  {
    title: "Equipe em ação",
    description: "Espaço para evidenciar execução profissional e atenção aos detalhes.",
  },
  {
    title: "Conteúdo de marca",
    description: "Espaço para reforçar como o evento gera ativos visuais de longo prazo.",
  },
];

export const solutionItems: SolutionItem[] = [
  {
    title: "Estratégia de Conteúdo para Eventos",
    description:
      "Planejamento da comunicação do evento para que cada captação tenha direção, intenção e utilidade no pós-evento.",
    items: [
      "Definição da narrativa central do evento",
      "Planejamento do que precisa ser captado",
      "Organização de entregas para antes, durante e depois",
    ],
  },
  {
    title: "Cobertura Audiovisual de Eventos",
    description:
      "Execução audiovisual com foco em qualidade técnica e coerência com o posicionamento da marca ou instituição.",
    items: [
      "Captação de vídeo e fotografia",
      "Registro de momentos-chave e bastidores",
      "Operação pensada para valor de marca e clareza de mensagem",
    ],
  },
  {
    title: "Gestão Estratégica de Redes Sociais",
    description:
      "Curadoria e desdobramento do material do evento em conteúdos que fortalecem presença digital e autoridade.",
    items: [
      "Cortes e formatos para redes sociais",
      "Organização de calendário de publicações",
      "Aproveitamento estratégico do conteúdo captado",
    ],
  },
];

export const differentialItems: HighlightItem[] = [
  {
    title: "Narrativa do evento",
    description:
      "A Amplifica pensa no que o evento precisa comunicar, e não apenas no que precisa ser filmado.",
  },
  {
    title: "Planejamento de captação",
    description:
      "A cobertura é guiada por prioridades claras para registrar os elementos que sustentam posicionamento e autoridade.",
  },
  {
    title: "Aproveitamento no pós-evento",
    description:
      "O material não se encerra na entrega bruta. Ele vira conteúdo útil para comunicação e presença institucional.",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    title: "Instituições culturais e projetos educacionais",
    description:
      "Organizações que precisam comunicar relevância, impacto e consistência em suas iniciativas.",
  },
  {
    title: "Igrejas, artistas e marcas autorais",
    description:
      "Estruturas que realizam eventos e desejam transformar presença ao vivo em posicionamento contínuo.",
  },
  {
    title: "Empresas B2B e marcas institucionais",
    description:
      "Times que usam eventos para gerar autoridade, fortalecer imagem e ampliar percepção de valor.",
  },
];
