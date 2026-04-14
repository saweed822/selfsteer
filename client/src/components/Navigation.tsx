import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Mountain, Car, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/cars", label: "Car Rentals" },
  ];

  const navbarClass = isScrolled || isMobileMenuOpen
    ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
    : "bg-transparent py-6";

  const textColorClass = isScrolled || isMobileMenuOpen || location !== "/"
    ? "text-foreground"
    : "text-white drop-shadow-md";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 z-50">
            <div className="bg-primary p-2 rounded-lg text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Mountain size={24} strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-display font-bold tracking-tight ${location === '/' && !isScrolled ? 'text-white text-shadow' : 'text-primary'}`}>
              Self<span className="text-accent">Steer</span> <br /> Car Rentals
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium hover:text-accent transition-colors relative group ${textColorClass}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button 
              onClick={() => setIsContactOpen(true)}
              variant="default"
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Phone size={16} className="mr-2" />
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={textColorClass} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-background border-b border-border shadow-xl p-4 pt-24 md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-medium p-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 bg-primary text-primary-foreground"
              >
                Contact Us
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        title="Get in Touch"
      />
    </>
  );
}
