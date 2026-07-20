import { motion } from "framer-motion";
import { Calendar, Heart, Mountain, Sparkles } from "lucide-react";
import { Seo } from "@/components/Seo";

const reasons = [
  "Snow-capped Himalayan peaks",
  "Beautiful lakes and rivers",
  "World-famous Mughal gardens",
  "Skiing and snowboarding",
  "Gondola rides in Gulmarg",
  "Houseboat stays on Dal Lake",
  "Apple orchards",
  "Traditional Kashmiri cuisine",
  "Trekking and hiking trails",
  "Warm local hospitality",
];

export default function WhyVisitKashmirBlog() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Why Visit Kashmir?"
        description="Discover why Kashmir is a remarkable destination for natural beauty, cultural heritage, adventure, Dal Lake houseboats, Gulmarg, gardens, cuisine, and warm hospitality."
        path="/blog/why-visit-kashmir"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1920&auto=format&fit=crop"
              alt="Snow-capped mountains and a lake in Kashmir"
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
                  Kashmir Travel Guide
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <Heart size={16} />
                  Nature, culture & adventure
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Why Visit Kashmir?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                A place where Himalayan landscapes, rich culture, and unforgettable adventures come together.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-2xl font-display font-bold text-primary">A Kashmir Experience Unlike Anywhere Else</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Kashmir offers a unique blend of natural beauty, cultural heritage, and adventure. Travelers from around the world visit to experience its dramatic mountains, tranquil waters, historic gardens, and the welcoming spirit of its people.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Whether you are looking for relaxation or adventure, Kashmir provides an experience unlike anywhere else in India.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    {index < 2 ? <Mountain size={20} /> : <Sparkles size={20} />}
                  </div>
                  <p className="font-semibold leading-6 text-slate-800">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
