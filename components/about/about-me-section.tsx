import PerformanceCard from "@/components/about/performance-card";
import { ActionDefaultBox, HeaderTitle, Title } from "@/styles/customTheme";
import { Box, Container, Grid, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import CustomLink from "../utils/custom-link";
import MotionContainer from "../utils/motion-container";

const CARDDATA = [
  { id: nanoid(), data: 2, title: "Happy Clients" },
  { id: nanoid(), data: 35, title: "Project Done" },
  { id: nanoid(), data: 1440, title: "Working Hours" },
  { id: nanoid(), data: 82680, title: "Coding Lines" },
];
const AboutMeSection = () => {
  return (
    <MotionContainer>
      <Container maxWidth="xl" sx={styles.container}>
        <Grid container sx={styles.girdContainer}>
          {CARDDATA.map((item) => (
            <PerformanceCard
              key={item.id}
              title={item.title}
              data={item.data}
            />
          ))}
        </Grid>
        <Box sx={{ width: { md: "55%", sm: "100%", xs: "100%" } }}>
          <HeaderTitle>ABOUT ME</HeaderTitle>
          <Title>A Full Stack Web Developer Based in Australia.</Title>
          <Typography variant="h4">
            As a skilled fullstack web developer and DevOps engineer, I specialise in frontend
            development with one year of experience. I excel in creating
            responsive and visually appealing user interfaces, while also
            possessing knowledge of backend technologies, devops skills and server-side
            programming. My focus is on delivering efficient and user-friendly
            web applications with clean, maintainable code and cloud service.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", paddingTop: 5 }}>
            <CustomLink href="/download">
              <ActionDefaultBox>DOWNLOAD CV</ActionDefaultBox>
            </CustomLink>
          </Box>
        </Box>
      </Container>
    </MotionContainer>
  );
};

export default AboutMeSection;
const styles = {
  container: {
    display: "flex",
    flexDirection: { md: "row", sm: "column", xs: "column" },
    height: "max-content",
    paddingX: {
      xl: 8,
      lg: 8,
      md: 4,
      sm: 3,
      xs: 3,
    },
  },
  girdContainer: {
    width: { md: "45%", sm: "100%", xs: "100%" },
    gap: 3,
  },
};
