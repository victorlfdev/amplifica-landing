"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contactLinks } from "./content";

const ease = [0.22, 1, 0.36, 1] as const;

export function FinalCtaSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-40, 40]);

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Card com imagem full-bleed de fundo */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32, scale: 0.97 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={prefersReducedMotion ? undefined : { duration: 1, ease }}
          className="relative overflow-hidden rounded-[2.4rem]"
        >
          {/* Imagem de fundo com parallax */}
          <motion.div
            style={prefersReducedMotion ? undefined : { y: imgY }}
            className="absolute inset-[-8%]"
          >
            <Image
              src="/images/EventBTS02.jpg"
              alt="Operação audiovisual da Amplifica em evento"
              fill
              sizes="100vw"
              className="object-cover opacity-40 object-top"
            />
          </motion.div>

          {/* Overlay gradiente direcional */}
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_50%,rgba(0,0,0,0.55)_100%)]" />

          {/* Borda dourada decorativa topo */}
          <div className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(232,165,0,0.8),rgba(232,165,0,0.2),transparent)]" />

          {/* Marca d'água "A" */}
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 select-none text-[18rem] font-extrabold leading-none tracking-[-0.1em] text-white/[0.02] sm:text-[22rem]"
          >
            A
          </div>

          {/* Conteúdo */}
          <div className="relative flex flex-col gap-8 px-5 py-10 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-20">

            {/* Texto esquerda */}
            <div className="flex-1 space-y-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.42em] text-[var(--accent)]">
                Contato
              </p>
              <h2 className="text-[2rem] font-extrabold leading-[0.88] tracking-[-0.07em] text-white sm:text-[3rem] lg:text-[4.4rem]">
                Chega de ruído. Hora do sinal.
              </h2>
              <p className="max-w-[28ch] text-[0.92rem] leading-[1.85] text-stone-500">
                Fale com a Amplifica e transforme seu próximo evento em sinal blindado, conectado e contínuo.
              </p>
            </div>

            {/* Botões direita */}
            <div className="flex shrink-0 flex-col items-start gap-3 sm:items-center lg:items-start">
              <a
                href={contactLinks.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="button-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[0.74rem] font-bold uppercase tracking-[0.22em] sm:w-auto sm:px-10 sm:py-4"
              >
                Solicitar proposta
              </a>
              <a
                href={contactLinks.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="button-gold-outline inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[0.74rem] font-bold uppercase tracking-[0.22em] sm:w-auto sm:px-10 sm:py-4"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
