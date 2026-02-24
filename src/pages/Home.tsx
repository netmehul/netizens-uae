import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Metrics } from "../components/Metrics";
import { SeparatorPattern } from "../components/SeparatorPattern";
import { Clients } from "../components/Clients";
import { Problem } from "../components/Problem";
import { BuildOnceScale } from "../components/BuildOnceScale";
import { WhatYouGet } from "../components/WhatYouGet";
import { NumberMetrics } from "../components/NumberMetrics";
import { CaseStudies } from "../components/CaseStudies";
import { ComparisonTable } from "../components/ComparisonTable";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <SeparatorPattern />
        <Clients />
        <Problem />
        <SeparatorPattern />
        <BuildOnceScale />
        <WhatYouGet />
        <SeparatorPattern />
        <NumberMetrics />
        <SeparatorPattern />
        <CaseStudies />
        <ComparisonTable />
        <SeparatorPattern />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
