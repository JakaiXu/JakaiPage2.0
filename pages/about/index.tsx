import AboutMeSection from "@/components/about/about-me-section";
import SkillSection from "@/components/about/skills-section";
import PageBackgroundPaper from "@/components/utils/page-background-paper";
import { useEffect, useState } from "react";

export default function AboutMePage() {
  // const [scrollY, setScrollY] = useState(0);
  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const isAboutMeVisible = scrollY >= 3000;
  // const isSkillSectionVisible = scrollY >= 6000;

  return (
    <PageBackgroundPaper>
      <AboutMeSection />
      <SkillSection />
      {/* <AboutMeSection floating={isAboutMeVisible} />
      <SkillSection floating={isSkillSectionVisible} /> */}
    </PageBackgroundPaper>
  );
}
