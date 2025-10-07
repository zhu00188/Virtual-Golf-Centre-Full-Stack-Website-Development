"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || ""
  const isAuthRoute = pathname.startsWith("/dashboard")

  return (
    <>
      {/* header hidden on auth routes (login) */}
      {!isAuthRoute && (
        <header className="sticky top-0 z-20 bg-[color:var(--g600)] text-white shadow h-16">
          <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">Celtic Virtual Golf</Link>
            <div className="flex items-center gap-6 text-[15px]">
              <Link href="/">Home</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
      )}

      {/* for auth routes render children full-bleed, otherwise render inside the centered main wrapper */}
      {isAuthRoute ? (
        <div className="min-h-screen">{children}</div>
      ) : (
        <main className="mx-auto max-w-6xl px-4 pt-16 pb-0">{children}</main>
      )}
    </>
  )
}
