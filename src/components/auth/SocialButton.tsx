import type { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
}

function SocialButton({ icon: Icon, label }: SocialButtonProps) {
  return (
    <button
      type="button"
      className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_18px_40px_rgba(1,8,20,0.2)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/22 hover:bg-white/[0.05] hover:text-white"
    >
      <Icon className="h-4 w-4 text-slate-400 transition duration-300 group-hover:text-cyan-200" />
      <span>{label}</span>
    </button>
  );
}

export default SocialButton;
