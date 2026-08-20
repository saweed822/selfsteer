import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function GurezValleyRoadTripGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Gurez Valley Road Trip Guide | Route, Distance & Best Time"
        description="Planning a Gurez Valley road trip from Srinagar? Discover the route via Bandipora and Razdan Pass, best time to visit and essential travel tips."
        path="/blog/gurez-valley-road-trip-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img src="/Images/gurez.webp" alt="Gurez Valley mountain scenery" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/85 to-slate-900/60" />
          </div>
          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Road Trip Guide</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><MapPin size={16} /> Gurez Valley, Kashmir</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Gurez Valley Road Trip Guide: Route, Distance, Best Time &amp; Travel Tips</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">Plan an unforgettable self-drive journey to one of Kashmir&apos;s most spectacular offbeat valleys.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="leading-7 text-slate-700">Gurez Valley is one of Kashmir&apos;s most spectacular offbeat destinations. Located in <strong>Bandipora district</strong>, the valley sits at around 8,000 feet and is surrounded by high mountains, traditional villages, and the Kishanganga River.</p>
              <p className="mt-4 leading-7 text-slate-700">For travellers who want to experience a quieter and more remote side of Kashmir, Gurez is an unforgettable road-trip destination.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Srinagar to Gurez Valley Route</h2>
              <p className="mt-4 text-slate-700">The popular route is:</p>
              <p className="mt-3 font-semibold text-slate-800">Srinagar → Bandipora → Razdan Pass → Dawar</p>
              <p className="mt-4 leading-7 text-slate-700">The journey is roughly <strong>120–140 km</strong>, depending on the exact starting and ending points, and can take around <strong>5–7 hours</strong> depending on weather and road conditions. Razdan Pass is the most important high-altitude section of the journey.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">What to See in Gurez</h2>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Dawar</h3><p className="mt-2 leading-7 text-slate-700">Dawar is the main settlement and a convenient base for exploring the valley.</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Habba Khatoon Peak</h3><p className="mt-2 leading-7 text-slate-700">The distinctive mountain peak is one of Gurez&apos;s most recognisable landmarks.</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Kishanganga River</h3><p className="mt-2 leading-7 text-slate-700">The river flows through the valley and adds to its dramatic mountain scenery.</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Traditional Villages</h3><p className="mt-2 leading-7 text-slate-700">Gurez is known for its traditional wooden homes and Dard-Shina cultural heritage.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Time to Visit Gurez</h2>
              <p className="mt-4 leading-7 text-slate-700">Gurez has a short travel season because heavy winter snowfall can close the road through Razdan Pass. Official tourism information currently lists the accessible season as roughly <strong>May to September</strong>, subject to conditions.</p>
              <p className="mt-4 leading-7 text-slate-700">Always check current road status before starting the journey.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Is Gurez Suitable for Self-Drive?</h2>
              <p className="mt-4 leading-7 text-slate-700">Gurez is a challenging mountain destination. The road includes narrow and winding sections, so drivers should be comfortable with mountain driving. A well-maintained SUV with good ground clearance is preferable for this journey.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Important Tips</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700"><li>Travel during daylight.</li><li>Check road conditions before leaving.</li><li>Carry sufficient cash.</li><li>Keep warm clothing even in summer.</li><li>Do not depend entirely on mobile connectivity.</li><li>Carry your original ID.</li><li>Follow instructions at security/check posts.</li><li>Pre-book accommodation during peak season.</li></ul>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <h2 className="text-2xl font-display font-bold">Plan Your Gurez Road Trip</h2>
              <p className="mt-4 leading-7 text-white/90">If you&apos;re looking for an authentic Himalayan road trip away from Kashmir&apos;s busiest destinations, Gurez deserves a place on your itinerary. Choose a suitable vehicle from Self Steer and make the journey part of the adventure.</p>
              <p className="mt-5 font-semibold tracking-wide">Drive Beyond Limits.</p>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
