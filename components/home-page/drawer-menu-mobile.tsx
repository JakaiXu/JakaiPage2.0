import Drawer from "@mui/material/Drawer";
import MenuBox, { MenuProps } from "./menu-box";

export default function DrawerMenuMobile({ handleClose, isOpen }: MenuProps) {
  return (
    <Drawer open={isOpen} anchor="bottom">
      <MenuBox handleClose={handleClose} isOpen={isOpen} />
    </Drawer>
  );
}
