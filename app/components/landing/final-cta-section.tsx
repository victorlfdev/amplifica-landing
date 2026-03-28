import { SectionShell } from "./section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="contato"
      eyebrow="CTA final"
      title="Placeholder para o fechamento com contato e solicitação de proposta."
      description="A estrutura já deixa preparado o espaço de conversão principal da página."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="max-w-2xl text-base leading-7 text-neutral-300">
          Placeholder para uma chamada final curta, com reforço de valor e convite para
          conversar sobre o próximo evento.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@amplifica.com.br"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
          >
            Solicitar proposta
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
