import { Drawer, List } from "@mui/material";
import useStyles from "./SidebarStyle";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import clsx from "clsx";
import MenuItem from "./MenuItem";

const menu = [
  {
    text: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    path: "/dashboard"
  },
  {
    text: "Usuários",
    icon: <PeopleAltOutlinedIcon />,
    path: "/usuarios"
  },
  {
    text: "Tarefas",
    icon: <CheckCircleOutlineOutlinedIcon />,
    items: [
      {
        text: "Minhas",
        path: "/tarefas/minhas"
      },
      {
        text: "Em Aberto",
        path: "/tarefas/abertas"
      },
      {
        text: "Finalizadas",
        path: "/tarefas/finalizadas"
      },
      {
        text: "Todas",
        path: "/tarefas"
      }
    ]
  }
];

const SidebarView = ({ sidebarOpen }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: sidebarOpen,
          [classes.drawerClose]: !sidebarOpen
        })
      }}>
      <List>
        {menu.map((item, index) => (
          <MenuItem key={index} {...{ item }} />
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarView;
