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
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    alt: "Scenic valley landscape along a Himalayan road trip",
    label: "Kashmir valleys",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    alt: "Snow-covered Himalayan mountain pass",
    label: "High mountain passes",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    alt: "Mountain lake and rugged landscape in Ladakh",
    label: "Ladakh landscapes",
  },
];

export default function SrinagarLehUltimateGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo title="Srinagar to Leh Self-Drive Road Trip: Ultimate Guide" description="Plan a Srinagar to Leh self-drive road trip with route highlights, a 3-day itinerary, road conditions, best travel time, FAQs, and vehicle advice." path="/blog/srinagar-to-leh-self-drive-ultimate-guide" ogType="article" />
      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1920&auto=format&fit=crop" alt="Himalayan road on the Srinagar to Leh route" className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/85 to-slate-900/60" />
          </div>
          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Ladakh Road Trip Guide</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Car size={16} /> Self-drive adventure</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Srinagar to Leh Self-Drive Road Trip: The Ultimate Guide</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">A spectacular Himalayan journey through lush valleys, high mountain passes, historic towns, and rugged Ladakh landscapes.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">A Journey to Remember</h2>
              <p className="mt-4 leading-8 text-slate-700">A road trip from Srinagar to Leh is one of the most spectacular journeys in India. Unlike guided tours or taxis, a self-drive car lets you travel at your own pace: stop at breathtaking viewpoints, spend more time in the places you love, and discover hidden gems many tourists miss.</p>
              <p className="mt-4 leading-8 text-slate-700">Whether you&apos;re an adventure enthusiast, a photographer, or a family planning a memorable holiday, this guide will help you prepare for the journey from Kashmir to Ladakh.</p>
            </section>

            <section className="grid gap-5 md:grid-cols-3">
              {routeImages.map((image) => (
                <figure key={image.label} className="group relative h-64 overflow-hidden rounded-lg bg-slate-200 shadow-sm">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-4 pt-12 font-display text-lg font-bold text-white">{image.label}</figcaption>
                </figure>
              ))}
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3"><Route className="text-primary" /><h2 className="text-2xl font-display font-bold text-primary">Why Choose the Srinagar–Leh Route?</h2></div>
              <p className="mt-4 leading-8 text-slate-700">The two main routes to Ladakh are Srinagar → Leh and Manali → Leh. Many experienced travellers prefer the Srinagar–Leh Highway because its more gradual increase in altitude gives the body more time to acclimatize, reducing the risk of altitude sickness. The route is also rich in history, culture, and natural beauty.</p>
              <h3 className="mt-6 text-lg font-display font-bold text-slate-900">Highlights of the Srinagar Route</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">{highlights.map((highlight) => <div key={highlight} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 font-medium text-slate-800"><Check size={18} className="text-primary" />{highlight}</div>)}</div>
            </section>

            <section className="grid gap-4 sm:grid-cols-3">
              {[['Distance', 'Approximately 420 km', MapPin], ['Driving time', '10–12 hours without long stops', Clock], ['Recommended duration', '2–3 days', Mountain]].map(([label, value, Icon]) => {
                const StatIcon = Icon as typeof MapPin;
                return <div key={label as string} className="rounded-lg bg-primary p-5 text-white"><StatIcon size={22} /><p className="mt-4 text-sm font-semibold text-white/75">{label as string}</p><p className="mt-1 font-display text-lg font-bold">{value as string}</p></div>;
              })}
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-slate-950">Suggested 3-Day Itinerary</h2>
              <p className="mt-3 leading-8 text-slate-700">Although the drive can technically be completed in a day, splitting it into two days is more comfortable and leaves time to enjoy the scenery.</p>
              <div className="mt-6 space-y-5">{itinerary.map((item, index) => <motion.section key={item.day} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><span className="inline-flex rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">{item.day}</span><h3 className="mt-3 text-2xl font-display font-bold text-slate-900">{item.title}</h3><p className="mt-1 font-semibold text-primary">Distance: {item.distance}</p><p className="mt-4 leading-8 text-slate-700">{item.text}</p><p className="mt-4 font-semibold text-slate-900">Stops to explore:</p><div className="mt-2 flex flex-wrap gap-2">{item.stops.map((stop) => <span key={stop} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">{stop}</span>)}</div></motion.section>)}</div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Road Conditions & Best Time to Travel</h2>
              <p className="mt-4 leading-8 text-slate-700">The highway is generally in good condition during the travel season, typically May to October, though mountain weather can affect the route. Expect smooth highways in many sections, steep climbs near Zoji La, occasional rough patches, hairpin bends, and narrow mountain roads. Drive cautiously and avoid unnecessary overtaking.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-lg bg-slate-50 p-5"><h3 className="font-display font-bold text-slate-900">May–August</h3><p className="mt-2 leading-7 text-slate-700">Roads are usually open, temperatures are pleasant, and landscapes are vibrant. Occasional rain may occur in Kashmir.</p></div><div className="rounded-lg bg-slate-50 p-5"><h3 className="font-display font-bold text-slate-900">September–October</h3><p className="mt-2 leading-7 text-slate-700">Enjoy cooler weather, fewer tourists, clear mountain views, and autumn colour. Snow closures grow more likely from late October.</p></div></div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-display font-bold text-primary">Frequently Asked Questions</h2><div className="mt-5 divide-y divide-slate-200">{faqs.map(([question, answer]) => <div key={question} className="py-5 first:pt-0 last:pb-0"><h3 className="font-display text-lg font-bold text-slate-900">{question}</h3><p className="mt-2 leading-7 text-slate-700">{answer}</p></div>)}</div></section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15"><ShieldCheck size={24} /></div><h2 className="mt-5 text-2xl font-display font-bold">Why Choose Self Steer Kashmir?</h2><p className="mt-3 leading-8 text-white/90">We specialize in self-drive adventures across Kashmir and Ladakh, with well-maintained hatchbacks, sedans, and SUVs, transparent pricing, convenient pickup and drop-off options, and responsive support throughout your trip.</p><p className="mt-3 leading-8 text-white/90">From weekend getaways to multi-day Himalayan road trips, we aim to make every journey safe, comfortable, and memorable.</p></section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-display font-bold text-primary">Final Thoughts</h2><p className="mt-4 leading-8 text-slate-700">The Srinagar–Leh highway is more than a road—it&apos;s an experience filled with breathtaking scenery, cultural landmarks, and unforgettable moments. Plan ahead, choose the right vehicle, and take your time to appreciate one of the world&apos;s most scenic drives.</p><p className="mt-4 font-semibold leading-8 text-slate-900">Ready to begin your Ladakh adventure? Book your self-drive car with Self Steer Kashmir and experience the Himalayas on your own terms.</p></section>
          </div>
        </section>
      </article>
    </div>
  );
}
