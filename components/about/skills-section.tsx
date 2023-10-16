import React from "react";
import TitleHeader from "../utils/title-header";
import MotionContainer from "../utils/motion-container";
import BarChart from "./bar-chart";
import { Container, Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

const SKILLS = [
  { id: nanoid(), label: "HTML", value: 95 },
  { id: nanoid(), label: "CSS", value: 95 },
  { id: nanoid(), label: "JAVASCRIPT", value: 90 },
  { id: nanoid(), label: "REACT", value: 90 },
  { id: nanoid(), label: "MUI", value: 90 },
  { id: nanoid(), label: "TYPESCRIPT", value: 90 },
  { id: nanoid(), label: "NEXT.JS", value: 80 },
  { id: nanoid(), label: "TAILWINDCSS", value: 90 },
  { id: nanoid(), label: "Reduxjs/toolkit", value: 85 },
  { id: nanoid(), label: "NODE", value: 75 },
  { id: nanoid(), label: "FIGMA", value: 90 },
  { id: nanoid(), label: "RESTFULAPI", value: 70 },
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
