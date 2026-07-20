import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  MapPin,
  Mountain,
  Phone,
  Route,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Seo } from "@/components/Seo";

const overview = [
  ["Srinagar", "2 Nights"],
  ["Gulmarg", "1-2 Nights"],
  ["Pahalgam", "2 Nights"],
  ["Sonamarg", "1 Night"],
  ["Doodhpathri", "Day Trip"],
  ["Yusmarg", "Day Trip"],
  ["Gurez Valley", "2 Nights"],
  ["Aharbal", "Day Trip"],
];

const seasons = [
  {
    name: "Spring",
    months: "March-April",
    points: ["Tulip blooms", "Pleasant weather", "Garden season", "Photography opportunities"],
  },
  {
    name: "Summer",
    months: "May-August",
    points: ["Perfect weather", "Green valleys", "Adventure activities", "Best for family vacations"],
  },
  {
    name: "Autumn",
    months: "September-November",
    points: ["Golden Chinar trees", "Fewer tourists", "Ideal for photographers"],
  },
  {
    name: "Winter",
    months: "December-February",
    points: ["Snowfall", "Skiing", "Frozen landscapes", "Winter sports in Gulmarg"],
  },
];

const days = [
  {
    title: "Day 1: Arrival in Srinagar",
    distance: "Airport to city center: Approximately 12 km",
    intro:
      "Srinagar serves as the gateway to Kashmir and is famous for lakes, gardens, heritage sites, local markets, and classic Kashmiri hospitality.",
    places: [
      ["Dal Lake", "Experience Shikara rides, floating gardens, and traditional houseboats."],
      ["Mughal Gardens", "Visit Nishat Garden, Shalimar Garden, Chashme Shahi, and Pari Mahal."],
      ["Shankaracharya Temple", "Enjoy panoramic views of Srinagar city and Dal Lake."],
      ["Hazratbal Shrine", "One of Kashmir's most important religious sites."],
      ["Evening Activities", "Enjoy a sunset Shikara ride, local cuisine, floating market views, and Boulevard Road."],
    ],
  },
  {
    title: "Day 2: Gulmarg Excursion",
    distance: "Distance from Srinagar: Approximately 50 km",
    intro:
      "Gulmarg is one of India's most famous hill stations and winter sports destinations, with meadows, snow views, and adventure activities.",
    places: [
      ["Gulmarg Gondola", "Ride one of the world's highest cable cars."],
      ["Apharwat Peak", "Enjoy snow activities and wide Himalayan views."],
      ["Golf Course", "See one of the world's highest golf courses."],
      ["Strawberry Valley", "A quieter nature spot ideal for relaxed exploring."],
      ["Winter Activities", "Skiing, snowboarding, snow biking, and snowmobiling are popular in season."],
    ],
  },
  {
    title: "Day 3: Srinagar to Pahalgam",
    distance: "Distance: Approximately 90 km",
    intro:
      "Pahalgam is famous for rivers, pine forests, mountain landscapes, and peaceful valley stays.",
    places: [
      ["Saffron Fields of Pampore", "Witness Kashmir's famous saffron cultivation."],
      ["Avantipora Ruins", "Explore ancient temple ruins dating back centuries."],
      ["Lidder River", "One of Kashmir's most beautiful rivers."],
      ["Pahalgam Market", "Explore local handicrafts and Kashmiri cuisine."],
    ],
  },
  {
    title: "Day 4: Explore Pahalgam",
    distance: "Local sightseeing around Pahalgam",
    intro:
      "Spend a full day exploring Pahalgam's valleys, riverside viewpoints, and postcard-perfect landscapes.",
    places: [
      ["Aru Valley", "Known for meadows, mountains, trekking routes, and scenic landscapes."],
      ["Betaab Valley", "Famous for Bollywood filming locations, pine forests, and river views."],
      ["Chandanwari", "Gateway to the Amarnath pilgrimage route."],
      ["Baisaran Valley", "Often called the Mini Switzerland of Kashmir."],
    ],
  },
  {
    title: "Day 5: Sonamarg Excursion",
    distance: "Distance from Srinagar: Approximately 80 km",
    intro:
      'Sonamarg, meaning "Meadow of Gold," offers spectacular mountain scenery, glaciers, and high-altitude landscapes.',
    places: [
      ["Thajiwas Glacier", "Accessible by pony or local transport."],
      ["Sindh River", "Perfect for photography and river activities."],
      ["Baltal Valley", "Base camp for the Amarnath Yatra."],
      ["Zero Point", "A seasonal high-altitude destination with dramatic views."],
    ],
  },
  {
    title: "Day 6: Doodhpathri",
    distance: "Distance from Srinagar: Approximately 45 km",
    intro:
      "Doodhpathri is one of Kashmir's most beautiful offbeat destinations, known for open meadows, streams, forests, and picnic spots.",
    places: [
      ["Vast Meadows", "Wide open landscapes ideal for families and photography."],
      ["Pine Forests", "Peaceful natural surroundings away from crowded routes."],
      ["Mountain Streams", "Relax by the water and enjoy riverside picnics."],
      ["Horse Riding", "A popular way to explore the meadows."],
    ],
  },
  {
    title: "Day 7: Yusmarg",
    distance: "Distance from Srinagar: Approximately 50 km",
    intro:
      "Yusmarg offers tranquility and untouched natural beauty, making it ideal for travelers who prefer quieter places.",
    places: [
      ["Dense Forests", "Calm walking areas and fresh mountain air."],
      ["Alpine Meadows", "Open green landscapes with scenic viewpoints."],
      ["Doodh Ganga River", "A beautiful riverside experience."],
      ["Sunset Viewpoints", "Peaceful evening scenery in one of Kashmir's hidden gems."],
    ],
  },
];

