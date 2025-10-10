import SiteFooter from "@/components/layout/SiteFooter";
import FAQ from "@/components/layout/FAQ";
import Image from "next/image";
import Link from "next/link";
import ExploreCarousel from "@/components/home/ExploreCarousel";
import { homeImages } from "@/config/homeImages";
import EventsSection from "@/components/home/EventsSection";
import SouvenirSection from "@/components/home/SouvenirSection";

export default function HomePage() {
  const slides = homeImages.slides.map((s, i) => ({
    src: s,
    alt: `Slide ${i + 1}`,
  }));

  return (
    <main className="-mt-16 min-h-screen bg-transparent text-slate-900">
      <section className="full-bleed">
        <div className="relative h-screen w-screen">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${homeImages.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Welcome To
            </h1>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Celtic Golf Centre
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href="/signup"
                className="btn-secondary"
              >
                Become a Member
              </Link>
              <Link
                href="/dashboard"
                className="btn"
              >
                Book a Tee Time
              </Link>
            </div>
          </div>
        </div>
      </section>
          {/* About Us Section */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-6">
        <div className="mx-auto w-full max-w-6xl bg-section-a section-card brightness-105 p-8 sm:p-10">
          <div className="flex justify-center">
            <div className="heading-wrap">
              <div className="heading-bar"></div>
              <h2 className="heading-text">
                Premier Golf • Premier Experience
              </h2>
            </div>
          </div>

          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow">
              <img
                src={homeImages.about}
                alt="Tablet booking in a golf bay"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold tracking-tight text-emerald-700">
                About Us
              </h3>
              <p className="mt-4 text-[15.5px] leading-8 text-slate-800">
                At Celtic Virtual Golf, we’re more than just a place to
                practice—we’re where the game comes alive. With 6
                state-of-the-art golf bays (2 premium bays for up to 10 guests
                and 4 standard bays for up to 4 guests), you can book your next
                round online with ease and enjoy a seamless experience from
                start to finish.
              </p>
              <p className="mt-4 text-[15.5px] leading-8 text-slate-800">
                We also offer food and drink services that can be booked
                alongside your bay, making it easy to pair great play with great
                company.
              </p>
              <p className="mt-4 text-[15.5px] leading-8 text-slate-800">
                Celtic Virtual Golf is where convenience meets connection—book,
                play, dine, and experience the game in a whole new way.
              </p>
              <div className="mt-6">
                <Link href="/about" className="btn">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
          {/* Ready To Tee Up Section */}
      <section id="ready-to-tee" className="full-bleed bg-section-b">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="text-center">
            <span className="rttu-eyebrow">Ready To Tee Up?</span>
            <h2 className="rttu-title">Plan Your Perfect Round</h2>
          </div>

          <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rttu-card">
              <a href="/booking" className="rttu-card-img">
                <span className="rttu-card-img-inner">
                  <Image
                    src="/golf/images/card-book.jpg"
                    alt="Book a Bay"
                    fill
                    className="object-cover"
                  />
                </span>
              </a>
              <h4 className="rttu-card-title">Book a Bay</h4>
              <p className="rttu-card-text line-clamp-2">
                Reserve one of 6 bays—2 premium (10 guests) and 4 standard (4
                guests).
              </p>
              <div className="mt-4">
                <Link href="/dashboard" className="btn">
                  Reserve Bay
                </Link>
              </div>
            </div>

            <div className="rttu-card">
              <a href="#" className="rttu-card-img">
                <span className="rttu-card-img-inner">
                  <img
                    src="/golf/images/card-food.jpg"
                    alt="Order Food & Drink"
                  />
                </span>
              </a>
              <h4 className="rttu-card-title">Order Food &amp; Drink</h4>
              <p className="rttu-card-text line-clamp-2">
                Place your order in advance and choose on-site service or pickup
                on arrival.
              </p>
              <div className="mt-4">
                <Link href="#" className="btn">
                  Pre-Order
                </Link>
              </div>
            </div>

            <div className="rttu-card">
              <a href="#" className="rttu-card-img">
                <span className="rttu-card-img-inner">
                  <img
                    src="/golf/images/card-member.jpg"
                    alt="New Member Perks"
                  />
                </span>
              </a>
              <h4 className="rttu-card-title">New Member Perks</h4>
              <p className="rttu-card-text line-clamp-2">
                Sign up to unlock welcome offers and the easiest way to discover
                everything we offer.
              </p>
              <div className="mt-4">
                <Link href="/signup" className="btn">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
          {/* Explore Golf Bays Section */}
      <section id="explore-bays" className="mx-auto max-w-7xl px-4 py-14">
        <div className="mx-auto w-full max-w-6xl bg-section-c section-card p-6 sm:p-8">
          <div className="flex justify-center">
            <div className="heading-wrap">
              <div className="heading-bar"></div>
              <h2 className="heading-text">Explore Our Golf Bays</h2>
            </div>
          </div>

          <div className="mt-8 mx-auto max-w-3xl">
            <ExploreCarousel slides={slides} />
          </div>

          <div className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-slate-700">
            Celtic Virtual Golf features 6 well-designed golf bays—2 premium
            bays for larger groups and 4 standard bays for everyday play—offered
            at fair and affordable rates. Each bay provides ample space,
            comfortable seating, and a clear view, making them perfect for
            practice, friendly competitions, or casual social play.
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/golf-bays" className="btn">View More</Link>
          </div>
        </div>
          </section>
          {/* Events Section */}
          <div id="events">
              <EventsSection />
          </div>
          {/* Souvenir Section */}
          <div id="souvenirs">
              <SouvenirSection />
          </div>
          {/* FAQ Section */}
          <div id="faq">
              <FAQ />
          </div>

            <SiteFooter />
        </main>
    );
}

