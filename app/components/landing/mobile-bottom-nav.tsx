import type { ReactNode } from "react";

type MobileNavItem = {
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  icon: ReactNode;
};

const navItems: MobileNavItem[] = [
  {
    label: "Início",
    href: "#top",
    ariaLabel: "Ir para o início da página",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current">
        <path
          d="M4.75 10.75L12 4.75l7.25 6M6.75 9.5v8.75h10.5V9.5"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Soluções",
    href: "#solucoes",
    ariaLabel: "Ir para a seção de soluções",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current">
        <path
          d="M5.75 7.25h12.5M5.75 12h12.5M5.75 16.75h8.5"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Diferencial",
    href: "#diferencial",
    ariaLabel: "Ir para a seção de diferencial estratégico",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current">
        <path
          d="M12 4.75l2.35 4.77 5.27.77-3.81 3.72.9 5.24L12 16.8l-4.71 2.48.9-5.24-3.81-3.72 5.27-.77L12 4.75Z"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Contato",
    href: "#contato",
    ariaLabel: "Ir para a seção de contato",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current">
        <path
          d="M5.75 7.75A2.75 2.75 0 0 1 8.5 5h7a2.75 2.75 0 0 1 2.75 2.75v8.5A2.75 2.75 0 0 1 15.5 19h-7a2.75 2.75 0 0 1-2.75-2.75v-8.5Z"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.75 8.25 12 11.75l4.25-3.5"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function MobileBottomNav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
      <nav
        aria-label="Navegação inferior mobile"
        className="pointer-events-auto mx-auto flex w-full max-w-md items-center justify-between rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,15,16,0.9),rgba(8,8,8,0.96))] px-2 py-2 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl supports-[padding:max(0px)]:pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            aria-label={item.ariaLabel}
            className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[1.15rem] px-2 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-300 hover:bg-white/6 hover:text-stone-50"
          >
            <span
              className={
                item.external
                  ? "flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-stone-950"
                  : "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-stone-200"
              }
            >
              {item.icon}
            </span>
            <span className="truncate">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
