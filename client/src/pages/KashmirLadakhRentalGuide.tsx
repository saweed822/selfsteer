import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle2,
  KeyRound,
  MapPin,
  Mountain,
  Phone,
  Route,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Seo } from "@/components/Seo";

const benefits = [
  "Complete travel freedom",
  "Flexible schedules",
  "Privacy and comfort",
  "Better photography opportunities",
  "Access to offbeat destinations",
  "Cost-effective travel for groups and families",
  "An authentic travel experience",
];

const kashmirPlaces: [string, string[]][] = [
  ["Srinagar", ["Dal Lake", "Nigeen Lake", "Mughal Gardens", "Shankaracharya Temple", "Hazratbal Shrine", "Pari Mahal", "Boulevard Road", "Floating Market"]],
  ["Gulmarg", ["Gulmarg Gondola", "Apharwat Peak", "Skiing", "Snowboarding", "Strawberry Valley", "Golf Course", "Winter sports"]],
  ["Pahalgam", ["Betaab Valley", "Aru Valley", "Chandanwari", "Baisaran Valley", "Lidder River", "Saffron Fields"]],
  ["Sonamarg", ["Thajiwas Glacier", "Zero Point", "Baltal Valley", "Sindh River", "Zojila Pass"]],
  ["Doodhpathri", ["Alpine meadows", "Pine forests", "River streams", "Scenic drives", "Horse riding"]],
  ["Yusmarg", ["Dense forests", "Meadows", "Doodh Ganga River", "Trekking routes", "Scenic viewpoints"]],
  ["Gurez Valley", ["Razdan Pass", "Dawar Village", "Kishanganga River", "Habba Khatoon Peak", "Traditional villages"]],
];

const ladakhPlaces: [string, string[]][] = [
  ["Leh", ["Leh Palace", "Shanti Stupa", "Hall of Fame", "Leh Market"]],
  ["Nubra Valley", ["Hunder Sand Dunes", "Diskit Monastery", "Double-humped camels"]],
  ["Pangong Lake", ["Crystal blue waters", "Mountain landscapes", "Camping experiences"]],
  ["Hanle", ["Hanle Observatory", "Dark Sky Reserve", "Astrophotography"]],
  ["Tso Moriri", ["High-altitude lake", "Wildlife", "Remote landscapes"]],
];

const vehicles: [string, string[]][] = [
  ["Toyota Hilux 4x4", ["Ladakh expeditions", "Off-road adventures", "High-altitude travel"]],
  ["Toyota Fortuner", ["Family trips", "Luxury road travel", "Mountain highways"]],
  ["Mahindra Scorpio N", ["Kashmir sightseeing", "Ladakh road trips", "Group travel"]],
  ["Mahindra Thar Roxx", ["Adventure travel", "Off-road driving", "Mountain exploration"]],
  ["Jeep Compass", ["Comfortable long-distance travel", "Himalayan road trips"]],
  ["Grand Vitara", ["Families", "Couples", "Long scenic drives"]],
  ["Kia Seltos", ["Comfortable road trips", "Kashmir tourism"]],
  ["Hyundai i20", ["Budget travelers", "Couples", "Srinagar city exploration"]],
];

const seasons: [string, string[]][] = [
  ["Spring (March-April)", ["Tulip season", "Pleasant weather"]],
  ["Summer (May-August)", ["Peak tourism season", "Perfect road conditions"]],
  ["Autumn (September-November)", ["Golden Chinar trees", "Beautiful landscapes"]],
  ["Winter (December-February)", ["Snowfall", "Skiing", "Winter tourism"]],
];

const kashmirItinerary = [
  "Arrival in Srinagar",
  "Gulmarg",
  "Pahalgam",
  "Pahalgam sightseeing",
  "Sonamarg",
  "Doodhpathri",
  "Yusmarg",
];

const ladakhItinerary = [
  "Srinagar to Kargil",
  "Kargil to Leh",
  "Leh sightseeing",
  "Nubra Valley",
  "Pangong Lake",
  "Hanle",
  "Tso Moriri",
  "Return to Leh",
];

const whyChoose = [
  "Premium self-drive vehicles",
  "Ladakh-ready SUVs and 4x4 vehicles",
  "Well-maintained fleet",
  "Flexible pickup and drop-off",
  "Competitive pricing",
  "Unlimited travel freedom",
  "24/7 support",
  "Trusted by travelers from across India",
];

