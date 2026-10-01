import { GlowLight } from "../ui/glow-light";
import { CreatorVisual } from "./creator-visual";
import { GrowthFeature } from "./growth-feature";
import { GrowthVisual } from "./growth-visual";

export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background ambient glows */}
      <GlowLight
        variant="yellow"
        size={700}
        opacity={0.3}
        className="-right-60 top-10"
      />
      <GlowLight
        variant="blue"
        size={600}
        opacity={0.18}
        className="-left-60 top-1/3"
      />
      <GlowLight
        variant="yellow"
        size={650}
        opacity={0.25}
        className="-left-60 bottom-10"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        {/* FEATURE 01*/}
        <GrowthFeature
          title={
            <>
              Your Path to Professional
              <br />
              Growth starts Here!
            </>
          }
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          visual={<GrowthVisual />}
          stats={[
            {
              value: "12K",
              label: "Students",
            },
            {
              value: "70+",
              label: "Courses",
            },
            {
              value: "16",
              label: "Creators",
            },
          ]}
        />

        {/* FEATURE 02 */}
        <GrowthFeature
          reverse
          title={
            <>
              Create & Manage
              <br />
              Courses Easily.
            </>
          }
          description={
            <>
              <strong className="font-semibold text-[#111827]">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </>
          }
          visual={<CreatorVisual />}
          benefits={[
            "Share Your Expertise",
            "Monetize Your Passion",
            "Flexibility and Autonomy",
            "Build a Community",
          ]}
        />
      </div>
    </section>
  );
}