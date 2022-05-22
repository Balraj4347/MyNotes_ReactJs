import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftDrawer from "./headerComp/leftDrawer";
import Notes from "./Notes/Notes";
import Deletes from "../components/Trash/Deletes";
import Archives from "../components/Archive/Archives";
const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <LeftDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/DeletedNotes" element={<Deletes />} />
          <Route path="/ArchivedNotes" element={<Archives />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
