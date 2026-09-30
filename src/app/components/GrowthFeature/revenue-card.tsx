interface RevenueCardProps {
  type: "revenue" | "year";
}

export function RevenueCard({ type }: RevenueCardProps) {
  const isRevenue = type === "revenue";

  return (
    <div
      className={`absolute left-0 z-10 w-[190px] rounded-[18px] bg-[#1450E5] p-5 text-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] ${
        isRevenue ? "top-[50px]" : "top-[220px]"
      }`}
    >
      <p className="text-sm font-medium">
        {isRevenue ? "Total Revenue" : "Year to Date"}
      </p>

      <p className="mt-1 text-xs text-white/70">
        {isRevenue ? "July 1-28" : "2023"}
      </p>

      <p className="mt-4 text-2xl font-semibold">
        {isRevenue ? "$120.29" : "$1,200.38"}
      </p>

      {isRevenue ? (
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[65%] rounded-full bg-[#C7FF00]" />
        </div>
      ) : (
        <span className="mt-3 inline-flex rounded-full bg-[#C7FF00] px-2 py-1 text-[10px] font-semibold text-[#111827]">
          +12$
        </span>
      )}
    </div>
  );
}