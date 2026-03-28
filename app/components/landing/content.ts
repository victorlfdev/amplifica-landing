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
  { label: "Solucoes", href: "#solucoes" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Contato", href: "#contato" },
];

export const heroHighlights: HighlightItem[] = [
  {
    title: "Estrategia antes da captacao",
    description: "Cada cobertura comeca com clareza sobre mensagem, publico e objetivos.",
  },
  {
    title: "Cobertura com visao de marca",
    description: "O registro do evento e pensado para reforcar posicionamento institucional.",
  },
  {
    title: "Conteudo com vida longa",
    description: "O material captado se transforma em presenca digital e comunicacao continua.",
  },
];

export const visualProofItems: VisualProofItem[] = [
  {
    title: "Cobertura de eventos",
    description: "Palco, publico e momentos centrais conduzidos com leitura de marca.",
    imageSrc: "/images/Galeria01.webp",
    imageAlt: "Cobertura audiovisual de evento com palco e publico.",
  },
  {
    title: "Ambiente institucional",
    description: "Estrutura, presencia e atmosfera visual de eventos com valor institucional.",
    imageSrc: "/images/Galeria02.webp",
    imageAlt: "Ambiente institucional de evento registrado pela Amplifica.",
  },
  {
    title: "Equipe em acao",
    description: "Operacao tecnica e bastidores mostrando execucao profissional.",
    imageSrc: "/images/Galeria03.webp",
    imageAlt: "Equipe em acao durante operacao audiovisual de evento.",
  },
  {
    title: "Conteudo de marca",
    description: "Imagens pensadas para seguir comunicando valor no pos-evento.",
    imageSrc: "/images/Galeria04.webp",
    imageAlt: "Conteudo visual de marca captado durante evento.",
  },
];

export const solutionItems: SolutionItem[] = [
  {
    title: "Estrategia de Conteudo para Eventos",
    description:
      "Planejamento da comunicacao do evento para que cada captacao tenha direcao, intencao e utilidade no pos-evento.",
    items: [
      "Definicao da narrativa central do evento",
      "Planejamento do que precisa ser captado",
      "Organizacao de entregas para antes, durante e depois",
    ],
  },
  {
    title: "Cobertura Audiovisual de Eventos",
    description:
      "Execucao audiovisual com foco em qualidade tecnica e coerencia com o posicionamento da marca ou instituicao.",
    items: [
      "Captacao de video e fotografia",
      "Registro de momentos-chave e bastidores",
      "Operacao pensada para valor de marca e clareza de mensagem",
    ],
  },
  {
    title: "Gestao Estrategica de Redes Sociais",
    description:
      "Curadoria e desdobramento do material do evento em conteudos que fortalecem presenca digital e autoridade.",
    items: [
      "Cortes e formatos para redes sociais",
      "Organizacao de calendario de publicacoes",
      "Aproveitamento estrategico do conteudo captado",
    ],
  },
];

export const differentialItems: HighlightItem[] = [
  {
    title: "Narrativa do evento",
    description:
      "A Amplifica pensa no que o evento precisa comunicar, e nao apenas no que precisa ser filmado.",
  },
  {
    title: "Planejamento de captacao",
    description:
      "A cobertura e guiada por prioridades claras para registrar os elementos que sustentam posicionamento e autoridade.",
  },
  {
    title: "Aproveitamento no pos-evento",
    description:
      "O material nao se encerra na entrega bruta. Ele vira conteudo util para comunicacao e presenca institucional.",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    title: "Instituicoes culturais e projetos educacionais",
    description:
      "Organizacoes que precisam comunicar relevancia, impacto e consistencia em suas iniciativas.",
  },
  {
    title: "Igrejas, artistas e marcas autorais",
    description:
      "Estruturas que realizam eventos e desejam transformar presenca ao vivo em posicionamento continuo.",
  },
  {
    title: "Empresas B2B e marcas institucionais",
    description:
      "Times que usam eventos para gerar autoridade, fortalecer imagem e ampliar percepcao de valor.",
  },
];
