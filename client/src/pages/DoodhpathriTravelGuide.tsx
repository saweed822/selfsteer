import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function DoodhpathriTravelGuide() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Seo
        title="Doodhpathri Travel Guide | How to Reach, Things to Do & Best Time"
        description="Explore Doodhpathri, Kashmir's Valley of Milk. Find the best time to visit, how to reach from Srinagar, things to do and self-drive travel tips."
        path="/blog/doodhpathri-travel-guide"
        ogType="article"
      />

      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src="/Images/doodhpathri.jpg"
              alt="Doodhpathri valley road, pine forests, and mountain landscape"
              loading="lazy"
              decoding="async"
              onError={(event) => {
                const target = event.currentTarget;
                target.onerror = null;
                target.src = "/Images/jeep.webp";
              }}
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/85 to-slate-900/60" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><Calendar size={16} /> Kashmir Travel Guide</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur"><MapPin size={16} /> Budgam, Kashmir</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Doodhpathri Travel Guide: How to Reach, Things to Do &amp; Best Time</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">Discover Kashmir&apos;s peaceful Valley of Milk, with its green meadows, mountain scenery, and streams.</p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-slate-700 leading-7">Doodhpathri, meaning <strong>&quot;Valley of Milk,&quot;</strong> is one of Kashmir&apos;s most peaceful meadow destinations. Located in Budgam district, around <strong>42 km from Srinagar</strong>, it is surrounded by pine forests, mountain landscapes, and flowing streams.</p>
              <p className="mt-4 text-slate-700 leading-7">Unlike some of Kashmir&apos;s busier tourist destinations, Doodhpathri offers a quieter experience and is particularly attractive for travellers looking for scenic drives, photography, and a relaxing day in nature.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">How to Reach Doodhpathri from Srinagar</h2>
              <p className="mt-4 text-slate-700 leading-7">Doodhpathri is easily accessible by road from Srinagar. A commonly used route passes through <strong>Budgam and Khansahib</strong>, with the journey taking roughly <strong>1.5 hours</strong> depending on traffic and road conditions.</p>
              <p className="mt-4 text-slate-700 leading-7">The destination is also relatively close to Srinagar Airport, making it convenient for travellers who want to begin their Kashmir trip with a quieter destination.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Things to Do in Doodhpathri</h2>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Explore the Meadows</h3>
              <p className="mt-2 text-slate-700 leading-7">The wide green meadows are perfect for walking, relaxing, and photography during the warmer months.</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Visit Shaliganga Stream</h3>
              <p className="mt-2 text-slate-700 leading-7">The flowing stream through the meadow is one of Doodhpathri&apos;s most attractive features. Spend some time beside the water and enjoy the surrounding mountain scenery.</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Enjoy a Picnic</h3>
              <p className="mt-2 text-slate-700 leading-7">Doodhpathri is ideal for a peaceful picnic with family or friends. Carry snacks and water because facilities are limited compared with Srinagar.</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">Photography</h3>
              <p className="mt-2 text-slate-700 leading-7">The combination of meadows, streams, pine forests, and mountains makes Doodhpathri an excellent destination for landscape photography.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Best Time to Visit Doodhpathri</h2>
              <p className="mt-4 text-slate-700 leading-7"><strong>May to September</strong> is generally the best period for green meadows and comfortable road travel. June and July are particularly attractive when the landscape is lush and flowers are in bloom.</p>
              <p className="mt-4 text-slate-700 leading-7">Winter can bring heavy snow and access may become restricted, so check current road conditions before travelling.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Why Visit Doodhpathri by Self-Drive?</h2>
              <p className="mt-4 text-slate-700 leading-7">A self-drive car gives you the freedom to leave Srinagar when you want, stop along the way, and spend as much time as you like at the destination. It is especially useful for travellers who want to combine Doodhpathri with other places around Budgam.</p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary">Travel Tips</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Start early for a quieter experience.</li>
                <li>Carry warm clothing even in summer.</li>
                <li>Keep cash with you.</li>
                <li>Carry food and drinking water.</li>
                <li>Check weather and road conditions before travelling.</li>
                <li>Avoid leaving waste behind.</li>
              </ul>
            </section>

            <section className="rounded-lg bg-primary p-6 text-white shadow-lg md:p-8">
              <h2 className="text-2xl font-display font-bold">Explore Doodhpathri with Self Steer</h2>
              <p className="mt-4 leading-7 text-white/90">Planning a Kashmir road trip? Rent a self-drive car from Self Steer and discover destinations like Doodhpathri at your own pace.</p>
              <p className="mt-5 font-semibold tracking-wide">Drive Beyond Limits.</p>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
