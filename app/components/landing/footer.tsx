export function Footer() {
  return (
    <footer className="px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-white/8 pt-8 text-sm text-stone-400 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--accent)]">
            Amplifica
          </p>
          <p className="font-[family-name:var(--font-display)] text-2xl leading-none text-stone-100">
            Audiovisual estratégico
          </p>
        </div>
        <p className="max-w-md leading-7">
          Audiovisual estratégico para eventos, conteúdo e posicionamento de marca.
        </p>
      </div>
    </footer>
  );
}
