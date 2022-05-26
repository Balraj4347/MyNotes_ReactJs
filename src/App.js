import "./App.css";
import Home from "./components/home";
import DataProvider from "./components/context/DataProvider";
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Home />
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
