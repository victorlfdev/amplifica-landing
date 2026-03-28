import { SectionShell } from "./section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="contato"
      eyebrow="CTA final"
      title="Se o seu evento precisa gerar mais do que lembrança, a conversa começa aqui."
      description="A Amplifica estrutura cobertura, conteúdo e direção estratégica para transformar o evento em um ativo real de comunicação."
    >
      <div className="rounded-[2.2rem] border border-[var(--accent)]/20 bg-[linear-gradient(180deg,rgba(213,185,138,0.14),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl text-lg leading-8 text-stone-200">
            Solicite uma proposta ou inicie uma conversa para entender como sua marca,
            instituição ou projeto pode aproveitar melhor o valor gerado em cada evento.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-stone-950 transition hover:brightness-105"
            >
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@amplifica.com.br"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-stone-100 transition hover:bg-white/8"
            >
              Solicitar proposta por e-mail
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
