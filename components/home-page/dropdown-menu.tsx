import { Box, List, ListItem,} from "@mui/material";
import { capitalize } from "lodash";
import { dropdownMenu } from "./dropdown-menu-styles";
import { Color } from "@/styles/color";
import Link from "next/link";
import { useEffect, useRef } from "react";

const menuList = [
  "home",
  "about",
  "showcase",
  "experience",
  "works",
  "blog",
  "contact",
  "download"
];
interface DropdownMenuProps {
  handleClose: () => void;
  isOpen: boolean;
}
const CapitalisedMenulist = menuList.map((item) => capitalize(item));
const DropdownMenu = ({ handleClose, isOpen }: DropdownMenuProps) => {
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
    <>
      {isOpen && (
        <Box ref={listRef}>
          <List sx={dropdownMenu.list}>
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
      )}
    </>
  );
};

export default DropdownMenu;
