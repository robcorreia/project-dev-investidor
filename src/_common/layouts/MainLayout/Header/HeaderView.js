import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./HeaderStyle";

const HeaderView = ({ handleToggleSidebar }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleToggleSidebar}>
          <MenuIcon />
        </IconButton>

        <Typography className={classes.title} variant="h6">
          Task Organize
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderView;
