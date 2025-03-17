import { ReactNode } from "react";

interface TabContent {
  id: string;
  title: string;
  icon: string;
  content: ReactNode;
}

interface SidebarProps {
  tabs?: TabContent[];
}
