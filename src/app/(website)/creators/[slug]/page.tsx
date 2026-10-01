import { notFound } from "next/navigation";

import { courses } from "@/data/courses/courses";

import { CreatorProfileHero } from "@/app/components/creators/creator-profile-hero";
import { CreatorCourseSection } from "@/app/components/creators/creator-course-section";
import { creators } from "@/data/creators/creators";

interface CreatorPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CreatorPage({
    params,
}: CreatorPageProps) {
    const { slug } = await params;

    const creator = creators.find(
        (creator) => creator.slug === slug,
    );

    if (!creator) {
        notFound();
    }

    const creatorCourses = courses.filter(
        (course) => course.creatorId === creator.id,
    );

    return (
        <>
            <CreatorProfileHero creator={creator} />

            <main className="bg-white">

                <CreatorCourseSection
                    creator={creator}
                    courses={creatorCourses}
                />
            </main>
        </>
    );
}