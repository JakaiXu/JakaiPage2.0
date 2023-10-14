import { List, ListItem, Menu, MenuItem } from "@mui/material";
import { capitalize } from "lodash";
import { dropdownMenu } from "./dropdown-menu-styles";
import { Color } from "@/styles/color";
import Link from "next/link";

const menuList = [
  "home",
  "about",
  "showcase",
  "experience",
  "works",
  "blog",
  "contact",
];
interface DropdownMenuProps {
  handleClose: () => void;
  isOpen: boolean;
}
const CapitalisedMenulist = menuList.map((item) => capitalize(item));
const DropdownMenu = ({ handleClose, isOpen }: DropdownMenuProps) => {
  return (
    <>
      {isOpen && (
        <List sx={dropdownMenu.list}>
          {CapitalisedMenulist.map((item) => (
            <Link href={`/${item.toLowerCase()}`} key={item} style={{textDecoration:'none',color:Color.surface.default}}>
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
      )}
    </>
  );
};

export default DropdownMenu;
