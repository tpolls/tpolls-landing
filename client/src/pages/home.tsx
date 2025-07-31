import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import ProblemSection from "@/components/landing/problem-section";
import HowItWorks from "@/components/landing/how-it-works";
import Features from "@/components/landing/features";
import DemoSection from "@/components/landing/demo-section";
import Community from "@/components/landing/community";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <DemoSection />
      <Community />
      <Footer />
    </div>
  );
}
