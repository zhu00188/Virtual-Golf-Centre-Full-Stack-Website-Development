import SiteFooter from "@/components/layout/SiteFooter";
import Image from "next/image";
import Link from "next/link";
import ExploreCarousel from "@/components/home/ExploreCarousel";
import FAQ from "@/components/layout/FAQ";
import ReadyToPlay from "../components/layout/ReadyToPlay";
import { homeImages } from "@/config/homeImages";

export default function HomePage() {
  const slides = homeImages.slides.map((s, i) => ({
    src: s,
    alt: `Slide ${i + 1}`,
  }));

  return (
    <main className="-mt-16 min-h-screen bg-transparent text-slate-900">
      <section className="full-bleed">
        <div className="relative min-h-[calc(100vh-4rem)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${homeImages.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 text-center px-4">
            <div className="text-white text-5xl font-extrabold leading-[56px] tracking-widest text-center">
              <span className="block">Welcome To</span>
              <span className="block">Celtic Virtual Golf</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href="/signup"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow transition-colors duration-200 hover:bg-emerald-600 hover:text-white hover:shadow-md"
              >
                Become a Member
              </Link>
              <Link
                href="/dashboard"
                className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md"
              >
                Book a Tee Time
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto w-full max-w-6xl bg-transparent p-8 sm:p-10">
          <div className="flex justify-center">
            <div className="heading-wrap">
              <div className="heading-bar"></div>
              <h2 className="rttu-title">Premier Golf • Premier Experience</h2>
            </div>
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-2">
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
              <p className="mt-4 text-sm leading-relaxed text-slate-800 lg:text-[15.5px] lg:leading-8">
                At Celtic Virtual Golf, we’re more than just a place to
                practice—we’re where the game comes alive. With 6
                state-of-the-art golf bays (2 premium bays for up to 10 guests
                and 4 standard bays for up to 4 guests), you can book your next
                round online with ease and enjoy a seamless experience from
                start to finish.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-800 lg:text-[15.5px] lg:leading-8">
                We also offer food and drink services that can be booked
                alongside your bay, making it easy to pair great play with great
                company.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-800 lg:text-[15.5px] lg:leading-8">
                Celtic Virtual Golf is where convenience meets connection—book,
                play, dine, and experience the game in a whole new way.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-bleed bg-section-b">
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-24">
          <div className="text-center mt-6">
            <span className="heading-text">Ready To Tee Up?</span>
          </div>
          <div className="text-center my-12">
            <h2 className="rttu-title">Plan Your Perfect Round</h2>
          </div>

          <div className="mx-auto mt-5 px-4 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rttu-card p-8 flex flex-col h-full">
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
              <h4 className="rttu-card-title mt-4">Book a Bay</h4>
              <p className="rttu-card-text mt-8">
                Reserve one of 6 bays—2 premium (10 guests) and 4 standard (4
                guests).
              </p>
              <div className="mt-8">
                <Link href="/signup" className="rttu-btn">
                  Reserve Bay
                </Link>
              </div>
            </div>

            <div className="rttu-card p-8 flex flex-col h-full">
              <a href="#" className="rttu-card-img">
                <span className="rttu-card-img-inner">
                  <img
                    src="/golf/images/card-food-2.jpg"
                    alt="Order Food & Drink"
                  />
                </span>
              </a>
              <h4 className="rttu-card-title mt-4">Order Food &amp; Drink</h4>
              <p className="rttu-card-text mt-8">
                Place your order in advance and choose on-site service or pickup
                on arrival.
              </p>
              <div className="mt-8">
                <Link href="#" className="rttu-btn">
                  Pre-Order
                </Link>
              </div>
            </div>

            <div className="rttu-card p-8 flex flex-col h-full">
              <a href="#" className="rttu-card-img">
                <span className="rttu-card-img-inner">
                  <img
                    src="/golf/images/card-member.jpg"
                    alt="New Member Perks"
                  />
                </span>
              </a>
              <h4 className="rttu-card-title mt-4">New Member Perks</h4>
              <p className="rttu-card-text mt-8">
                Sign up to unlock welcome offers and the easiest way to discover
                everything we offer.
              </p>
              <div className="mt-8">
                <Link href="/signup" className="rttu-btn">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-bleed px-0 py-8 bg-[color:var(--g50)]">
        <div className="mx-auto w-full max-w-6xl bg-transparent p-6 pb-0 sm:p-8 sm:pb-0 rounded-3xl overflow-hidden" style={{boxShadow: 'none', backdropFilter: 'none'}}>
          <div className="flex justify-center">
              <div className="heading-wrap">
              <div className="heading-bar"></div>
              <h2 className="rttu-title">Explore Our Golf Bays</h2>
            </div>
          </div>

          <div className="mt-8 mx-auto max-w-3xl">
            <ExploreCarousel slides={slides} />
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-slate-700 lg:text-[15.5px] lg:leading-8 lg:text-slate-800">
            Celtic Virtual Golf features 6 well-designed golf bays—2 premium
            bays for larger groups and 4 standard bays for everyday play—offered
            at fair and affordable rates. Each bay provides ample space,
            comfortable seating, and a clear view, making them perfect for
            practice, friendly competitions, or casual social play.
          </div>
          <div className="mt-6 mb-12 flex justify-center">
            <Link
              href="#"
              className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
      <FAQ />
      <ReadyToPlay />
      <SiteFooter />
    </main>
  );
}
