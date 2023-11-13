import React from "react";
import MotionContainer from "../utils/motion-container";
import TitleHeader from "../utils/title-header";
import { Container, Grid } from "@mui/material";
import CardGuest from "../utils/card-guest";
import { nanoid } from "@reduxjs/toolkit";
import { Carousel } from "react-responsive-carousel";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import avatar3 from "../assets/avatar3.jpeg";
import avatar4 from "../assets/avatar4.jpeg";
import avatar5 from "../assets/avatar5.jpeg";
import avatar6 from "../assets/avatar6.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HappyGuest = () => {
  return (
    <MotionContainer>
      <TitleHeader headerLabel="TESTIMONIAL" titleString="Happy Guests" />
      <Container sx={{ maxWidth: "xl", display: "flex", flexDirection: "row" }}>
        <Grid container spacing={4} gap={4}>
          {GUESTSLIST.map((guest) => (
            <CardGuest
              key={guest.id}
              name={guest.name}
              title={guest.title}
              description={guest.description}
              img={guest.img}
            />
          ))}
        </Grid>
      </Container>
    </MotionContainer>
  );
};

export default HappyGuest;

const GUESTSLIST = [
  {
    id: nanoid(),
    name: "Henry Cavill",
    title: "Marketing Manager",
    description:
      "A well-designed food web combines artistry and functionality to create an immersive and delightful culinary experience.",
    img: avatar1.src,
  },
  {
    id: nanoid(),
    name: "Munch Craft",
    title: "Finance Manager",
    description:
      "A well-crafted finance web design is your gateway to a world of financial prowess.",
    img: avatar2.src,
  },
  {
    id: nanoid(),
    name: "Bistro Beats",
    title: "Game Header",
    description:
      "A games web design is a virtual playground of exhilaration and entertainment.",
    img: avatar3.src,
  },
  {
    id: nanoid(),
    name: "Savor Wave",
    title: "Bank Manager",
    description:
      "A bank web design is a digital fortress of financial security. It strikes the balance between modernity and trustworthiness.",
    img: avatar4.src,
  },
  {
    id: nanoid(),
    name: "Palate Fare",
    title: "Human Resource",
    description:
      "A society web design is the heart and soul of community and connection. ",
    img: avatar5.src,
  },
  {
    id: nanoid(),
    name: "Epicurean Edge",
    title: "Marketing Manager",
    description:
      "A retail web design is a virtual marketplace where shopping becomes an art. ",
    img: avatar6.src,
  },
];
