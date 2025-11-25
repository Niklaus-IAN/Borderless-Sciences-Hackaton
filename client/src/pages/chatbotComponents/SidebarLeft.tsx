import { Input } from "@/components/ui/input";
import { TabType } from "@/types/types";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "wouter";

interface SidebarLeftProps {
  tabContent: TabType;
  setTabContent: React.Dispatch<React.SetStateAction<TabType>>;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({
  tabContent,
  setTabContent,
}) => {
  const [sidebarShown, setSidebarShown] = useState(true);

  const tabs = [
    { id: "chat", label: "AI Chat", icon: "/icons/aichat.svg" },
    { id: "onchain", label: "Onchain", icon: "/icons/OnChainIcon.svg" },
    { id: "community", label: "Community", icon: "/icons/community.svg" },
    { id: "settings", label: "Settings", icon: "/icons/setting.svg" },
  ] as const;

  return (
    <aside
      className={`${
        sidebarShown ? "w-[275px]" : "w-[88px] min-h-screen"
      } bg-[#DAECE3] border-r border-[#7D8C87]/10 flex flex-col py-5 transition-all duration-300`}
    >
      {/* Logo and Toggle */}
      <div
        className={`flex items-center justify-between  ${
          sidebarShown ? "px-9" : "px-4  flex-col gap-5"
        }`}
      >
        <Link href="/">
          {" "}
          <img
            src="/icons/borderless-logo.png"
            alt="borderless-logo"
            className="w-[30px] h-[50px] cursor-pointer"
          />
        </Link>

        <img
          src="/icons/toggleIcon.png"
          alt="toggle-icon"
          className={`w-5 ${sidebarShown ? "h-5" : "h-[17px]"} cursor-pointer`}
          onClick={() => setSidebarShown((prev) => !prev)}
        />
      </div>

      {/* search */}
      {sidebarShown && (
        <div className="px-9">
          <div className="flex items-center gap-2 border border-[#B4D6CD] h-[37px] w-full rounded-[30px] px-1 pl-2 mt-12">
            <img
              src="/icons/searchIcon.svg"
              alt={`search-icon`}
              className="w-4 h-4"
            />
            <Input
              className="border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none shadow-none bg-transparent placeholder:text-[#B4D6CD]"
              placeholder="Search"
            />
          </div>
        </div>
      )}

      {/* Tabs */}
      <nav
        className={`${
          sidebarShown ? "px-6" : "px-4"
        } mt-12 flex flex-col gap-2`}
      >
        {tabs.map((tab) => (
          <button
            id={tab.id}
            key={tab.id}
            onClick={() => setTabContent(tab.id)}
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

      {/* Footer */}
      <footer
        className={`${
          sidebarShown ? "px-9" : "px-2 justify-center"
        } mt-auto flex items-center gap-3 pt-9 pb-2 border-t border-[#B4D6CD]`}
      >
        <img
          src="/icons/profile-pic.png"
          alt="profile"
          className="w-11 h-12 rounded-sm object-cover"
        />
        {sidebarShown && (
          <div>
            <p className="font-semibold text-black">User</p>
            <span className="text-[#7D8C87]">Student</span>
          </div>
        )}
      </footer>
    </aside>
  );
};

export default SidebarLeft;
