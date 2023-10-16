import Header from "@/components/header/header";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import NavBanner from "../utils/navi-banner";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isHomePage = router.pathname === "/home";

  return (
    <>
      <Header />
      {isHomePage ? <></> : <NavBanner />}
      <Box className={inter.className}>{children}</Box>
    </>
  );
}
