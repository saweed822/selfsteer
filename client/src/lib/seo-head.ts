function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLinkRel(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export interface SeoHeadInput {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  noindex?: boolean;
  ogType?: "website" | "article";
}

export function applySeoHead(input: SeoHeadInput) {
  const {
    title,
    description,
    canonicalUrl,
    ogImage,
    noindex,
    ogType = "website",
  } = input;

  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", ogImage);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:type", ogType);
  upsertMeta("property", "og:image", ogImage);
  upsertMeta("property", "og:locale", "en_IN");
  upsertMeta("property", "og:site_name", "Self Steer Car Rentals Kashmir");
  upsertLinkRel("canonical", canonicalUrl);
}

const JSON_LD_ID = "app-jsonld-organization";

export function setOrganizationJsonLd(siteUrl: string) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Self Steer Car Rentals Kashmir",
    description:
      "Kashmir tour packages and premium car rentals for travelers exploring Srinagar, Gulmarg, Pahalgam, and beyond.",
    url: siteUrl || undefined,
    telephone: "+91-9622002626",
    email: "saweed007@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Koramangala",
      addressLocality: "Bangalore",
      postalCode: "560034",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Jammu and Kashmir",
    },
    sameAs: [],
  };

  let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = JSON_LD_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}
