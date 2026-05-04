import { Reveal } from "./reveal";
import { audienceItems } from "./content";
import { SectionShell } from "./section-shell";

export function AudienceSection() {
  return (
    <SectionShell
      eyebrow="Quem mais se beneficia"
      title="A Amplifica faz sentido para quem precisa que o evento continue comunicando depois."
      description="Nossa abordagem conversa com organizações que usam eventos para construir reputação, reforçar posicionamento e ampliar presença institucional."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {audienceItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="premium-card h-full rounded-[1.7rem] p-6 sm:rounded-[2rem] sm:p-8">
              <h3 className="text-[1.5rem] font-bold leading-[0.92] tracking-[-0.055em] text-stone-100 sm:text-[2rem] lg:text-[2.4rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
