"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

const ease = [0.22, 1, 0.36, 1] as const;

const noises = [
  {
    num: "01",
    label: "Ruído Operacional",
    title: "Fornecedores que deixam você na mão",
    description:
      "Atrasos, prazos perdidos e problemas técnicos durante o evento. Você investe meses planejando e, na hora H, o fornecedor some.",
    accent: false,
  },
  {
    num: "02",
    label: "Ruído da Falta de Sinal",
    title: "Seu evento existe, mas ninguém sabe",
    description:
      "Como um celular sem sinal: ferramenta poderosa, mas inutilizada. Cadeiras vazias dentro e fora da sala. Evento irrelevante.",
    accent: false,
  },
  {
    num: "03",
    label: "Ruído do Esquecimento",
    title: "Seu evento termina quando as luzes apagam",
    description:
      "Sem conteúdo, sem impacto, sem resultado duradouro. Todo o investimento some junto com a última foto publicada.",
    accent: false,
  },
];

export function ProblemSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="problemas"
      eyebrow="Os três ruídos"
      title="Identificamos os ruídos que travam o seu evento."
      description="Cada evento enfrenta pelo menos um desses três ruídos. A Amplifica resolve os três."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {noises.map((item, i) => (
          <Reveal key={item.num} delay={i * 0.1}>
            <motion.article
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="premium-card group relative overflow-hidden rounded-[1.7rem] p-6 sm:rounded-[2rem] sm:p-8 lg:p-9"
            >
              {/* Número decorativo */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-4 select-none text-[6rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.03] transition-colors duration-500 group-hover:text-[var(--accent)]/10 sm:text-[7.5rem]"
              >
                {item.num}
              </span>

              <p className="relative text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)] sm:text-[0.7rem] sm:tracking-[0.3em]">
                {item.label}
              </p>
              <h3 className="relative mt-4 text-xl font-bold leading-[1.1] tracking-[-0.04em] text-stone-100 sm:mt-5 sm:text-2xl">
                {item.title}
              </h3>
              <p className="relative mt-4 text-[0.87rem] leading-[1.75] text-stone-400 sm:text-base sm:leading-[1.8]">
                {item.description}
              </p>

              {/* Linha dourada inferior no hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,var(--accent),transparent)] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
