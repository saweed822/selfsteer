import { motion } from "framer-motion";
import { Calendar, Car, Check, CircleHelp, Headphones, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

const expectations = [
  "Clean and sanitized vehicles",
  "Well-maintained fleet",
  "Flexible pickup and drop-off options",
  "Transparent pricing with no hidden charges",
  "Friendly customer support",
  "Vehicles suitable for Kashmir and Ladakh road trips",
  "Easy online booking process",
];

const faqs = [
  {
    question: "Can tourists rent self-drive cars in Kashmir?",
    answer: "Yes. Domestic tourists with a valid driving licence and government-issued ID can rent self-drive cars.",
  },
  {
    question: "Can I pick up the vehicle at Srinagar Airport?",
    answer: "Yes. We offer convenient airport pickup and drop-off services to make your journey seamless.",
  },
  {
    question: "Which car is best for a Ladakh trip?",
    answer: "For Ladakh, an SUV such as the Toyota Fortuner, Mahindra Scorpio N, Jeep Compass, or Mahindra Thar is recommended due to the challenging terrain and high-altitude roads.",
  },
  {
    question: "How far in advance should I book?",
    answer: "During peak seasons (April–June and September–October), it's advisable to book at least 2–4 weeks in advance to secure your preferred vehicle.",
  },
];

export default function WhyBookSelfSteerBlog() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Why Book with Self Steer Kashmir?"
        description="Discover Self Steer Kashmir's clean, well-maintained vehicles, transparent pricing, flexible pickup options, and friendly local support for Kashmir and Ladakh road trips."
        path="/blog/why-book-self-steer-kashmir"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1920&auto=format&fit=crop"
              alt="Self-drive SUV ready for a Kashmir road trip"
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
                  Self-Drive Car Rental
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur">
                  <ShieldCheck size={16} />
                  Travel with confidence
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-6xl">
                Why Book with Self Steer Kashmir?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                Reliable vehicles, transparent service, and local support for every road trip.
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
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Car size={24} />
              </div>
              <h2 className="mt-5 text-2xl font-display font-bold text-primary">A Vehicle for Every Journey</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                At Self Steer Kashmir, we understand that every traveler has different needs. That&apos;s why we offer a wide range of well-maintained vehicles, transparent pricing, and dedicated local support.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Whether you&apos;re looking for a compact hatchback for city exploration or a powerful SUV for mountain adventures, we have the perfect vehicle for your journey.
              </p>
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Headphones size={22} />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">What You Can Expect</h2>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {expectations.map((expectation, index) => (
                  <motion.li
                    key={expectation}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                    className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 font-semibold leading-6 text-slate-800"
                  >
                    <Check size={20} className="mt-0.5 flex-none text-primary" />
                    {expectation}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <CircleHelp size={22} />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">Frequently Asked Questions</h2>
              </div>
              <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200">
                {faqs.map((faq) => (
                  <div key={faq.question} className="p-5 md:p-6">
                    <h3 className="font-display text-lg font-bold text-slate-900">{faq.question}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </section>
      </article>
    </div>
  );
}
