"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { solutionItems } from "./content";
import { SectionShell } from "./section-shell";

const ease = [0.22, 1, 0.36, 1] as const;

const imageStrip = [
  { src: "/images/PresencaInstitucional.webp", alt: "Presença institucional em evento corporativo" },
  { src: "/images/EventBTS02.jpg", alt: "Bastidores de produção ao vivo" },
  { src: "/images/PosEvento.webp", alt: "Conteúdo pós-evento" },
];

export function SolutionsSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const numberX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-28, 28]);
  const bgY     = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-30, 30]);

  return (
    <SectionShell
      id="solucoes"
      eyebrow="As três soluções"
      title="Do ruído ao sinal."
    >
        <div ref={sectionRef} className="space-y-6 sm:space-y-8">

        {/* Faixa de 3 imagens */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.85, ease }}
          className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3.5"
        >
          {imageStrip.map((img, i) => (
            <motion.div
              key={img.src}
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.93 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.7, delay: i * 0.1, ease }}
              className="group relative overflow-hidden rounded-[1rem] sm:rounded-[1.4rem]"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 33vw, 22vw"
                className="object-cover opacity-65 transition-all duration-700 group-hover:scale-[1.07] group-hover:opacity-88"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.6))]" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lista numerada — com imagem de fundo sutil */}
        <div className="relative overflow-hidden rounded-[1.6rem]">

          {/* Background image sutil */}
          <motion.div
            style={prefersReducedMotion ? undefined : { y: bgY }}
            className="pointer-events-none absolute inset-[-10%]"
          >
            <Image
              src="/images/ProjetoDestaque.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.07]"
              aria-hidden
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.88)_50%,rgba(0,0,0,0.96)_100%)]" />

          {/* Items */}
          <div className="relative divide-y divide-white/[0.04] px-6 sm:px-8">
            {solutionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.68, delay: index * 0.1, ease }}
                className="group relative flex items-center gap-4 py-7 sm:py-9 lg:gap-8 lg:py-10"
              >
                <motion.span
                  aria-hidden="true"
                  style={prefersReducedMotion ? undefined : { x: numberX }}
                  className="absolute -left-2 select-none text-[5rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.04] transition-colors duration-600 group-hover:text-[var(--accent)]/12 sm:text-[7rem] lg:text-[9rem]"
                >
                  0{index + 1}
                </motion.span>

                <div className="relative flex flex-1 flex-col gap-2 pl-5 sm:pl-8 lg:flex-row lg:items-center lg:gap-10 lg:pl-12">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-[1.55rem] font-extrabold leading-[0.92] tracking-[-0.055em] text-stone-100 transition-colors duration-500 group-hover:text-white sm:text-[2rem] lg:text-[2.5rem]">
                      {item.title}
                    </h3>
                    <p className="max-w-md text-[0.83rem] leading-relaxed text-stone-600 transition-colors duration-500 group-hover:text-stone-400 sm:text-sm">
                      {item.description}
                    </p>
                    {item.items.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.items.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-stone-600 transition-colors duration-500 group-hover:text-stone-400 sm:text-[0.82rem]"
                          >
                            <span className="mt-[0.35em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/40 transition-colors duration-500 group-hover:bg-[var(--accent)]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.05] transition-all duration-500 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent)]/6 lg:h-12 lg:w-12">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4 fill-none stroke-stone-700 transition-all duration-500 group-hover:stroke-[var(--accent)]"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
