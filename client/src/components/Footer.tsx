import { Link } from "wouter";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";

const reasons = [
  { title: "Local expertise", detail: "guidance that feels personal" },
  { title: "Premium freedom", detail: "reliable cars, beautiful roads" },
  { title: "Made for you", detail: "flexible journeys, your pace" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#f5f7f8] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#09182d] text-white shadow-[0_20px_60px_rgba(9,24,45,0.18)] sm:rounded-[2rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_5%,rgba(244,184,45,0.16),transparent_22%),radial-gradient(circle_at_10%_85%,rgba(47,157,181,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <section className="lg:col-span-5">
              <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-amber-300">
                <span className="h-px w-8 bg-amber-300" /> Kashmir, India
              </p>
              <Logo
                href="/"
                textClassName="text-white"
                highlightClassName="text-amber-300"
                subtitle="Drive Beyond Limits"
                subtitleClassName="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-slate-400"
              />
              <p className="mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Your key to unforgettable Kashmir and Ladakh roads—curated drives and the freedom to take the scenic route.
              </p>
            </section>

            <section className="lg:col-span-3 lg:pt-10" aria-labelledby="why-self-steer">
              <p id="why-self-steer" className="text-[0.68rem] font-bold uppercase tracking-[0.23em] text-slate-500">Why Self Steer</p>
              <h2 className="mt-3 max-w-[14rem] font-display text-xl font-semibold leading-snug text-white">
                Confidence for every mile.
              </h2>
              <ul className="mt-5 space-y-3">
                {reasons.map(({ title, detail }, index) => (
                  <li key={title} className="flex items-baseline gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-300/40 text-[0.6rem] font-bold text-amber-300">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-400"><span className="font-semibold text-slate-200">{title}</span><span className="text-slate-600"> — </span>{detail}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="lg:col-span-4 lg:pt-10">
              <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.23em] text-slate-500">Visit &amp; connect</p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm sm:p-6">
                <a
                  href="https://maps.app.goo.gl/KiCRYPnH9F176ahq8"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-3 text-sm leading-6 text-slate-300 transition-colors hover:text-white"
                >
                  <MapPin size={18} className="mt-1 shrink-0 text-amber-300" />
                  <span>Doodh Ganga Road, Karan Nagar,<br />Srinagar, Jammu &amp; Kashmir 190010</span>
                  <ArrowUpRight size={15} className="mt-1 shrink-0 text-slate-500 transition-colors group-hover:text-amber-300" />
                </a>
                <div className="my-5 h-px bg-white/10" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <a href="tel:+919622002626" className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white">
                    <Phone size={17} className="shrink-0 text-amber-300" />
                    <span>+91 96220 02626</span>
                  </a>
                  <a href="mailto:selfsteer07@gmail.com" className="group flex min-w-0 items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white">
                    <Mail size={17} className="shrink-0 text-amber-300" />
                    <span className="truncate">selfsteer07@gmail.com</span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Self Steer Kashmir. All rights reserved.</p>
            <p className="font-medium tracking-wide text-slate-400">Made with care for mountain lovers <span className="ml-1 text-amber-300">✦</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
