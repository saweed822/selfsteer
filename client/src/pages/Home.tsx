import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Car } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col md:flex-row">
      
      {/* SECTION 1: TOURS */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full md:w-1/2 h-[50vh] md:h-screen group overflow-hidden cursor-pointer"
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
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Mountain size={48} className="text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight text-shadow-lg">
              Tour Packages
            </h2>
            <p className="max-w-md text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
              Explore the paradise on earth with our curated premium travel experiences.
            </p>
            <span className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold uppercase tracking-wide text-sm shadow-xl hover:bg-white hover:text-primary transition-all duration-300 group-hover:translate-y-[-5px]">
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
        className="relative w-full md:w-1/2 h-[50vh] md:h-screen group overflow-hidden cursor-pointer"
      >
        <Link href="/cars" className="block w-full h-full relative">
          {/* Background Image - Road/Journey */}
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

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Car size={48} className="text-sky-300" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight text-shadow-lg">
              Car Rentals
            </h2>
            <p className="max-w-md text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
              Premium fleet for your comfortable journey through the valleys.
            </p>
            <span className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-full font-bold uppercase tracking-wide text-sm shadow-xl hover:bg-sky-300 hover:text-primary-foreground transition-all duration-300 group-hover:translate-y-[-5px]">
              Book a Ride <ArrowRight size={18} />
            </span>
          </div>
        </Link>
      </motion.div>

    </div>
  );
}
