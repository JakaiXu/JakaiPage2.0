import React from "react";
import TitleHeader from "../utils/title-header";
import MotionContainer from "../utils/motion-container";
import BarChart from "./bar-chart";
import { Container, Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

const SKILLS = [
  { id: nanoid(), label: "Docker", value: 95 },
  { id: nanoid(), label: "Kubernetes", value: 80 },
  { id: nanoid(), label: "Jenkins", value: 90 },
  { id: nanoid(), label: "AWS", value: 70 },
  { id: nanoid(), label: "Azure", value: 80 },
  { id: nanoid(), label: "Terraform", value: 85 },
  { id: nanoid(), label: "Ansible", value: 80 },
  { id: nanoid(), label: "Git", value: 95 },
  { id: nanoid(), label: "Prometheus", value: 75 },
  { id: nanoid(), label: "NODE", value: 75 },
  { id: nanoid(), label: "REACT", value: 90 },
  { id: nanoid(), label: "JAVASCRIPT", value: 70 },
];

const SkillSection = () => {
  return (
    <MotionContainer>
      <TitleHeader headerLabel="SKILLS" titleString="My Skills" />
      <Container sx={{ maxWidth: "xl" }}>
        <Grid container spacing={4}>
          {SKILLS.map((skill) => (
            <BarChart key={skill.id} label={skill.label} value={skill.value} />
          ))}
        </Grid>
      </Container>
    </MotionContainer>
  );
};

export default SkillSection;
