import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/seo-config";
import { applySeoHead, setOrganizationJsonLd } from "@/lib/seo-head";

interface SeoProps {
  title: string;
  description?: string;
  path: string;
  image?: string;
  noindex?: boolean;
  ogType?: "website" | "article";
}

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  noindex,
  ogType = "website",
}: SeoProps) {
  const fullTitle =
    path === "/"
      ? `${SITE_NAME} | Kashmir Tours & Car Rentals`
      : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    const canonicalUrl = absoluteUrl(path) || absoluteUrl("/");
    const isAbsoluteImage = !!image && /^https?:\/\//.test(image);
    const ogImage = isAbsoluteImage ? image : DEFAULT_OG_IMAGE;

    applySeoHead({
      title: fullTitle,
      description,
      canonicalUrl,
      ogImage,
      noindex,
      ogType,
    });
  }, [fullTitle, description, path, image, noindex, ogType]);

  return null;
}

export function OrganizationJsonLd() {
  useEffect(() => {
    const siteUrl = absoluteUrl("/");
    if (siteUrl.startsWith("http")) {
      setOrganizationJsonLd(siteUrl);
    }
  }, []);

  return null;
}
