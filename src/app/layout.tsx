import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";
import ReactQueryClientProvider from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-site antialiased">
        <header className="sticky top-0 z-20 bg-[color:var(--g600)] text-white shadow h-16">
          <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">Celtic Virtual Golf</Link>
            <div className="flex items-center gap-6 text-[15px]">
              <Link href="/">Home</Link>
              <Link href="/food">Food & Drink</Link>
              <Link href="/about">About</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </nav>
        </header>
  <main className="mx-auto max-w-6xl px-4 pt-16 pb-0">
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </main>
        
</body>
    </html>
  );
}
