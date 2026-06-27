import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle2,
  Fuel,
  Map,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Seo } from "@/components/Seo";

const glanceDetails = [
  ["Starting Point", "Srinagar, Kashmir"],
  ["Destination", "Leh, Ladakh"],
  ["Total Distance", "Approx. 420-450 km"],
  ["Driving Duration", "2-3 days"],
  ["Best Time to Visit", "May to September"],
  ["Highest Pass", "Fotu La Pass, 4,108 m"],
  ["Recommended Vehicle", "SUV or 4x4"],
  ["Ideal Trip Duration", "7-10 days"],
];

const routeStops = [
  "Srinagar",
  "Sonamarg",
  "Zojila Pass",
  "Drass",
  "Kargil",
  "Mulbekh",
  "Namika La",
  "Fotu La",
  "Lamayuru",
  "Leh",
];

const advantages = [
  "Better acclimatization",
  "Spectacular mountain landscapes",
  "Historic towns and villages",
  "Famous high-altitude passes",
  "Beautiful lakes and rivers",
  "Ancient monasteries",
  "Diverse terrain and scenery",
  "Excellent road trip experience",
];

const seasons = [
  {
    title: "May to June",
    description:
      "Early summer brings snow walls around mountain passes, pleasant temperatures, fewer tourists, and stunning photography opportunities.",
  },
  {
    title: "July to August",
    description:
      "Peak travel season with fully operational roads, open attractions, ideal weather, and the best conditions for camping.",
  },
  {
    title: "September",
    description:
      "A favorite month for experienced travelers, with fewer crowds, clear blue skies, autumn colors, and excellent visibility.",
  },
];

const dayPlans = [
  {
    title: "Day 1: Srinagar to Kargil",
    distance: "Approximately 200 km",
    places: [
      ["Sonamarg", "Known as the Meadow of Gold, with lush valleys, glaciers, and mountain views."],
      ["Zojila Pass", "A famous mountain pass at about 3,528 meters and the gateway to Ladakh."],
      ["Drass", "A dramatic mountain town known for its cold climate and historical significance."],
      ["Kargil War Memorial", "An important landmark commemorating the bravery of Indian soldiers."],
    ],
  },
  {
    title: "Day 2: Kargil to Leh",
    distance: "Approximately 220 km",
    places: [
      ["Mulbekh", "Known for its ancient rock-carved Maitreya Buddha statue."],
      ["Namika La Pass", "A scenic pass with panoramic views of Ladakh's barren landscapes."],
      ["Fotu La Pass", "The highest point on the Srinagar-Leh highway at over 4,100 meters."],
      ["Lamayuru Monastery", "One of Ladakh's oldest monasteries, set among moon-like landscapes."],
      ["Magnetic Hill", "A well-known optical illusion where vehicles appear to roll uphill."],
      ["Sangam Point", "The beautiful confluence of the Indus and Zanskar rivers."],
    ],
  },
];

const ladakhHighlights = [
  {
    title: "Exploring Leh",
    points: ["Leh Palace", "Shanti Stupa", "Hall of Fame Museum", "Leh Market"],
  },
  {
    title: "Nubra Valley",
    points: ["Hunder sand dunes", "Double-humped Bactrian camels", "Diskit Monastery", "Panamik village"],
  },
  {
    title: "Pangong Lake",
    points: ["Crystal-clear blue waters", "Mountain backdrop", "Sunrise and sunset views", "Overnight lakeside stay"],
  },
  {
    title: "Hanle Village",
    points: ["Hanle Observatory", "Dark sky reserve", "Remote landscapes", "Incredible stargazing"],
  },
  {
    title: "Tso Moriri Lake",
    points: ["Pristine landscapes", "Fewer tourists", "Rich wildlife", "High-altitude lakeside camps"],
  },
];

