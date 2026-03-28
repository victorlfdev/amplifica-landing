"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: distance }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
