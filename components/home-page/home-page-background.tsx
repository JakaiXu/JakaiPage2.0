import React, { FC } from "react";
import { Box } from "@mui/material";
import { Color } from "@/styles/color";
import { ConfigContainer, homePageStyles } from "./home-page-styles";
import HeroSection from "./hero-section";
import Carousel from "../utils/carousel";
const HomePageBackground: FC = () => {
  return (
    <Box sx={homePageStyles.container}>
      <ConfigContainer sx={{ bgcolor: Color.state.default }} />
      <ConfigContainer
        sx={{
          backgroundColor: {
            md: Color.action.default,
            sm: Color.state.default,
            xs: Color.state.default,
          },
          position: { lg: "relative" },
        }}
      >
        <Box sx={homePageStyles.imageBox}>
          <Carousel />
        </Box>
      </ConfigContainer>
      <HeroSection />
    </Box>
  );
};

export default HomePageBackground;
