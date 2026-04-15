import SectionHeader from "./SectionHeader";

const steps = [
  {
    label: "Download",
    detail:
      "Select the AI package that matches your site requirements and target detection goals.",
  },
  {
    label: "Deploy",
    detail:
      "Install into your environment, connect camera inputs, and align the package with your monitoring stack.",
  },
  {
    label: "Observe",
    detail:
      "Run real-time inference, review events, and expand with additional model packages over time.",
  },
];

function WorkflowSection() {
  return (
    <section className="relative py-20 sm:py-24" id="workflow">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)]">
        <div className="flex flex-col justify-between gap-8">
          <SectionHeader
            eyebrow="How It Works"
            title="A direct path from model package to active surveillance coverage."
            description="Stealth Lens keeps deployment simple: choose the package, plug it into your environment, and let the models begin analyzing your camera network."
          />
          <a
            className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_42px_rgba(14,165,233,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] max-sm:w-full"
            href="/auth"
          >
            Request Early Access
          </a>
        </div>

        <div className="relative grid gap-4 before:absolute before:bottom-8 before:left-6 before:top-8 before:hidden before:w-px before:bg-gradient-to-b before:from-cyan-300/40 before:via-cyan-300/15 before:to-transparent sm:before:block">
          {steps.map((step, index) => (
            <article
              key={step.label}
              className="panel-surface relative grid gap-5 rounded-[28px] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/28 hover:shadow-[0_28px_90px_rgba(1,10,24,0.58)] sm:grid-cols-[auto_1fr]"
            >
              <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 to-blue-400/16 font-display text-sm font-semibold text-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
                0{index + 1}
              </span>
              <div className="relative">
                <h3 className="font-display text-[1.3rem] tracking-[-0.03em] text-white">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection;
