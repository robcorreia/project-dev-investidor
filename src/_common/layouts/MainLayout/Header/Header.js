import { useMainLayout } from "../context/MainlayoutContext";
import HeaderView from "./HeaderView";

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useMainLayout();

  const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return <HeaderView {...{ handleToggleSidebar }} />;
};

export default Header;
