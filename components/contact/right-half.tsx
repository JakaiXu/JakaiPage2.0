import { Color } from "@/styles/color";
import { Container } from "@mui/material";
import React from "react";

const RightHalf = () => {
  return <Container sx={styles.container}>Map</Container>;
};

export default RightHalf;

const styles = {
  container: {
    height: 725,
    bgcolor: Color.state.light_gray,
  },
};
