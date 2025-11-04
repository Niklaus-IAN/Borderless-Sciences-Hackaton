export type TabType =
  | "chat"
  | "onchain"
  | "community"
  | "settings"
  | "new_chat"
  | "search_chat"
  | "my_records"
  | "all_records";

export type ChatTabType =
  | "specimen"
  | "compounds"
  | "toxicities"
  | "botanicals"
  | "ailments"
  | "comparisons";

export type CommonSidebarProps = {
  sidebarShown: boolean;
  setSidebarShown: React.Dispatch<React.SetStateAction<boolean>>;
  tabContent: TabType;
  setTabContent: React.Dispatch<React.SetStateAction<TabType>>;
};
