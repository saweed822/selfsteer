import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function SrinagarToSonamargGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Srinagar to Sonamarg Road Trip Guide | Distance, Route & Travel Tips"
        description="Planning a Srinagar to Sonamarg road trip? Discover the best route, distance, attractions, driving tips, and why a self-drive car is the perfect way to explore Sonamarg."
        path="/blog/srinagar-to-sonamarg-road-trip-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop"
              alt="Sonamarg valley with river and snow-capped mountains in Kashmir"
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
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><MapPin size={16} /> Srinagar → Sonamarg</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Srinagar to Sonamarg Road Trip Guide (2026)</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">A road trip from Srinagar to Sonamarg — the Meadow of Gold. Distance, route, attractions, driving tips, and why self-driving is ideal.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Srinagar to Sonamarg Distance</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li><strong>Distance:</strong> Approximately <strong>80 km</strong></li>
                <li><strong>Travel Time:</strong> Around <strong>2 to 2.5 hours</strong></li>
                <li><strong>Best Route:</strong> Srinagar → Ganderbal → Kangan → Gund → Sonamarg</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Why Choose a Self-Drive Car?</h2>
              <p className="mt-4 text-slate-700">Self-drive provides freedom to stop at viewpoints, enjoy privacy with family, and capture photographs without rushing.</p>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Complete freedom to travel</li>
                <li>Stop at scenic viewpoints</li>
                <li>Enjoy privacy with family and friends</li>
                <li>No dependency on taxi timings</li>
                <li>Perfect for photography enthusiasts</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Places to Visit on the Way</h2>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Ganderbal</h3>
              <p className="mt-2 text-slate-700">A peaceful town surrounded by mountains and the Sindh River, ideal for a short break.</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Kangan</h3>
              <p className="mt-2 text-slate-700">A popular stop for refreshments before heading towards Sonamarg. Enjoy local cafés and mountain views.</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">Gund</h3>
              <p className="mt-2 text-slate-700">A charming village offering panoramic landscapes, streams, and fresh mountain air.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Top Attractions in Sonamarg</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li><strong>Thajiwas Glacier</strong> — snow even in summer; pony rides and short hikes.</li>
                <li><strong>Sindh River</strong> — riverside walks, photography, and trout fishing.</li>
                <li><strong>Zero Point</strong> — beyond Sonamarg on the Zojila route; access depends on weather.</li>
                <li><strong>Baltal Valley</strong> — dramatic scenery and camping; start point for Amarnath Yatra.</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Time to Visit Sonamarg</h2>
              <p className="mt-4 text-slate-700">Spring and Summer are ideal; winter may have heavy snowfall and road closures — always check road conditions.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Driving Tips</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li>Start early in the morning.</li>
                <li>Drive carefully on mountain curves.</li>
                <li>Avoid speeding and keep fuel topped up.</li>
                <li>Carry warm clothing and check weather updates.</li>
              </ul>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <h2 className="text-2xl font-display font-bold">Why Choose Self Steer?</h2>
              <ul className="mt-3 list-disc pl-5 text-white/90">
                <li>Premium self-drive cars</li>
                <li>Well-maintained vehicles</li>
                <li>Transparent pricing</li>
                <li>Airport pickup available</li>
                <li>Flexible rental options</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Book Your Self-Drive Car Today</h2>
              <p className="mt-4 text-slate-700">Experience Sonamarg at your own pace — book your self-drive car with Self Steer today.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-3 text-slate-700">
                <p><strong>Is the Srinagar to Sonamarg road suitable for self-driving?</strong> Yes, during the tourist season; check road status in winter.</p>
                <p><strong>Which car is best for Sonamarg?</strong> Sedans work well; SUVs are recommended for extra comfort.</p>
                <p><strong>Can I visit Sonamarg in one day?</strong> Yes, Sonamarg is a popular day trip from Srinagar.</p>
                <p><strong>Is Sonamarg open throughout the year?</strong> Not always — heavy snowfall may lead to closures.</p>
              </div>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
