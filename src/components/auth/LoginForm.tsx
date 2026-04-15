import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Code2, Eye, EyeOff, Globe, KeyRound, Mail } from "lucide-react";
import InputField from "./InputField";
import SocialButton from "./SocialButton";

interface LoginFormProps {
  onSwitch: () => void;
}

interface LoginFormState {
  email: string;
  password: string;
  remember: boolean;
}

function LoginForm({ onSwitch }: LoginFormProps) {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
    remember: true,
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
          Operator Sign-In
        </span>
        <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
          Welcome back.
        </h2>
        <p className="max-w-md text-sm leading-7 text-slate-400">
          Access deployment controls, model packages, and monitoring workflows
          from one secure interface.
        </p>
      </div>

      <div className="space-y-4">
        <InputField
          id="login-email"
          name="email"
          label="Work email"
          type="email"
          placeholder="operator@stealthlens.ai"
          autoComplete="email"
          icon={Mail}
          value={form.email}
          onChange={handleChange}
          required
        />

        <InputField
          id="login-password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          autoComplete="current-password"
          icon={KeyRound}
          value={form.password}
          onChange={handleChange}
          required
          trailingAction={
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-transparent bg-white/[0.03] text-slate-400 transition duration-200 hover:border-cyan-300/18 hover:text-cyan-200"
              onClick={() => setShowPassword((current) => !current)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          }
        />
      </div>

      <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex items-center gap-3 text-slate-300">
          <input
            type="checkbox"
            name="remember"
            checked={form.remember}
            onChange={handleChange}
            className="h-4 w-4 rounded border-white/12 bg-white/[0.03] text-cyan-300 focus:ring-cyan-300/30 focus:ring-offset-0"
          />
          Remember this device
        </label>

        <a
          href="#forgot-password"
          className="font-medium text-cyan-200 transition duration-200 hover:text-white"
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(14,165,233,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(34,211,238,0.2)]"
      >
        Log In
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/8" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#08111d] px-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            Alternative Access
          </span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <SocialButton icon={Globe} label="Google" />
        <SocialButton icon={Code2} label="GitHub" />
      </div>

      <p className="text-center text-sm text-slate-400">
        New to Stealth Lens?{" "}
        <button
          type="button"
          className="font-medium text-cyan-200 transition duration-200 hover:text-white"
          onClick={onSwitch}
        >
          Create an account
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
