import { usePackages } from "@/hooks/use-resources";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Skeleton } from "@/components/ui/skeleton";

export default function Tours() {
  const { data: packages, isLoading, isError } = usePackages();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'platinum': return 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white border-purple-500/50';
      case 'gold': return 'bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-white border-yellow-400/50';
      default: return 'bg-gradient-to-r from-slate-300 to-slate-400 text-slate-800 border-slate-300';
    }
  };

  const getCardStyle = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'platinum': return 'border-purple-200 bg-purple-50/50 hover:border-purple-300';
      case 'gold': return 'border-amber-200 bg-amber-50/50 hover:border-amber-300';
      default: return 'border-slate-200 bg-white hover:border-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Discover Paradise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Choose Your Kashmir Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From budget-friendly adventures to luxurious escapes, we have crafted the perfect itinerary for you.
          </motion.p>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-[500px] rounded-3xl bg-white shadow-lg p-8 border border-gray-100 flex flex-col gap-4">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-10 w-3/4 mt-4" />
                <Skeleton className="h-20 w-full" />
                <div className="space-y-2 mt-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="mt-auto">
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center p-12 bg-red-50 rounded-2xl border border-red-100 text-red-600 max-w-lg mx-auto">
            <Info className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Unable to load packages</h3>
            <p className="mt-2">Please check your connection and try again.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {packages?.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border ${getCardStyle(pkg.badge)}`}
              >
                {/* Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider border shadow-md ${getBadgeColor(pkg.badge)}`}>
                  {pkg.badge} Package
                </div>

                {/* Header */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(pkg.badge === 'Platinum' ? 5 : pkg.badge === 'Gold' ? 4 : 3)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 border-b pb-8 border-dashed border-gray-200">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="mt-0.5 p-1 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <Button 
                  className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all"
                  onClick={() => setSelectedPackage(pkg.name)}
                >
                  Request Quote
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ContactModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        title={`Inquire: ${selectedPackage}`} 
      />
    </div>
  );
}
