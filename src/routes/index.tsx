import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { PainPoints } from "@/components/landing/PainPoints";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Catalog } from "@/components/landing/Catalog";
import { BentoGrid } from "@/components/landing/BentoGrid";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";
import { MatchSimulator } from "@/components/landing/MatchSimulator";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <HowItWorks />
        <Catalog />
        <BentoGrid />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
        <MatchSimulator />
      </main>
      <Footer />
    </div>
  );
}
