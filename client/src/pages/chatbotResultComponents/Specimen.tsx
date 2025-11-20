import React from "react";

interface SpecimenProps {
  data: any;
}

const Specimen = ({ data }: SpecimenProps) => {
  console.log(data);
  return (
    <div className="bg-[#B4D6CD] px-12 py-8 rounded-[16px]">
      {" "}
      <div className="bg-white rounded-[16px] px-8 py-8">
        {data ? (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Botanical Name</p>
              <p className="text-[#07130E] font-bold text-[15px]">
                {data?.Botanical_name || "N/A"}
              </p>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Common Names</p>
              <p className="text-[#07130E] font-semibold text-[15px]">
                {Array.isArray(data?.Common_name)
                  ? data.Common_name.slice(0, 3).join(", ")
                  : data?.Common_name || "N/A"}
              </p>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Parts Used</p>
              <>
                <p className="text-[#07130E] font-semibold text-[15px]">
                  {Array.isArray(data?.Parts_used)
                    ? data.Parts_used.join(", ")
                    : data?.Parts_used || "N/A"}
                </p>
              </>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Preparation Form</p>
              <>
                <p className="text-[#07130E] font-semibold text-[15px]">
                  {Array.isArray(data?.Preparation_form)
                    ? data.Preparation_form.join(", ")
                    : data?.Preparation_form || "N/A"}
                </p>
              </>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Morphology</p>
              <p className="text-[#07130E] font-semibold text-[15px]">
                {(() => {
                  const value = data?.Morphology;

                  if (!value) return "N/A";

                  // If it's an array
                  if (Array.isArray(value)) {
                    return value.slice(0, 3).join(", ");
                  }

                  // If it's a string
                  if (typeof value === "string") {
                    return value;
                  }

                  // If it's an object, take first 3 values
                  if (typeof value === "object") {
                    return Object.values(value)
                      .slice(0, 3)
                      .map((v) => String(v).trim())
                      .join(", ");
                  }

                  return "N/A";
                })()}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Specimen;
