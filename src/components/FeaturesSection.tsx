import SectionHeader from "./SectionHeader";

const features = [
  {
    title: "AI Detection Models",
    description:
      "Purpose-built packs for intrusion, object presence, anomaly tracking, and scene-aware event detection.",
  },
  {
    title: "Easy Installation",
    description:
      "Launch with a deployment flow designed to fit existing surveillance stacks and operator workflows.",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Process active camera streams continuously and surface alerts while activity is still unfolding.",
  },
  {
    title: "Modular AI Packages",
    description:
      "Compose the right set of models for each site, use case, or security posture without rebuilding from scratch.",
  },
];

function FeaturesSection() {
  return (
    <section className="relative py-20 sm:py-24" id="features">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeader
          eyebrow="Features"
          title="A modular platform for advanced surveillance operations."
          description="Stealth Lens is designed to look sharp, deploy quickly, and scale from focused monitoring use cases to broader visual intelligence systems."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="panel-surface group rounded-[28px] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/28 hover:shadow-[0_28px_90px_rgba(1,10,24,0.58)] motion-safe:animate-[fade-up_0.8s_ease-out_both]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0 opacity-60" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    0{index + 1}
                  </div>
                  <div className="size-2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(34,211,238,0.7)] transition duration-300 group-hover:scale-125" />
                </div>
                <h3 className="font-display text-[1.28rem] tracking-[-0.03em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
