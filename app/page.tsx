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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_58%)]" />
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
