type MarqueeBannerProps = Readonly<{
  items?: string[];
  separator?: string;
  className?: string;
}>;

const DEFAULT_ITEMS = [
  "Audiovisual Estratégico",
  "Sinal Blindado",
  "Sinal Conectado",
  "Sinal Contínuo",
  "Eventos Corporativos",
  "Cobertura Ao Vivo",
  "Conteúdo de Longo Prazo",
  "Presença Institucional",
];

export function MarqueeBanner({
  items = DEFAULT_ITEMS,
  separator = "·",
  className = "",
}: MarqueeBannerProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-white/[0.06] py-3.5 sm:py-4 ${className}`}
      aria-hidden="true"
    >
      {/* fade esquerda */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,#000,transparent)] sm:w-20" />
      {/* fade direita */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,#000,transparent)] sm:w-20" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-4 text-[10px] font-bold uppercase tracking-[0.38em] text-stone-500 sm:text-[11px]"
          >
            {item}
            <span className="text-[var(--accent)]/50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
