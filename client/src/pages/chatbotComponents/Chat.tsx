import { useQueryData } from "@/hooks/useQueryData";
import { API_BASE_URL } from "@/lib/config";
import React, { useState } from "react";
import ResultPage from "./ResultPage";

const ctas = [
  { icon: "/icons/herb-icon.svg", label: "Herb" },
  { icon: "/icons/plaster-icon.svg", label: "Ailment" },
  { icon: "/icons/location-icon.svg", label: "Region" },
  { icon: "/icons/intervention-icon.svg", label: " Intervention Form" },
] as const;

const quickPrompts = [
  "Analyze Neem for anti-inflammatory properties.",
  "Compare Aloe Vera to modern skincare treatments.",
  "Check toxicity levels of Bitter Leaf.",
  "Find herbal remedies for malaria.",
];

const Chat = () => {
  const [isActive, setIsActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");
  const { data, isLoading, error, refetch } = useQueryData({ query: text });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!text.trim()) return;
    await refetch();
  };

  console.log(data);

  return (
    <section className="flex items-center flex-col min-h-screen py-24 px-20">
      {submitted ? (
        <ResultPage data={data} loading={isLoading} error={error} text={text} />
      ) : (
        <>
          <h3 className="text-[50px] font-semibold text-[#07130E]">
            Hello, User
          </h3>
          <p className="text-[#4B5A56] text-[20px] font-medium">
            What herbal knowledge are we exploring today?
          </p>

          {/*User Input Section */}
          <div className="mt-12 w-full max-w-[824px] flex flex-col items-center px-10 py-7 bg-[#F6FFF8] rounded-md gap-6">
            <textarea
              placeholder="Ask Border agent Anything"
              className="w-full h-11 bg-[#F6FFF8] border-red-100 placeholder:text-[#4B5A56] border-none outline-none scrollbar-hide resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            />
            <div className="w-full flex items-center">
              <button className="mr-12">
                <img
                  src="/icons/plus-icon.svg"
                  alt="microphone-icon"
                  className="w-6 h-6"
                />
              </button>
              <div className="flex items-center gap-7">
                {ctas.map((cta, index) => (
                  <button key={index} className="flex items-center gap-2">
                    <img src={cta.icon} alt={cta.label} className="w-5 h-5" />
                    <span className="text-[#7D8C87]">{cta.label}</span>
                  </button>
                ))}
              </div>

              {isActive || text.length > 0 ? (
                <button
                  className="ml-auto bg-[#0E7B5D] w-9 h-9 rounded-full flex items-center justify-center"
                  onClick={handleSubmit}
                >
                  <img
                    className="ml-[3px] w-5 h-5"
                    src="/icons/send-icon.svg"
                    alt="send-icon"
                  />
                </button>
              ) : (
                <button className="ml-auto">
                  <img
                    className="w-5 h-5"
                    src="/icons/microphone.svg"
                    alt="microphone-icon"
                  />{" "}
                </button>
              )}
            </div>
          </div>

          {/*Quick Prompts Section */}
          <div className="flex flex-col gap-8 mt-20">
            <h3 className="text-[#07130E] text-[20px] font-medium leading-6">
              Quick Prompts
            </h3>
            <div className="flex flex-wrap gap-5">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="bg-[#F6FFF8] rounded-full px-6 py-4 text-[#4B5A56] font-normal"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Chat;