const faqs: [string, string][] = [
  ["Can I rent a self-drive car in Kashmir?", "Yes. Self-drive car rentals are available in Srinagar and throughout Kashmir."],
  ["Can I take a self-drive car from Kashmir to Ladakh?", "Yes. Premium SUVs and 4x4 vehicles are ideal for Ladakh road trips."],
  ["Which vehicle is best for Ladakh?", "Toyota Hilux, Toyota Fortuner, Mahindra Scorpio N, and Mahindra Thar Roxx are among the best options."],
  ["Is a permit required for Ladakh?", "Certain regions such as Nubra Valley, Pangong Lake, Hanle, and Tso Moriri require permits."],
  ["How many days are ideal for Kashmir and Ladakh?", "A combined Kashmir-Ladakh trip ideally requires 10 to 14 days."],
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-700">
          <CheckCircle2 size={18} className="mt-1 flex-none text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PointCards({ items }: { items: [string, string[]][] }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {items.map(([title, points]) => (
        <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-display text-lg font-bold text-primary">{title}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true">-</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function KashmirLadakhRentalGuide() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Kashmir Self Drive Car Rental & Ladakh Self Drive Guide (2026)"
        description="Rent self-drive cars in Kashmir and explore Srinagar, Gulmarg, Pahalgam, Sonamarg, and Ladakh. Discover the ultimate self-drive guide with itineraries, travel tips, routes, and premium SUV rentals."
        path="/blog/kashmir-self-drive-car-rental-ladakh-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1920&auto=format&fit=crop"
              alt="Self-drive SUV for Kashmir and Ladakh road trips"
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
                  <KeyRound size={16} />
                  Self-Drive Rentals
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Kashmir Self Drive Car Rental & Ladakh Self Drive Guide
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                The ultimate travel and car rental handbook for exploring Srinagar, Gulmarg, Pahalgam, Sonamarg, and Ladakh at your own pace.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-10">
              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-primary">
                  Explore Kashmir and Ladakh With Self-Drive Freedom
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Planning a trip to Kashmir or Ladakh in 2026? Nothing compares to the freedom and adventure of exploring the Himalayas in a self-drive car. Whether you are planning a honeymoon, family vacation, photography expedition, or an epic road trip to Ladakh, renting a self-drive car in Kashmir gives you flexibility that traditional tours cannot match.
                </p>
                <p className="mt-4 leading-8 text-slate-700">
                  At Self Steer Kashmir, we provide premium self-drive cars and SUVs designed specifically for Himalayan road trips, allowing travelers to explore Kashmir and Ladakh at their own pace.
                </p>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Why Choose a Self Drive Car in Kashmir?</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Unlike traditional taxis, a self-drive rental gives you full control over your journey.
                </p>
                <Checklist items={benefits} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Best Places to Visit in Kashmir by Self Drive Car</h2>
                <PointCards items={kashmirPlaces} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Kashmir to Ladakh Self Drive Road Trip</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  A self-drive road trip from Kashmir to Ladakh is considered among the greatest road journeys in the world.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display font-bold text-primary">Route</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">Srinagar to Sonamarg to Zojila to Drass to Kargil to Lamayuru to Leh</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display font-bold text-primary">Distance</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">Approximately 420 km</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display font-bold text-primary">Travel Duration</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">2-3 days</p>
                  </div>
                </div>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Places to Visit in Ladakh</h2>
                <PointCards items={ladakhPlaces} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Best Self Drive Cars for Kashmir and Ladakh</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Choosing the right vehicle is essential for a Himalayan road trip.
                </p>
                <PointCards items={vehicles} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Best Time to Visit Kashmir and Ladakh</h2>
                <PointCards items={seasons} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Suggested Itineraries</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display text-lg font-bold text-primary">Suggested Kashmir Itinerary</h3>
                    <ol className="mt-4 space-y-3 text-sm text-slate-700">
                      {kashmirItinerary.map((day, index) => (
                        <li key={day} className="flex gap-3">
                          <span className="font-bold text-primary">Day {index + 1}</span>
                          <span>{day}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-5">
                    <h3 className="font-display text-lg font-bold text-primary">Suggested Ladakh Itinerary</h3>
                    <ol className="mt-4 space-y-3 text-sm text-slate-700">
                      {ladakhItinerary.map((day, index) => (
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
                <h2 className="text-2xl font-display font-bold text-slate-950">Why Choose Self Steer Kashmir?</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Self Steer Kashmir is one of Kashmir's leading self-drive car rental companies offering premium vehicles for Kashmir and Ladakh adventures.
                </p>
                <Checklist items={whyChoose} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Frequently Asked Questions</h2>
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
                    <h2 className="text-2xl font-display font-bold">Book Your Kashmir & Ladakh Self Drive Adventure</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-white/90">
                      Whether you are planning a Kashmir honeymoon, family vacation, road trip, or a once-in-a-lifetime Ladakh expedition, our premium self-drive fleet is ready for your adventure.
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
                  <Car size={24} />
                </div>
                <h2 className="text-xl font-display font-bold text-slate-900">Self-Drive Snapshot</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                  <p className="flex gap-3">
                    <MapPin size={18} className="mt-1 flex-none text-primary" />
                    Best for Srinagar, Gulmarg, Pahalgam, Sonamarg, and offbeat Kashmir routes.
                  </p>
                  <p className="flex gap-3">
                    <Mountain size={18} className="mt-1 flex-none text-primary" />
                    SUVs and 4x4 vehicles are recommended for Ladakh expeditions.
                  </p>
                  <p className="flex gap-3">
                    <Route size={18} className="mt-1 flex-none text-primary" />
                    Plan 10 to 14 days for a combined Kashmir and Ladakh road trip.
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
        title="Book Your Self-Drive Car"
      />
    </div>
  );
}
