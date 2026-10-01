"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";

import type { Course } from "@/data/courses/courses";
import type { CourseReview } from "@/data/courses/course-reviews";

interface CourseReviewsContentProps {
  course: Course;
  reviews: CourseReview[];
}

const ratingFilters = [
  { label: "All rating", value: 0 },
  { label: "5", value: 5 },
  { label: "4", value: 4 },
  { label: "3", value: 3 },
  { label: "2", value: 2 },
  { label: "1", value: 1 },
];

export function CourseReviewsContent({
  course,
  reviews,
}: CourseReviewsContentProps) {
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredReviews = useMemo(() => {
    if (selectedRating === 0) {
      return reviews;
    }

    return reviews.filter(
      (review) => review.rating === selectedRating,
    );
  }, [reviews, selectedRating]);

  const ratingCounts = useMemo(() => {
    return {
      5: reviews.filter((review) => review.rating === 5).length,
      4: reviews.filter((review) => review.rating === 4).length,
      3: reviews.filter((review) => review.rating === 3).length,
      2: reviews.filter((review) => review.rating === 2).length,
      1: reviews.filter((review) => review.rating === 1).length,
    };
  }, [reviews]);

  const totalReviews = reviews.length;

  const getPercentage = (rating: number) => {
    if (!totalReviews) return 0;

    return Math.round(
      (ratingCounts[rating as keyof typeof ratingCounts] /
        totalReviews) *
        100,
    );
  };

  return (
    <div className="mt-10 w-full">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          What Learners Are Saying
        </h2>

        <p className="mt-4 w-full text-sm leading-6 text-gray-500">
          Discover what our learners have to say about their experience
          with "{course.title}". Read reviews and ratings from individuals
          who have embarked on the transformative journey of mastering
          digital asset creation.
        </p>
      </div>

      {/* Rating Summary */}
      <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-7">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          {/* Overall Rating */}
          <div className="flex h-32 w-28 shrink-0 flex-col items-center justify-center rounded-lg bg-[#d8ff00]">
            <span className="text-xs font-medium text-gray-800">
              Ratings
            </span>

            <span className="mt-1 text-3xl font-bold text-gray-900">
              {course.rating}
            </span>
          </div>

          {/* Distribution */}
          <div className="w-full max-w-[430px] space-y-2.5">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count =
                ratingCounts[
                  rating as keyof typeof ratingCounts
                ];

              const percentage = getPercentage(rating);

              return (
                <div
                  key={rating}
                  className="flex items-center gap-3"
                >
                  {/* Stars */}
                  <div className="flex w-[92px] shrink-0 items-center gap-0.5">
                    {Array.from({ length: 5 }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          size={14}
                          fill="currentColor"
                          strokeWidth={1.5}
                          className="text-gray-700"
                        />
                      ),
                    )}
                  </div>

                  {/* Progress */}
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-[#d8ff00] transition-all"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  {/* Count */}
                  <span className="w-8 text-right text-xs text-gray-500">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mt-5">
        <h3 className="text-base font-bold text-gray-900">
          Individual Reviews:
        </h3>

        {/* Rating Filters */}
        <div className="mt-5 flex flex-wrap gap-3">
          {ratingFilters.map((filter) => {
            const isActive =
              selectedRating === filter.value;

            return (
              <button
                key={filter.label}
                type="button"
                onClick={() =>
                  setSelectedRating(filter.value)
                }
                className={`flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#d8ff00] text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.value > 0 && (
                  <Star
                    size={13}
                    fill="currentColor"
                  />
                )}

                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Reviews */}
        <div className="mt-5 space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-gray-200 p-8 text-center">
              <p className="text-sm text-gray-400">
                No reviews found for this rating.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ReviewCardProps {
  review: CourseReview;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-7">
      {/* User */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={review.userAvatar}
            alt={review.userName}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              {review.userName}
            </p>

            <p className="mt-0.5 text-xs text-gray-400">
              {review.role}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-xs text-gray-400">
          {formatReviewDate(review.createdAt)}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill={
              index < review.rating
                ? "currentColor"
                : "none"
            }
            className={
              index < review.rating
                ? "text-gray-700"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Comment */}
      <p className="mt-5 text-sm leading-6 text-gray-500">
        "{review.comment}"
      </p>
    </article>
  );
}

function formatReviewDate(date: string) {
  const reviewDate = new Date(date);

  if (Number.isNaN(reviewDate.getTime())) {
    return date;
  }

  const now = new Date();

  const diffInDays = Math.floor(
    (now.getTime() - reviewDate.getTime()) /
      (1000 * 60 * 60 * 24),
  );

  if (diffInDays < 1) {
    return "today";
  }

  if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  }

  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);

    return `${months} ${
      months === 1 ? "month" : "months"
    } ago`;
  }

  const years = Math.floor(diffInDays / 365);

  return `${years} ${years === 1 ? "year" : "years"} ago`;
}