import { GlowLight } from "../../ui/glow-light";
import { TestimonialCard } from "./testimonial-card";


const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/students/student-1.png",
    testimonial:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/students/student-4.png",
    testimonial:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/students/student-5.png",
    testimonial:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function CommunityTestimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Background glows */}
      <GlowLight
        variant="yellow"
        size={750}
        opacity={0.35}
        className="-right-80 -top-80"
      />

      <GlowLight
        variant="blue"
        size={650}
        opacity={0.25}
        className="-bottom-80 -left-80"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="max-w-[560px] text-4xl font-bold leading-[1.15] tracking-tight text-[#080D24] md:text-5xl lg:text-[52px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="flex items-start">
            <p className="max-w-[650px] text-lg leading-[1.7] text-[#666666] md:text-xl">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}