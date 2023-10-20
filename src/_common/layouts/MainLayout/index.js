import MainLayout from "./MainLayout";
import { MainLayoutContextProvider } from "./context/MainlayoutContext";

const MainLayoutWrapper = ({ children }) => {
  return (
    <MainLayoutContextProvider>
      <MainLayout>{children} </MainLayout>
    </MainLayoutContextProvider>
  );
};

export default MainLayoutWrapper;
