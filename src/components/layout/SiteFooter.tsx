import type { JSX } from 'react'
import Link from "next/link"

function Icon({ name, href }: { name: "facebook"|"instagram"|"youtube"|"linkedin", href: string }) {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="3"/>
        <path d="M10 9.5 15 12l-5 2.5z"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M8 11v7M8 7h.01M12 18v-5a3 3 0 0 1 6 0v5"/>
      </svg>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex h-7 w-7 items-center justify-center rounded bg-white text-emerald-800 shadow hover:bg-emerald-50 transition">
      {icons[name]}
    </a>
  )
}

export default function SiteFooter() {
  return (
    <footer className="full-bleed bg-emerald-900/5">
      <div className="mx-auto max-w-7xl px-12 pt-24 pb-8">
        <div className="">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-emerald-900">Home</h4>
              <ul className="mt-3 space-y-2 text-emerald-900/80">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/golf-bays" className="hover:underline">Golf Bays</Link></li>
                <li><Link href="/booking" className="hover:underline">Booking</Link></li>
                <li><Link href="/food" className="hover:underline">Food &amp; Drink</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-emerald-900">Contact Us</h4>
              <div className="mt-3 space-y-3 text-sm text-emerald-900/80">
                <p>Address: 1385 Woodroffe Ave,<br/>Ottawa, ON K2G 1V8</p>
                <p>Phone: <a href="tel:+16132774273" className="hover:underline">(613) 727-4723</a></p>
                <p>Email: <a href="mailto:info@celticvirtualgolf.ca" className="hover:underline">info@celticvirtualgolf.ca</a></p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-emerald-900">Sign Up For Offers + Updates</h4>
              <p className="mt-3 text-sm text-emerald-900/80">Become a member today and unlock exclusive welcome perks, first-time bay offers, food and drink savings, and regular updates on what’s new at Celtic Virtual Golf.</p>
              <div className="mt-4">
                <Link href="/signup" className="rounded-md border border-emerald-700 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow transition hover:bg-emerald-600 hover:text-white hover:shadow-md">Join Us Now →</Link>
              </div>
            </div>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-emerald-900/10 pt-4">
            <p className="text-xs text-emerald-900/70">© 2025 Celtic Virtual Golf. All Rights Reserved</p>
            <div className="flex gap-2">
              <Icon name="facebook" href="https://www.facebook.com/celticvirtualgolf" />
              <Icon name="instagram" href="https://www.instagram.com/celticvirtualgolf" />
              <Icon name="youtube" href="https://www.youtube.com/@celticvirtualgolf" />
              <Icon name="linkedin" href="https://www.linkedin.com/company/celticvirtualgolf" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
