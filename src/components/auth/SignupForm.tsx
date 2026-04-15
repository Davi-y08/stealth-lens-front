import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff, KeyRound, Mail, ShieldCheck, User } from "lucide-react";
import InputField from "./InputField";

interface SignupFormProps {
  onSwitch: () => void;
}

interface SignupFormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

function SignupForm({ onSwitch }: SignupFormProps) {
  const [form, setForm] = useState<SignupFormState>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
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

  function renderPasswordToggle() {
    return (
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
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/16 bg-emerald-300/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
          Secure Enrollment
        </span>
        <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
          Create your access layer.
        </h2>
        <p className="max-w-md text-sm leading-7 text-slate-400">
          Set up an account to manage AI package downloads, protected
          deployments, and future organization-level access controls.
        </p>
      </div>

      <div className="space-y-4">
        <InputField
          id="signup-name"
          name="fullName"
          label="Full name"
          placeholder="Scientia Vinces Operator"
          autoComplete="name"
          icon={User}
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <InputField
          id="signup-email"
          name="email"
          label="Work email"
          type="email"
          placeholder="team@stealthlens.ai"
          autoComplete="email"
          icon={Mail}
          value={form.email}
          onChange={handleChange}
          required
        />

        <InputField
          id="signup-password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          autoComplete="new-password"
          icon={KeyRound}
          value={form.password}
          onChange={handleChange}
          required
          hint="Use at least 8 characters with a mix of letters, numbers, and symbols."
          trailingAction={renderPasswordToggle()}
        />

        <InputField
          id="signup-confirm-password"
          name="confirmPassword"
          label="Confirm password"
          type={showPassword ? "text" : "password"}
          placeholder="Repeat your password"
          autoComplete="new-password"
          icon={ShieldCheck}
          value={form.confirmPassword}
          onChange={handleChange}
          required
          trailingAction={renderPasswordToggle()}
        />
      </div>

      <label className="inline-flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
        <input
          type="checkbox"
          name="acceptedTerms"
          checked={form.acceptedTerms}
          onChange={handleChange}
          required
          className="mt-0.5 h-4 w-4 rounded border-white/12 bg-white/[0.03] text-cyan-300 focus:ring-cyan-300/30 focus:ring-offset-0"
        />
        <span className="leading-6">
          I agree to the terms, privacy policy, and secure usage guidelines for
          Stealth Lens model distribution.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(14,165,233,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(34,211,238,0.2)]"
      >
        Create Account
      </button>

      <p className="text-center text-sm text-slate-400">
        Already have access?{" "}
        <button
          type="button"
          className="font-medium text-cyan-200 transition duration-200 hover:text-white"
          onClick={onSwitch}
        >
          Log in instead
        </button>
      </p>
    </form>
  );
}

export default SignupForm;
