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
      className="border-b border-white/8 px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 sm:gap-12 lg:gap-14">
        <Reveal className="max-w-3xl space-y-4 sm:space-y-5">
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.34em]">
              {eyebrow}
            </p>
          ) : null}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-[2.4rem] leading-[0.94] tracking-tight text-stone-100 sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-[0.98rem] leading-7 text-stone-300 sm:text-lg sm:leading-8">
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
