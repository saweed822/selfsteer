import { useCars } from "@/hooks/use-resources";
import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Users, Gauge, ArrowRight, Info } from "lucide-react";
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
        title="Kashmir Car Rentals"
        description="Compare our Kashmir rental fleet including SUVs and hatchbacks with transparent day rates for local and outstation travel."
        path="/cars"
      />
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900"
            >
              Our Premium Fleet
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Choose from our wide range of well-maintained vehicles for your comfortable journey across the mountains.
            </motion.p>
          </div>
          {/* <div className="hidden md:block">
            <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary/5">
              View Rental Terms <ArrowRight size={16} />
            </Button>
          </div> */}
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
                      <span className="text-lg font-bold text-primary">{car.pricePerDay}<span className="text-xs font-normal text-gray-500">/day</span></span>
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
        )}
      </div>

      <ContactModal 
        isOpen={!!selectedCar} 
        onClose={() => setSelectedCar(null)} 
        title={`Rent: ${selectedCar}`} 
      />
    </div>
  );
}