const gurezPlaces = [
  ["Razdan Pass", "Offers breathtaking mountain views."],
  ["Dawar Village", "The main settlement of Gurez Valley."],
  ["Kishanganga River", "Perfect for photography and relaxation."],
  ["Habba Khatoon Peak", "One of Kashmir's most iconic mountain landscapes."],
];

const activities = [
  "Gondola rides",
  "Skiing",
  "Snowboarding",
  "White-water rafting",
  "Trekking",
  "Camping",
  "ATV rides",
  "Horse riding",
  "Fishing",
  "Photography tours",
];

const tips = [
  "Carry valid identification.",
  "Keep sufficient cash.",
  "Carry warm clothes throughout the year.",
  "Check weather forecasts.",
  "Avoid late-night mountain driving.",
  "Book accommodation in advance during peak season.",
  "Follow local travel advisories.",
];

const selfDriveBenefits = [
  "Complete freedom",
  "Flexible schedules",
  "Better photography opportunities",
  "Access to hidden locations",
  "Greater privacy",
  "A more immersive travel experience",
];

const fleet = [
  ["Toyota Hilux 4x4", "Perfect for Ladakh expeditions and off-road adventures"],
  ["Mahindra Scorpio N", "Powerful SUV ideal for mountain roads"],
  ["Toyota Fortuner", "Premium comfort with exceptional road presence"],
  ["Mahindra Thar Roxx", "Built for adventure and off-road exploration"],
  ["Jeep Compass", "A perfect blend of comfort and performance"],
  ["Maruti Suzuki Grand Vitara", "Efficient and comfortable for long journeys"],
  ["Kia Seltos", "Modern SUV offering comfort and convenience"],
  ["Hyundai i20", "Ideal for couples, solo travelers, and city exploration"],
];

