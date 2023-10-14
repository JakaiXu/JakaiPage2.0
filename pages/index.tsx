import HomePageBackground from "@/components/home-page/home-page-background";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);
  return <HomePageBackground />;
};

export default Home;
