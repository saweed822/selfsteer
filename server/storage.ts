import { db } from "./db";
import { packages, cars, type Package, type Car } from "@shared/schema";

export interface IStorage {
  getPackages(): Promise<Package[]>;
  getCars(): Promise<Car[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getPackages(): Promise<Package[]> {
    return await db.select().from(packages);
  }

  async getCars(): Promise<Car[]> {
    return await db.select().from(cars);
  }

  async seedData(): Promise<void> {
    const existingPackages = await this.getPackages();
    if (existingPackages.length === 0) {
      await db.insert(packages).values([
        {
          name: "Silver Package",
          description: "Perfect for budget travelers looking to experience the essentials of Kashmir.",
          features: ["Basic sightseeing", "Budget hotels", "Shared transport"],
          badge: "silver"
        },
        {
          name: "Gold Package",
          description: "A balanced experience with added comfort and privacy.",
          features: ["Better hotels", "Private transport", "More destinations"],
          badge: "gold"
        },
        {
          name: "Platinum Package",
          description: "The ultimate luxury experience with premium services and priority support.",
          features: ["Luxury hotels", "Private driver", "Premium destinations", "Priority support"],
          badge: "platinum"
        }
      ]);
    }

    const existingCars = await this.getCars();
    if (existingCars.length === 0) {
      await db.insert(cars).values([
        {
          name: "Mahindra Thar",
          type: "Offroad SUV",
          pricePerDay: "₹4,500",
          discountTag: "Popular",
          imageUrl: "https://images.unsplash.com/photo-1632245889029-e412c63fe26e?q=80&w=800&auto=format&fit=crop" // Placeholder
        },
        {
          name: "New Scorpio N",
          type: "SUV",
          pricePerDay: "₹4,000",
          discountTag: "10% OFF",
          imageUrl: "https://images.unsplash.com/photo-1633596683562-4a4697de837a?q=80&w=800&auto=format&fit=crop" // Placeholder
        },
        {
          name: "Hyundai i20",
          type: "Hatchback",
          pricePerDay: "₹2,500",
          discountTag: null,
          imageUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" // Placeholder
        },
        {
          name: "Maruti Swift",
          type: "Hatchback",
          pricePerDay: "₹2,200",
          discountTag: "Budget Pick",
          imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop" // Placeholder
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
