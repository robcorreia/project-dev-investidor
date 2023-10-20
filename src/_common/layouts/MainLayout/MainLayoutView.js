import { useTheme } from "@mui/styles";
import Header from "./Header";
import useStyles from "./MainLayoutStyle";
import Sidebar from "./Sidebar";

const MainLayoutView = ({ children, sidebarOpen }) => {
  const classes = useStyles({ sidebarOpen });
  const theme = useTheme();

  return (
    <>
      <Header />
      <Sidebar />
      <main style={{ marginLeft: sidebarOpen ? theme.spacing(30) : theme.spacing(8) }} className={classes.main}>
        {children}
      </main>
    </>
  );
};

export default MainLayoutView;
