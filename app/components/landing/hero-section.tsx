"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { contactLinks } from "./content";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease },
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY  = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [24, -32]);
  const imgScale  = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.08, 0.96]);
  const imgY      = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-24, 24]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative border-b border-white/[0.04] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-16 lg:pb-20 lg:pt-12"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-12">

        {/* ── Esquerda: headline + logo + CTAs ── */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ animate: { transition: { staggerChildren: 0.13 } } }}
          style={prefersReducedMotion ? undefined : { y: contentY }}
          className="flex flex-col justify-center space-y-8 sm:space-y-10"
        >
          {/* Logo */}
          <motion.div variants={fadeUp} className="flex items-center gap-3.5 sm:gap-4">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? undefined : { duration: 0.85, ease }}
            >
              <Image
                src="/images/AmplificaIconeBranco.webp"
                alt="Ícone da Amplifica"
                width={72}
                height={72}
                priority
                className="h-14 w-14 object-contain drop-shadow-[0_0_20px_rgba(232,165,0,0.5)] sm:h-[4.5rem] sm:w-[4.5rem]"
              />
            </motion.div>
            <Image
              src="/images/TipografiaAbranco.png"
              alt="Amplifica"
              width={180}
              height={48}
              priority
              className="mt-2 h-9 w-auto object-contain opacity-95 sm:h-12"
            />
          </motion.div>

          {/* Headline */}
          <motion.header variants={fadeUp} className="space-y-5 sm:space-y-6">
            <h2 className="text-[2.2rem] font-extrabold leading-[0.88] tracking-[-0.06em] text-white sm:text-[3.2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]">
              Transformando{" "}
              <span className="block text-[1.8rem] leading-[0.95] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.6rem]">
                Ruído em Sinal.
              </span>
            </h2>
            <p className="max-w-[28ch] text-[0.87rem] leading-[1.8] text-stone-500">
              Três ruídos que resolvemos. Três sinais que entregamos.
            </p>
          </motion.header>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={contactLinks.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-[0.74rem] font-bold uppercase tracking-[0.22em]"
            >
              Solicitar proposta
            </a>
            <a
              href="#portfolio"
              className="button-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-[0.74rem] font-bold uppercase tracking-[0.22em]"
            >
              Ver portfólio
            </a>
          </motion.div>
        </motion.div>

        {/* ── Direita: imagem full com quote sobreposto ── */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.05, delay: 0.2, ease }}
          className="relative min-h-[22rem] overflow-hidden rounded-[2rem] sm:min-h-[34rem] lg:min-h-[52rem]"
        >
          {/* Imagem com parallax */}
          <motion.div
            style={prefersReducedMotion ? undefined : { scale: imgScale, y: imgY }}
            className="absolute inset-[-8%]"
          >
            <Image
              src="/images/Galeria01.webp"
              alt="Diretor da Amplifica"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* Overlay: escurece de baixo para cima */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.1)_40%,rgba(0,0,0,0.85)_100%)]" />

          {/* Faixa dourada decorativa no topo */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgba(232,165,0,0.8),transparent)]" />

          {/* Conteúdo sobreposto */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.38em] text-[var(--accent)]">
              Sinal Blindado · Sinal Conectado · Sinal Contínuo
            </p>
            <p className="text-[1.5rem] font-extrabold leading-[1.0] tracking-[-0.05em] text-white sm:text-[1.9rem] lg:text-[2.3rem]">
              Amplifica = Sinal Blindado + Sinal Conectado + Sinal Contínuo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
