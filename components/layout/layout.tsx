import Header from "@/components/header/header";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Header />
      <main className={inter.className}>{children}</main>
    </Box>
  );
}
