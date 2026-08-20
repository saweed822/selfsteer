import { motion } from "framer-motion";
import { Calendar, Map, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function SrinagarToPahalgamGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Srinagar to Pahalgam Road Trip Guide | Distance, Route & Travel Tips"
        description="Planning a Srinagar to Pahalgam road trip? Discover the best route, distance, attractions, driving tips, and why a self-drive car is the best way to explore Pahalgam."
        path="/blog/srinagar-to-pahalgam-road-trip-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="/Images/pahalgam.jpeg"
              alt="Scenic Pahalgam valley road in Kashmir"
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
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Road Trip Guide</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><MapPin size={16} /> Srinagar → Pahalgam</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Srinagar to Pahalgam Road Trip Guide (2026)</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">A scenic drive from Srinagar to Pahalgam — distance, route, top stops, and driving tips for an effortless trip.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Srinagar to Pahalgam Distance</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li><strong>Distance:</strong> Approximately <strong>90 km</strong></li>
                <li><strong>Travel Time:</strong> Around <strong>2 to 2.5 hours</strong></li>
                <li><strong>Best Route:</strong> Srinagar → Pampore → Awantipora → Anantnag → Pahalgam</li>
              </ul>
              <p className="mt-4 text-slate-700">The roads are well-maintained and suitable for most vehicles throughout most of the year.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Why Choose a Self-Drive Car?</h2>
              <p className="mt-4 text-slate-700">A self-drive car lets you enjoy the journey without rushing. Benefits include complete privacy, flexible schedule, and the ability to stop whenever you wish.</p>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Complete privacy</li>
                <li>Flexible travel schedule</li>
                <li>Stop whenever you want</li>
                <li>Comfortable family travel</li>
                <li>Visit hidden attractions along the route</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Places to Visit on the Way</h2>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Pampore</h3>
              <p className="mt-2 text-slate-700">Known as the <strong>Saffron Town of Kashmir</strong>, Pampore is famous for its saffron fields, especially during the flowering season in October–November.</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Awantipora</h3>
              <p className="mt-2 text-slate-700">Home to the historic <strong>Awantipora Temple Ruins</strong>, this stop is perfect for history lovers and photographers.</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Anantnag</h3>
              <p className="mt-2 text-slate-700">A lively town where you can take a break, enjoy local cuisine, or refuel before continuing your journey.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Top Attractions in Pahalgam</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li><strong>Betaab Valley</strong> — famous for snow-capped mountains and green meadows.</li>
                <li><strong>Aru Valley</strong> — ideal for trekking and picnics.</li>
                <li><strong>Lidder River</strong> — riverside walks and trout fishing.</li>
                <li><strong>Baisaran Valley</strong> — the "Mini Switzerland of Kashmir".</li>
                <li><strong>Pahalgam Market</strong> — local handicrafts and souvenirs.</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Time to Visit</h2>
              <p className="mt-4 text-slate-700"><strong>Spring (Mar–Apr):</strong> Blooming flowers; <strong>Summer (May–Aug):</strong> Ideal for sightseeing; <strong>Autumn (Sep–Oct):</strong> Golden landscapes; <strong>Winter (Dec–Feb):</strong> Snowy vistas.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Driving Tips</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li>Start early to avoid traffic.</li>
                <li>Follow speed limits on mountain roads.</li>
                <li>Carry your driving licence and ID.</li>
                <li>Keep your fuel tank topped up.</li>
                <li>Check the weather during winter travel.</li>
              </ul>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <h2 className="text-2xl font-display font-bold">Why Choose Self Steer?</h2>
              <ul className="mt-3 list-disc pl-5 text-white/90">
                <li>Premium self-drive cars</li>
                <li>Transparent pricing</li>
                <li>Airport pickup available</li>
                <li>Well-maintained vehicles</li>
                <li>Flexible rental durations</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Book Your Self-Drive Car Today</h2>
              <p className="mt-4 text-slate-700">Discover the beauty of Pahalgam on your own schedule. Book your self-drive car with Self Steer and explore at your own pace.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-3 text-slate-700">
                <p><strong>Is the Srinagar to Pahalgam road suitable for self-driving?</strong> Yes. The road is well-maintained for most of the year.</p>
                <p><strong>Which car is best for Pahalgam?</strong> Hatchbacks and sedans work well; SUVs are comfortable for families and mountain drives.</p>
                <p><strong>Can I visit Betaab Valley and Aru Valley on the same day?</strong> Yes — both can be covered during a full-day visit.</p>
                <p><strong>How long should I spend in Pahalgam?</strong> A day trip is common, but 1–2 nights allows a relaxed visit.</p>
              </div>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
