import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Initialize seed data
  await storage.seedData();

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
