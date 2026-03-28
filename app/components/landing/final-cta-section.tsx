import { SectionShell } from "./section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="contato"
      eyebrow="CTA final"
      title="Se o seu evento precisa gerar mais do que lembrança, a conversa começa aqui."
      description="A Amplifica estrutura cobertura, conteúdo e direção estratégica para transformar o evento em um ativo real de comunicação."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="max-w-2xl text-base leading-7 text-neutral-300">
          Solicite uma proposta ou inicie uma conversa para entender como sua marca,
          instituição ou projeto pode aproveitar melhor o valor gerado em cada evento.
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
            Solicitar proposta por e-mail
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
