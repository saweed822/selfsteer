import { motion } from "framer-motion";
import { Calendar, Car, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function SelfDriveVsTaxi() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Self-Drive vs Taxi in Kashmir: Which Should You Choose?"
        description="Compare self-drive rentals and taxis in Kashmir — privacy, cost, flexibility, and which option suits different travelers."
        path="/blog/self-drive-vs-taxi"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="/Images/selfdrive.jpg"
              alt="Car on a mountain road"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/85 to-slate-900/60" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Travel Advice</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Car size={16} /> Self-Drive vs Taxi</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Self-Drive vs Taxi in Kashmir: Which Should You Choose?</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">Kashmir is one of India's most scenic destinations — here's how to choose between a self-drive car and a taxi for your trip.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Freedom to Explore</h2>
              <p className="mt-4 text-slate-700">With a <strong>self-drive car</strong>, you're in control — stop at viewpoints, cafés, or hidden valleys whenever you like. Taxis tend to follow fixed schedules and extended stops may be inconvenient.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Privacy & Comfort</h2>
              <p className="mt-4 text-slate-700">Self-drive offers complete privacy for families or couples. Taxis include a driver, which may not suit everyone.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Cost Comparison</h2>
              <p className="mt-4 text-slate-700">For short city trips taxis can be practical. For multi-destination trips (Gulmarg, Pahalgam, Sonamarg) self-drive rentals can offer better value and flexibility.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Flexibility</h2>
              <p className="mt-4 text-slate-700">Self-drive allows detours, early starts, and longer stops. If you prefer not to drive or are unfamiliar with mountain roads, a taxi may be better.</p>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <h2 className="text-2xl font-display font-bold">Our Recommendation</h2>
              <p className="mt-3 leading-7 text-white/90">For travelers who want to explore beyond typical tourist stops, self-drive offers unmatched flexibility, privacy, and convenience. Taxis are suitable for short trips or for those who prefer not to drive.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Why Choose Self Steer?</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li>Well-maintained vehicles</li>
                <li>Transparent pricing</li>
                <li>Easy booking process</li>
                <li>Airport pickup available</li>
                <li>Friendly customer support</li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Book Your Self-Drive Car Today</h2>
              <p className="mt-4 text-slate-700">Skip fixed schedules and discover Kashmir your way. Self Steer — Drive Beyond Limits.</p>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
