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
import CustomLink from "../utils/custom-link";
const HeroSection = () => {
  return (
    <Box sx={heroSectionStyles.positionContainer}>
      <StyledBox>
        <DefaultTitle>DevOps Cloud Engineer</DefaultTitle>
        <Typography sx={heroSectionStyles.titleSize}>
          I&apos;m Jakai Everett Xu
        </Typography>
        <Grid container sx={heroSectionStyles.gridContainer}>
          <CustomLink href="/about">
            <StyledGrid item>
              <DefaultTextLightBold>more about me</DefaultTextLightBold>
              <ArrowRightAltIcon
                sx={{ ...heroSectionStyles.arrowIcon, color: "white" }}
              />
            </StyledGrid>
          </CustomLink>
          <CustomLink href="contact">
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
          </CustomLink>
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default HeroSection;
