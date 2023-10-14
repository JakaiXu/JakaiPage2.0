import { Box, IconButton, Typography } from "@mui/material";
import React, {useState } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Color } from "@/styles/color";
import { headerStyles } from "./header-styles";
import DropdownMenu from "../home-page/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <Box sx={headerStyles.container}>
      <Box
        sx={{
          maxWidth: "xl",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Box sx={headerStyles.innerBox}>
          <Typography sx={headerStyles.text}>Jakai.Xu</Typography>
          <IconButton>
            {isOpen ? (
              <CheckBoxOutlineBlankIcon 
                sx={{ color: Color.surface.dark }}
                onClick={handleClose}
              />
            ) : (
              <MenuTwoToneIcon
                sx={{ color: Color.surface.dark }}
                onClick={handleOpen}
              />
            )}
          </IconButton>
        </Box>
        <DropdownMenu handleClose={handleClose} isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default Header;
