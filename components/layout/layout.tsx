import Header from "@/components/header/header";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Header />
      <Box className={inter.className}>{children}</Box>
    </Box>
  );
}
