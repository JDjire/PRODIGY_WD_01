import "./globals.css";

export const metadata = {
  title: "SecureAuth Pro",
  description: "Secure user authentication system built with Next.js, NextAuth.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
