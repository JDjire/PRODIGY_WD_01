import Link from "next/link";

export default function AuthShell({ title, subtitle, footer, children }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.18),_transparent_28%)]" />
      <div className="glass-panel glow-ring relative z-10 w-full max-w-md rounded-[2rem] p-8 sm:p-10">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-sky-200 transition hover:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 font-semibold text-sky-300">
            S
          </span>
          SecureAuth Pro
        </Link>
        <div className="mb-8 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
          <p className="text-sm leading-6 text-slate-300">{subtitle}</p>
        </div>
        {children}
        <div className="mt-8 text-sm text-slate-300">{footer}</div>
      </div>
    </main>
  );
}
