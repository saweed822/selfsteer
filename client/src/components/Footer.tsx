import { Link } from "wouter";
import { Mountain, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto rounded-t-[3rem] bg-slate-900 pb-10 pt-14 text-white sm:pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-12 lg:mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors">
                <Mountain size={24} className="text-white" />
              </div>
              <span className="text-xl font-display font-bold">
                Self<span className="text-accent">Steer</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your premium gateway to the paradise on earth. Offering curated tours and luxury fleet rentals for an unforgettable experience.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-slate-900 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              {['Home', 'Tour Packages', 'Car Rentals'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-accent transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="text-lg font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-4 text-slate-400">
              {['About Us', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="mb-6 text-lg font-bold font-display">Visit Us</h4>
            <ul className="space-y-4 text-slate-400 sm:space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span className="min-w-0 break-words leading-relaxed">Doodh Ganga Road, Karan Nagar, <br />Srinagar, Jammu and Kashmir - 190010</span>
              </li>
              <li className="flex min-h-11 items-start gap-4 sm:items-center">
                <Phone className="text-accent shrink-0" size={20} />
                <a href="tel:+919622002626" className="inline-flex min-h-11 min-w-0 items-center break-words py-1 text-slate-400 transition-colors hover:text-accent focus-visible:text-accent">
                  +91 9622002626
                </a>
              </li>
              <li className="flex min-h-11 items-start gap-4 sm:items-center">
                <Mail className="text-accent shrink-0" size={20} />
                <a href="mailto:selfsteer07@gmail.com" className="inline-flex min-h-11 min-w-0 items-center break-all py-1 text-slate-400 transition-colors hover:text-accent focus-visible:text-accent">
                  selfsteer07@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Self Steer Car Rentals. All rights reserved.</p>
          <p>Designed with ❤️ for the Mountains</p>
        </div>
      </div>
    </footer>
  );
}
