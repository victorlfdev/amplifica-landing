import { Reveal } from "./reveal";

type SectionShellProps = Readonly<{
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="relative border-b border-white/[0.04] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      {/* Top hair-line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[18rem_1fr] lg:items-start lg:gap-12 xl:gap-16">

        {/* ── Coluna esquerda: título âncora (sticky) ── */}
        <Reveal className="space-y-4 sm:space-y-5 lg:sticky lg:top-28 lg:py-4">
          {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="section-title max-w-[16ch] lg:text-[2.1rem] lg:leading-[1.0] xl:text-[2.7rem] xl:leading-[0.95]">
              {title}
            </h2>
            {description ? (
              <p className="body-copy max-w-2xl">{description}</p>
            ) : null}
          </div>
        </Reveal>

        {/* ── Coluna direita: conteúdo ── */}
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}
