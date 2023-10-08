import { NextComponentType } from "next";
import React from "react";
import RootLayout from "../components/layout/layout";
import { ThemeProvider } from "@mui/material";
import "@/styles/globals.css";
import customTheme from "@/styles/customTheme";
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return (
    <ThemeProvider theme={customTheme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
