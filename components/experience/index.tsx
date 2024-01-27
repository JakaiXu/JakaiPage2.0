import { Grid } from "@mui/material";
import React from "react";
import ExperienceCard from "./experience-card";
import { nanoid } from "@reduxjs/toolkit";
import PageBackgroundPaper from "../utils/page-background-paper";
import MotionContainer from "../utils/motion-container";
const Experience = () => {
  return (
    <PageBackgroundPaper>
      <MotionContainer>
        <Grid
          container
          gap={3}
          sx={{ maxWidth: "xl", margin: "0 auto", paddingX: 2 }}
        >
          {EXPERIENCE.map((item) => (
            <Grid item key={item.id} md={5.7} sx={{ marginY: 2 }}>
              <ExperienceCard item={item} />
            </Grid>
          ))}
        </Grid>
      </MotionContainer>
    </PageBackgroundPaper>
  );
};

export default Experience;
const EXPERIENCE = [
  {
    id: nanoid(),
    date: "2023-current",
    title: "Full Stack Developer",
    organisation: "Cyberay",
    label: "work",
    description:
      "A startup, led by a Microsoft Senior Architect, is underway to create a platform-based website focusing on farm activities. This platform enables users to subscribe to farm-related information, including events and promotions. It facilitates farm owners in posting advertisements and showcasing their products on the platform, fostering a dynamic and interactive community for agricultural enthusiasts.",
    icon: "",
  },
  {
    id: nanoid(),
    date: "2022-2023",
    title: "Full Stack Developer",
    organisation: "OfferRipple",
    label: "study",
    description:
      "Specializing in the development of responsive web applications and contributing to multiple projects utilizing React, TypeScript, and MUI, adhering to responsive design principles. Proficient in building reusable RESTful APIs with Express and optimizing interactions with RTK Query and enhance data retrieval, caching, and state management. Skilled in database design using MongoDB and Docker-compose, collaborate on containerisation strategies, implementing multi-stage builds and non-root user configurations for improved efficiency and security.",
    icon: "",
  },
  {
    id: nanoid(),
    date: "2021-2022",
    title: "Front-End Developer",
    organisation: "BeansMile CO.",
    label: "study",
    description:
      "As a front-end developer, I was responsible for designing and implementing the user interface style, focusing on elements such as color combinations, animations, and responsive design. Integration between the front-end and back-end was facilitated through Axios, with API testing conducted using Postman. Additionally, I refactored legacy applications to separate the backend API from the front-end for better performance.",
    icon: "",
  },
  {
    id: nanoid(),
    date: "2019-2020",
    title: "Master of Applied Management",
    organisation: "South Institute of Technology",
    label: "study",
    description:
      "A Master of Applied Management (MAM) is a graduate program focusing on the practical application of management skills. Covering finance, marketing, and strategy, MAM emphasizes hands-on experience. With flexibility for working professionals, the program fosters problem-solving and strategic thinking, offering a well-rounded and industry-relevant education.",
    icon: "",
  },
];
