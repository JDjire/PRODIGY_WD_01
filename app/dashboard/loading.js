import Spinner from "@/components/spinner";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel flex items-center gap-3 rounded-3xl px-6 py-4 text-sm text-slate-200">
        <Spinner />
        Loading your dashboard...
      </div>
    </div>
  );
}
