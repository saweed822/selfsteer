import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock3, Mail, MessageCircle, Phone, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

type ContactOption = {
  icon: React.ReactNode;
  label: string;
  value: string;
  action: string;
  shortLine: string;
  buttonText: string;
  accent: string;
  buttonClass: string;
  external: boolean;
  delay: number;
  highlight?: boolean;
};

export function ContactModal({ isOpen, onClose, title = "Get in Touch" }: ContactModalProps) {
  const contactOptions: ContactOption[] = [
    {
      icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Call Us",
      value: "+91 9622002626",
      action: "tel:+919622002626",
      shortLine: "Instant assistance",
      buttonText: "Call Now",
      accent: "from-sky-100 to-blue-200 text-blue-700 ring-blue-200/70",
      buttonClass: "bg-slate-950 text-white hover:bg-slate-800",
      external: false,
      delay: 0.05,
    },
    {
      icon: <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "WhatsApp",
      value: "Chat with us",
      action: "https://wa.me/919622002626",
      shortLine: "Fastest response",
      buttonText: "Open WhatsApp",
      accent: "from-emerald-100 to-green-200 text-emerald-700 ring-emerald-200/70",
      buttonClass: "bg-emerald-500 text-white hover:bg-emerald-600",
      external: true,
      delay: 0.1,
      highlight: true,
    },
    {
      icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Email",
      value: "selfsteer07@gmail.com",
      action: "mailto:selfsteer07@gmail.com",
      shortLine: "Detailed requests",
      buttonText: "Send Email",
      accent: "from-amber-100 to-orange-200 text-orange-700 ring-orange-200/70",
      buttonClass: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
      external: false,
      delay: 0.15,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100vw-1rem)] max-w-[72rem] overflow-hidden border border-white/10 bg-slate-950 p-0 text-white shadow-[0_32px_90px_rgba(15,23,42,0.45)] sm:w-[calc(100vw-2rem)] sm:max-w-[72rem]">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-blue-400/15 blur-3xl" />

          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100 sm:text-[11px]">
              <Sparkles className="h-3.5 w-3.5" />
              24/7 booking support
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-2.5 text-cyan-100 shadow-lg shadow-black/10 sm:p-3">
              <Clock3 className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>

          <DialogHeader className="relative z-10 mt-4 space-y-2 text-left sm:mt-5 lg:mt-6">
            <DialogTitle className="text-2xl font-display font-semibold tracking-tight text-white sm:text-[2.3rem] lg:text-[2.6rem]">
              {title}
            </DialogTitle>
            <p className="max-w-2xl text-sm leading-6 text-slate-200 sm:text-[0.98rem] sm:leading-6">
              Tell us your dates or route and we’ll help you book the right self-drive car fast.
            </p>
          </DialogHeader>

          <div className="relative z-10 mt-4 flex flex-wrap gap-2 sm:mt-5">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-medium text-slate-100 sm:text-xs">
              WhatsApp first
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-medium text-slate-100 sm:text-xs">
              Quick callback
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-50 to-white px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4 lg:px-6 lg:pb-6 lg:pt-5">
          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {contactOptions.map((option) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: option.delay, duration: 0.22 }}
                className={`group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] ${option.highlight ? "ring-1 ring-emerald-200/60" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${option.accent} ring-1`}>
                    {option.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium tracking-wide text-slate-500">
                      {option.label}
                    </p>
                    <p className="mt-1 truncate text-lg font-semibold tracking-tight text-slate-900">
                      {option.value}
                    </p>
                  </div>

                  {option.highlight ? (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Best
                    </span>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-500" />
                  )}
                </div>

                <p className="mt-3 text-sm leading-5 text-slate-500">
                  {option.shortLine}
                </p>

                <div className="mt-4">
                  <Button asChild size="sm" className={`w-full rounded-xl px-4 py-2 text-sm font-semibold shadow-sm ${option.buttonClass}`}>
                    <a
                      href={option.action}
                      target={option.external ? "_blank" : undefined}
                      rel={option.external ? "noopener noreferrer" : undefined}
                    >
                      {option.buttonText}
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-3 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-center text-xs font-medium text-cyan-900 shadow-sm sm:mt-4">
            Typically replies within 30 minutes
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}