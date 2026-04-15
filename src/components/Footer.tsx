function Footer() {
  return (
    <footer className="relative pb-10 pt-4" id="contact">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-5 border-t border-white/8 px-4 pt-8 sm:flex-row sm:items-center sm:px-6">
        <div>
          <strong className="block font-display text-lg tracking-[-0.03em] text-white">
            Stealth Lens
          </strong>
          <p className="mt-2 text-sm text-slate-400">
            AI model packages for surveillance intelligence.
          </p>
        </div>
        <span className="text-sm text-slate-400">
          Developed by Scientia Vinces
        </span>
      </div>
    </footer>
  );
}

export default Footer;
