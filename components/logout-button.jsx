"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

import Spinner from "@/components/spinner";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? <Spinner className="h-4 w-4" /> : null}
      {loading ? "Signing out..." : "Logout"}
    </button>
  );
}
