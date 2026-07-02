import { useQuery } from "@tanstack/react-query";

type GoogleReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  time?: number;
};

type GoogleReviewsResponse = {
  rating?: number;
  totalReviews?: number;
  reviews?: GoogleReview[];
};

const devMockReviews: GoogleReviewsResponse = {
  rating: 4.9,
  totalReviews: 102,
  reviews: [
    {
      author_name: "Aashu Tiwari",
      rating: 5,
      text: "Highly recommended for car rental in Srinagar. Excellent experience!",
      relative_time_description: "3 months ago",
      profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    },
    {
      author_name: "Dr Santosh Pattar",
      rating: 5,
      text: "Very reliable and good service... Fixed and reasonable charges, no need for any hassle.",
      relative_time_description: "3 months ago",
      profile_photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    },
    {
      author_name: "Pankaj Parmar",
      rating: 5,
      text: "Good cars. Good service.",
      relative_time_description: "3 months ago",
      profile_photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    },
  ],
};

const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/place/details/json";

type RawGoogleResponse = {
  rating?: number;
  totalReviews?: number;
  reviews?: any[];
  result?: any;
  error?: string;
};

function normalizeGoogleResponse(json: RawGoogleResponse): GoogleReviewsResponse {
  if (json.error) {
    throw new Error(json.error);
  }

  if (json?.rating !== undefined && Array.isArray(json?.reviews)) {
    return {
      rating: json.rating,
      totalReviews: json.totalReviews,
      reviews: json.reviews.map((review: any) => ({
        author_name: review.author_name,
        profile_photo_url: review.profile_photo_url,
        rating: review.rating,
        text: review.text,
        relative_time_description: review.relative_time_description,
        time: review.time,
      })),
    };
  }

  if (!json?.result) {
    throw new Error("Unexpected Google reviews shape.");
  }

  return {
    rating: json.result.rating,
    totalReviews: json.result.user_ratings_total,
    reviews:
      json.result.reviews?.slice(0, 5).map((review: any) => ({
        author_name: review.author_name,
        profile_photo_url: review.profile_photo_url,
        rating: review.rating,
        text: review.text,
        relative_time_description: review.relative_time_description,
        time: review.time,
      })) ?? [],
  };
}

export function useGoogleReviews() {
  const directApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const directPlaceId = import.meta.env.VITE_GOOGLE_PLACE_ID;
  const serverEndpoint = import.meta.env.VITE_GOOGLE_REVIEWS_ENDPOINT ?? "/.netlify/functions/get-google-reviews";
  const allowDevMock = import.meta.env.DEV && import.meta.env.VITE_GOOGLE_REVIEWS_MOCK === "true";

  return useQuery<GoogleReviewsResponse, Error>({
    queryKey: ["google-reviews"],
    queryFn: async () => {
      const fetchServerReviews = async () => {
        const res = await fetch(serverEndpoint);
        const text = await res.text();

        if (!res.ok) {
          throw new Error(`Server proxy failed: ${res.status} ${res.statusText}. Response: ${text.slice(0, 300)}`);
        }

        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error(`Expected JSON from Google reviews endpoint, got ${contentType}. Response begins: ${text.slice(0, 300)}`);
        }

        let json: any;
        try {
          json = JSON.parse(text);
        } catch (parseError) {
          throw new Error(`Failed to parse proxy JSON response: ${parseError instanceof Error ? parseError.message : String(parseError)}. Response begins: ${text.slice(0, 300)}`);
        }

        if (json?.error) {
          throw new Error(String(json.error));
        }

        return normalizeGoogleResponse(json as RawGoogleResponse);
      };

      const fetchDirectReviews = async () => {
        if (!directPlaceId || !directApiKey) {
          throw new Error("Direct Google Places credentials are not configured.");
        }

        const directUrl = `${GOOGLE_API_URL}?place_id=${encodeURIComponent(directPlaceId)}&fields=rating,user_ratings_total,reviews&key=${encodeURIComponent(directApiKey)}`;
        const res = await fetch(directUrl);
        const text = await res.text();

        if (!res.ok) {
          throw new Error(`Direct Google API failed: ${res.status} ${res.statusText}. Response: ${text.slice(0, 300)}`);
        }

        let json: any;
        try {
          json = JSON.parse(text);
        } catch (parseError) {
          throw new Error(`Failed to parse direct Google API JSON response: ${parseError instanceof Error ? parseError.message : String(parseError)}. Response begins: ${text.slice(0, 300)}`);
        }

        if (json.status !== "OK") {
          throw new Error(`Google Places API error: ${json.status} - ${json.error_message || "unknown"}`);
        }

        return normalizeGoogleResponse(json as RawGoogleResponse);
      };

      try {
        return await fetchServerReviews();
      } catch (serverError) {
        console.warn("Serverless Google reviews proxy failed:", serverError);

        if (directApiKey && directPlaceId) {
          try {
            return await fetchDirectReviews();
          } catch (directError) {
            console.warn("Direct Google Places API fetch failed:", directError);
            if (allowDevMock) {
              return devMockReviews;
            }
            throw directError instanceof Error ? directError : new Error(String(directError));
          }
        }

        if (allowDevMock) {
          return devMockReviews;
        }

        throw serverError instanceof Error ? serverError : new Error(String(serverError));
      }
    },
    staleTime: 1000 * 60 * 5,
  });
}
