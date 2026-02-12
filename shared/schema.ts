import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // Silver, Gold, Platinum
  description: text("description").notNull(),
  features: text("features").array().notNull(), // List of features
  badge: text("badge").notNull(), // silver, gold, platinum
});

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // New Scorpio, Hyundai i20, etc.
  type: text("type").notNull(), // SUV, Hatchback
  pricePerDay: text("price_per_day").notNull(), // Storing as text for formatting flexibility e.g. "₹3000"
  discountTag: text("discount_tag"), // e.g. "10% OFF"
  imageUrl: text("image_url").notNull(), // Placeholder or real URL
});

export const insertPackageSchema = createInsertSchema(packages);
export const insertCarSchema = createInsertSchema(cars);

export type Package = typeof packages.$inferSelect;
export type Car = typeof cars.$inferSelect;
