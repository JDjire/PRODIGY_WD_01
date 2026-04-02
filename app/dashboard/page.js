import { redirect } from "next/navigation";

import LogoutButton from "@/components/logout-button";
import { getAuthSession } from "@/lib/auth";

export const metadata = {
  title: "Dashboard | SecureAuth Pro",
};

export default async function DashboardPage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-8">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Protected dashboard</p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Welcome, {session.user.name}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Your session is active and secured with NextAuth JWT handling. This dashboard is
                only available to authenticated users.
              </p>
            </div>
            <LogoutButton />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm text-slate-400">Name</p>
            <p className="mt-2 text-xl font-semibold text-white">{session.user.name}</p>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 text-xl font-semibold text-white">{session.user.email}</p>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-8">
          <h2 className="text-xl font-semibold text-white">Security highlights</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Passwords are hashed with bcrypt before they reach the database.",
              "Credentials login uses NextAuth with secure JWT-based sessions.",
              "Unauthenticated access is redirected away from this route.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
