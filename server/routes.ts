import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

function getSiteUrl() {
  const siteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || "";
  return siteUrl.replace(/\/$/, "");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Initialize seed data
  await storage.seedData();

  app.get("/robots.txt", (_req, res) => {
    const siteUrl = getSiteUrl();
    res.type("text/plain");
    res.send(
      `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`,
    );
  });

  app.get("/sitemap.xml", (_req, res) => {
    const siteUrl = getSiteUrl();
    if (!siteUrl) {
      return res.status(404).type("text/plain").send("SITE_URL is not configured");
    }

    const lastmod = new Date().toISOString().slice(0, 10);
    const routes = ["/", "/tours", "/cars"];
    const urlset = routes
      .map(
        (route) => `  <url>
    <loc>${siteUrl}${route === "/" ? "" : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.9"}</priority>
  </url>`,
      )
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;
    return res.type("application/xml").send(xml);
  });

  app.get(api.packages.list.path, async (_req, res) => {
    const packages = await storage.getPackages();
    res.json(packages);
  });

  app.get(api.cars.list.path, async (_req, res) => {
    const cars = await storage.getCars();
    res.json(cars);
  });

  return httpServer;
}
