import Link from "next/link";

const features = [
  "JWT-based session management with NextAuth credentials login",
  "Hashed passwords using bcrypt before any user record is stored",
  "Protected dashboard experience with redirect-based access control",
  "Responsive glassmorphism UI with validation, alerts, and loading states",
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.22),_transparent_28%)]" />
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-200">
          Prodigy InfoTech Internship - Task 01
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">SecureAuth Pro</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Full-stack secure user authentication built for production-ready deployment.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A modern Next.js authentication system using MongoDB, NextAuth.js, bcrypt password
                hashing, JWT sessions, and a polished responsive UI designed for Vercel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Create Account
              </Link>
              <Link
                href="/login"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Login
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="glass-panel rounded-3xl p-5">
                  <p className="text-sm leading-7 text-slate-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-sky-300">Deployment Ready</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Authentication Overview</h2>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                Secure
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Registration", "User data is validated, passwords are hashed with bcrypt, and duplicate emails are blocked."],
                ["Login", "Credentials are checked through NextAuth's Credentials Provider with secure password comparison."],
                ["Sessions", "JWT-based sessions keep authentication lightweight and ready for Vercel deployment."],
                ["Protected Dashboard", "Only authenticated users can access the dashboard and view their account details."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
