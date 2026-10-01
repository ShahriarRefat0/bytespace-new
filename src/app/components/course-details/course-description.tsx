interface CourseDescriptionProps {
  description?: string[];
}

export function CourseDescription({
  description = [],
}: CourseDescriptionProps) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900">
        Description
      </h2>

      <div className="mt-5 space-y-4">
        {description.length > 0 ? (
          description.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-7 text-gray-500"
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-sm leading-7 text-gray-500">
            No description available for this course yet.
          </p>
        )}
      </div>
    </section>
  );
}