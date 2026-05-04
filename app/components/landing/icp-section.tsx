"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "./section-shell";

const ease = [0.22, 1, 0.36, 1] as const;

const audiences = [
  {
    num: "01",
    title: "Marcas e empresas B2B",
    detail: "Eventos como ferramenta de reputação.",
    src: "/images/PresencaInstitucional.webp",
    alt: "Presença institucional corporativa",
  },
  {
    num: "02",
    title: "Instituições culturais e educacionais",
    detail: "Impacto comunicado com autoridade.",
    src: "/images/PosEvento.webp",
    alt: "Cobertura de conteúdo pós-evento para instituições",
  },
  {
    num: "03",
    title: "Igrejas, artistas e marcas autorais",
    detail: "Presença ao vivo em autoridade contínua.",
    src: "/images/ProjetoDestaque.webp",
    alt: "Projeto autoral em destaque com direção visual",
  },
];

export function IcpSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      eyebrow="Pra quem fazemos"
      title="Para quem produzimos."
    >
      {/* Grade de 3 cards com imagem */}
      <div className="grid gap-3 sm:gap-4 xl:grid-cols-3">
        {audiences.map((item, i) => (
          <motion.div
            key={item.num}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28, scale: 0.96 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: i * 0.12, ease }}
            className="group relative min-h-[18rem] overflow-hidden rounded-[1.8rem] sm:min-h-[24rem] lg:min-h-[28rem]"
          >
            {/* Imagem de fundo */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover opacity-55 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-72"
            />

            {/* Overlay gradiente de baixo */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.85)_100%)]" />

            {/* Gold top line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(232,165,0,0.55),rgba(232,165,0,0.1),transparent)]" />

            {/* Número no topo */}
            <div className="absolute left-0 right-0 top-0 p-5 sm:p-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[var(--accent)]/55 transition-colors duration-300 group-hover:text-[var(--accent)]">
                {item.num}
              </span>
            </div>

            {/* Texto na base */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
              <h3 className="mb-2 text-[1.25rem] font-extrabold leading-[1.0] tracking-[-0.04em] text-white sm:text-[1.45rem]">
                {item.title}
              </h3>
              <p className="text-[0.78rem] leading-relaxed text-stone-400 transition-colors duration-300 group-hover:text-stone-300 sm:text-[0.82rem]">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
