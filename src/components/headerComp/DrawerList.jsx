import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const DrawerList = ({ OpenDrawer }) => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <Lightbulb style={{ fontsize: 3 }} />,
      route: "/",
    },
    {
      id: 2,
      name: "Archives",
      icon: <Archive style={{ fontsize: 3 }} />,
      route: "/ArchivedNotes",
    },
    {
      id: 3,
      name: "Trash",
      icon: <Delete style={{ fontsize: 3 }} />,
      route: "/DeletedNotes",
    },
  ];
  return (
    <List>
      {navList.map((list) => (
        <Link
          to={list.route}
          style={{ textDecoration: "none", display: "flex", color: "inherit" }}
          key={list.id}
        >
          <ListItem
            button
            onMouseEnter={OpenDrawer}
            sx={{
              fontSize: 30,
              color: "black",
              "&:hover": {
                background: "lightblue",
              },
              borderRadius: 10,
              margin: "2px 0px",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default DrawerList;
