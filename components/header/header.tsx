import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Color } from "@/styles/color";
import { headerStyles } from "./header-styles";
import DropdownMenu from "../home-page/dropdown-menu";
import CustomLink from "../utils/custom-link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/home";
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <Box
      sx={{
        ...headerStyles.container,
        backgroundColor: isHomePage ? "transparent" : Color.state.default,
      }}
    >
      <Box
        sx={{
          maxWidth: "xl",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Box sx={headerStyles.innerBox}>
          <CustomLink href="/home">
            <Typography sx={headerStyles.text}>Jakai.Xu</Typography>
          </CustomLink>
          <IconButton onClick={isOpen ? handleClose : handleOpen}>
            {isOpen ? (
              <CheckBoxOutlineBlankIcon sx={{ color: Color.surface.dark }} />
            ) : (
              <MenuTwoToneIcon sx={{ color: Color.surface.dark }} />
            )}
          </IconButton>
        </Box>
        <DropdownMenu handleClose={handleClose} isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default Header;
