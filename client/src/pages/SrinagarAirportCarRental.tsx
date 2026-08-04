import { motion } from "framer-motion";
import { Calendar, Car, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function SrinagarAirportCarRental() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Srinagar Airport Car Rental: Start Your Kashmir Journey"
        description="Rent a premium self-drive car at Srinagar Airport. Enjoy airport pickup, transparent pricing, and explore Kashmir & Ladakh at your own pace."
        path="/blog/srinagar-airport-car-rental"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1920&auto=format&fit=crop"
              alt="Car rental pickup outside Srinagar Airport terminal"
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
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Car Rental</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Car size={16} /> Airport Pickup</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Srinagar Airport Car Rental: Start Your Kashmir Journey with Ease</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">Arrive at Srinagar International Airport (SXR) and begin your trip instantly with a premium self-drive car. Skip taxi queues and explore Kashmir on your schedule.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Why Rent a Self-Drive Car?</h2>
              <p className="mt-4 leading-8 text-slate-700">A self-drive car offers complete privacy, flexible travel plans, comfortable family trips, and the freedom to stop whenever you want. Ideal for visits to Gulmarg, Pahalgam, Sonamarg, or Leh.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Documents Required</h2>
              <ul className="mt-4 list-disc pl-5 text-slate-700">
                <li>Valid Driving Licence</li>
                <li>Government-issued Photo ID</li>
                <li>Booking confirmation</li>
                <li>Security deposit (if applicable)</li>
              </ul>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15"><ShieldCheck size={24} /></div>
              <h2 className="mt-5 text-2xl font-display font-bold">Why Choose Self Steer?</h2>
              <p className="mt-3 leading-8 text-white/90">We offer airport pickup and drop-off, premium vehicles, transparent pricing, and responsive support — so you can start exploring Kashmir the moment you land.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Book Before You Land</h2>
              <p className="mt-4 leading-8 text-slate-700">Reserve your car in advance to ensure your preferred vehicle is ready on arrival. Book online and collect the car at Srinagar Airport for a hassle-free start.</p>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
