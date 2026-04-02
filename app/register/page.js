"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Alert from "@/components/alert";
import AuthField from "@/components/auth-field";
import AuthShell from "@/components/auth-shell";
import Spinner from "@/components/spinner";

function validateRegistration(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Add at least one uppercase letter.";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Add at least one lowercase letter.";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Add at least one number.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm your password.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateRegistration(form);
    setErrors(validationErrors);
    setMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessageType("error");
        setMessage(data.message || "Unable to create your account.");
        return;
      }

      setMessageType("success");
      setMessage("Registration successful. Redirecting to login...");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });

      setTimeout(() => {
        router.push("/login?registered=1");
      }, 1200);
    } catch (error) {
      setMessageType("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Register with secure password requirements, protected storage, and clean validation feedback."
      footer={
        <p>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-sky-300 transition hover:text-white">
            Sign in here
          </Link>
        </p>
      }
    >
      <form className="space-y-5" method="post" onSubmit={handleSubmit}>
        <Alert type={messageType} message={message} />

        <AuthField
          id="name"
          name="name"
          label="Full name"
          placeholder="Jiregna Dereje"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />

        <AuthField
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />

        <AuthField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Create a strong password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
        />

        <AuthField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-6 text-slate-300">
          Use at least 8 characters with uppercase, lowercase, and a number. Browser-generated
          strong passwords are supported.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-75"
        >
          {loading ? <Spinner className="h-4 w-4 border-slate-900/20 border-t-slate-950" /> : null}
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </AuthShell>
  );
}
