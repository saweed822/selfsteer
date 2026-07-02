import type { Handler } from "@netlify/functions";

const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const PLACE_ID = process.env.GOOGLE_PLACE_ID ?? process.env.VITE_GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_API_KEY ?? process.env.VITE_GOOGLE_API_KEY;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

let cachedResponse: { timestamp: number; body: string; statusCode: number } | null = null;

const handler: Handler = async () => {
  if (!PLACE_ID || !API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing Google place ID or API key." }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const now = Date.now();
  if (cachedResponse && now - cachedResponse.timestamp < CACHE_TTL) {
    return {
      statusCode: cachedResponse.statusCode,
      body: cachedResponse.body,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${CACHE_TTL / 1000}, stale-while-revalidate=${CACHE_TTL / 1000}`,
      },
    };
  }

  const url = `${GOOGLE_API_URL}?place_id=${encodeURIComponent(PLACE_ID)}&fields=rating,user_ratings_total,reviews&key=${encodeURIComponent(API_KEY)}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
      if (cachedResponse) {
        return {
          statusCode: cachedResponse.statusCode,
          body: cachedResponse.body,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": `public, max-age=${CACHE_TTL / 1000}, stale-while-revalidate=${CACHE_TTL / 1000}`,
          },
        };
      }

      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Google API request failed: ${json.error_message || response.statusText}` }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    if (json.status !== "OK") {
      if (cachedResponse) {
        return {
          statusCode: cachedResponse.statusCode,
          body: cachedResponse.body,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": `public, max-age=${CACHE_TTL / 1000}, stale-while-revalidate=${CACHE_TTL / 1000}`,
          },
        };
      }

      return {
        statusCode: 502,
        body: JSON.stringify({ error: `Google API error: ${json.status}` }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    const body = JSON.stringify({
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
    });

    cachedResponse = {
      timestamp: now,
      body,
      statusCode: 200,
    };

    return {
      statusCode: 200,
      body,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${CACHE_TTL / 1000}, stale-while-revalidate=${CACHE_TTL / 1000}`,
      },
    };
  } catch (error) {
    if (cachedResponse) {
      return {
        statusCode: cachedResponse.statusCode,
        body: cachedResponse.body,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${CACHE_TTL / 1000}, stale-while-revalidate=${CACHE_TTL / 1000}`,
        },
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Google reviews fetch failed." }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};

export { handler };
