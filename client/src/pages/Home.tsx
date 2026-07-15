import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Car, DollarSign, CalendarDays, Headset } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function Home() {
  return (
    <div className="min-h-full relative overflow-hidden">
      <Seo
        title="Self Steer Kashmir"
        description="Discover premium Kashmir tour packages and reliable car rentals for Srinagar, Gulmarg, Pahalgam and Ladakh adventures."
        path="/"
      />
      <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* SECTION 1: TOURS */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full md:w-1/2 h-[52vh] sm:h-[58vh] md:h-screen group overflow-hidden cursor-pointer"
      >
        <Link href="/tours" className="block w-full h-full relative">
          {/* Background Image - Kashmir Landscape */}
          <div className="absolute inset-0 z-0">
             {/* Scenic Dal Lake / Mountains */}
            <img 
              src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1920&auto=format&fit=crop" 
              alt="Beautiful Kashmir Landscape" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-colors duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-6 text-center text-white sm:px-6 md:px-8">
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Mountain size={36} className="text-accent sm:w-12 sm:h-12" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 tracking-tight text-shadow-lg">
              Tour Packages
            </h2>
            <p className="max-w-md text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 font-light leading-relaxed">
              Explore the paradise on earth with our curated premium travel experiences.
            </p>
            <span className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold uppercase tracking-wide text-sm shadow-xl hover:bg-white hover:text-primary transition-all duration-300 group-hover:translate-y-[-5px]">
              Explore Tours <ArrowRight size={18} />
            </span>
          </div>
        </Link>
      </motion.div>

      {/* SECTION 2: CARS */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full md:w-1/2 h-[52vh] sm:h-[58vh] md:h-screen group overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Scenic Road Journey */}
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop" 
            alt="Road Trip Journey" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors duration-500 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-6 text-center text-white sm:px-6 md:px-8">
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
            <Car size={36} className="text-sky-300 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 tracking-tight text-shadow-lg">
            Car Rentals
          </h2>
          <p className="max-w-md text-base sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-5 font-light leading-relaxed">
            Choose the region for your self-drive adventure and book with confidence.
          </p>
          <div className="flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-md sm:flex-row sm:items-center sm:justify-center sm:gap-3 mb-4">
            <Link href="/cars" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300">
              Kashmir Rentals
            </Link>
            <Link href="/cars/ladakh" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              Ladakh Rentals
            </Link>
          </div>
          <span className="text-sm uppercase tracking-[0.28em] text-slate-200/90">
            Pick your destination
          </span>
        </div>
      </motion.div>
      </div>

      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold mb-3">Self Steer Benefits</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Your Trusted Self Drive Car Rental in Kashmir and Ladakh</h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Choose from a fleet of well-maintained self drive cars with transparent pricing, airport pickup, and 24/7 local assistance across Kashmir and Ladakh.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-600">
                  <DollarSign size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-0">Transparent Pricing</h3>
              </div>
              <p className="text-sm text-slate-600 leading-7 mt-2">
                No hidden charges, fair pricing, and clear rental terms so you know exactly what you're paying for.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600">
                  <Car size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-0">Premium Fleet</h3>
              </div>
              <p className="text-sm text-slate-600 leading-7 mt-2">
                Drive clean, regularly serviced SUVs and hatchbacks built for Kashmir roads and Ladakh adventures.
              </p>
            </div>
            
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-50 text-sky-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-sky-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 19.5l19-7-7 7-4-8-8-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-0">Airport Delivery</h3>
              </div>
              <p className="text-sm text-slate-600 leading-7 mt-2">
                Pick up your self drive car directly at Srinagar Airport or your hotel for a smooth start to your journey.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-100 text-amber-600">
                  <Headset size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-0">24/7 Support</h3>
              </div>
              <p className="text-sm text-slate-600 leading-7 mt-2">
                Help is available whenever you need it, from route advice to roadside support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
