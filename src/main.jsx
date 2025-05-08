import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import GuestScreen from './screens/GuestScreen'
import Navbar from "./components/Navbar";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/guest" element={<GuestScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    ,
  </React.StrictMode>
);
