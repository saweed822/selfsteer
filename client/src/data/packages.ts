import { type Package } from "@shared/schema";

export const packagesData: Package[] = [
  {
    id: 1,
    name: "Silver Package",
    description: "Perfect for budget travelers looking to experience the essentials of Kashmir.",
    features: ["Basic sightseeing", "Budget hotels", "Shared transport"],
    badge: "silver"
  },
  {
    id: 2,
    name: "Gold Package",
    description: "A balanced experience with added comfort and privacy.",
    features: ["Better hotels", "Private transport", "More destinations"],
    badge: "gold"
  },
  {
    id: 3,
    name: "Platinum Package",
    description: "The ultimate luxury experience with premium services and priority support.",
    features: ["Luxury hotels", "Private driver", "Premium destinations", "Priority support"],
    badge: "platinum"
  }
];
