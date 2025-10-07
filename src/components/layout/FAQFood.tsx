"use client"
import React, { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    q: "Can I pre-order food for my bay?",
    a: `Yes — when you reserve a bay you can add a food & drink pre-order. Choose whether you want items delivered to your bay at a specific time or collected at the bar on arrival. Pre-orders help us serve you faster.`,
  },
  {
    q: "Do you cater for dietary requirements and allergens?",
    a: `We work with our partner kitchens to offer vegetarian, vegan, and gluten-free choices, and can note common allergens. Please tell us about severe allergies when ordering so our partners can take appropriate precautions.`,
  },
  {
    q: "Can I order for a large group or event?",
    a: `Absolutely — for parties or corporate events we can coordinate group orders and timed delivery to multiple bays. Contact us in advance for the best logistics and to discuss set menus or buffet options.`,
  },
  {
    q: "What are the delivery options and timings?",
    a: `You can select “Deliver to Bay” (we’ll bring it when you’re ready) or “Pick up at Bar” (collect on arrival). Delivery timing is tied to your booking slot — allow a short window for kitchen prep during peak times.`,
  },
  {
    q: "How do payments work for food & drink?",
    a: `You can pay online when you pre-order, or pay on-site by card or contactless at the bar. For large catering orders we may request a deposit — details will be shown at checkout.`,
  },
  {
    q: "Can I change or cancel my food order?",
    a: `Yes — small changes are fine up to 2 hours before your scheduled delivery. Refunds for cancellations depend on the partner kitchen’s policy; we’ll show the cancellation window and any fees on the order page.`,
  },
];

export default function FAQFood() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-12">
      <div className="mx-auto w-full max-w-6xl bg-white rounded-3xl px-12 py-12 shadow-md">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-96 flex flex-col gap-6">
            <h3 className="rttu-title">Food &amp; Drink — Frequently Asked</h3>
            <p className="text-sm leading-relaxed text-slate-800 lg:text-[15.5px] lg:leading-8">Questions about menus, delivery to bays, group orders or dietary needs? Tap a question to reveal the answer or send us a message and we’ll help plan your visit.</p>

            <div>
              <Link href="/contact" className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md">Contact the Team</Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="border-b border-slate-200">
                  <button
                    type="button"
                    aria-expanded={openIndex === i}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-4 text-left text-emerald-900 font-medium"
                  >
                    <span className="flex-1 text-base">{item.q}</span>
                    <span className={`ml-4 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : "rotate-0"}`}>
                      <svg className="w-4 h-4 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div className={`${openIndex === i ? "block" : "hidden"} py-3`}>
                    <p className="text-sm leading-relaxed text-slate-800 lg:text-[15.5px] lg:leading-8">{item.a}</p>
                    {i === 0 && openIndex === 0 && (
                      <div className="my-4">
                        <Link href="#" className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md">Pre-order Now</Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
