import Spinner from "@/components/spinner";
import { Suspense } from "react";

import LoginForm from "@/components/login-form";

function LoginFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel flex items-center gap-3 rounded-3xl px-6 py-4 text-sm text-slate-200">
        <Spinner />
        Loading secure login...
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}
