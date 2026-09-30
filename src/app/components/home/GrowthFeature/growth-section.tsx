import { CreatorVisual } from "./creator-visual";
import { GrowthFeature } from "./growth-feature";
import { GrowthVisual } from "./growth-visual";

export function GrowthSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* ========================================
            FEATURE 01
        ======================================== */}
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

        {/* ========================================
            FEATURE 02
        ======================================== */}
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