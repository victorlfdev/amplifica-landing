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
    <section id={id} className="border-b border-white/10 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              {eyebrow}
            </p>
          ) : null}
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            {description ? (
              <p className="text-base leading-7 text-neutral-300">{description}</p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
