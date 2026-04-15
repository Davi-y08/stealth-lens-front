import type { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
  icon?: LucideIcon;
  trailingAction?: ReactNode;
  hint?: string;
  required?: boolean;
}

function InputField({
  id,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  icon: Icon,
  trailingAction,
  hint,
  required = false,
}: InputFieldProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-4">
          {Icon ? (
            <Icon className="h-[18px] w-[18px] text-slate-500 transition duration-200 group-focus-within:text-cyan-300" />
          ) : null}
        </div>

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          className="relative w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/35 focus:bg-white/[0.05] focus:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_0_28px_rgba(34,211,238,0.12)] disabled:cursor-not-allowed disabled:opacity-60"
          style={{
            paddingLeft: Icon ? "2.85rem" : "1rem",
            paddingRight: trailingAction ? "3.25rem" : "1rem",
          }}
        />

        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-300/[0.06] via-transparent to-indigo-300/[0.06] opacity-0 transition duration-300 group-focus-within:opacity-100" />

        {trailingAction ? (
          <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-3">
            {trailingAction}
          </div>
        ) : null}
      </div>

      {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
    </label>
  );
}

export default InputField;
