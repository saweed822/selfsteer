import { motion } from "framer-motion";
import { Calendar, Car, Check, Clock, MapPin, Mountain, Route, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

const highlights = [
  "Gradual altitude gain", "Scenic valleys and rivers", "Historic Kargil town", "Zoji La Pass",
  "Lamayuru Moonland", "Magnetic Hill", "Sangam Point", "Easier acclimatization",
];

const itinerary = [
  {
    day: "Day 1", title: "Srinagar → Sonamarg → Drass → Kargil", distance: "200 km",
    text: "After leaving Srinagar, pass through beautiful Sonamarg before ascending the famous Zoji La Pass. Continue through Drass, often called one of the coldest inhabited places in the world, before reaching Kargil for an overnight stay.",
    stops: ["Sonamarg", "Zoji La Pass", "Drass War Memorial", "Kargil Market"],
  },
  {
    day: "Day 2", title: "Kargil → Lamayuru → Leh", distance: "Approximately 220 km",
    text: "Drive through the dramatic landscapes of Ladakh. Visit Lamayuru Monastery and the fascinating Moonland terrain before continuing to Leh and arriving by evening.",
    stops: ["Mulbekh Buddha Statue", "Lamayuru Monastery", "Magnetic Hill", "Sangam Point", "Gurudwara Pathar Sahib"],
  },
  {
    day: "Day 3", title: "Explore Leh", distance: "Local exploration",
    text: "Spend the day exploring Leh and allow your body to adjust to the higher altitude before travelling on to Pangong Lake or Nubra Valley.",
    stops: ["Leh Palace", "Shanti Stupa", "Local Market", "Hall of Fame Museum"],
  },
];

const faqs = [
  ["Can I drive from Srinagar to Leh in one day?", "It is possible, but most travellers prefer to stay overnight in Kargil to enjoy the journey and reduce fatigue."],
  ["Is an SUV necessary?", "An SUV is recommended for added comfort and confidence on mountain roads, though many cars can complete the journey during good weather."],
  ["Is the route suitable for first-time mountain drivers?", "Yes, provided you drive carefully, maintain moderate speeds, and avoid unnecessary risks."],
  ["Do I need a permit?", "Permit requirements can vary depending on the areas you plan to visit beyond Leh, such as Pangong Lake or Nubra Valley. Check the latest regulations before your trip."],
];

const routeImages = [
  {
    src: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?q=80&w=1200&auto=format&fit=crop",
    alt: "Sonamarg valley and mountain stream in Kashmir",
    label: "Kashmir valleys",
  },
  {
    src: "https://images.unsplash.com/photo-1728723320880-5fb28619c5ff?q=80&w=1200&auto=format&fit=crop",
    alt: "High-altitude mountain road in Ladakh",
    label: "High mountain passes",
  },
  {
    src: "https://images.unsplash.com/photo-1728723320880-5fb28619c5ff?q=80&w=1200&auto=format&fit=crop",
    alt: "Rugged Ladakh mountain road",
    label: "Ladakh landscapes",
  },
];

export default function SrinagarLehUltimateGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo title="Srinagar to Leh Road Trip: The Ultimate Guide" description="A complete guide for the Srinagar to Leh self-drive road trip: route, stops, road conditions, packing list and tips." path="/blog/srinagar-to-leh-self-drive-ultimate-guide" ogType="article" />
      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1728723320880-5fb28619c5ff?q=80&w=1920&auto=format&fit=crop" alt="High-altitude road through the Ladakh mountains" className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/85 to-slate-900/60" />
          </div>
          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Ladakh Road Trip Guide</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Car size={16} /> Self-drive adventure</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Srinagar to Leh Road Trip: The Ultimate Guide</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">A road trip from <strong>Srinagar to Leh</strong> is one of the most breathtaking journeys in the world — lush valleys, high passes, historic towns, and remote Himalayan landscapes.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <nav id="toc" className="rounded-lg border border-slate-200 bg-white p-4 text-sm">
              <p className="font-display font-semibold text-slate-900">Contents</p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li><a className="hover:text-primary" href="#why-drive">Why drive from Srinagar to Leh</a></li>
                <li><a className="hover:text-primary" href="#distance">Distance & Driving Time</a></li>
                <li><a className="hover:text-primary" href="#best-route">Best Route</a></li>
                <li><a className="hover:text-primary" href="#sonamarg">Sonamarg</a></li>
                <li><a className="hover:text-primary" href="#zoji-la">Zoji La Pass</a></li>
                <li><a className="hover:text-primary" href="#lamayuru">Lamayuru</a></li>
                <li><a className="hover:text-primary" href="#itinerary">Suggested Itinerary</a></li>
                <li><a className="hover:text-primary" href="#road-conditions">Road Conditions</a></li>
                <li><a className="hover:text-primary" href="#faq">FAQ</a></li>
              </ul>
            </nav>

            <section id="why-drive" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Why Drive from Srinagar to Leh?</h2>
              <p className="mt-4 leading-8 text-slate-700">Driving the Srinagar–Leh Highway provides gradual altitude gain, incredible mountain scenery, historic towns, beautiful rivers, famous passes, and endless photography opportunities. The route gives freedom to stop wherever the landscape captures your attention.</p>
            </section>

            <section id="distance">
              <h2 className="text-3xl font-display font-bold text-slate-950">Srinagar to Leh Distance</h2>
              <p className="mt-3 leading-8 text-slate-700"><strong>Distance:</strong> Approximately <strong>420 km</strong><br/><strong>Driving Time:</strong> 9–12 hours (without long stops)<br/><strong>Recommended Duration:</strong> 2 days</p>
            </section>

            <section id="best-route" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Route</h2>
              <p className="mt-4 leading-8 text-slate-700">Classic route: <strong>Srinagar → Sonamarg → Zoji La Pass → Drass → Kargil → Mulbekh → Lamayuru → Nimmu → Leh</strong>. Each section offers different landscapes, from green valleys to high-altitude desert terrain.</p>
            </section>

            <section id="sonamarg" className="group relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative h-56 sm:h-72">
                <img src="https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?q=80&w=1600&auto=format&fit=crop" alt="Sonamarg valley" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Sonamarg</h3>
                <p className="mt-2 text-slate-700">Known as the "Meadow of Gold," Sonamarg offers spectacular mountain scenery and is an ideal stop before the climb to Zoji La.</p>
              </div>
            </section>

            <section id="zoji-la" className="group relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative h-56 sm:h-72">
                <img src="https://images.unsplash.com/photo-1728723320880-5fb28619c5ff?q=80&w=1600&auto=format&fit=crop" alt="High-altitude road toward Zoji La and Ladakh" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Zoji La Pass</h3>
                <p className="mt-2 text-slate-700">One of India's most iconic mountain passes — expect narrow roads, changing weather, and spectacular views. Drive cautiously and follow advisories.</p>
              </div>
            </section>

            <section id="lamayuru" className="group relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative h-56 sm:h-72">
                <img src="https://images.unsplash.com/photo-1728723320880-5fb28619c5ff?q=80&w=1600&auto=format&fit=crop" alt="Rugged Ladakh mountain road near Lamayuru" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold">Lamayuru</h3>
                <p className="mt-2 text-slate-700">Often called the Moonland of Ladakh, Lamayuru features dramatic landscapes and an ancient monastery worth visiting.</p>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-primary p-5 text-white"><MapPin size={22} /><p className="mt-4 text-sm font-semibold text-white/75">Distance</p><p className="mt-1 font-display text-lg font-bold">Approximately 420 km</p></div>
              <div className="rounded-lg bg-primary p-5 text-white"><Clock size={22} /><p className="mt-4 text-sm font-semibold text-white/75">Driving time</p><p className="mt-1 font-display text-lg font-bold">9–12 hours</p></div>
              <div className="rounded-lg bg-primary p-5 text-white"><Mountain size={22} /><p className="mt-4 text-sm font-semibold text-white/75">Recommended duration</p><p className="mt-1 font-display text-lg font-bold">2 days</p></div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-slate-950">Suggested 2-Day Itinerary</h2>
              <p className="mt-3 leading-8 text-slate-700">Although possible in one day, splitting into two provides comfort and time to enjoy stops.</p>
              <div className="mt-6 space-y-5">
                <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="inline-flex rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">Day 1</span>
                  <h3 className="mt-3 text-2xl font-display font-bold text-slate-900">Srinagar → Sonamarg → Zoji La → Drass → Kargil</h3>
                  <p className="mt-1 font-semibold text-primary">Distance: Approximately 200 km</p>
                  <p className="mt-4 leading-8 text-slate-700">Stay overnight in Kargil to acclimatize and rest before the second day's drive.</p>
                </motion.section>
                <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="inline-flex rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">Day 2</span>
                  <h3 className="mt-3 text-2xl font-display font-bold text-slate-900">Kargil → Mulbekh → Lamayuru → Nimmu → Leh</h3>
                  <p className="mt-1 font-semibold text-primary">Distance: Approximately 220 km</p>
                  <p className="mt-4 leading-8 text-slate-700">Enjoy the changing landscapes and stop at viewpoints and historic sites along the way.</p>
                </motion.section>
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Road Conditions & Best Time to Travel</h2>
              <p className="mt-4 leading-8 text-slate-700">The highway is generally in good condition during the travel season, typically May to October, though mountain weather can affect the route. Expect smooth highways in many sections, steep climbs near Zoji La, occasional rough patches, hairpin bends, and narrow mountain roads. Drive cautiously and avoid unnecessary overtaking.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-lg bg-slate-50 p-5"><h3 className="font-display font-bold text-slate-900">May–August</h3><p className="mt-2 leading-7 text-slate-700">Roads are usually open, temperatures are pleasant, and landscapes are vibrant. Occasional rain may occur in Kashmir.</p></div><div className="rounded-lg bg-slate-50 p-5"><h3 className="font-display font-bold text-slate-900">September–October</h3><p className="mt-2 leading-7 text-slate-700">Enjoy cooler weather, fewer tourists, clear mountain views, and autumn colour. Snow closures grow more likely from late October.</p></div></div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Frequently Asked Questions</h2>
              <div className="mt-5 divide-y divide-slate-200">
                <div className="py-5"><h3 className="font-display text-lg font-bold text-slate-900">Is the Srinagar to Leh road safe?</h3><p className="mt-2 leading-7 text-slate-700">Yes, during the open season. Drive responsibly, check weather updates, and follow local advisories.</p></div>
                <div className="py-5"><h3 className="font-display text-lg font-bold text-slate-900">How many days should I plan?</h3><p className="mt-2 leading-7 text-slate-700">A minimum of two days for the drive itself; allow extra days to explore Leh and nearby attractions.</p></div>
                <div className="py-5"><h3 className="font-display text-lg font-bold text-slate-900">Do I need a 4x4 vehicle?</h3><p className="mt-2 leading-7 text-slate-700">Not necessarily. A well-maintained SUV or crossover is ideal; sedans can manage during good weather with caution.</p></div>
                <div className="py-5"><h3 className="font-display text-lg font-bold text-slate-900">Is there enough fuel available?</h3><p className="mt-2 leading-7 text-slate-700">Yes, but stations are limited. Refill whenever possible before long stretches.</p></div>
              </div>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15"><ShieldCheck size={24} /></div><h2 className="mt-5 text-2xl font-display font-bold">Why Choose Self Steer Kashmir?</h2><p className="mt-3 leading-8 text-white/90">We specialize in self-drive adventures across Kashmir and Ladakh, with well-maintained hatchbacks, sedans, and SUVs, transparent pricing, convenient pickup and drop-off options, and responsive support throughout your trip.</p><p className="mt-3 leading-8 text-white/90">From weekend getaways to multi-day Himalayan road trips, we aim to make every journey safe, comfortable, and memorable.</p></section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-display font-bold text-primary">Final Thoughts</h2><p className="mt-4 leading-8 text-slate-700">The Srinagar–Leh highway is more than a road—it&apos;s an experience filled with breathtaking scenery, cultural landmarks, and unforgettable moments. Plan ahead, choose the right vehicle, and take your time to appreciate one of the world&apos;s most scenic drives.</p><p className="mt-4 font-semibold leading-8 text-slate-900">Ready to begin your Ladakh adventure? Book your self-drive car with Self Steer Kashmir and experience the Himalayas on your own terms.</p></section>
          </div>
        </section>
      </article>
    </div>
  );
}
