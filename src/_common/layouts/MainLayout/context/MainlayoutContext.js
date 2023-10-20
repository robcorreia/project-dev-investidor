import { createContext, memo, useContext, useState } from "react";

export const MainLayoutContext = createContext(null);
MainLayoutContext.displayName = "MainLayoutContext";

export const useMainLayout = () => {
  const context = useContext(MainLayoutContext);

  if (!context) throw new Error("useMainLayout precisa estar em MainLayoutContextProvider");
  return context;
};

export const MainLayoutContextProvider = memo(({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return <MainLayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</MainLayoutContext.Provider>;
});
