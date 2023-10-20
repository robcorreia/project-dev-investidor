import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./HeaderStyle";

const HeaderView = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit">
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
