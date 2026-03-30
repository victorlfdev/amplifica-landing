import { contactLinks } from "./content";
import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="contato"
      eyebrow="Vamos conversar?"
      title="Se o seu evento precisa gerar posicionamento, a conversa começa aqui."
      description="Vamos estruturar uma cobertura que não entregue apenas material bruto, mas ativos de comunicação que continuem trabalhando pela sua marca."
    >
      <Reveal>
        <div className="premium-card-strong rounded-[1.9rem] p-6 sm:rounded-[2.2rem] sm:p-8 lg:p-12">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-base leading-7 text-stone-200 sm:text-lg sm:leading-8">
              Solicite uma proposta e entenda como a Amplifica pode transformar o seu
              próximo evento em conteúdo, autoridade e impacto duradouro.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 lg:min-w-[20rem] lg:max-w-[22rem] lg:flex-col lg:items-stretch lg:gap-3">
              <a
                href={contactLinks.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Falar com a Amplifica no WhatsApp"
                className="button-primary inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 sm:w-auto sm:px-6"
              >
                Falar no WhatsApp
              </a>
              <a
                href={contactLinks.instagram.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram da Amplifica"
                className="button-secondary inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 sm:w-auto sm:px-6"
              >
                Ver Instagram
              </a>
              <a
                href={contactLinks.email.href}
                aria-label="Enviar e-mail para a Amplifica"
                className="button-secondary inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 sm:w-auto sm:px-6"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
