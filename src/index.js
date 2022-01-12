import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";

// Custom MUI theme
import theme from "./styles/muiTheme";

// Global styles
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
