import { Color } from "@/styles/color";
import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: Color.state.light_gray,
        bgcolor: Color.state.default,
        textAlign: "center",
        paddingTop: 20,
        paddingBottom:1,
        fontSize: { md: 16, sm: 14, xs: 10 },
      }}
    >
      Copyright@2023 All rights reserved | This webpage is made by{" "}
      <Typography
        component="span"
        sx={{
          color: Color.action.default,
          fontSize: { md: 16, sm: 14, xs: 10 },
        }}
      >
        Jakai Everett Xu
      </Typography>
    </Typography>
  );
};

export default Footer;
