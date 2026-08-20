import { motion } from "framer-motion";
import { Calendar, Car, Check, Clock, MapPin, Mountain, Route, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

const reasons = [
  "Stop at scenic viewpoints whenever you like",
  "Travel comfortably with family or friends",
  "Enjoy complete privacy and flexibility",
  "Visit offbeat attractions along the way",
  "Avoid fixed taxi schedules and waiting times",
];

const routeHighlights = [
  "Smooth highways and scenic countryside",
  "Beautiful apple orchards and village views",
  "Mountain scenery and pine forests",
  "A spectacular final stretch from Tangmarg to Gulmarg",
];

const bestTime = [
  ["Winter (Dec–Feb)", "Snowfall, skiing, gondola rides, and winter photography"],
  ["Spring (Mar–Apr)", "Blooming flowers, pleasant weather, and fewer crowds"],
  ["Summer (May–Jun)", "Ideal for family trips, horse riding, golf, and sightseeing"],
  ["Autumn (Sep–Nov)", "Golden meadows, crisp air, and peaceful road trips"],
];

const faqs = [
  ["Is the road from Srinagar to Gulmarg safe?", "Yes. The route is generally well-maintained and suitable for self-driving in most weather conditions. During winter, drive slowly and stay updated on local advisories."],
  ["Which car is best for this trip?", "Hatchbacks, sedans, and SUVs are all suitable in normal weather. For snowfall, an SUV offers better confidence on mountain roads."],
  ["Can beginners drive to Gulmarg?", "Yes, as long as they are comfortable with mountain curves and follow traffic rules carefully."],
  ["Is parking available in Gulmarg?", "Yes, designated parking areas are available near the main tourist zone."],
];

export default function SrinagarToGulmargGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Srinagar to Gulmarg Road Trip Guide (2026)"
        description="Plan your self-drive road trip from Srinagar to Gulmarg with route details, travel tips, best time to visit, attractions, and FAQs."
        path="/blog/srinagar-to-gulmarg-road-trip-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="/Images/gulmarg.jpg"
              alt="Gulmarg meadow with snow-capped mountains in Kashmir"
              loading="lazy"
              decoding="async"
              onError={(event) => {
                const target = event.currentTarget;
                target.onerror = null;
                target.src = "/Images/jeep.webp";
              }}
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/85 to-slate-900/60" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Calendar size={16} /> 2026 Road Trip Guide
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Car size={16} /> Self-drive adventure
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Srinagar to Gulmarg Road Trip Guide (2026)
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
                Discover the scenic route, travel time, best season, and practical driving tips for a self-drive journey to Gulmarg.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">A Journey Worth Remembering</h2>
              <p className="mt-4 leading-8 text-slate-700">
                A road trip from Srinagar to Gulmarg is one of the most beautiful drives in Kashmir. Winding roads, lush meadows, pine forests, and snow-covered peaks make the journey as memorable as the destination itself.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Whether you are visiting in winter for snowfall and skiing or in summer for green meadows and sightseeing, a self-drive car gives you the freedom to stop whenever you want and explore at your own pace.
              </p>
            </section>

            <section className="grid gap-4 sm:grid-cols-3">
              {[['Distance', 'Approximately 50 km', MapPin], ['Driving time', '1.5–2 hours', Clock], ['Best vehicle', 'Hatchback, sedan, or SUV', Car]].map(([label, value, Icon]) => {
                const StatIcon = Icon as typeof MapPin;
                return (
                  <div key={label as string} className="rounded-lg bg-primary p-5 text-white">
                    <StatIcon size={22} />
                    <p className="mt-4 text-sm font-semibold text-white/75">{label as string}</p>
                    <p className="mt-1 font-display text-lg font-bold">{value as string}</p>
                  </div>
                );
              })}
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <Route className="text-primary" />
                <h2 className="text-2xl font-display font-bold text-primary">Why Choose a Self-Drive Car?</h2>
              </div>
              <p className="mt-4 leading-8 text-slate-700">
                While taxis are available in Srinagar, they often follow fixed routes and timings. A self-drive car gives you complete freedom for photography, spontaneous stops, and relaxed exploration.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-slate-800">
                    <Check size={18} className="text-primary" />
                    {reason}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Route to Follow</h2>
              <p className="mt-4 leading-8 text-slate-700">
                The most popular route is Srinagar → Magam → Tangmarg → Gulmarg. This route offers smooth roads, beautiful countryside, apple orchards, traditional Kashmiri villages, and incredible mountain scenery.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {routeHighlights.map((item) => (
                  <div key={item} className="rounded-lg bg-slate-50 p-4 font-medium text-slate-800">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Time to Visit Gulmarg</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {bestTime.map(([season, description]) => (
                  <div key={season} className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display font-bold text-slate-900">{season}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Attractions Along the Way</h2>
              <p className="mt-4 leading-8 text-slate-700">
                One of the best parts of driving yourself is the freedom to stop at scenic places like Tangmarg, village viewpoints, and the winding mountain stretches from Tangmarg to Gulmarg.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-5">
                  <h3 className="font-display font-bold text-slate-900">Tangmarg</h3>
                  <p className="mt-2 leading-7 text-slate-700">A scenic gateway to Gulmarg where you can take a break, enjoy snacks, and appreciate the mountain views.</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-5">
                  <h3 className="font-display font-bold text-slate-900">Mountain Roads</h3>
                  <p className="mt-2 leading-7 text-slate-700">The final stretch offers some of the most dramatic views of pine forests and snow-capped peaks in Kashmir.</p>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Top Attractions in Gulmarg</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Gulmarg Gondola",
                  "Skiing & Snowboarding",
                  "The Golf Course",
                  "St. Mary's Church",
                  "Maharani Temple",
                  "Walking Trails and meadows",
                ].map((spot) => (
                  <div key={spot} className="rounded-lg bg-slate-50 p-4 font-medium text-slate-800">
                    {spot}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Road Conditions & Driving Tips</h2>
              <p className="mt-4 leading-8 text-slate-700">
                The Srinagar–Gulmarg road is generally in good condition, though snow can accumulate near Gulmarg during winter. During summer, expect more tourist traffic on weekends and holidays. Always drive slowly, keep a safe distance, and stay updated on weather conditions.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Start early to avoid traffic",
                  "Carry your driving licence and ID",
                  "Keep the fuel tank sufficiently full",
                  "Avoid overtaking on blind bends",
                  "Check the weather forecast before leaving",
                  "Follow the local speed limits",
                ].map((tip) => (
                  <div key={tip} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-slate-800">
                    <Check size={18} className="text-primary" />
                    {tip}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">What to Pack</h2>
              <p className="mt-4 leading-8 text-slate-700">
                Depending on the season, carry warm clothing, sunglasses, sunscreen, comfortable shoes, a camera, a water bottle, a power bank, and basic medicines. In winter, waterproof footwear and gloves are especially useful.
              </p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Frequently Asked Questions</h2>
              <div className="mt-5 divide-y divide-slate-200">
                {faqs.map(([question, answer]) => (
                  <div key={question} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="font-display text-lg font-bold text-slate-900">{question}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15">
                <ShieldCheck size={24} />
              </div>
              <h2 className="mt-5 text-2xl font-display font-bold">Why Choose Self Steer?</h2>
              <p className="mt-3 leading-8 text-white/90">
                At Self Steer, we offer premium self-drive vehicles, transparent pricing, and responsive local support to make every Kashmir road trip effortless and memorable.
              </p>
              <p className="mt-3 leading-8 text-white/90">From Gulmarg to Sonamarg and Ladakh, we help you explore the region on your own terms.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Final Thoughts</h2>
              <p className="mt-4 leading-8 text-slate-700">
                The drive from Srinagar to Gulmarg is more than just a transfer—it is one of the most scenic and rewarding journeys in Kashmir. With a reliable self-drive car and a little planning, you can turn the road into a memorable part of your holiday.
              </p>
              <p className="mt-4 font-semibold leading-8 text-slate-900">Book your self-drive car today and experience Kashmir on your own schedule.</p>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
