import React from "react";

interface BotanicalsProps {
  data: {
    Complementary_Botanicals?: string | string[];
  };
}

const Botanicals: React.FC<BotanicalsProps> = ({ data }) => {
  if (!data?.Complementary_Botanicals) return <div>N/A</div>;

  // Normalize to array
  const items: string[] = Array.isArray(data.Complementary_Botanicals)
    ? data.Complementary_Botanicals
    : [data.Complementary_Botanicals]; // keep string as single-element array

  // Split into left/right based on index parity, then slice max 2
  const leftItems = items.filter((_, i) => i % 2 === 0).slice(0, 2);
  const rightItems = items.filter((_, i) => i % 2 !== 0).slice(0, 2);

  return (
    <div className="relative bg-[#B4D6CD] px-12 py-8 rounded-[16px] flex gap-6">
      <img
        src="/figmaAssets/clips.png"
        alt="clips"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src="/figmaAssets/clips.png"
        alt="clips"
        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Left div */}
      <div className="bg-white rounded-[16px] px-8 py-8 flex-1 h-[236px] overflow-y-auto">
        {leftItems.map((item, index) => (
          <div key={index} className="mb-2">
            {item}
          </div>
        ))}
      </div>

      {/* Right div */}
      <div className="bg-white rounded-[16px] px-8 py-8 flex-1 h-[236px] overflow-y-auto">
        {rightItems.map((item, index) => (
          <div key={index} className="mb-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Botanicals;
