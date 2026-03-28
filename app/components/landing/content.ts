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
  imageSrc: string;
  imageAlt: string;
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
    description:
      "Cada evento começa com uma leitura clara de narrativa, prioridades e objetivos de comunicação.",
  },
  {
    title: "Cobertura com visão de marca",
    description:
      "A execução audiovisual é orientada para reforçar autoridade, contexto e percepção de valor.",
  },
  {
    title: "Conteúdo que continua depois",
    description:
      "O material captado se transforma em ativos de conteúdo, posicionamento e presença institucional.",
  },
];

export const visualProofItems: VisualProofItem[] = [
  {
    title: "Cobertura de eventos",
    description: "Capítulos visuais pensados para registrar presença, narrativa e relevância.",
    imageSrc: "/images/Galeria01.webp",
    imageAlt: "Cobertura audiovisual de evento com palco e público.",
  },
  {
    title: "Ambiente institucional",
    description: "Imagem, atmosfera e estrutura alinhadas a marcas que precisam parecer sólidas.",
    imageSrc: "/images/Galeria02.webp",
    imageAlt: "Ambiente institucional de evento registrado pela Amplifica.",
  },
  {
    title: "Equipe em ação",
    description: "Operação técnica conduzida com precisão, discrição e padrão profissional.",
    imageSrc: "/images/Galeria03.webp",
    imageAlt: "Equipe em ação durante operação audiovisual de evento.",
  },
  {
    title: "Conteúdo de marca",
    description: "Imagens feitas para continuar gerando valor muito além do dia do evento.",
    imageSrc: "/images/Galeria04.webp",
    imageAlt: "Conteúdo visual de marca captado durante evento.",
  },
];

export const solutionItems: SolutionItem[] = [
  {
    title: "Estratégia de Conteúdo para Eventos",
    description:
      "Planejamento editorial e de captação para transformar o evento em uma fonte organizada de conteúdo, posicionamento e continuidade de marca.",
    items: [
      "Definição da narrativa que o evento precisa sustentar.",
      "Planejamento do que deve ser captado com intenção.",
      "Estruturação de entregas para antes, durante e depois do evento.",
    ],
  },
  {
    title: "Cobertura Audiovisual de Eventos",
    description:
      "Execução audiovisual com padrão profissional e critério estratégico, para que o registro tenha qualidade técnica e relevância institucional.",
    items: [
      "Captação de vídeo, fotografia e momentos-chave.",
      "Registro de bastidores, palco, público e detalhes de marca.",
      "Operação orientada por clareza de mensagem e valor percebido.",
    ],
  },
  {
    title: "Gestão Estratégica de Redes Sociais",
    description:
      "Curadoria e desdobramento do material captado em conteúdos que ampliam alcance, reforçam autoridade e prolongam o impacto do evento.",
    items: [
      "Seleção de cortes e formatos para canais digitais.",
      "Organização de calendário e ritmo de publicação.",
      "Aproveitamento do evento como ativo de comunicação contínua.",
    ],
  },
];

export const differentialItems: HighlightItem[] = [
  {
    title: "Narrativa antes da operação",
    description:
      "A Amplifica começa pela pergunta certa: o que este evento precisa comunicar para fortalecer a marca ou instituição?",
  },
  {
    title: "Captação com critério",
    description:
      "Nada é registrado por excesso. A cobertura prioriza o que realmente sustenta posicionamento, memória e autoridade.",
  },
  {
    title: "Valor no pós-evento",
    description:
      "O material não termina na entrega. Ele passa a servir como conteúdo, repertório institucional e presença de longo prazo.",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    title: "Instituições culturais e projetos educacionais",
    description:
      "Para organizações que precisam comunicar impacto, relevância pública e consistência institucional.",
  },
  {
    title: "Igrejas, artistas e marcas autorais",
    description:
      "Para estruturas que desejam transformar presença ao vivo em conteúdo, memória e autoridade contínua.",
  },
  {
    title: "Empresas B2B e marcas institucionais",
    description:
      "Para times que usam eventos como ferramenta de reputação, relacionamento e posicionamento estratégico.",
  },
];
