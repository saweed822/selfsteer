import { Link } from "wouter";

interface LogoProps {
  href?: string;
  className?: string;
  textClassName?: string;
  highlightClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
}

export function Logo({
  href = "/",
  className,
  textClassName = "text-foreground",
  highlightClassName = "text-accent",
  subtitle,
  subtitleClassName = "mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500",
}: LogoProps) {
  const content = (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <div className="leading-tight">
        <p className={`text-2xl font-display font-semibold tracking-tight ${textClassName}`}>
          <span>Self</span>{" "}
          <span className={highlightClassName}>Steer</span>{" "}
          <span>Kashmir</span>
        </p>
        {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
      </div>
    </div>
  );

  if (href) return <Link href={href} className="group">{content}</Link>;
  return <div>{content}</div>;
}
