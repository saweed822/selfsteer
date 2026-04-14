export const SITE_NAME = "Self Steer Car Rentals Kashmir";

export const DEFAULT_DESCRIPTION =
  "Premium Kashmir tour packages and car rentals. Curated travel experiences, comfortable fleet, and 24/7 support for your journey through the valleys.";

export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&h=630&auto=format&fit=crop";

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}
