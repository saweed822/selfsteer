import { useCars } from "@/hooks/use-resources";
import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Skeleton } from "@/components/ui/skeleton";
import { Seo } from "@/components/Seo";

export default function Cars() {
  const { data: cars, isLoading, isError } = useCars();
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <Seo
        title="Kashmir Self-Drive Car Rentals"
        description="Find premium self-drive car rentals for Kashmir with SUVs, hatchbacks, and comfortable vehicles for valley tours and scenic mountain drives."
        path="/cars"
      />
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-display font-bold text-gray-900"
              >
                Kashmir Self-Drive Rentals
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                Explore Kashmir at your own pace with reliable self-drive cars for Srinagar, Gulmarg, Pahalgam and Sonamarg. Enjoy valley routes, lake views and mountain scenery with total freedom.
              </motion.p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Local Kashmir Comfort</p>
                <p className="mt-3 text-sm text-slate-600">Perfect for exploring Srinagar, Gulmarg, Pahalgam and Dal Lake with well-maintained vehicles.</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Flexible Self-Drive</p>
                <p className="mt-3 text-sm text-slate-600">Choose from SUVs and hatchbacks for scenic drives, local sightseeing, and relaxed valley touring.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border p-4 space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-10 w-24 rounded-lg" />
                  <Skeleton className="h-10 w-24 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center p-12">
            <Info className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-bold text-gray-900">Unable to load fleet</h3>
            <p className="mt-2 text-gray-500">Please try refreshing the page.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cars?.map((car, idx) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    {/* Car Image Placeholder */}
                    <img 
                      src={car.imageUrl} 
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Discount Tag */}
                    {car.discountTag && (
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                        {car.discountTag}
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-semibold px-3 py-1 rounded-md">
                      {car.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{car.name}</h3>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Users size={12} /> 4-7 Seats</span>
                          <span className="flex items-center gap-1"><Fuel size={12} /> Diesel/Petrol</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Starting at</span>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="text-lg font-bold text-primary">
                            {car.pricePerDay}<span className="text-xs font-normal text-gray-500">/day</span>
                          </span>
                          {car.originalPricePerDay && (
                            <span className="text-sm font-medium text-gray-400 line-through decoration-gray-400">
                              {car.originalPricePerDay}<span className="text-xs font-normal">/day</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <Button 
                        onClick={() => setSelectedCar(car.name)}
                        className="rounded-xl px-6 bg-gray-900 hover:bg-primary transition-colors"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Valley Routes</p>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Srinagar to Gulmarg &amp; Beyond</h2>
            <p className="mt-3 text-sm text-slate-600">Drive through Kashmir’s most scenic roads and choose your own itinerary with day trips to lakes, viewpoints, and hill stations.</p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Trusted Support</p>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Local pickup and guidance</h2>
            <p className="mt-3 text-sm text-slate-600">Our team helps with local permits, route planning, and easy pickup so you can focus on the journey, not logistics.</p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Comfortable Vehicles</p>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Cars for every Kashmir trip</h2>
            <p className="mt-3 text-sm text-slate-600">Rent from compact hatchbacks to spacious SUVs, all inspected for road readiness and comfort across valley terrain.</p>
          </div>
        </section>

      </div>

      <ContactModal 
        isOpen={!!selectedCar} 
        onClose={() => setSelectedCar(null)} 
        title={`Rent: ${selectedCar}`} 
      />
    </div>
  );
}