const permits = ["Nubra Valley", "Pangong Lake", "Hanle", "Tso Moriri", "Chushul sector"];
const fuelStations = ["Srinagar", "Sonamarg", "Kargil", "Leh"];
const altitudeTips = [
  "Rest on your first day in Leh.",
  "Stay hydrated and eat light meals.",
  "Avoid alcohol initially.",
  "Avoid strenuous activity during acclimatization.",
  "Carry basic medicines.",
  "Consult your doctor before travel if necessary.",
];
const vehicles = ["Toyota Hilux 4x4", "Mahindra Scorpio N 4WD", "Mahindra Thar 4x4", "Jeep Compass", "Toyota Fortuner", "Maruti Suzuki Grand Vitara AWD"];
const sevenDay = ["Srinagar to Kargil", "Kargil to Leh", "Leh local sightseeing", "Leh to Nubra Valley", "Nubra Valley to Pangong Lake", "Pangong Lake to Leh", "Departure"];
const nineDay = ["Srinagar to Kargil", "Kargil to Leh", "Leh sightseeing", "Leh to Nubra Valley", "Nubra Valley to Pangong Lake", "Pangong Lake to Hanle", "Hanle to Tso Moriri", "Tso Moriri to Leh", "Departure"];
const faqs = [
  ["Is the Srinagar-Leh highway open throughout the year?", "No. The highway generally remains open between May and October, depending on weather conditions."],
  ["Which route is better: Srinagar-Leh or Manali-Leh?", "The Srinagar route is generally considered better because it provides gradual acclimatization."],
  ["Can I travel to Ladakh by self-drive car?", "Yes. Self-drive travel is one of the best ways to experience Ladakh."],
  ["Is a 4x4 vehicle necessary?", "No, but SUVs and 4x4 vehicles provide better comfort and safety."],
  ["How many days are ideal for Ladakh?", "A minimum of 7 days is recommended, while 9-10 days offers a more relaxed experience."],
];

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-display font-bold text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <CheckCircle2 size={18} className="mt-1 flex-none text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function LadakhBlog() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Complete Kashmir to Ladakh Road Trip Guide (2026)"
        description="Plan the ultimate Kashmir to Ladakh road trip in 2026. Discover routes, permits, attractions, itinerary, travel tips, and everything you need for an unforgettable self-drive adventure."
        path="/blog/kashmir-to-ladakh-road-trip-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581793746485-04698e79a4e8?q=80&w=1920&auto=format&fit=crop"
              alt="High altitude road toward Ladakh"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/80 to-slate-950/40" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Calendar size={16} />
                  2026 Guide
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Mountain size={16} />
                  Srinagar to Leh
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Complete Kashmir to Ladakh Road Trip Guide
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                Plan the ultimate self-drive adventure from Kashmir's green valleys to Ladakh's high-altitude deserts, monasteries, lakes, and mountain passes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-10">
              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-primary">
                  Kashmir to Ladakh Road Trip at a Glance
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  A Kashmir to Ladakh road trip is widely regarded as one of the most spectacular driving experiences in the world. Traveling by a self-drive vehicle gives you complete freedom to explore at your own pace, stop at hidden viewpoints, and create memories that organized tours often cannot offer.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {glanceDetails.map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                      <p className="mt-1 font-semibold text-slate-950">{value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <ListCard title="Why Choose the Kashmir to Ladakh Route?" items={advantages} />

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">
                  Best Time for a Kashmir to Ladakh Road Trip
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  The Srinagar-Leh highway generally remains open between May and September, with conditions depending on snowfall and road clearance.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {seasons.map((season) => (
                    <div key={season.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-display text-lg font-bold text-primary">{season.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{season.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">
                  Srinagar to Leh Route Overview
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {routeStops.map((stop, index) => (
                    <span key={stop} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                      {index + 1}. {stop}
                    </span>
                  ))}
                </div>
                <p className="mt-5 leading-8 text-slate-700">
                  The standard Srinagar to Leh highway covers approximately 420-450 kilometers. Most travelers complete it over 2 days, while a slower 3-day itinerary gives more time for stops and acclimatization.
                </p>
              </section>

              {dayPlans.map((day) => (
                <section key={day.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="text-2xl font-display font-bold text-slate-950">{day.title}</h2>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <MapPin size={16} />
                    {day.distance}
                  </p>
                  <div className="mt-5 grid gap-4">
                    {day.places.map(([place, description]) => (
                      <div key={place} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <h3 className="font-display font-bold text-slate-950">{place}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">
                  Best Places to Explore Around Leh
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {ladakhHighlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-display text-lg font-bold text-primary">{highlight.title}</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {highlight.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span aria-hidden="true">-</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <ListCard title="Permits Required for Ladakh" items={permits} />
                <ListCard title="Fuel Stations on the Highway" items={fuelStations} />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ListCard title="How to Prevent Altitude Sickness" items={altitudeTips} />
                <ListCard title="Best Vehicles for This Road Trip" items={vehicles} />
              </div>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">
                  Suggested Ladakh Itineraries
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display text-lg font-bold text-primary">7-Day Kashmir to Ladakh Itinerary</h3>
                    <ol className="mt-4 space-y-3 text-sm text-slate-700">
                      {sevenDay.map((day, index) => (
                        <li key={day} className="flex gap-3">
                          <span className="font-bold text-primary">Day {index + 1}</span>
                          <span>{day}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display text-lg font-bold text-primary">9-Day Ladakh Expedition</h3>
                    <ol className="mt-4 space-y-3 text-sm text-slate-700">
                      {nineDay.map((day, index) => (
                        <li key={day} className="flex gap-3">
                          <span className="font-bold text-primary">Day {index + 1}</span>
                          <span>{day}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 divide-y divide-slate-200">
                  {faqs.map(([question, answer]) => (
                    <div key={question} className="py-5 first:pt-0 last:pb-0">
                      <h3 className="font-display text-lg font-bold text-slate-950">{question}</h3>
                      <p className="mt-2 leading-7 text-slate-700">{answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-display font-bold">
                      Book Your Kashmir to Ladakh Self-Drive Adventure
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-white/90">
                      Self Steer Kashmir offers well-maintained, Ladakh-ready SUVs and 4x4 vehicles with flexible pickup options, competitive pricing, and support assistance.
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsContactOpen(true)}
                    className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Book Your Car
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Map size={24} />
                </div>
                <h2 className="text-xl font-display font-bold text-slate-900">
                  Quick Road Trip Notes
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                  <p className="flex gap-3">
                    <ShieldCheck size={18} className="mt-1 flex-none text-primary" />
                    Carry valid government ID and check current permit requirements before travel.
                  </p>
                  <p className="flex gap-3">
                    <Fuel size={18} className="mt-1 flex-none text-primary" />
                    Keep enough fuel reserve beyond Leh for Nubra, Pangong, Hanle, and Tso Moriri.
                  </p>
                  <p className="flex gap-3">
                    <Car size={18} className="mt-1 flex-none text-primary" />
                    SUVs and 4x4 vehicles provide better ground clearance and comfort on mountain roads.
                  </p>
                </div>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-6 w-full bg-primary hover:bg-primary/90"
                >
                  <Phone size={16} className="mr-2" />
                  Contact Us
                </Button>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Book Your Ladakh Self-Drive Car"
      />
    </div>
  );
}
