import React, { useEffect, useRef } from "react";
import { Box, List, ListItem, Theme, useMediaQuery } from "@mui/material";
import { capitalize } from "lodash";
import { MenuBoxStyles } from "./dropdown-menu-styles";
import { Color } from "@/styles/color";
import Link from "next/link";

const menuList = [
  "home",
  "about",
  "showcase",
  "experience",
  "blog",
  "contact",
  "download",
];
export interface MenuProps {
  handleClose: () => void;
  isOpen: boolean;
}
const CapitalisedMenulist = menuList.map((item) => capitalize(item));

function MenuBox({ handleClose, isOpen }: MenuProps) {
  const isMobie = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        handleClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);
  return (
    <Box ref={listRef}>
      <List sx={isMobie ? MenuBoxStyles.mobileList : MenuBoxStyles.dropdown}>
        {CapitalisedMenulist.map((item) => (
          <Link
            href={`/${item.toLowerCase()}`}
            key={item}
            style={{ textDecoration: "none", color: Color.surface.default }}
          >
            <ListItem
              onClick={handleClose}
              sx={{
                "&: hover": {
                  color: Color.action.default,
                },
              }}
            >
              {item}
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

export default MenuBox;
