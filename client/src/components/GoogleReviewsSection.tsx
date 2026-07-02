import { useEffect, useMemo, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGoogleReviews } from "@/hooks/use-google-reviews";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path fill="#4285F4" d="M12 11.6v3.2h4.92c-.21 1.28-1.69 3.76-4.92 3.76-2.96 0-5.38-2.44-5.38-5.44s2.42-5.44 5.38-5.44c1.69 0 2.82.72 3.46 1.34l2.36-2.28C17.03 4.46 14.98 3.4 12 3.4 7.59 3.4 4 6.99 4 11.4s3.59 8 8 8c4.6 0 7.65-3.22 7.65-7.76 0-.52-.05-.92-.12-1.32H12Z" />
    <path fill="#34A853" d="M4.95 7.79 7.16 10c.84-1.59 2.58-2.75 4.84-2.75 1.69 0 2.82.72 3.46 1.34l2.36-2.28C17.03 4.46 14.98 3.4 12 3.4 8.22 3.4 5.11 5.44 4.95 7.79Z" />
    <path fill="#FBBC05" d="M12 20.6c2.47 0 4.53-.8 6.05-2.17l-2.8-2.29c-.77.52-1.74.88-3.25.88-3.24 0-4.73-2.48-4.92-3.76l-2.2 1.7C6.65 18.34 9.41 20.6 12 20.6Z" />
    <path fill="#EA4335" d="M19.45 4.85 16.88 7.4c-.57-.54-1.62-1.26-2.88-1.26-2.33 0-3.88 1.4-4.6 2.64l-2.2-1.7C8.49 4.94 10.76 3.4 13.99 3.4c1.83 0 3.36.72 4.46 1.45Z" />
  </svg>
);

type GoogleReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  time?: number;
};

export function GoogleReviewsSection() {
  const { data, isLoading, isError, error } = useGoogleReviews();
  const reviews = useMemo<GoogleReview[]>(() => data?.reviews ?? [], [data]);
  const rating = data?.rating ?? 4.9;
  const totalReviews = data?.totalReviews ?? reviews.length;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const visibleReviews = reviews.slice(0, 3);
  const hasReviews = reviews.length > 0;
  const ratingLabel = rating ? rating.toFixed(1) : "4.9";
  const fallbackTitle = isError ? "Google reviews unavailable" : "No Google reviews yet";
  const fallbackMessage = isError
    ? error?.message || "Please verify your Google Business API setup."
    : "Once your Google Business reviews are available, they will appear here.";
  const reviewHref = "https://maps.app.goo.gl/4fqHHmUGtmWA7iGa7";

  useEffect(() => {
    if (isHovering || visibleReviews.length === 0) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visibleReviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isHovering, visibleReviews.length]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[activeIndex] as HTMLElement | undefined;
    if (!card) return;
    scrollRef.current.scrollTo({
      left: card.offsetLeft - 16,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const handleArrow = (direction: "left" | "right") => {
    if (visibleReviews.length === 0) return;
    setActiveIndex((current) => {
      const count = visibleReviews.length;
      return direction === "left" ? (current - 1 + count) % count : (current + 1) % count;
    });
  };

  return (
    <section className="bg-slate-50 py-12 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Google Business</p>
            <h2 className="mt-3 text-[2.6rem] font-bold leading-tight text-slate-900 sm:text-[3.2rem]">
              Self Steer Kashmir Reviews
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-4 text-sm font-semibold text-slate-800">
            <span className="text-[1.1rem] text-slate-900">{ratingLabel}</span>
            <span className="text-slate-500">Average rating</span>
          </div>
        </div>

        {isError && error?.message ? (
          <div className="mb-6 rounded-[24px] border border-rose-200 bg-rose-50 p-5 text-sm text-rose-900 shadow-sm">
            <strong className="block font-semibold">Review fetch issue:</strong>
            <p className="mt-2">{error.message}</p>
            <p className="mt-2 text-rose-700">If you are running locally, make sure the Netlify function or direct Google API credentials are available.</p>
          </div>
        ) : null}

        <div
          className="flex flex-col gap-5 lg:flex-row"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <article className="shrink-0 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)] md:max-w-[300px]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-slate-100 text-2xl font-bold text-slate-900">
                SS
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Self Steer Kashmir</p>
                <h3 className="mt-2 text-[2.4rem] font-bold leading-tight text-slate-900">Self Drive Cars</h3>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-amber-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-5 w-5" />
              ))}
            </div>

            <p className="mt-4 text-lg font-semibold text-slate-900">{totalReviews ?? 102} Google reviews</p>

            <Button asChild className="mt-6 w-full rounded-full border border-slate-200 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              <a href={reviewHref} target="_blank" rel="noopener noreferrer">
                Write a review
              </a>
            </Button>
          </article>

          <div className="relative flex-1 overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)]">
            <button
              type="button"
              onClick={() => handleArrow("left")}
              className="group absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-lg shadow-slate-200/60 transition hover:bg-slate-50"
              aria-label="Previous review"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleArrow("right")}
              className="group absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-lg shadow-slate-200/60 transition hover:bg-slate-50"
              aria-label="Next review"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="no-scrollbar flex gap-5 overflow-x-auto pb-4 scroll-smooth" ref={scrollRef}>
              {isLoading
                ? [1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="min-w-[380px] shrink-0 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.3)]"
                    />
                  ))
                : hasReviews
                ? visibleReviews.map((review, index) => (
                    <article
                      key={review.time ?? index}
                      className={`min-w-[380px] shrink-0 rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.3)] transition-transform duration-300 ${
                        activeIndex === index ? "scale-[1.01]" : "hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.45)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-14 w-14 overflow-hidden rounded-3xl bg-slate-100">
                            {review.profile_photo_url ? (
                              <img
                                src={review.profile_photo_url}
                                alt={review.author_name}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <span className="flex h-full w-full items-center justify-center text-xl font-semibold text-slate-900">
                                {review.author_name?.slice(0, 1)}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="text-[1.5rem] font-semibold text-slate-900">{review.author_name}</p>
                            <p className="text-sm text-slate-500">{review.relative_time_description}</p>
                          </div>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 shadow-sm">
                          <GoogleIcon />
                        </div>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-amber-500">
                        {Array.from({ length: Math.round(review.rating || 5) }).map((_, starIndex) => (
                          <Star key={starIndex} className="h-5 w-5" />
                        ))}
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                          <span className="h-3.5 w-3.5 rounded-full bg-blue-600" />
                          Verified
                        </span>
                      </div>

                      <p className="mt-5 text-[18px] leading-8 text-slate-800 line-clamp-4 overflow-hidden text-ellipsis">
                        {review.text}
                      </p>

                      <a
                        href={reviewHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700"
                      >
                        Read more
                      </a>
                    </article>
                  ))
                : [1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="min-w-[380px] shrink-0 rounded-[20px] border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.3)]"
                    >
                      <p className="text-lg font-semibold text-slate-900">{fallbackTitle}</p>
                      <p className="mt-4 text-sm leading-7 text-slate-500">{fallbackMessage}</p>
                      <a
                        href={reviewHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        View Google reviews
                      </a>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-[20px] bg-white p-4 text-sm shadow-[0_15px_35px_-20px_rgba(15,23,42,0.3)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Verified Google Reviews</p>
            <p className="text-sm text-slate-500">Premium trust signals for Self Steer Kashmir.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-900">✓</span>
            Trustindex verified
          </div>
        </div>
      </div>
    </section>
  );
}
