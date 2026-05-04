"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "./section-shell";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  "Sinal Blindado: eliminamos o ruído operacional.",
  "Sinal Conectado: fazemos o mundo parar para te ouvir.",
  "Sinal Contínuo: seu evento nunca para.",
];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgScale  = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.06, 0.97]);
  const imgY      = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-20, 20]);
  const img2Scale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.04, 0.98]);
  const img2Y     = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-10, 14]);

  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem faz"
      title="Mais que fornecedores, somos parceiros do seu evento."
    >
      <div ref={sectionRef} className="grid gap-6 xl:grid-cols-[0.58fr_0.42fr] xl:gap-10">

        {/* ── Mosaico de 2 imagens ── */}
        <div className="grid grid-rows-[2fr_1fr] gap-3 sm:gap-4 lg:min-h-[36rem] xl:min-h-[54rem]">

          {/* Imagem principal: time completo */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={prefersReducedMotion ? undefined : { duration: 1, ease }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { scale: imgScale, y: imgY }}
              className="absolute inset-[-6%]"
            >
              <Image
                src="/images/TeamAmplifica.jpg"
                alt="Time da Amplifica"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-top"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,transparent_30%,rgba(0,0,0,0.68)_100%)]" />
            <div className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(232,165,0,0.65),rgba(232,165,0,0.1),transparent)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[var(--accent)]">
                A Amplifica em campo
              </p>
            </div>
          </motion.div>

          {/* Imagem secundária: bastidores reais */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -16, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.9, delay: 0.15, ease }}
            className="relative overflow-hidden rounded-[1.6rem]"
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { scale: img2Scale, y: img2Y }}
              className="absolute inset-[-8%]"
            >
              <Image
                src="/images/Galeria04.webp"
                alt="Cobertura audiovisual ao vivo em evento"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover opacity-85"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-[var(--accent)]/75">
                Sinal blindado, ao vivo
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Coluna de texto ── */}
        <div className="flex flex-col justify-center gap-5 lg:py-4">

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.9, ease }}
            className="text-[1.5rem] font-extrabold leading-[1.04] tracking-[-0.055em] text-stone-100 sm:text-[2rem] lg:text-[2.4rem]"
          >
            Amplifica = Sinal Blindado + Sinal Conectado + Sinal Contínuo.
          </motion.p>

          <div className="space-y-0 border-t border-white/[0.05] pt-5">
            {pillars.map((text, i) => (
              <motion.div
                key={text}
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.5, delay: 0.1 + i * 0.12, ease }}
                className="group flex items-center gap-4 border-b border-white/[0.05] py-4 last:border-none"
              >
                <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-[0.38em] text-[var(--accent)]/40 transition-colors duration-300 group-hover:text-[var(--accent)]">
                  0{i + 1}
                </span>
                <p className="text-[0.87rem] font-semibold leading-snug text-stone-500 transition-colors duration-300 group-hover:text-stone-200 sm:text-[0.92rem]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
