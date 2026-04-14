import { useQuery } from "@tanstack/react-query";
import { packagesData } from "@/data/packages";
import { carsData } from "@/data/cars";

// Packages (Tours)
export function usePackages() {
  return useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      // Simulate async data loading from local data
      return packagesData;
    },
  });
}

// Cars
export function useCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      // Simulate async data loading from local data
      return carsData;
    },
  });
}
