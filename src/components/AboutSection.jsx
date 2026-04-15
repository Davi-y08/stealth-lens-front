import SectionHeader from "./SectionHeader";

const pipeline = [
  "Frame ingestion from active security cameras",
  "Edge or server-side inference using packaged AI models",
  "Threat scoring, event tagging, and operator-ready outputs",
];

function AboutSection() {
  return (
    <section className="relative py-20 sm:py-24" id="about">
      <div className="mx-auto grid max-w-[1180px] gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <div className="panel-surface rounded-[32px] px-6 py-7 sm:p-8 lg:p-10">
          <SectionHeader
            eyebrow="About the Platform"
            title="Computer vision models tuned for security-first environments."
            description="Stealth Lens is built for teams that need surveillance intelligence without a bloated stack. Download focused AI packages that analyze camera feeds for motion patterns, intrusions, objects, and unusual activity."
          />
          <div className="mt-8 grid gap-6 text-base leading-8 text-slate-400">
            <p>
              Each package is designed to attach to existing video
              infrastructure, process incoming frames, and surface operational
              signals that matter in real time.
            </p>
            <p>
              The result is a clean path from raw footage to actionable
              detection, with room to expand into new environments and custom
              model combinations as your monitoring needs evolve.
            </p>
          </div>
        </div>

        <div className="panel-surface relative overflow-hidden rounded-[32px] p-6 sm:p-8">
          <div className="panel-grid rounded-[inherit]" />
          <div className="absolute -right-10 top-12 size-44 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute -left-6 bottom-10 size-32 rounded-full bg-emerald-300/8 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between gap-10">
            <div>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-300/0 to-cyan-300/90" />
                Vision Pipeline
              </span>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                Stealth Lens packages follow a practical analysis path built
                for monitoring teams: connect feeds, run inference, and surface
                the signals operators actually need.
              </p>
            </div>

            <div className="grid gap-4">
              {pipeline.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4 shadow-[0_16px_40px_rgba(1,8,20,0.32)] backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 to-blue-400/16 font-display text-sm font-semibold text-cyan-200">
                      0{index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-slate-300">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
