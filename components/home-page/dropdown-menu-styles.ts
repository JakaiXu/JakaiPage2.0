import { Color, SxPropsStyles } from "@/styles/color";

export const MenuBoxStyles: SxPropsStyles = {
  dropdown: {
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
    fontWeight: 400,
    fontFamily: "sans-serif",
    boxShadow: `1px 1px 5px ${Color.surface.muted}`,
  },
  mobileList: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    lineHeight:2,
    fontWeight:400,
    width:'100%'
  },
};
