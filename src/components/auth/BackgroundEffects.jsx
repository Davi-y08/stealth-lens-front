import { motion } from "motion/react";

function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-12 top-12 h-72 w-72 rounded-full bg-cyan-400/16 blur-3xl"
        animate={{ x: [0, 34, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-5rem] top-20 h-[26rem] w-[26rem] rounded-full bg-indigo-500/14 blur-3xl"
        animate={{ x: [0, -26, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/12 blur-3xl"
        animate={{ scale: [0.96, 1.06, 0.96], opacity: [0.36, 0.56, 0.36] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="panel-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(2,4,10,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(34,211,238,0.06),transparent_28%,transparent_72%,rgba(99,102,241,0.08))]" />
    </div>
  );
}

export default BackgroundEffects;
