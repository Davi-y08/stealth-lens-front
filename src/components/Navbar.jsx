const links = [
  { href: "#about", label: "Platform" },
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#workflow", label: "How It Works" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#04070c]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          className="group flex min-w-0 items-center gap-3.5"
          href="#top"
          aria-label="Stealth Lens home"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md transition duration-300 group-hover:opacity-100" />
            <img
              className="relative size-12 rounded-2xl object-cover ring-1 ring-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.48)] sm:size-14"
              src="/assets/stealth-lens-logo.jpg"
              alt="Stealth Lens logo"
            />
          </div>
          <div className="min-w-0">
            <strong className="block truncate font-display text-base tracking-[-0.03em] text-white sm:text-lg">
              Stealth Lens
            </strong>
            <span className="block truncate text-sm text-slate-400">
              By Scientia Vinces
            </span>
          </div>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.25)] lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-full px-4 py-2.5 text-sm text-slate-400 transition duration-200 hover:bg-cyan-300/8 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-400/12 to-blue-400/10 px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_18px_48px_rgba(8,20,40,0.34)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:shadow-[0_0_24px_rgba(34,211,238,0.14)] max-sm:w-full"
          href="/auth"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}

export default Navbar;
