import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Color } from "@/styles/color";
import {
  DefaultTextDarkBold,
  DefaultTextLightBold,
  DefaultTitle,
  StyledBox,
  StyledGrid,
  heroSectionStyles,
} from "./hero-section-styles";
const HeroSection = () => {
  return (
    <Box sx={heroSectionStyles.positionContainer}>
      <StyledBox>
        <DefaultTitle>Full Stack Web Developer</DefaultTitle>
        <Typography sx={heroSectionStyles.titleSize}>
          I&apos;m Jakai Everett Xu
        </Typography>
        <Grid container sx={heroSectionStyles.gridContainer}>
          <StyledGrid item>
            <DefaultTextLightBold>more about me</DefaultTextLightBold>
            <ArrowRightAltIcon
              sx={{ ...heroSectionStyles.arrowIcon, color: "white" }}
            />
          </StyledGrid>
          <StyledGrid
            item
            sx={{
              bgcolor: "white",
              "&:hover": {
                bgcolor: Color.state.default,
              },
            }}
          >
            <DefaultTextDarkBold>hire me</DefaultTextDarkBold>
            <ArrowRightAltIcon sx={heroSectionStyles.arrowIcon} />
          </StyledGrid>
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default HeroSection;
