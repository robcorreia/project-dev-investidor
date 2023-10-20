import { useMainLayout } from "../context/MainlayoutContext";
import SidebarView from "./SidebarView";

const Sidebar = () => {
  const { sidebarOpen } = useMainLayout();

  return <SidebarView {...{ sidebarOpen }} />;
};

export default Sidebar;
