"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { visualProofItems, type VisualProofItem } from "./content";
import { SectionShell } from "./section-shell";

const editorialColumns = [
  [visualProofItems[0], visualProofItems[4]],
  [visualProofItems[1], visualProofItems[3]],
  [visualProofItems[2], visualProofItems[5]],
] satisfies VisualProofItem[][];

const cardHeights: Record<VisualProofItem["size"], string> = {
  compact: "min-h-[17rem] sm:min-h-[18rem]",
  medium: "min-h-[22rem] sm:min-h-[25rem]",
  feature: "min-h-[28rem] sm:min-h-[34rem]",
};

const imageAlignment: Record<NonNullable<VisualProofItem["align"]>, string> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

type PortfolioColumnProps = Readonly<{
  items: VisualProofItem[];
  translateY: MotionValue<string>;
  startIndex: number;
  prefersReducedMotion: boolean;
  enableParallax: boolean;
  compactEntrance: boolean;
}>;

function PortfolioColumn({
  items,
  translateY,
  startIndex,
  prefersReducedMotion,
  enableParallax,
  compactEntrance,
}: PortfolioColumnProps) {
  const premiumEase = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      style={prefersReducedMotion || !enableParallax ? undefined : { y: translateY }}
      className="flex flex-col gap-5 sm:gap-5"
    >
      {items.map((item, itemIndex) => {
        const order = startIndex + itemIndex;

        return (
          <motion.article
            key={`${item.label}-${item.title}`}
            initial={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    y: compactEntrance ? 18 : 28,
                    scale: compactEntrance ? 0.995 : 0.985,
                  }
            }
            whileInView={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
            }
            viewport={{ once: true, amount: compactEntrance ? 0.16 : 0.2 }}
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: compactEntrance ? 0.62 : 0.8,
                    delay: compactEntrance ? order * 0.05 : order * 0.08,
                    ease: premiumEase,
                  }
            }
            className={[
              "group relative overflow-hidden rounded-[1.75rem] border border-white/10",
              "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
              "shadow-[0_22px_80px_rgba(0,0,0,0.34)]",
              "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(213,185,138,0.22),transparent_34%)]",
              "after:pointer-events-none after:absolute after:inset-[1px] after:rounded-[calc(1.75rem-1px)] after:border after:border-white/[0.04]",
              cardHeights[item.size],
            ].join(" ")}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                priority={order < 2}
                className={[
                  "object-cover opacity-48 transition duration-700 ease-out",
                  "group-hover:scale-[1.08] group-hover:opacity-100",
                  imageAlignment[item.align ?? "center"],
                ].join(" ")}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.08),rgba(4,4,4,0.28)_34%,rgba(4,4,4,0.84)_100%)]" />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_26%,transparent_70%,rgba(213,185,138,0.14))] opacity-50"
                animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.52, 0.4] }}
                transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 transition-opacity duration-500 group-hover:opacity-50">
                  <span className="inline-flex rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-stone-200/80 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-50 sm:text-[11px]">
                    {item.label}
                  </span>
                  <p className="max-w-[14rem] text-[11px] uppercase tracking-[0.26em] text-[var(--accent)]/90 transition-opacity duration-500 group-hover:opacity-65 sm:text-xs">
                    {item.highlight}
                  </p>
                </div>
                <motion.span
                  aria-hidden="true"
                  className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(213,185,138,0.55)]"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.12 }}
                />
              </div>

              <div className="space-y-4 transition-opacity duration-500 group-hover:opacity-50">
                <div className="space-y-3">
                  <h3 className="max-w-md font-[family-name:var(--font-display)] text-[2rem] leading-[0.92] tracking-tight text-stone-50 transition-opacity duration-500 group-hover:opacity-25 sm:text-[2.4rem]">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-sm leading-6 text-stone-200/92 transition-opacity duration-500 group-hover:opacity-25 sm:text-[0.98rem] sm:leading-7">
                    {item.description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-stone-300/85 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]/85" />
                  Captação estratégica
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

export function VisualProofSection() {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDesktopGrid, setIsDesktopGrid] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const sync = () => setIsDesktopGrid(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const columnOne = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-8%"]),
    { stiffness: 110, damping: 24, mass: 0.32 },
  );
  const columnTwo = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "9%"]),
    { stiffness: 110, damping: 24, mass: 0.32 },
  );
  const columnThree = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-6%"]),
    { stiffness: 110, damping: 24, mass: 0.32 },
  );

  return (
    <SectionShell
      eyebrow="Portfólio visual"
      title="Imagens que mostram como um evento pode continuar gerando posicionamento depois que ele termina."
      description="Esta seleção reúne palco, bastidores, operação e presença institucional para mostrar como a Amplifica transforma acontecimentos ao vivo em repertório de marca, conteúdo e autoridade."
    >
      <section
        ref={sectionRef}
        aria-label="Portfólio editorial da Amplifica"
        className="relative space-y-6 sm:space-y-8"
      >
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <article className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-[11px]">
              Prova visual estratégica
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-stone-300 sm:grid-cols-3 sm:text-[0.96rem]">
              <p>Captações orientadas pela narrativa que o evento precisa sustentar.</p>
              <p>Registros que reforçam contexto, escala e percepção institucional da marca.</p>
              <p>Material pensado para continuar servindo no pós-evento, nas redes e na comunicação da organização.</p>
            </div>
          </article>
          <article className="rounded-[1.7rem] border border-[var(--accent)]/20 bg-[linear-gradient(180deg,rgba(213,185,138,0.12),rgba(255,255,255,0.03))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-200/75 sm:text-[11px]">
              Valor percebido
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-[2.15rem] leading-[0.92] text-stone-50 sm:text-[2.5rem]">
              O evento deixa de ser apenas registro e passa a operar como ativo de comunicação.
            </p>
          </article>
        </motion.div>

        <div className="grid gap-4 xl:grid-cols-3 xl:items-start">
          <PortfolioColumn
            items={editorialColumns[0]}
            translateY={columnOne}
            startIndex={0}
            prefersReducedMotion={prefersReducedMotion}
            enableParallax={isDesktopGrid}
            compactEntrance={!isDesktopGrid}
          />
          <PortfolioColumn
            items={editorialColumns[1]}
            translateY={columnTwo}
            startIndex={2}
            prefersReducedMotion={prefersReducedMotion}
            enableParallax={isDesktopGrid}
            compactEntrance={!isDesktopGrid}
          />
          <PortfolioColumn
            items={editorialColumns[2]}
            translateY={columnThree}
            startIndex={4}
            prefersReducedMotion={prefersReducedMotion}
            enableParallax={isDesktopGrid}
            compactEntrance={!isDesktopGrid}
          />
        </div>
      </section>
    </SectionShell>
  );
}
