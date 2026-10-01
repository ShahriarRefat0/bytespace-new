import type { Creator } from "@/app/types/creator";

interface CourseInstructorProps {
  creator?: Creator;
}

export function CourseInstructor({
  creator,
}: CourseInstructorProps) {
  if (!creator) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-gray-900">
        About the Instructor
      </h2>

      <div className="mt-5 flex items-start gap-4">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-900">
            {creator.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {creator.role}
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            {creator.bio}
          </p>
        </div>
      </div>
    </section>
  );
}