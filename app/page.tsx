import {
  AboutSection,
  FinalCtaSection,
  Footer,
  Header,
  HeroSection,
  IcpSection,
  MarqueeBanner,
  MobileBottomNav,
  ProblemSection,
  ScrollVideoHero,
  SolutionsSection,
  VisualProofSection,
} from "@/app/components/landing";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-stone-50">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[50rem] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.07),transparent)] sm:h-[60rem]" />
      {/* Floating orb left */}
      <div className="animate-float pointer-events-none absolute left-[-16rem] top-[22rem] h-80 w-80 rounded-full bg-[rgba(221,185,74,0.12)] blur-[5rem] sm:left-[-12rem] sm:top-[28rem] sm:h-[26rem] sm:w-[26rem]" />
      {/* Floating orb right */}
      <div className="animate-float-reverse pointer-events-none absolute right-[-16rem] top-[60rem] h-[22rem] w-[22rem] rounded-full bg-white/[0.03] blur-[5rem] sm:right-[-14rem] sm:top-[70rem]" />
      {/* Mid gold band */}
      <div className="pointer-events-none absolute inset-x-0 top-[86rem] h-[36rem] bg-[linear-gradient(180deg,transparent,rgba(221,185,74,0.07),transparent)]" />
      {/* Bottom orb left */}
      <div className="animate-float pointer-events-none absolute left-[-10rem] top-[148rem] h-72 w-72 rounded-full bg-[rgba(221,185,74,0.07)] blur-[4.5rem]" />
      {/* Bottom glow right */}
      <div className="animate-float-reverse pointer-events-none absolute right-[-12rem] top-[188rem] h-64 w-64 rounded-full bg-white/[0.025] blur-[4rem]" />
      <Header />
      <main className="relative">
        <ScrollVideoHero />
        <MarqueeBanner />
        <HeroSection />
        <ProblemSection />
        <VisualProofSection />
        <MarqueeBanner
          items={["Sinal Blindado", "Cobertura Ao Vivo", "Sinal Conectado", "Presença Institucional", "Sinal Contínuo", "Conteúdo de Longo Prazo", "Bastidores", "Direção Criativa"]}
          className="opacity-60"
        />
        <AboutSection />
        <SolutionsSection />
        <IcpSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
