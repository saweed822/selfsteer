import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Car, KeyRound, MapPin, Mountain, Route } from "lucide-react";
import { Seo } from "@/components/Seo";

const posts = [
  {
    href: "/blog/kashmir-self-drive-routes",
    title: "Top 10 Kashmir Self Drive Routes",
    description:
      "Explore the best Kashmir self drive routes, including Gulmarg, Pahalgam, Sonamarg, Gurez, Doodhpathri, and more scenic road trips.",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
    meta: "Kashmir Self Drive",
    icon: MapPin,
  },
  {
    href: "/blog/kashmir-to-ladakh-road-trip-guide",
    title: "Complete Kashmir to Ladakh Road Trip Guide",
    description:
      "Plan the ultimate Srinagar to Leh self-drive adventure with routes, permits, attractions, itineraries, vehicle tips, and FAQs.",
    image:
      "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?q=80&w=1200&auto=format&fit=crop",
    meta: "Ladakh Self-Drive",
    icon: Mountain,
  },
  {
    href: "/blog/complete-kashmir-travel-itinerary",
    title: "Complete Kashmir Travel Itinerary",
    description:
      "Plan Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez Valley, and more with a complete Kashmir trip guide.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg",
    meta: "Kashmir Itinerary",
    icon: Route,
  },
  {
    href: "/blog/kashmir-self-drive-car-rental-ladakh-guide",
    title: "Kashmir Self Drive Car Rental Guide",
    description:
      "Rent self-drive cars in Kashmir and explore Srinagar, Gulmarg, Pahalgam, Sonamarg, and Ladakh with routes, vehicle tips, and itineraries.",
    image: "/Images/fortuner.avif",
    meta: "Car Rental Guide",
    icon: KeyRound,
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Self-Drive Travel Blog"
        description="Read Kashmir and Ladakh self-drive travel guides from Self Steer Kashmir, including scenic routes, itineraries, permits, vehicle tips, and road trip planning advice."
        path="/blog"
      />

      <section className="container mx-auto px-4 py-10 md:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
            <Car size={16} />
            Self Steer Travel Blog
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-950 md:text-6xl">
            Self-Drive Guides for Kashmir and Ladakh
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical route ideas, scenic drives, permits, itineraries, and travel tips for exploring the Himalayas at your own pace.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => {
            const Icon = post.icon;

            return (
              <motion.article
                key={post.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <Link href={post.href} className="block">
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-primary backdrop-blur">
                      <Calendar size={15} />
                      {post.meta}
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-2xl font-display font-bold leading-snug text-slate-950 group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      {post.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Read guide
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
