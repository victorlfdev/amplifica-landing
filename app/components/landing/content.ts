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
  { label: "Portfólio", href: "#portfolio" },
  { label: "Soluções", href: "#solucoes" },
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
    title: "Sinal Blindado",
    description:
      "Pré-produção obsessiva, equipe profissional e processos testados que eliminam riscos.",
  },
  {
    title: "Sinal Conectado",
    description:
      "Divulgação estratégica, stories em tempo real e transmissão ao vivo.",
  },
  {
    title: "Sinal Contínuo",
    description:
      "Conteúdo para 30+ dias pós-evento. Seu impacto e relevância nunca param.",
  },
];

export const visualProofItems: VisualProofItem[] = [
  {
    label: "Evento ao vivo",
    title: "Cobertura com direção e intenção",
    description: "Palco e público captados com propósito narrativo.",
    highlight: "Narrativa visual do evento",
    imageSrc: "/images/EventBTS01.jpg",
    imageAlt: "Cobertura audiovisual de evento com cameraman e iluminação profissional.",
    size: "feature",
    align: "center",
  },
  {
    label: "Presença institucional",
    title: "Ambientes que comunicam solidez",
    description: "Marca e ambiente compondo presença institucional.",
    highlight: "Percepção premium nos detalhes",
    imageSrc: "/images/PresencaInstitucional.webp",
    imageAlt: "Ambiente institucional de evento registrado pela Amplifica.",
    size: "medium",
    align: "center",
  },
  {
    label: "Operação técnica",
    title: "Bastidores conduzidos com precisão",
    description: "Operação com discrição e controle.",
    highlight: "Padrão profissional",
    imageSrc: "/images/EventBTS02.jpg",
    imageAlt: "Bastidores de operação audiovisual com equipe e iluminação.",
    size: "compact",
    align: "center",
  },
  {
    label: "Pós-evento",
    title: "Conteúdo além do palco",
    description: "Imagens que geram valor muito depois do evento.",
    highlight: "Ativo de longo prazo",
    imageSrc: "/images/PosEvento.webp",
    imageAlt: "Conteúdo visual de marca captado durante evento.",
    size: "feature",
    align: "center",
  },
  {
    label: "Time em campo",
    title: "Equipe e resposta em tempo real",
    description: "Bastidores com domínio operacional.",
    highlight: "Cobertura viva e controlada",
    imageSrc: "/images/TeamAmplifica.jpg",
    imageAlt: "Time da Amplifica pronto para produção.",
    size: "medium",
    align: "top",
  },
  {
    label: "Projeto em destaque",
    title: "Cada projeto vira repertório de marca",
    description: "Projetos que viram memória e autoridade.",
    highlight: "Resultados além do evento",
    imageSrc: "/images/ProjetoDestaque.webp",
    imageAlt: "Projeto em destaque com ambiente institucional.",
    size: "compact",
    align: "top",
  },
];

export const solutionItems: SolutionItem[] = [
  {
    title: "Sinal Blindado",
    description: "Do ruído operacional ao sinal de alta qualidade.",
    items: [
      "Pré-produção obsessiva (garantimos que vai dar certo)",
      "Equipe profissional + equipamentos de ponta",
      "Processos testados que eliminam riscos",
      "Atenção obsessiva a prazos e entregas",
    ],
  },
  {
    title: "Sinal Conectado",
    description: "Da invisibilidade ao sinal que o mundo ouve.",
    items: [
      "Divulgação estratégica (Ads)",
      "Stories em tempo real",
      "Transmissão ao vivo",
      "Em desenvolvimento — em breve disponível",
    ],
  },
  {
    title: "Sinal Contínuo",
    description: "Do esquecimento ao impacto que nunca para.",
    items: [
      "Fotos profissionais (LinkedIn, Instagram, site)",
      "Vídeos dos highlights para redes sociais",
      "Conteúdo para 30+ dias pós-evento",
      "Seu evento continua gerando impacto e relevância",
    ],
  },
];

export const differentialItems: HighlightItem[] = [
  {
    title: "Mais que fornecedores",
    description: "Somos parceiros do seu evento. Sua missão é a nossa missão.",
  },
  {
    title: "Eliminamos o ruído",
    description: "Operacional, de visibilidade ou de esquecimento — resolvemos os três.",
  },
  {
    title: "Amplificamos o sinal",
    description: "Blindado, conectado e contínuo: seu evento trabalha por você muito além do dia.",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    title: "Instituições culturais e educacionais",
    description: "Para quem comunica impacto e consistência institucional.",
  },
  {
    title: "Igrejas, artistas e marcas autorais",
    description: "Para quem transforma presença ao vivo em autoridade contínua.",
  },
  {
    title: "Empresas B2B e marcas institucionais",
    description: "Para times que usam eventos como ferramenta de reputação.",
  },
];
