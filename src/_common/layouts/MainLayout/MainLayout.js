import MainLayoutView from "./MainLayoutView";
import { useMainLayout } from "./context/MainlayoutContext";

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useMainLayout();
  return <MainLayoutView {...{ children, sidebarOpen }} />;
};

export default MainLayout;
