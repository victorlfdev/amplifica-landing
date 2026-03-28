"use client";

import { Lenis as ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

type SmoothScrollProviderProps = Readonly<{
  children: React.ReactNode;
}>;

const lenisOptions = {
  autoRaf: true,
  anchors: true,
  lerp: 0.085,
  wheelMultiplier: 0.9,
  touchMultiplier: 1,
} as const;

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
