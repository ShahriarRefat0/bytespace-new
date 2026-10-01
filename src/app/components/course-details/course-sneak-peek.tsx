import Image from "next/image";

interface CourseSneakPeekProps {
  images?: string[];
}

export function CourseSneakPeek({
  images = [],
}: CourseSneakPeekProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-gray-900">
        Sneak Peek
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative aspect-[1.35/1] overflow-hidden rounded-xl bg-gray-100"
          >
            <Image
              src={image}
              alt={`Course preview ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}