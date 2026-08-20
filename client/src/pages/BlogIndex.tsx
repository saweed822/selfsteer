import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Car, Heart, KeyRound, MapPin, Mountain, Route, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

const posts = [
  {
    href: "/blog/car-rental-in-srinagar",
    title: "Car Rental in Srinagar: Everything Tourists Need to Know",
    description: "Learn about self-drive rentals, documents, airport pickup, the best cars, pricing considerations, and tips for exploring Kashmir from Srinagar.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop",
    meta: "Srinagar Car Rental",
    icon: Car,
  },
  {
    href: "/blog/sinthan-top-road-trip-guide",
    title: "Sinthan Top Road Trip Guide: Route, Weather & Things to Know",
    description:
      "Plan a Sinthan Top road trip via Kokernag and Daksum, with weather guidance, the best time to visit, and self-drive tips.",
    image: "/Images/sinthan_top.jpg",
    meta: "Sinthan Top Road Trip",
    icon: Mountain,
  },
  {
    href: "/blog/gurez-valley-road-trip-guide",
    title: "Gurez Valley Road Trip Guide: Route, Distance, Best Time & Travel Tips",
    description:
      "Plan a Gurez Valley road trip from Srinagar with the route via Bandipora and Razdan Pass, best time to visit, and essential travel tips.",
    image: "/Images/gurez.webp",
    meta: "Gurez Valley Road Trip",
    icon: Mountain,
  },
  {
    href: "/blog/doodhpathri-travel-guide",
    title: "Doodhpathri Travel Guide: How to Reach, Things to Do & Best Time",
    description:
      "Explore Doodhpathri, Kashmir's Valley of Milk. Find the best time to visit, how to reach from Srinagar, things to do, and self-drive travel tips.",
    image:
      "/Images/doodhpathri.jpg",
    meta: "Doodhpathri Travel Guide",
    icon: Mountain,
  },
  {
    href: "/blog/srinagar-to-leh-self-drive-ultimate-guide",
    title: "Srinagar to Leh Road Trip: The Ultimate Guide",
    description:
      "A complete guide for the Srinagar to Leh self-drive road trip — route, stops, road conditions, packing list, and driving tips.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    meta: "Srinagar to Leh",
    icon: Route,
  },
  {
    href: "/blog/why-book-self-steer-kashmir",
    title: "Why Book with Self Steer Kashmir?",
    description:
      "Learn what to expect from our clean vehicles, transparent pricing, flexible options, and local support for your Kashmir or Ladakh trip.",
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1200&auto=format&fit=crop",
    meta: "Self-Drive Car Rental",
    icon: ShieldCheck,
  },
  {
    href: "/blog/why-visit-kashmir",
    title: "Why Visit Kashmir?",
    description:
      "Discover Kashmir's Himalayan peaks, lakes, gardens, houseboats, adventure activities, cuisine, and warm local hospitality.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    meta: "Kashmir Travel",
    icon: Heart,
  },
  {
    href: "/blog/kashmir-self-drive-routes",
    title: "Top 10 Kashmir Self Drive Routes",
    description:
      "Explore the best Kashmir self drive routes, including Gulmarg, Pahalgam, Sonamarg, Gurez, Doodhpathri, and more scenic road trips.",
    image:
      "/Images/dal_lake.jpg",
    meta: "Kashmir Self Drive",
    icon: MapPin,
  },
  {
    href: "/blog/kashmir-to-ladakh-road-trip-guide",
    title: "Complete Kashmir to Ladakh Road Trip Guide",
    description:
      "Plan the ultimate Srinagar to Leh self-drive adventure with routes, permits, attractions, itineraries, vehicle tips, and FAQs.",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1200&auto=format&fit=crop",
    meta: "Ladakh Self-Drive",
    icon: Mountain,
  },
  {
    href: "/blog/srinagar-to-gulmarg-road-trip-guide",
    title: "Srinagar to Gulmarg Road Trip Guide (2026)",
    description:
      "Plan your scenic self-drive journey from Srinagar to Gulmarg with route details, best time to visit, attractions, and practical driving tips.",
    image:
      "/Images/gulmarg.jpg",
    meta: "Gulmarg Road Trip",
    icon: Mountain,
  },
  {
    href: "/blog/srinagar-airport-car-rental",
    title: "Srinagar Airport Car Rental: Start Your Kashmir Journey with Ease",
    description:
      "Rent a premium self-drive car at Srinagar Airport. Enjoy airport pickup, transparent pricing, and explore Kashmir & Ladakh at your own pace.",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    meta: "Airport Car Rental",
    icon: Car,
  },
  {
    href: "/blog/self-drive-vs-taxi",
    title: "Self-Drive vs Taxi in Kashmir: Which Should You Choose?",
    description:
      "Compare self-drive rentals and taxis in Kashmir — privacy, cost, flexibility, and which option suits different travelers.",
    image:
      "/Images/selfdrive.jpg",
    meta: "Travel Advice",
    icon: ShieldCheck,
  },
  {
    href: "/blog/srinagar-to-pahalgam-road-trip-guide",
    title: "Srinagar to Pahalgam Road Trip Guide (2026)",
    description:
      "Planning a Srinagar to Pahalgam road trip? Discover distance, route, attractions, driving tips, and why a self-drive car is ideal.",
    image:
      "/Images/pahalgam.jpeg",
    meta: "Pahalgam Road Trip",
    icon: Mountain,
  },
  {
    href: "/blog/srinagar-to-sonamarg-road-trip-guide",
    title: "Srinagar to Sonamarg Road Trip Guide (2026)",
    description:
      "Planning a Srinagar to Sonamarg road trip? Discover the best route, distance, attractions, driving tips, and why a self-drive car is ideal.",
    image:
      "/Images/sonamrg.avif",
    meta: "Sonamarg Road Trip",
    icon: Mountain,
  },
  {
    href: "/blog/complete-kashmir-travel-itinerary",
    title: "Complete Kashmir Travel Itinerary",
    description:
      "Plan Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez Valley, and more with a complete Kashmir trip guide.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    meta: "Kashmir Itinerary",
    icon: Route,
  },
  {
    href: "/blog/kashmir-self-drive-car-rental-ladakh-guide",
    title: "Kashmir Self Drive Car Rental Guide",
    description:
      "Rent self-drive cars in Kashmir and explore Srinagar, Gulmarg, Pahalgam, Sonamarg, and Ladakh with routes, vehicle tips, and itineraries.",
    image:
      "/Images/kashmir.jpg",
    meta: "Car Rental Guide",
    icon: KeyRound,
  },
];

