import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Mail, MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ContactModal({ isOpen, onClose, title = "Contact Us" }: ContactModalProps) {
  const contactOptions = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Call Us Now",
      value: "+91 98765 43210",
      action: "tel:+919876543210",
      color: "bg-blue-100 text-blue-600",
      delay: 0.1
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      action: "https://wa.me/919876543210",
      color: "bg-green-100 text-green-600",
      delay: 0.2
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email Us",
      value: "bookings@kashmirtravels.com",
      action: "mailto:bookings@kashmirtravels.com",
      color: "bg-orange-100 text-orange-600",
      delay: 0.3
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-none shadow-2xl p-0 overflow-hidden">
        <div className="absolute right-4 top-4 z-10">
          <button 
            onClick={onClose}
            className="rounded-full p-2 bg-black/5 hover:bg-black/10 transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        
        <div className="bg-primary p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-white text-center z-10 relative">
              {title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-blue-100 mt-2 text-center z-10 relative">
            Our team is available 24/7 to assist you with your booking.
          </p>
        </div>

        <div className="p-6 space-y-4">
          {contactOptions.map((option, idx) => (
            <motion.a
              key={option.label}
              href={option.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: option.delay, duration: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group cursor-pointer"
            >
              <div className={`p-3 rounded-full ${option.color} group-hover:scale-110 transition-transform`}>
                {option.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {option.label}
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {option.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="p-4 bg-gray-50 text-center text-xs text-muted-foreground border-t">
          Typically replies within 15 minutes
        </div>
      </DialogContent>
    </Dialog>
  );
}
