import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

export function TestimonialCard({
  name,
  role,
  image,
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="rounded-[28px] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
      {/* Avatar */}
      <div className="mb-6">
        <Image
          src={image}
          alt={name}
          width={92}
          height={92}
          className="h-[92px] w-[92px] rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold tracking-tight text-[#080D24]">
        {name}
      </h3>

      {/* Role */}
      <p className="mt-1 text-lg text-[#1555E8]">
        {role}
      </p>

      {/* Testimonial */}
      <p className="mt-8 text-lg leading-[1.7] text-[#666666]">
        {testimonial}
      </p>
    </article>
  );
}