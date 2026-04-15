import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ShowcaseSection from "../components/ShowcaseSection";
import WorkflowSection from "../components/WorkflowSection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-[#05070d] text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-80 w-80 animate-[drift_14s_ease-in-out_infinite] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-[26rem] w-[26rem] animate-[drift_18s_ease-in-out_infinite_reverse] rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 animate-[pulse-glow_10s_ease-in-out_infinite] rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="panel-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative">
        <Navbar />
        <main className="pb-10">
          <Hero />
          <AboutSection />
          <FeaturesSection />
          <ShowcaseSection />
          <WorkflowSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
