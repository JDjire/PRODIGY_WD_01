export default function Spinner({ className = "h-5 w-5" }) {
  return (
    <span
      className={`${className} inline-block animate-spin rounded-full border-2 border-white/20 border-t-white`}
      aria-hidden="true"
    />
  );
}
