export default function Alert({ type = "info", message }) {
  if (!message) {
    return null;
  }

  const styles = {
    error: "border-rose-400/30 bg-rose-500/10 text-rose-100",
    success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
    info: "border-sky-400/30 bg-sky-500/10 text-sky-100",
  };

  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-sm ${styles[type] ?? styles.info}`}
      role={type === "error" ? "alert" : "status"}
    >
      {message}
    </div>
  );
}
