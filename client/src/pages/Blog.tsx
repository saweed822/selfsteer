import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Car, MapPin, Mountain, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Seo } from "@/components/Seo";

const routes = [
  {
    title: "Srinagar to Gulmarg",
    distance: "Approximately 50 km",
    description:
      "The drive from Srinagar to Gulmarg is one of the most popular road trips in Kashmir. The route passes through charming villages, lush landscapes, and breathtaking mountain views. Gulmarg is famous for its ski resorts, the Gulmarg Gondola, and beautiful meadows that attract visitors throughout the year.",
  },
  {
    title: "Srinagar to Pahalgam",
    distance: "Approximately 90 km",
    description:
      "The journey to Pahalgam offers stunning scenery, including rivers, pine forests, and traditional Kashmiri villages. Pahalgam is known for its natural beauty and serves as a gateway to several trekking routes and tourist attractions.",
  },
  {
    title: "Srinagar to Sonamarg",
    distance: "Approximately 80 km",
    description:
      'Sonamarg, also known as the "Meadow of Gold," provides one of the most scenic drives in Kashmir. Snow-capped mountains, glaciers, and flowing rivers make this route unforgettable for travelers.',
  },
  {
    title: "Srinagar to Yusmarg",
    distance: "Approximately 50 km",
    description:
      "Yusmarg is a peaceful destination surrounded by dense forests and green meadows. It is an excellent choice for travelers looking to escape crowded tourist areas and experience Kashmir's natural beauty.",
  },
  {
    title: "Srinagar to Doodhpathri",
    distance: "Approximately 45 km",
    description:
      "Doodhpathri has become one of Kashmir's fastest-growing tourist destinations. The route offers picturesque landscapes, flowing streams, and expansive meadows ideal for family outings.",
  },
  {
    title: "Srinagar to Gurez Valley",
    distance: "Approximately 125 km",
    description:
      "Gurez Valley is one of Kashmir's hidden gems. The drive through Razdan Pass offers spectacular mountain views and an opportunity to experience one of the region's most untouched destinations.",
  },
  {
    title: "Srinagar to Aharbal",
    distance: "Approximately 75 km",
    description:
      "Aharbal is famous for its waterfall and scenic surroundings. The journey passes through beautiful countryside and offers a peaceful retreat from city life.",
  },
  {
    title: "Srinagar to Bangus Valley",
    distance: "Plan as a full-day mountain drive",
    description:
      "Bangus Valley remains one of Kashmir's least explored destinations. Travelers can experience untouched natural beauty, green meadows, and stunning mountain landscapes.",
  },
  {
    title: "Srinagar to Lolab Valley",
    distance: "Plan as a full-day valley drive",
    description:
      "Lolab Valley is known for its forests, rivers, and picturesque villages. It provides a unique opportunity to experience rural Kashmir and its natural beauty.",
  },
  {
    title: "Srinagar to Kokernag and Verinag",
    distance: "Approximately 85-95 km",
    description:
      "The drive toward Kokernag and Verinag is a refreshing South Kashmir route known for gardens, springs, mountain views, and calm countryside roads. It is a rewarding choice for travelers who want a scenic day trip away from the busiest tourist circuits.",
  },
];

export default function Blog() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Top 10 Self-Drive Routes in Kashmir"
        description="Explore the best self-drive routes in Kashmir, including Gulmarg, Pahalgam, Sonamarg, Gurez, and Doodhpathri. Discover scenic road trips and travel tips with Self Steer Kashmir."
        path="/blog"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop"
              alt="Mountain road for a Kashmir self-drive trip"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-slate-900/60" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Calendar size={16} />
                  2026 Guide
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Car size={16} />
                  Self-drive routes
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Top 10 Self-Drive Routes in Kashmir
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                Explore the best scenic road trips in Kashmir with route ideas, distances, and practical inspiration for your next self-drive journey.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="text-2xl font-display font-bold text-primary">
                  Explore Kashmir at Your Own Pace
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Kashmir is one of the world's most beautiful destinations, and exploring it by self-drive car gives travelers complete freedom and flexibility. From snow-covered mountains and alpine meadows to pristine lakes and scenic valleys, every road in Kashmir offers a unique experience.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Whether you're planning a family holiday, honeymoon, or adventure trip, a self-drive journey allows you to travel at your own pace and discover places beyond the typical tourist itinerary.
                </p>
              </motion.div>

              <div className="grid gap-5">
                {routes.map((route, index) => (
                  <motion.section
                    key={route.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index }}
                    className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-primary text-lg font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-slate-900">
                          {route.title}
                        </h2>
                        <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          <MapPin size={16} />
                          {route.distance}
                        </p>
                        <p className="mt-4 text-base leading-8 text-slate-700">
                          {route.description}
                        </p>
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-display font-bold">
                      Why Choose Self Steer Kashmir?
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-white/90">
                      At Self Steer Kashmir, we provide reliable and well-maintained self-drive vehicles to help travelers explore Kashmir comfortably and conveniently.
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
                <h2 className="text-xl font-display font-bold text-slate-900">
                  Book Your Self-Drive Car Today
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Planning a trip to Kashmir? Contact Self Steer Kashmir and experience the freedom of exploring the region at your own pace.
                </p>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-5 w-full bg-primary hover:bg-primary/90"
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
