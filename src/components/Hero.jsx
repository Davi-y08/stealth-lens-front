function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20" id="top">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-50 shadow-[0_0_0_1px_rgba(34,211,238,0.03)] backdrop-blur">
            <span className="size-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.75)]" />
            AI packages for live surveillance intelligence
          </div>
          <h1 className="mt-6 max-w-[12ch] font-display text-[clamp(3.2rem,8vw,6.25rem)] leading-[0.92] tracking-[-0.08em] text-white">
            Turn every security camera into a
            <span className="bg-gradient-to-r from-cyan-200 via-emerald-200 to-blue-300 bg-clip-text text-transparent">
              {" "}
              real-time computer vision sensor.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Stealth Lens packages production-ready AI models for fast deployment
            across CCTV and IP camera networks, helping teams detect events,
            monitor risk, and scale visual intelligence without rebuilding
            infrastructure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_42px_rgba(14,165,233,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
              href="#showcase"
            >
              Explore the Platform
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_rgba(2,6,23,0.3)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/28 hover:bg-cyan-300/[0.06]"
              href="#workflow"
            >
              See Deployment Flow
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="panel-surface rounded-[22px] px-5 py-4">
              <strong className="font-display text-xl text-white">24/7</strong>
              <span className="mt-2 block text-sm leading-6 text-slate-400">
                Continuous monitoring
              </span>
            </div>
            <div className="panel-surface rounded-[22px] px-5 py-4">
              <strong className="font-display text-xl text-white">
                Modular
              </strong>
              <span className="mt-2 block text-sm leading-6 text-slate-400">
                Stackable AI model bundles
              </span>
            </div>
            <div className="panel-surface rounded-[22px] px-5 py-4">
              <strong className="font-display text-xl text-white">
                Edge Ready
              </strong>
              <span className="mt-2 block text-sm leading-6 text-slate-400">
                Designed for practical rollout
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-4 grid gap-4 lg:mt-0 lg:min-h-[640px]" aria-hidden="true">
          <div className="panel-surface relative rounded-[30px] p-5 sm:p-6 lg:absolute lg:inset-x-6 lg:bottom-24 lg:top-8">
            <div className="panel-grid rounded-[inherit]" />
            <div className="relative flex items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">
              <span>Vision Stack</span>
              <span className="inline-flex items-center gap-2 text-emerald-100">
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
                Live analysis
              </span>
            </div>

            <div className="hero-radar relative mt-6 overflow-hidden rounded-[26px] border border-white/10">
              <div className="scan-line" />
              <div className="target-box left-8 top-16 h-[180px] w-[140px] sm:left-12 sm:top-[4.6rem] sm:h-[210px] sm:w-[156px]" />
              <div className="target-box right-6 bottom-10 h-[124px] w-[96px] sm:right-12 sm:bottom-12 sm:h-[158px] sm:w-[122px]" />
              <div className="absolute left-5 top-5 size-24 rounded-full border border-cyan-300/12 bg-cyan-300/6 blur-md" />
              <div className="absolute bottom-6 right-10 size-16 rounded-full border border-blue-300/14 bg-blue-400/10 blur-sm" />
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                  Model cluster
                </span>
                <strong className="mt-2 block text-base font-semibold text-white">
                  Vehicle, perimeter, anomaly
                </strong>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                  Response layer
                </span>
                <strong className="mt-2 block text-base font-semibold text-white">
                  Instant alert routing
                </strong>
              </div>
            </div>
          </div>

          <div className="panel-surface relative rounded-[28px] p-5 animate-[float-soft_7s_ease-in-out_infinite] lg:absolute lg:bottom-2 lg:left-0 lg:w-[240px]">
            <div className="absolute inset-0 rounded-[inherit] bg-cyan-400/6 blur-2xl" />
            <div className="relative">
              <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                Operational signal
              </span>
              <strong className="mt-3 block font-display text-3xl text-white">
                98.2%
              </strong>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                High-confidence event filtering for cluttered scenes.
              </p>
            </div>
          </div>

          <div
            className="panel-surface relative rounded-[28px] p-5 animate-[float-soft_8.6s_ease-in-out_infinite] lg:absolute lg:right-0 lg:top-0 lg:w-[260px]"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="absolute inset-0 rounded-[inherit] bg-blue-400/6 blur-2xl" />
            <div className="relative">
              <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                Package architecture
              </span>
              <strong className="mt-3 block text-xl font-semibold text-white">
                Plug in by scenario
              </strong>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Deploy only the models each environment actually needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
