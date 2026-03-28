import {
  AboutSection,
  AudienceSection,
  FinalCtaSection,
  Footer,
  Header,
  HeroSection,
  ProblemSection,
  SolutionsSection,
  StrategicDifferentialSection,
  VisualProofSection,
} from "@/app/components/landing";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-stone-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_56%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[32rem] h-80 w-80 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-[70rem] h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />
      <Header />
      <main className="relative">
        <HeroSection />
        <VisualProofSection />
        <AboutSection />
        <ProblemSection />
        <SolutionsSection />
        <StrategicDifferentialSection />
        <AudienceSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
