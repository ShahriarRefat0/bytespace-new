export function LearningProgressCard() {
  return (
    <div className="absolute right-0 top-[250px] z-30 w-[250px] rounded-[20px] bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
      <p className="text-sm font-medium text-[#333333]">
        Learning Progress
      </p>

      <p className="mt-2 text-5xl font-semibold tracking-tight text-[#111827]">
        55%
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-[55%] rounded-full bg-[#C7FF00]" />
      </div>
    </div>
  );
}