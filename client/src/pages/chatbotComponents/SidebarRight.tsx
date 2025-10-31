import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CommonSidebarProps, TabType } from "@/types/types";
import { Tooltip } from "react-tooltip";

interface SidebarRightProps {
  tabContent: TabType;
  setTabContent: React.Dispatch<React.SetStateAction<TabType>>;
}

const ChatSidebarTabs = [
  { id: "new_chat", label: "New Chat", icon: "/icons/NewchatIcon.svg" },
  {
    id: "search_chat",
    label: "Search Chat",
    icon: "/icons/searchChatIcon.svg",
  },
] as const;

const OnchainSidebarTabs = [
  { id: "my_records", label: "My Records", icon: "/icons/my-record-icon.svg" },
  {
    id: "all_records",
    label: "All Records",
    icon: "/icons/all-record-icon.svg",
  },
] as const;

const ChatSideBar: React.FC<CommonSidebarProps> = ({
  sidebarShown,
  tabContent,
  setTabContent,
}) => {
  return (
    <nav
      className={`${sidebarShown ? "px-6" : "px-4"} mt-12 flex flex-col gap-2`}
    >
      {ChatSidebarTabs.map((tab) => (
        <button
          id={tab.id}
          key={tab.id}
          // onClick={() => setTabContent(tab.id)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 h-[50px] ${
            tabContent === tab.id
              ? "bg-[#F6FFF8] text-black shadow-[inset_0_4px_8px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.25)]"
              : "hover:bg-[#c7e3d5] text-gray-700"
          } ${sidebarShown ? "justify-start" : "justify-center"}`}
        >
          <img
            src={tab.icon}
            alt={`${tab.label} icon`}
            className="w-4 h-4 object-contain"
          />
          {sidebarShown && (
            <span className="capitalize font-bold">{tab.label}</span>
          )}{" "}
          {!sidebarShown && (
            <Tooltip anchorSelect={`#${tab.id}`} place="top">
              {tab.label}
            </Tooltip>
          )}
        </button>
      ))}
    </nav>
  );
};

const OnChainSideBar: React.FC<CommonSidebarProps> = ({
  sidebarShown,
  tabContent,
  setTabContent,
}) => {
  return (
    <nav
      className={`${sidebarShown ? "px-6" : "px-4"} mt-12 flex flex-col gap-2`}
    >
      {OnchainSidebarTabs.map((tab) => (
        <button
          id={tab.id}
          key={tab.id}
          // onClick={() => setTabContent(tab.id)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 h-[50px] ${
            tabContent === tab.id
              ? "bg-[#F6FFF8] text-black shadow-[inset_0_4px_8px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.25)]"
              : "hover:bg-[#c7e3d5] text-gray-700"
          } ${sidebarShown ? "justify-start" : "justify-center"}`}
        >
          <img
            src={tab.icon}
            alt={`${tab.label} icon`}
            className="w-4 h-4 object-contain"
          />
          {sidebarShown && (
            <span className="capitalize font-bold">{tab.label}</span>
          )}
          {!sidebarShown && (
            <Tooltip anchorSelect={`#${tab.id}`} place="top">
              {tab.label}
            </Tooltip>
          )}
        </button>
      ))}
    </nav>
  );
};

const SidebarRight: React.FC<SidebarRightProps> = ({
  tabContent,
  setTabContent,
}) => {
  const [sidebarShown, setSidebarShown] = useState(true);

  return (
    <aside
      className={`${
        sidebarShown ? "w-[275px]" : "w-[88px]"
      } min-h-screen bg-[#DAECE3] border-l border-[#7D8C87]/10 flex flex-col py-5 transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-9 gap-5">
        <img
          src="/icons/toggleIcon.png"
          alt="toggle-icon"
          className="w-5 h-4 cursor-pointer"
          onClick={() => setSidebarShown((prev) => !prev)}
        />
        {sidebarShown && (
          <Button className="bg-[#0E7B5D] hover:bg-[#0c6a50] text-white">
            {tabContent === "chat" ? "Generate" : "Connect Wallet"}
          </Button>
        )}
      </div>

      {tabContent === "chat" && (
        <ChatSideBar
          sidebarShown={sidebarShown}
          setSidebarShown={setSidebarShown}
          tabContent={tabContent}
          setTabContent={setTabContent}
        />
      )}
      {tabContent === "onchain" && (
        <OnChainSideBar
          sidebarShown={sidebarShown}
          setSidebarShown={setSidebarShown}
          tabContent={tabContent}
          setTabContent={setTabContent}
        />
      )}
    </aside>
  );
};

export default SidebarRight;
