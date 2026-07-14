import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Logo } from "@/components/Logo";

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
    {
      label: "Car Rentals",
      children: [
        { href: "/cars", label: "Kashmir Car Rentals" },
        { href: "/cars/ladakh", label: "Ladakh Car Rentals" },
      ],
    },
    { href: "/blog", label: "Blog" },
  ];

  const isCurrentRoute = (href: string) => location === href;
  const isCurrentCarRoute = (href: string) => href === "/cars" ? location === "/cars" : location === href;
  const isDropdownActive = (children: { href: string }[]) => children.some((child) => location === child.href);
  const getNavLinkClass = (href: string) =>
    isCurrentRoute(href) ? "text-accent font-semibold" : textColorClass;

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
          <Logo
            href="/"
            className="z-50"
            textClassName={location === '/' && !isScrolled ? 'text-white' : 'text-foreground'}
            subtitle="Rent | Ride | Explore"
            subtitleClassName={location === '/' && !isScrolled ? 'mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-white/75' : 'mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500'}
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.children) {
                const dropdownActive = isDropdownActive(link.children);
                return (
                  <div key={link.label} className="relative group">
                    <button
                      type="button"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${dropdownActive ? "text-accent font-semibold" : textColorClass}`}
                    >
                      {link.label}
                      <ChevronDown size={16} className="transition-transform duration-200" />
                    </button>
                    <div className="absolute left-0 top-full mt-0 w-64 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl opacity-0 invisible transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                      {link.children.map((child) => {
                        const childActive = location === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${childActive ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-700 hover:bg-slate-100"}`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${getNavLinkClass(link.href)}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
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
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {link.label}
                    </p>
                    <div className="space-y-2 rounded-3xl bg-slate-100 p-2">
                      {link.children.map((child) => {
                        const childActive = location === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-2xl px-4 py-3 text-lg font-medium transition-colors ${childActive ? "bg-white text-slate-900 font-semibold" : "text-slate-900 hover:bg-white"}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium p-2 rounded-lg transition-colors ${location === link.href ? "bg-slate-100 text-slate-900 font-semibold" : "hover:bg-muted"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
