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
      <DialogContent className="left-1/2 top-1/2 grid w-[calc(100vw-1rem)] max-w-[72rem] gap-0 overflow-hidden border border-white/10 bg-slate-950 p-0 text-white shadow-[0_32px_90px_rgba(15,23,42,0.45)] sm:w-[calc(100vw-2rem)] sm:max-w-[72rem]">
        <div className="relative max-h-[calc(100dvh-1rem)] overflow-y-auto overflow-x-hidden overscroll-contain bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900 px-4 py-4 sm:max-h-[calc(100dvh-2rem)] sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-blue-400/15 blur-3xl" />

          <div className="relative z-10 flex min-w-0 flex-col items-start gap-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
            <div className="inline-flex min-h-8 max-w-full min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-100 sm:text-[11px] sm:tracking-[0.28em]">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="min-w-0 break-words leading-4">24/7 booking support</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-2.5 text-cyan-100 shadow-lg shadow-black/10 sm:p-3">
              <Clock3 className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>

          <DialogHeader className="relative z-10 mt-4 space-y-2 text-left sm:mt-5 lg:mt-6">
            <DialogTitle className="text-[1.5rem] font-display font-semibold leading-tight tracking-tight text-white min-[380px]:text-[1.65rem] sm:text-[2.3rem] lg:text-[2.6rem]">
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

        <div className="relative z-10 bg-gradient-to-b from-slate-50 to-white px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4 lg:px-6 lg:pb-6 lg:pt-5">
          <div className="grid min-w-0 gap-3 md:grid-cols-3 md:gap-4">
            {contactOptions.map((option) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: option.delay, duration: 0.22 }}
                className={`group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] min-[380px]:p-4 ${option.highlight ? "ring-1 ring-emerald-200/60" : ""}`}
              >
                <div className="flex min-w-0 items-start gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${option.accent} ring-1`}>
                    {option.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium tracking-wide text-slate-500">
                      {option.label}
                    </p>
                    <p className="mt-1 text-[0.95rem] font-semibold leading-snug tracking-tight text-slate-900 [overflow-wrap:anywhere] sm:text-lg">
                      {option.value}
                    </p>
                  </div>

                  {option.highlight ? (
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
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
                  <Button asChild size="sm" className={`min-h-11 w-full rounded-xl px-4 py-3 text-sm font-semibold leading-none shadow-sm ${option.buttonClass}`}>
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
