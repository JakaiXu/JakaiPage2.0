import { Color, SxPropsStyles } from "@/styles/color";

export const dropdownMenu: SxPropsStyles = {
  list: {
    position: "absolute",
    right: 70,
    top: 80,
    backgroundColor: Color.state.white,
    height: 350,
    width: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 2,
    fontFamliy: "Roboto, sans-serif",
    fontWeight: 400,
    fontFamily: '"Poppins", Arial, sans-serif',
    boxShadow: `1px 1px 5px ${Color.surface.muted}`,
  },
};
