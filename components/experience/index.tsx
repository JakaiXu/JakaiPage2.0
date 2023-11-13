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
    title: "Node JS Boot Camp",
    organisation: "JR Academy",
    label: "study",
    description:
      "Through a Udemy boot camp, I've learned JavaScript, HTML, and CSS for dynamic web development. Exploring React Native. I delved into server-side programming using Node.js and picked up database management. TypeScript added static typing to my toolkit, enhancing code reliability. This journey equips me to handle the full software development stack, from frontend design to backend implementation.",
    icon: "",
  },
  {
    id: nanoid(),
    date: "2021-2022",
    title: "Udemy Full Stack Boot Camp",
    organisation: "Udemy",
    label: "study",
    description:
      "In my learning journey, I progressed from foundational knowledge to more advanced topics. TheJR Academy became my go-to resource for a comprehensive and systematic exploration of Node.js. This phase of my education involved diving deeper into the intricacies of Node.js, emphasizing hands-on applications and real-world scenarios. As I navigated the latter part of my studies, I embraced more advanced concepts, refining my skills and solidifying my proficiency in Node.js development.",
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
