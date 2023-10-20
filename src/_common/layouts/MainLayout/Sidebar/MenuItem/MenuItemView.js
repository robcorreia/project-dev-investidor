import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const MenuItemView = ({ item, open, handleClick }) => {
  const { pathname } = useLocation();

  const { text, icon, path, items } = item;

  return (
    <>
      <ListItemButton key={text} component={path ? Link : "li"} to={path} onClick={items ? handleClick : null} selected={pathname === path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {items && (open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
      </ListItemButton>
      {items && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((subItem, index) => (
              <MenuItem key={`subItem-${index}`} item={subItem} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default MenuItemView;
