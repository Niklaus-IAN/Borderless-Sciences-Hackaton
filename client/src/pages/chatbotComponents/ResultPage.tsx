import { ChatTabType } from "@/types/types";
import React, { useState } from "react";
import Compounds from "../chatbotResultComponents/Compounds";
import Toxicities from "../chatbotResultComponents/Toxicities";
import Botanicals from "../chatbotResultComponents/Botanicals";
import Ailments from "../chatbotResultComponents/Ailments";
import Comparisons from "../chatbotResultComponents/Comparisons";
import Specimen from "../chatbotResultComponents/Specimen";

type ResultPageProps = {
  data?: any;
  loading?: boolean;
  error?: any;
  text?: React.ReactNode;
};

const ResultPage: React.FC<ResultPageProps> = ({
  data,
  loading,
  error,
  text,
}) => {
  const [chatTabContent, setChatTabContent] = useState<ChatTabType>("specimen");

  const renderContent = () => {
    switch (chatTabContent) {
      case "specimen":
        return <Specimen data={data?.result} />;
      case "compounds":
        return <Compounds data={data?.result} />;
      case "toxicities":
        return <Toxicities data={data?.result} />;
      case "botanicals":
        return <Botanicals data={data?.result} />;
      case "ailments":
        return <Ailments data={data?.result} />;
      case "comparisons":
        return <Comparisons data={data?.result} />;
      default:
        return null;
    }
  };

  const tabs = [
    { name: "Specimen Description", content: "specimen" },
    { name: "Key Compounds", content: "compounds" },
    { name: "Toxicities & Deficiencies", content: "toxicities" },
    { name: "Complementary Botanicals", content: "botanicals" },
    { name: "Treatable Ailments", content: "ailments" },
    { name: "Pharmaceutical Comparisons", content: "comparisons" },
  ];

  return (
    <section className="flex items-center w-full flex-col min-h-screen">
      <div className="bg-[#F6FFF8] ml-auto px-8 py-4 rounded-[16px] max-w-[540px] mb-16">
        <p className="text-[#07130E]">{text}</p>
      </div>

      <div>
        {!loading && data && data?.success !== false && (
          <div className="flex items-center justify-between gap-3 mb-7">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setChatTabContent(tab.content as ChatTabType)}
                className={`${
                  chatTabContent === tab.content
                    ? "bg-[#B4D6CD] text-white"
                    : "bg-[#F6FFF8] text-[#07130E]"
                } shadow-[0_4px_6px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(0,0,0,0.25)] rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] px-2 py-2 flex items-center justify-center`}
              >
                <p className="text-center leadind-[22px] text-[16px]">
                  {" "}
                  {tab.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <>
          {loading ? (
            <div className="w-[700px] rounded-[16px] bg-[#B4D6CD] h-[394px] flex items-center justify-center">
              <img
                src="/icons/spinner.svg"
                alt="spinner"
                className="w-[125px] h-[125px] animate-spin"
                style={{ animationDuration: "2s" }}
              />
            </div>
          ) : data && data?.success !== false ? (
            renderContent()
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center">
              An error occured, please try again later.
            </div>
          )}
        </>
      </div>
    </section>
  );
};

export default ResultPage;
