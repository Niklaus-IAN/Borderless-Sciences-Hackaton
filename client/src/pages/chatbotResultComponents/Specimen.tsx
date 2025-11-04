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
              <p className="text-[#07130E] font-semibold text-[15px]">
                {data?.botanical_name}
              </p>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Common Names</p>
              <>
                {data?.common_names?.map((val: any) => (
                  <p className="text-[#07130E] font-semibold text-[15px]">
                    {val}
                  </p>
                ))}
              </>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Parts Used</p>
              <>
                {data?.parts_used?.map((parts: any) => (
                  <p className="text-[#07130E] font-semibold text-[15px]">
                    {parts}
                  </p>
                ))}
              </>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Preparation Form</p>
              <>
                {data?.preparation_forms?.map((form: any) => (
                  <p className="text-[#07130E] font-semibold text-[15px]">
                    {form}
                  </p>
                ))}
              </>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[#4B5A56]">Morphology</p>
              <p className="text-[#07130E] font-semibold text-[15px]">
                {/* {data?.morphology} */}
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
