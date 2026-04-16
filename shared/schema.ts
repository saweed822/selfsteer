import { z } from 'zod';

// Type definitions for Tour Packages
export const packageSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  badge: z.string(),
});

export type Package = z.infer<typeof packageSchema>;

// Type definitions for Cars
export const carSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  pricePerDay: z.string(),
  originalPricePerDay: z.string().optional(),
  discountTag: z.string().nullable(),
  imageUrl: z.string(),
});

export type Car = z.infer<typeof carSchema>;

// Insert schemas for creating new records
export const insertPackageSchema = packageSchema.omit({ id: true });
export const insertCarSchema = carSchema.omit({ id: true });
