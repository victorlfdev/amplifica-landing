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
      className="relative border-b border-white/8 px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 sm:gap-14 lg:gap-16">
        <Reveal className="max-w-4xl space-y-5 sm:space-y-6">
          {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="section-title max-w-[14ch]">{title}</h2>
            {description ? <p className="body-copy max-w-3xl">{description}</p> : null}
          </div>
        </Reveal>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}
