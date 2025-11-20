import React from "react";

interface comparisonProps {
  data: any;
}

const Comparisons = ({ data }: comparisonProps) => {
  return (
    <div className="relative bg-[#B4D6CD] px-12 py-8 rounded-[16px] gap-6">
      <div className="bg-white rounded-[16px] px-8 py-8">
        {" "}
        <p className="text-[#07130E]  text-[15px]">
          {Array.isArray(data?.Pharmaceutical_Comparisons)
            ? data.Pharmaceutical_Comparisons.map((item: string, i: number) => (
                <div key={i} className="capitalize mb-2">
                  {item.trim()}
                </div>
              ))
            : typeof data?.Pharmaceutical_Comparisons === "string"
            ? data.Pharmaceutical_Comparisons.split(",").map(
                (item: string, i: number) => (
                  <div key={i} className="capitalize mb-2">
                    {item.trim()}
                  </div>
                )
              )
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Comparisons;
