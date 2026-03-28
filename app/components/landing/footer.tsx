export function Footer() {
  return (
    <footer className="px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-white/8 pt-6 text-sm text-stone-400 sm:pt-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.34em]">
            Amplifica
          </p>
          <p className="font-[family-name:var(--font-display)] text-xl leading-none text-stone-100 sm:text-2xl">
            Audiovisual estrategico
          </p>
        </div>
        <p className="max-w-md leading-7">
          Transformamos eventos em conteudo, posicionamento e impacto duradouro.
        </p>
      </div>
    </footer>
  );
}
