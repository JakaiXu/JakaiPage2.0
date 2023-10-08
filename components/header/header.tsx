import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Color } from "@/styles/color";
const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "xl",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px 60px",
          bgcolor: "transparent",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Poppins", Arial, sans-serif',
            fontWeight: 900,
            fontSize: 28,
          }}
        >
          Jakai.Xu
        </Typography>
        <IconButton>
          <MenuTwoToneIcon sx={{ color: Color.surface.dark }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
