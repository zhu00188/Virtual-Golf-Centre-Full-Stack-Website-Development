"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardPage() {
  return (
  <main className="min-h-[calc(100vh-7rem)] flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden pt-8">
        <div className="max-w-2xl mx-auto text-center p-8">
          <h1 className="text-3xl font-bold text-emerald-900 tracking-wide">Select Your Booking Dashboard</h1>
          <p className="mt-2 text-[15.5px] leading-8 text-slate-700">Select the dashboard you would like to explore.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            <Link href="/dashboard/check-availability" className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white ring-1 ring-slate-200 p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 relative">
                <Image src="/golf/icons/Property 1=add-user.svg" alt="Guest" fill className="object-contain" />
              </div>
              <div className="text-sm font-semibold text-emerald-900">GUEST</div>
            </Link>

            <Link href="/dashboard/member" className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white ring-1 ring-slate-200 p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 relative">
                <Image src="/golf/icons/Property 1=add-user.svg" alt="Member" fill className="object-contain" />
              </div>
              <div className="text-sm font-semibold text-emerald-900">MEMBER</div>
            </Link>

            <Link href="/admin" className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white ring-1 ring-slate-200 p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 relative">
                <Image src="/golf/icons/Property 1=add-user.svg" alt="Admin" fill className="object-contain" />
              </div>
              <div className="text-sm font-semibold text-emerald-900">ADMIN</div>
            </Link>
          </div>

          <div className="mt-24 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Celtic Virtual Golf. All Rights Reserved.</div>
        </div>
      </div>
    </main>
  )
}
