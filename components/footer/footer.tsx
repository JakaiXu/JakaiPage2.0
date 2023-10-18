import { Color } from "@/styles/color";
import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Typography
      sx={{ color: Color.state.light_gray, bgcolor: Color.state.default,textAlign:'center',fontSize:{md:16,sm:14,xs:12} }}
    >
      Copyright@2023 All rights reserved | This webpage is made by Jakai Everett
      Xu
    </Typography>
  );
};

export default Footer;