const whyChoose = [
  "Well-maintained and sanitized vehicles",
  "Self-drive freedom with unlimited exploration",
  "Vehicles suitable for Kashmir and Ladakh road trips",
  "Flexible pickup and drop-off options",
  "Competitive pricing",
  "24/7 customer support",
  "Trusted by travelers across India",
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

export default function KashmirItineraryBlog() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Complete Kashmir Travel Itinerary (2026)"
        description="Discover the ultimate Kashmir itinerary for 2026. Explore Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez Valley, and more with our complete travel guide."
        path="/blog/complete-kashmir-travel-itinerary"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop"
              alt="Dal Lake in Srinagar with mountains"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-slate-950/50" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Calendar size={16} />
                  2026 Kashmir Itinerary
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Route size={16} />
                  7-10 Days
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Complete Kashmir Travel Itinerary
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                Explore Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez Valley, and Kashmir's best self-drive experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-10">
              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-primary">
                  Ultimate Guide to Exploring Paradise on Earth
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Kashmir, often referred to as Paradise on Earth, is one of India's most breathtaking travel destinations. Surrounded by the Himalayas, Kashmir offers pristine lakes, snow-capped mountains, lush valleys, meadows, waterfalls, historic gardens, and unforgettable road trips.
                </p>
                <p className="mt-4 leading-8 text-slate-700">
                  Whether you are planning a honeymoon, family vacation, adventure trip, or a self-drive expedition, this comprehensive Kashmir itinerary covers the best destinations, travel routes, attractions, and recommended durations.
                </p>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Quick Overview</h2>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock size={16} />
                  Ideal Trip Duration: 7 to 10 Days
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {overview.map(([destination, stay]) => (
                    <div key={destination} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Destination</p>
                      <div className="mt-1 flex items-center justify-between gap-4">
                        <p className="font-semibold text-slate-950">{destination}</p>
                        <p className="text-sm font-semibold text-primary">{stay}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Best Time to Visit Kashmir</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Kashmir is a year-round destination, with every season offering a unique experience.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {seasons.map((season) => (
                    <div key={season.name} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-display text-lg font-bold text-primary">{season.name}</h3>
                      <p className="text-sm font-semibold text-slate-500">{season.months}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {season.points.map((point) => (
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

              {days.map((day) => (
                <section key={day.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="text-2xl font-display font-bold text-slate-950">{day.title}</h2>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <MapPin size={16} />
                    {day.distance}
                  </p>
                  <p className="mt-4 leading-8 text-slate-700">{day.intro}</p>
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
                <h2 className="text-2xl font-display font-bold text-slate-950">Extended Itinerary: Gurez Valley</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  For travelers with additional time, Gurez Valley offers one of Kashmir's most spectacular experiences and remains among the least explored regions in the valley.
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {gurezPlaces.map(([place, description]) => (
                    <div key={place} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h3 className="font-display font-bold text-slate-950">{place}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-display font-bold text-slate-950">Adventure Activities in Kashmir</h2>
                  <Checklist items={activities} />
                </section>
                <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-display font-bold text-slate-950">Essential Travel Tips</h2>
                  <Checklist items={tips} />
                </section>
              </div>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Suggested Kashmir Itineraries</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    ["5 Days", ["Srinagar", "Gulmarg", "Pahalgam"]],
                    ["7 Days", ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Doodhpathri"]],
                    ["10 Days", ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Doodhpathri", "Yusmarg", "Gurez Valley"]],
                  ].map(([title, places]) => (
                    <div key={title as string} className="rounded-lg bg-slate-50 p-5">
                      <h3 className="font-display text-lg font-bold text-primary">{title as string}</h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {(places as string[]).map((place) => (
                          <li key={place}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-display font-bold text-slate-950">Why Explore Kashmir by Self-Drive?</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Driving through Kashmir allows travellers to discover scenic viewpoints, hidden valleys, and authentic local experiences at their own pace.
                </p>
                <Checklist items={selfDriveBenefits} />
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Car size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-950">Our Self-Drive Fleet</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  At Self Steer Kashmir, we offer a premium fleet of well-maintained self-drive vehicles suitable for every type of traveler, from family vacations to rugged Himalayan expeditions.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {fleet.map(([vehicle, description]) => (
                    <div key={vehicle} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h3 className="font-display font-bold text-slate-950">{vehicle}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-display font-bold text-primary">Why Choose Self Steer Kashmir?</h3>
                <Checklist items={whyChoose} />
                <p className="mt-6 leading-8 text-slate-700">
                  Whether you're planning a honeymoon, family vacation, adventure expedition, or a complete Kashmir-to-Ladakh road trip, our fleet is equipped to provide a safe, comfortable, and unforgettable travel experience.
                </p>
              </section>

              <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-display font-bold">Book Your Kashmir Self-Drive Adventure</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-white/90">
                      Self Steer Kashmir provides premium self-drive vehicles designed for exploring Kashmir comfortably and safely.
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
                  <Mountain size={24} />
                </div>
                <h2 className="text-xl font-display font-bold text-slate-900">Kashmir Trip Snapshot</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                  <p className="flex gap-3">
                    <Sparkles size={18} className="mt-1 flex-none text-primary" />
                    Best for honeymooners, families, photographers, and self-drive explorers.
                  </p>
                  <p className="flex gap-3">
                    <Clock size={18} className="mt-1 flex-none text-primary" />
                    Plan 7 to 10 days for a relaxed Kashmir itinerary.
                  </p>
                  <p className="flex gap-3">
                    <Car size={18} className="mt-1 flex-none text-primary" />
                    Choose a comfortable self-drive vehicle for flexible valley travel.
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
        title="Book Your Kashmir Self-Drive Car"
      />
    </div>
  );
}
