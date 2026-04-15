import SectionHeader from "./SectionHeader";

const showcases = [
  {
    title: "Live Camera Monitoring",
    text: "Insert a dashboard image that shows the model watching multiple camera feeds in real time.",
  },
  {
    title: "Event Detection Preview",
    text: "Use this area for an annotated capture or short demo clip showing detections and alerts.",
  },
  {
    title: "Deployment Interface",
    text: "Reserve space for a screenshot of package selection, installation, or configuration workflows.",
  },
];

function ShowcaseSection() {
  return (
    <section className="relative py-20 sm:py-24" id="showcase">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 sm:px-6">
        <SectionHeader
          eyebrow="Demo / Showcase"
          title="Built-in room for future product demonstrations."
          description="These panels are intentionally ready for screenshots, camera overlays, explainer videos, or interactive previews as the platform grows."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {showcases.map((item, index) => (
            <article
              key={item.title}
              className="panel-surface group rounded-[28px] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/28 hover:shadow-[0_28px_90px_rgba(1,10,24,0.58)]"
            >
              <div className="showcase-frame relative min-h-[260px] overflow-hidden rounded-t-[28px] border-b border-white/8 p-6 sm:min-h-[290px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_42%)] opacity-80" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                    Demo Placeholder {index + 1}
                  </div>
                  <div className="rounded-[24px] border border-dashed border-cyan-300/24 bg-white/[0.02] px-5 py-6 text-sm leading-7 text-slate-400 shadow-[inset_0_0_30px_rgba(34,211,238,0.05)]">
                    Replace this panel with screenshots, annotated camera
                    frames, or a short product clip.
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-[1.28rem] tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
