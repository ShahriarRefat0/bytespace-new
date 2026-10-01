import { CircleCheck } from "lucide-react";

interface CourseKeyPointsProps {
  points: string[];
}

export function CourseKeyPoints({
  points,
}: CourseKeyPointsProps) {
  return (
    <div className="mt-10">
      <h2 className="text-base font-bold text-gray-900">
        Key Points
      </h2>

      <ul className="mt-5 space-y-3">
        {points.map((point, index) => (
          <li
            key={`${point}-${index}`}
            className="flex items-start gap-3"
          >
            <CircleCheck
              size={16}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0 text-[#1555e8]"
            />

            <span className="text-sm text-gray-500">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}