const postOrder = [
  "/blog/srinagar-to-leh-self-drive-ultimate-guide",
  "/blog/kashmir-self-drive-car-rental-ladakh-guide",
  "/blog/why-book-self-steer-kashmir",
  "/blog/srinagar-airport-car-rental",
  "/blog/self-drive-vs-taxi",
  "/blog/car-rental-in-srinagar",
  "/blog/kashmir-self-drive-routes",
  "/blog/complete-kashmir-travel-itinerary",
  "/blog/kashmir-to-ladakh-road-trip-guide",
  "/blog/srinagar-to-gulmarg-road-trip-guide",
  "/blog/srinagar-to-pahalgam-road-trip-guide",
  "/blog/srinagar-to-sonamarg-road-trip-guide",
  "/blog/doodhpathri-travel-guide",
  "/blog/gurez-valley-road-trip-guide",
  "/blog/sinthan-top-road-trip-guide",
  "/blog/why-visit-kashmir",
];

const orderedPosts = postOrder
  .map((href) => posts.find((post) => post.href === href))
  .filter((post): post is (typeof posts)[number] => Boolean(post));

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
          {orderedPosts.map((post, index) => {
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
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        const target = event.currentTarget;
                        target.onerror = null;
                        target.src = "/Images/jeep.webp";
                      }}
                      style={post.href === "/blog/self-drive-vs-taxi" ? { objectPosition: "center 80%" } : undefined}
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
