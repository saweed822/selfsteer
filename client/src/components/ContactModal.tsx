import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowUpRight, Mail, MessageCircle, Phone, Sparkles, Clock3 } from "lucide-react";
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
      value: "+91 9622002626",
      action: "tel:+919622002626",
      color: "from-sky-100 to-blue-200 text-blue-700 ring-blue-200/60",
      badge: "Fastest",
      description: "Speak with our team directly for quick trip planning.",
      external: false,
      delay: 0.1
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      action: "https://wa.me/9622002626",
      color: "from-emerald-100 to-green-200 text-emerald-700 ring-emerald-200/60",
      badge: "Instant",
      description: "Send your route, dates, or car choice and we’ll reply quickly.",
      external: true,
      delay: 0.2
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email Us",
      value: "selfsteer07@gmail.com",
      action: "mailto:selfsteer07@gmail.com",
      color: "from-amber-100 to-orange-200 text-orange-700 ring-orange-200/60",
      badge: "Best for details",
      description: "Send itinerary changes or longer requests by email.",
      external: false,
      delay: 0.3
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[28rem] border-0 bg-slate-950 p-0 text-white shadow-[0_30px_80px_rgba(15,23,42,0.45)] overflow-hidden">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900 px-6 pb-7 pt-6 sm:px-8">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="absolute -right-10 top-4 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative z-10 flex items-start justify-between gap-4 pr-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" />
              24/7 support
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-100 shadow-lg shadow-black/10">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>

          <DialogHeader className="relative z-10 mt-6 text-left">
            <DialogTitle className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </DialogTitle>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
              Reach out through the channel that feels easiest. We keep the response path short, direct, and booking-friendly.
            </p>
          </DialogHeader>

          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
              Quick callbacks
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
              WhatsApp replies first
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
              No forms, no friction
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-50 to-white px-4 py-5 sm:px-5">
          {contactOptions.map((option) => (
            <motion.a
              key={option.label}
              href={option.action}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: option.delay, duration: 0.3 }}
              className="group mb-3 flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${option.color} ring-1 transition-transform duration-300 group-hover:scale-105`}>
                {option.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold tracking-wide text-slate-500">
                    {option.label}
                  </p>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {option.badge}
                  </span>
                </div>
                <p className="mt-1 text-lg font-bold tracking-tight text-slate-900">
                  {option.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {option.description}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-500" />
            </motion.a>
          ))}

          <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-center text-xs font-medium text-cyan-900 shadow-sm">
            Typically replies within 30 minutes
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
