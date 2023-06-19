import React from "react";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { themes } from "./ui-kit/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={themes.lightTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
