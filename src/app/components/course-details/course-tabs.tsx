"use client";

interface CourseTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  "About",
  "Lessons",
  "Reviews",
];

export function CourseTabs({
  activeTab,
  onTabChange,
}: CourseTabsProps) {
  return (
    <div className="flex items-center gap-2">
      {tabs.map((tab) => {
        const active = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`cursor-pointer rounded-full px-5 py-2 text-xs font-medium transition ${
              active
                ? "bg-[#d8ff00] text-black"
                : "bg-[#f5f5f5] text-gray-500 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}