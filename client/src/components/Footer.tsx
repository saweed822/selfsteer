import { Link } from "wouter";
import { Mountain, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
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
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Visit Us</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span>Koramangala<br />Bangalore, 560034</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-accent shrink-0" size={20} />
                <span>+91 9622002626</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-accent shrink-0" size={20} />
                <span>selfsteer07@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Self Steer Car Rentals. All rights reserved.</p>
          <p>Designed with ❤️ for the Mountains</p>
        </div>
      </div>
    </footer>
  );
}
