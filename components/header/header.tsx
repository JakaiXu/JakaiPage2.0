import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Color } from "@/styles/color";
import { headerStyles } from "./header-styles";
const Header = () => {
  return (
    <Box sx={headerStyles.container}>
      <Box sx={headerStyles.innerBox}>
        <Typography sx={headerStyles.text}>Jakai.Xu</Typography>
        <IconButton>
          <MenuTwoToneIcon sx={{ color: Color.surface.dark }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
