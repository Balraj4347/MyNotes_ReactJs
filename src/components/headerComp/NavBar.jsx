import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
const HeadBar = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const NavText = styled(Typography)`
  color: #201d1d;
  font-size: 30px;
  margin-left: 25px;
  :hover {
    color: #5f6368;
  }
`;

const NavBar = ({ open, handleDrawer }) => {
  const logo = "NotesLogo.png";
  const me = "me.png";
  return (
    <HeadBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          to="/"
          style={{ textDecoration: "none", display: "flex", color: "inherit" }}
        >
          <IconButton>
            <img src={logo} alt="logo" style={{ width: 30 }} />
          </IconButton>
          <NavText variant="h6" noWrap component="div">
            My Notes
          </NavText>
        </Link>
        <div style={{ marginLeft: "auto", maxWidth: 60 }}>
          <Button href="https://github.com/Balraj4347">
            <img src={me} alt="me" style={{ width: 50, borderRadius: 20 }} />
          </Button>
        </div>
      </Toolbar>
    </HeadBar>
  );
};
export default NavBar;
