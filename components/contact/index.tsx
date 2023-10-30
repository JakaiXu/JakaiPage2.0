import { Box, Container } from "@mui/material";
import React from "react";
import LeftHalf from "./left-half";
import RightHalf from "./right-half";
import { Color } from "@/styles/color";
import PageBackgroundPaper from "../utils/page-background-paper";

const Contact = () => {
  return (
    <PageBackgroundPaper>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          paddingX: { xl: 40, lg: 20, md: 5, sm: 1, xs: 1 },
          bgcolor: Color.state.default,
          height: 825,
          minHeight: "max-content",
        }}
      >
        <LeftHalf />
        <RightHalf />
      </Container>
    </PageBackgroundPaper>
  );
};

export default Contact;
