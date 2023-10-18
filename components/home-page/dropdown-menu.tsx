import MenuBox, { MenuProps } from "./menu-box";

const DropdownMenu = ({ handleClose, isOpen }: MenuProps) => {
  return <>{isOpen && <MenuBox handleClose={handleClose} isOpen={isOpen} />}</>;
};

export default DropdownMenu;
