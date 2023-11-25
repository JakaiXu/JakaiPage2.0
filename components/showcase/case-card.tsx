import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import React from "react";
import PageBackgroundPaper from "../utils/page-background-paper";
import { Color } from "@/styles/color";

const caseData = [
  {
    id: 1,
    title: "Breville Imitative Page",
    content: `⦾ Successfully replicated the Breville website's navigation component using React, TypeScript, and Material-UI. 
    ⦾ Implementing interactive features such as hover effects for the navbar and dynamic scrolling behaviour.`,
    src: "https://jakai-videos.s3.ap-southeast-2.amazonaws.com/breville-imitative.MP4",
    url: "http://jakai-breville.s3-website-ap-southeast-2.amazonaws.com/",
  },
  {
    id: 2,
    title: "CommonWealthBank Imitative Page",
    content: `
    ⦾ Proficiently used React Router v6 for seamless navigation. 
    ⦾ Enhanced the logon page with visual password toggle and error handling, ensuring valid logins. 
    ⦾ Expanded the balance display page with account creation, deletion, and money transfer functionalities, 
    ⦾ rigorously validating transactions to prevent errors.
  `,
    src: "https://jakai-videos.s3.ap-southeast-2.amazonaws.com/CBA-imitative.MP4",
    url: "http://cba.jakaixu.com/",
  },
  {
    id: 3,
    title: "Woolworth Imitative Page",
    content: `
    ⦾ Established data communication using useContext, useEffect, useState hooks. 
    ⦾ Implemented data storage through local storage. 
    ⦾ Utilized Tailwind CSS and the classnames library for efficient styling and responsive design.
  `,
    src: "https://jakai-videos.s3.ap-southeast-2.amazonaws.com/woolworth-imitative.MP4",
    url: "http://woolwoorth.s3-website-ap-southeast-2.amazonaws.com/",
  },
];
const CaseCard = () => {
  return (
    <PageBackgroundPaper>
      <Container maxWidth="xl">
        {caseData.map((card) => (
          <Box sx={styles.card} key={card.id}>
            <Box sx={styles.box}>
              <Typography sx={styles.title}>{card.title}</Typography>
              <Typography sx={styles.content}>{card.content}</Typography>
              <Link href={card.url} sx={{ paddingLeft: 2, marginBottom: 3 }}>
                Click Here to visit.
              </Link>
            </Box>
            <CardMedia
              component="video"
              autoPlay
              controls
              src={card.src}
              sx={styles.cardMedia}
            />
          </Box>
        ))}
      </Container>
    </PageBackgroundPaper>
  );
};

export default CaseCard;

const styles = {
  card: {
    display: "flex",
    paddingX: 1,
    paddingBottom: 6,
    minHeight: { md: 600, sm: 300, xs: 300 },
    flexDirection: { md: "row", sm: "column", xs: "column" },
  },
  box: {
    width: {
      md: "35%",
      sm: "100%",
      xs: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  title: {
    color: Color.action.default,
    fontSize: 22,
    paddingX: 2,
  },
  content: {
    paddingX: 2,
    marginY: 2,
    color: Color.state.light_gray,
    whiteSpace: "pre-line",
    lineHeight: 1.5,
  },
  cardMedia: {
    width: { md: "65%", sm: "100%", xs: "100%" },
  },
};
