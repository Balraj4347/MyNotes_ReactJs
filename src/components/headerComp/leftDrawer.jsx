import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

// components imported
import NavBar from "./NavBar";
import DrawerList from "./DrawerList";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  //necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LeftDrawer = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen((prevstate) => !prevstate);
  };
  const OpenDrawer = () => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar open={open} handleDrawer={handleDrawer} />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <DrawerList open={open} OpenDrawer={OpenDrawer} />
      </Drawer>
    </Box>
  );
};

export default LeftDrawer;
