export default function AuthField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-400 ${
          error
            ? "border-rose-400/50 focus:border-rose-400 focus:ring-4 focus:ring-rose-500/10"
            : "border-white/10 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="text-xs text-rose-200">
          {error}
        </p>
      ) : null}
    </div>
  );
}
