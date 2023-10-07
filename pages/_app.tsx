import { NextComponentType } from "next";
import React from "react";
import RootLayout from "./layout";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
