import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="contato"
      eyebrow="CTA final"
      title="Se o seu evento precisa gerar mais do que lembranca, a conversa comeca aqui."
      description="A Amplifica estrutura cobertura, conteudo e direcao estrategica para transformar o evento em um ativo real de comunicacao."
    >
      <Reveal>
        <div className="rounded-[1.9rem] border border-[var(--accent)]/20 bg-[linear-gradient(180deg,rgba(213,185,138,0.14),rgba(255,255,255,0.04))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:rounded-[2.2rem] sm:p-8 lg:p-12">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-base leading-7 text-stone-200 sm:text-lg sm:leading-8">
              Solicite uma proposta ou inicie uma conversa para entender como sua marca,
              instituicao ou projeto pode aproveitar melhor o valor gerado em cada evento.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <a
                href="https://wa.me/"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-stone-950 transition hover:brightness-105 sm:w-auto sm:px-6"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@amplifica.com.br"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3.5 text-sm font-semibold text-stone-100 transition hover:bg-white/8 sm:w-auto sm:px-6"
              >
                Solicitar proposta por e-mail
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
