"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import theme from "../theme";

export function Layout({ children }) {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}

export default Layout;
