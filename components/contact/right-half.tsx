import { Container } from "@mui/material";
import React from "react";

const RightHalf = () => {
  return (
    <Container sx={styles.container}>
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/view?zoom=16&center=-33.8568%2C151.2153&key=AIzaSyA5nKQWA-ia-nBBsvxzfOeyMDSncA3Drzw"
      ></iframe>
    </Container>
  );
};

export default RightHalf;

const styles = {
  container: {
    height: 750,
  },
};
