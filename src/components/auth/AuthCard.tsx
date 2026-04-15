import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type AuthTab = "login" | "signup";

const tabs: ReadonlyArray<{ id: AuthTab; label: string }> = [
  { id: "login", label: "Login" },
  { id: "signup", label: "Sign Up" },
];

function AuthCard() {
  const [activeTab, setActiveTab] = useState<AuthTab>("login");

  return (
    <motion.section
      className="panel-surface relative rounded-[34px] p-1.5 sm:p-2"
      initial={{ opacity: 0, x: 18, y: 18 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/55 to-cyan-300/0" />

      <div className="relative rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(9,13,23,0.96),rgba(5,8,15,0.9))] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm text-slate-400">
              Secure access to the Stealth Lens platform
            </p>
            <p className="font-display text-2xl tracking-[-0.04em] text-white">
              Authentication
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300 sm:inline-flex">
            <LockKeyhole className="h-3.5 w-3.5 text-cyan-200" />
            Protected
          </div>
        </div>

        <LayoutGroup id="auth-tab-switcher">
          <div className="mt-6 rounded-full border border-white/8 bg-white/[0.03] p-1.5">
            <div className="grid grid-cols-2 gap-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`relative rounded-full px-4 py-3 text-sm font-medium transition duration-300 ${
                      isActive ? "text-slate-950" : "text-slate-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="auth-tab-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 shadow-[0_12px_30px_rgba(14,165,233,0.24)]"
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      />
                    ) : null}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </LayoutGroup>

        <div className="mt-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab === "login" ? (
                <LoginForm onSwitch={() => setActiveTab("signup")} />
              ) : (
                <SignupForm onSwitch={() => setActiveTab("login")} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default AuthCard;
