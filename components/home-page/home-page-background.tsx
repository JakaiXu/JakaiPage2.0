import React, { FC } from "react";
import { Box } from "@mui/material";
import { Color } from "@/styles/color";
import { ConfigContainer, homePageStyles } from "./home-page-styles";
import HeroSection from "./hero-section";
import Carrousel from "../utils/carrousel";

const HomePageBackground: FC = () => {
  return (
    <Box sx={homePageStyles.container}>
      <ConfigContainer sx={{ bgcolor: Color.state.default }} />
      <ConfigContainer
        sx={(theme) => ({
          bgcolor: {
            [theme.breakpoints.down("md")]: Color.state.default,
            [theme.breakpoints.up("md")]: Color.action.default,
          },
          position: {
            lg: "relative",
          },
        })}
      >
        <Box sx={homePageStyles.imageBox}>
          <Carrousel />
        </Box>
      </ConfigContainer>
      <HeroSection />
    </Box>
  );
};

export default HomePageBackground;
