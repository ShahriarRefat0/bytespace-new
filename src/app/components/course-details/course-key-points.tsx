import { CheckCircle2 } from "lucide-react";

interface CourseKeyPointsProps {
  points?: string[];
}

export function CourseKeyPoints({
  points = [],
}: CourseKeyPointsProps) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-gray-900">
        Key Points
      </h2>

      <div className="mt-5 space-y-3">
        {points.length > 0 ? (
          points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[#1555e8]"
                fill="currentColor"
                strokeWidth={0}
              />

              <span className="text-sm text-gray-500">
                {point}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            Key points will be added soon.
          </p>
        )}
      </div>
    </section>
  );
}