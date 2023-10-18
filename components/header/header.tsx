import {
  Box,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Color } from "@/styles/color";
import { headerStyles } from "./header-styles";
import DropdownMenu from "../home-page/dropdown-menu";
import CustomLink from "../utils/custom-link";
import { useRouter } from "next/router";
import DrawerMenuMobile from "../home-page/drawer-menu-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/home";
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const isMobie = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        ...headerStyles.container,
        backgroundColor: isHomePage ? "transparent" : Color.state.default,
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
            <MenuTwoToneIcon
              sx={
                isHomePage
                  ? {
                      color: {
                        md: Color.surface.dark,
                        sm: Color.action.default,
                        xs: Color.action.default,
                      },
                    }
                  : { color: Color.action.default }
              }
            />
          )}
        </IconButton>
      </Box>
      {isMobie ? (
        <DrawerMenuMobile handleClose={handleClose} isOpen={isOpen} />
      ) : (
        <DropdownMenu handleClose={handleClose} isOpen={isOpen} />
      )}
    </Box>
  );
};

export default Header;
