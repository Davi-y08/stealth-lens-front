type SectionHeaderAlign = "left" | "center";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: SectionHeaderAlign;
}

const alignments = {
  left: {
    wrapper: "items-start text-left",
    copy: "",
  },
  center: {
    wrapper: "items-center text-center",
    copy: "mx-auto",
  },
};

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = alignments[align] ?? alignments.left;

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment.wrapper}`}>
      <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
        <span className="h-px w-10 bg-gradient-to-r from-cyan-300/0 to-cyan-300/90" />
        {eyebrow}
      </span>
      <div className={`space-y-4 ${alignment.copy}`}>
        <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
