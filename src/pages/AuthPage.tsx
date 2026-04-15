import AuthCard from "../components/auth/AuthCard";
import BackgroundEffects from "../components/auth/BackgroundEffects";
import BrandingPanel from "../components/auth/BrandingPanel";

function AuthPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070d] text-slate-50">
      <BackgroundEffects />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mb-5 flex justify-end">
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/28 hover:text-white"
              href="/"
            >
              Voltar para a landing page
            </a>
          </div>

          <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:gap-8">
          <div className="order-2 lg:order-1">
            <BrandingPanel />
          </div>

          <div className="order-1 flex items-center lg:order-2">
            <AuthCard />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
