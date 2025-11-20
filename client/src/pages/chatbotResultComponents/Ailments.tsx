import { Dot } from "lucide-react";
import React from "react";

interface ailmentProps {
  data: any;
}

const Ailments = ({ data }: ailmentProps) => {
  return (
    <div className="relative bg-[#B4D6CD] px-12 py-8 rounded-[16px] gap-6">
      <div className="bg-white rounded-[16px] px-8 py-8">
        {" "}
        <p className="text-[#07130E]  text-[15px]">
          {Array.isArray(data?.Treatable_ailments)
            ? data.Treatable_ailments.map((item: string, i: number) => (
                <div key={i} className="capitalize mb-2 flex items-center">
                  <Dot className="w-5 h-5" />
                  <p> {item.trim()}</p>
                </div>
              ))
            : typeof data?.Treatable_ailments === "string"
            ? data.Treatable_ailments.split(",").map(
                (item: string, i: number) => (
                  <div key={i} className="capitalize mb-2 flex items-center">
                    <Dot />
                    <p> {item.trim()}</p>
                  </div>
                )
              )
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Ailments;
