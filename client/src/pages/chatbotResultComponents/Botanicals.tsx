import React from "react";

const Botanicals = ({ data }) => {
  return (
    <div className="relative bg-[#B4D6CD] px-12 py-8 rounded-[16px] flex items-center gap-6">
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
      <div className="bg-white rounded-[16px] px-8 py-8 flex-1 h-[236px]"></div>
      <div className="bg-white rounded-[16px] px-8 py-8 flex-1 h-[236px]"></div>
    </div>
  );
};

export default Botanicals;
