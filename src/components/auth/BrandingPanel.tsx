import {
  Activity,
  ArrowUpRight,
  Boxes,
  Fingerprint,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface BrandingHighlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface BrandingMetric {
  value: string;
  label: string;
}

const highlights: ReadonlyArray<BrandingHighlight> = [
  {
    icon: ShieldCheck,
    title: "Security-native model access",
    text: "Distribute protected AI packages with a product experience built for trust and control.",
  },
  {
    icon: Activity,
    title: "Real-time operational awareness",
    text: "Support surveillance deployments with responsive monitoring cues and live signal readiness.",
  },
  {
    icon: Boxes,
    title: "Modular package architecture",
    text: "Deploy targeted vision bundles by site, scenario, and hardware profile without excess tooling.",
  },
];

const metrics: ReadonlyArray<BrandingMetric> = [
  { value: "12+", label: "Package types ready for future rollout" },
  { value: "24/7", label: "Monitoring posture for active environments" },
  { value: "Edge", label: "Designed for practical deployment paths" },
];

function BrandingPanel() {
  return (
    <motion.section
      className="panel-surface auth-mesh relative rounded-[34px] p-6 sm:p-8 lg:min-h-[720px] lg:p-10"
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="panel-grid absolute inset-0 rounded-[inherit] opacity-45" />
      <div className="absolute -right-10 top-[4.5rem] h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="absolute -left-8 bottom-12 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between gap-10">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-[22px] border border-dashed border-cyan-300/22 bg-white/[0.03] shadow-[0_18px_45px_rgba(2,8,24,0.28)]">
              <Fingerprint className="h-7 w-7 text-cyan-200" />
            </div>

            <div className="space-y-2">
              <div>
                <p className="font-display text-2xl tracking-[-0.05em] text-white sm:text-[2rem]">
                  Stealth Lens
                </p>
                <p className="text-sm text-slate-400">
                  Developed by Scientia Vinces
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                Premium Access Layer
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-[12ch] font-display text-4xl leading-[0.96] tracking-[-0.07em] text-white sm:text-5xl lg:text-[4rem]">
              Secure entry for intelligent surveillance operations.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300/90 sm:text-lg">
              AI-powered surveillance packages for intelligent camera
              monitoring, delivered with a product surface that feels stealthy,
              trusted, and deployment-ready from the first interaction.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="rounded-[26px] border border-white/8 bg-white/[0.03] p-4 shadow-[0_16px_40px_rgba(1,8,20,0.28)] backdrop-blur"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12 + index * 0.08,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 to-blue-400/16 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="space-y-1.5">
                      <h2 className="font-display text-[1.15rem] tracking-[-0.03em] text-white">
                        {item.title}
                      </h2>
                      <p className="text-sm leading-7 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_1.08fr]">
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-white/8 bg-white/[0.03] px-5 py-4 shadow-[0_18px_40px_rgba(1,8,20,0.24)] backdrop-blur"
              >
                <p className="font-display text-2xl tracking-[-0.04em] text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#050911]/80 p-5 shadow-[0_22px_48px_rgba(1,6,18,0.34)]">
            <div className="panel-grid absolute inset-0 opacity-35" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    Access Preview
                  </p>
                  <p className="mt-2 font-display text-xl tracking-[-0.03em] text-white">
                    Secure package console
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/16 bg-emerald-300/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-emerald-200">
                  <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]" />
                  Ready
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-[22px] border border-cyan-300/12 bg-cyan-300/[0.06] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-200/90">
                    Package Layer
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-100">
                    Perimeter intelligence, anomaly filters, operator routing
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                    Auth Signal
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-100">
                    Protected access for deployments, teams, and package rights
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                <span>Authentication experience aligned with the product shell</span>
                <ArrowUpRight className="h-4 w-4 text-cyan-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default BrandingPanel;
