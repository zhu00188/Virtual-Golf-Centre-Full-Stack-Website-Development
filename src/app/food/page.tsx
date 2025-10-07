import Link from 'next/link'
import SiteFooter from '@/components/layout/SiteFooter'
import FAQFood from '@/components/layout/FAQFood'

const cardBase = "rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden";

export default function FoodPage() {
  return (
    <main className="-mt-16 min-h-screen text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-0">
        {/* Section 1 - Introduction */}
        <section className="full-bleed">
          <div className="relative min-h-[calc(100vh-4rem)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/golf/images/food-hero.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 mx-auto max-w-7xl flex items-center min-h-[calc(100vh-4rem)] mb-24 px-3 justify-center lg:justify-start lg:pl-8">
              <div className={`rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-white/90 p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-sm lg:text-base shadow-2xl lg:shadow-xl`}>
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-700/90">Food &amp; Drink Services</span>
                  <h1 className="mt-2 mb-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-emerald-700">It&apos;s Golf, But Not Just Golf</h1>
                  <p className="mt-2 mb-4 text-[14px] lg:text-[15.5px] leading-6 lg:leading-7 text-slate-700">At Celtic Virtual Golf, great play deserves great dining. Whether you’re relaxing between swings or planning ahead for your visit, our food and drink services are designed for comfort and ease.</p>
                  <p className="mt-2 mb-4 text-[14px] lg:text-[15.5px] leading-6 lg:leading-7 text-slate-700">You can choose to dine on-site in our lounge or pre-order in advance for delivery to your reserved bay or another preferred location within the centre.</p>
                  <div className="mt-6">
                    <Link href="#" className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md">Pre-Order Now</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - How it works  */}
        <div className="flex justify-center mb-8">
          <div className="heading-wrap">
            <div className="heading-bar" />
            <h2 className="rttu-title">How it works</h2>
          </div>
        </div>
        <section className="mx-auto mt-5 px-4 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          <div className="rttu-card p-8 flex flex-col h-full">
            <a href="/food/menu" className="rttu-card-img">
              <span className="rttu-card-img-inner">
                <img src="/golf/images/card-food-1.jpg" alt="Browse Menu Options" />
              </span>
            </a>
            <h4 className="rttu-card-title mt-4">1 - Browse Menu Options</h4>
            <p className="rttu-card-text mt-8">Explore our partner restaurants and curated food selections by category.</p>
            <div className="mt-8">
              <Link href="#" className="rttu-btn">View Menu</Link>
            </div>
          </div>

          <div className="rttu-card p-8 flex flex-col h-full">
            <a className="rttu-card-img">
              <span className="rttu-card-img-inner">
                <img src="/golf/images/order.jpg" alt="Choose Delivery Option" />
              </span>
            </a>
            <h4 className="rttu-card-title mt-4">2 - Choose Your Delivery Option</h4>
            <p className="rttu-card-text mt-8">Select “Serve in Bay” or “Deliver in Advance” and provide your delivery details.</p>
            <div className="mt-8">
              <Link href="#" className="rttu-btn">Pre-Order</Link>
            </div>
          </div>

          <div className="rttu-card p-8 flex flex-col h-full">
            <a href="#" className="rttu-card-img">
              <span className="rttu-card-img-inner">
                <img src="/golf/images/card-food-2.jpg" alt="Relax and Enjoy" />
              </span>
            </a>
            <h4 className="rttu-card-title mt-4">3 - Relax and Enjoy</h4>
            <p className="rttu-card-text mt-8">We’ll handle the rest while you focus on your game.</p>
            <div className="mt-8">
              <Link href="#" className="rttu-btn">Learn More</Link>
            </div>
          </div>
        </section>

        {/* Section 3 - Our partners & selections  */}
        <div className="flex justify-center my-8">
          <div className="heading-wrap">
            <div className="heading-bar" />
            <h2 className="rttu-title">Our partners &amp; selections</h2>
          </div>
        </div>
        <section className={`${cardBase} p-6 md:p-8 mb-16 bg-[linear-gradient(180deg,#f9fefb_0%,#eefcf5_100%)]`}>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: 'Fairway Kitchen', desc: 'Classic comfort dishes and casual dining favourites.' },
              { name: 'Greenhouse Bites', desc: 'Fresh salads, wraps, and healthy options.' },
              { name: 'Slice & Swing Pizza Co.', desc: 'Artisan pizzas made fresh to order.' },
              { name: 'The Celtic Grill', desc: 'Premium burgers, fries, and shareable plates.' },
              { name: 'Birdie Bar Co.', desc: 'Handcrafted cocktails and mocktails.' },
              { name: 'Cool 9 Beverages', desc: 'Juices, smoothies, and soft drinks.' },
              { name: 'The Brew Loft', desc: 'Local craft beer and premium coffee selections.' },
            ].map((p) => (
              <div key={p.name} className="rttu-card p-4 flex flex-col items-center h-full">
                <div className="w-[120px] h-[120px] overflow-hidden rounded-full bg-slate-300">
                  <img src={`https://placehold.co/300x300/cccccc/ffffff?text=${encodeURIComponent(p.name)}`} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <div className="font-medium text-slate-900">{p.name}</div>
                  <div className="text-sm text-slate-700">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

  {/* Section 4 - FAQ (Food & Drink) */}
  <FAQFood />

  {/* Section 5 - Join & Save */}
        <div className="flex justify-center my-8">
          <div className="heading-wrap">
            <div className="heading-bar" />
            <h2 className="rttu-title">Join &amp; Save</h2>
          </div>
        </div>
        <section className="mx-auto mt-5 px-4 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 mb-16">
          <div className="rttu-card p-8 flex flex-col h-full items-center text-center">
            <h4 className="rttu-card-title mt-4">First time with us?</h4>
            <p className="rttu-card-text mt-4 px-8">Sign up now to become a Celtic Virual Golf member to receive exclusive perks, early access to new menu items, and members-only offers on food and drinks.</p>
            <div className="mt-6">
              <Link href="/signup" className="rttu-btn">Sign Up Now</Link>
            </div>
          </div>

          <div className="rttu-card p-8 flex flex-col h-full items-center text-center">
            <h4 className="rttu-card-title mt-4">Hungry already?</h4>
            <p className="rttu-card-text mt-4 px-8">Plan ahead and pre-order your favourites for on-site dining or advance delivery to your preferred location, and we’ll have everything ready when you arrive.</p>
            <div className="mt-6">
              <Link href="#" className="rttu-btn">Pre-Order Now</Link>
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </main>
  )
}
