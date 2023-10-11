import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Color } from "@/styles/color";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  ConfigContainer,
  DefaultTextDarkBold,
  DefaultTextLightBold,
  DefaultTitle,
  HomePageStyles,
  StyledGrid,
} from "./home-page-styles";
const HomePageComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <ConfigContainer
        sx={{
          bgcolor: Color.state.default,
        }}
      >

      </ConfigContainer>
      <ConfigContainer sx={{ bgcolor: Color.action.default }}></ConfigContainer>
      <Box sx={{ padding: 6, width: "100%", bgcolor: "red",position:'absolute', left:{} }}>
          <DefaultTitle>Full Stack Web Developer</DefaultTitle>
          <Typography
            sx={{ fontSize: 80, fontWeight: 900, color: Color.surface.dark }}
          >
            I'm Jakai Everett Xu
          </Typography>
          <Grid container sx={{ textTransform: "uppercase", gap: 1 }}>
            <StyledGrid
              item
              sx={{
                bgcolor: Color.action.default,
                "&:hover": {
                  bgcolor: Color.action.dark,
                },
              }}
            >
              <DefaultTextLightBold>more about me</DefaultTextLightBold>
              <ArrowRightAltIcon
                sx={{ ...HomePageStyles.arrowIcon, color: "white" }}
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
              <ArrowRightAltIcon sx={HomePageStyles.arrowIcon} />
            </StyledGrid>
          </Grid>
        </Box>
    </Box>
  );
};

export default HomePageComponent;
