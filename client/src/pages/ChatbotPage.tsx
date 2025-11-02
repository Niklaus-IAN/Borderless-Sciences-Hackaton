import React, { useState } from "react";
import SidebarLeft from "./chatbotComponents/SidebarLeft";
import SidebarRight from "./chatbotComponents/SidebarRight";
import Chat from "./chatbotComponents/Chat";
import Onchain from "./chatbotComponents/Onchain";
import Community from "./chatbotComponents/Community";
import Settings from "./chatbotComponents/Settings";
import { TabType } from "@/types/types";

const ChatbotPage: React.FC = () => {
  const [tabContent, setTabContent] = useState<TabType>("chat");

  const renderContent = () => {
    switch (tabContent) {
      case "chat":
        return <Chat />;
      case "onchain":
        return <Onchain />;
      case "community":
        return <Community />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Left */}
      <SidebarLeft tabContent={tabContent} setTabContent={setTabContent} />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-y-auto ">
        <header className="p-4 border-b h-[85px] bg-[#DAECE3]">
          <h1 className="text-[32px] font-semibold capitalize ml-3">
            {tabContent === "chat" ? "AI Chat" : tabContent}
          </h1>
        </header>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {renderContent()}
        </div>
      </main>

      {/* Sidebar Right */}
      {tabContent !== "settings" && tabContent !== "community" && (
        <SidebarRight tabContent={tabContent} setTabContent={setTabContent} />
      )}
    </div>
  );
};

export default ChatbotPage;
