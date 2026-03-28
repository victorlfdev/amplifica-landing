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
  label: string;
  title: string;
  description: string;
  highlight: string;
  imageSrc: string;
  imageAlt: string;
  size: "compact" | "medium" | "feature";
  align?: "top" | "center" | "bottom";
};

export type ContactLink = {
  label: string;
  href: string;
};

export const navigationItems: NavItem[] = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Contato", href: "#contato" },
];

export const contactLinks = {
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/5511976589202?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Amplifica.%20Poderiam%20me%20enviar%20uma%20proposta%3F",
  },
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/amplifica.midias",
  },
  email: {
    label: "E-mail",
    href: "mailto:amplifica@usd21.org",
  },
} satisfies Record<"whatsapp" | "instagram" | "email", ContactLink>;

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
    label: "Evento principal",
    title: "Cobertura pensada para presença e escala",
    description: "Palco, público e atmosfera registrados com direção e intenção.",
    highlight: "Narrativa visual do evento",
    imageSrc: "/images/Galeria01.webp",
    imageAlt: "Cobertura audiovisual de evento com palco iluminado e público presente.",
    size: "feature",
    align: "center",
  },
  {
    label: "Presença institucional",
    title: "Ambientes que comunicam solidez",
    description: "Arquitetura, recepção e marca compondo uma presença institucional sólida.",
    highlight: "Percepção premium no detalhe",
    imageSrc: "/images/PresencaInstitucional.webp",
    imageAlt: "Ambiente institucional de evento registrado pela Amplifica.",
    size: "medium",
    align: "center",
  },
  {
    label: "Operação técnica",
    title: "Bastidores conduzidos com precisão",
    description: "Equipe e operação atuando com discrição, ritmo e controle.",
    highlight: "Execução com padrão profissional",
    imageSrc: "/images/Galeria03.webp",
    imageAlt: "Equipe em ação durante operação audiovisual de evento.",
    size: "compact",
    align: "center",
  },
  {
    label: "Pós-evento",
    title: "Conteúdo que continua depois do palco",
    description: "Imagens preparadas para seguir gerando valor além do evento.",
    highlight: "Ativo de marca de longo prazo",
    imageSrc: "/images/PosEvento.webp",
    imageAlt: "Conteúdo visual de marca captado durante evento.",
    size: "feature",
    align: "center",
  },
  {
    label: "Ritmo de produção",
    title: "Movimento, coordenação e resposta rápida",
    description: "Bastidores que revelam domínio operacional sem ruído.",
    highlight: "Cobertura viva e controlada",
    imageSrc: "/images/Galeria04.webp",
    imageAlt: "Bastidores de operação audiovisual mostrando equipe e equipamentos.",
    size: "medium",
    align: "bottom",
  },
  {
    label: "Projeto em destaque",
    title: "Cada projeto vira repertório visual da marca",
    description: "Projetos transformados em memória, autoridade e recorrência visual.",
    highlight: "Resultados além do dia do evento",
    imageSrc: "/images/ProjetoDestaque.webp",
    imageAlt: "Projeto em destaque com ambiente institucional e iluminação cênica.",
    size: "compact",
    align: "top",
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
