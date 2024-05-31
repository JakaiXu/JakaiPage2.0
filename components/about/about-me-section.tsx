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
          <Title>A DevOps Engineer Based in Australia.</Title>
          <Typography variant="h4">
            As a skilled DevOps Engineer, I excel in managing robust CI/CD
            pipelines, implementing branch protection policies, and configuring
            cloud services on platforms like Azure and AWS. I am proficient in
            Infrastructure as Code (IaC) using Terraform and Ansible playbook,
            containerization with Docker, and orchestration with Kubernetes. I
            ensure application reliability through comprehensive monitoring and
            logging with Prometheus, Grafana, and the ELK stack, and maintain
            high code quality using Git version control and branching
            strategies. My focus on security and compliance, along with
            automation of repetitive tasks, enhances operational efficiency.
            Collaborating closely with development, operations, and QA teams, I
            bridge the gap between development and operations to deliver
            high-quality, reliable web applications that meet user needs and
            business objectives.
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
