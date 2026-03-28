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
      className="border-b border-white/8 px-6 py-18 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:gap-14">
        <Reveal className="max-w-3xl space-y-5">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-none tracking-tight text-stone-100 sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
