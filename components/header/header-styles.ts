import { Color } from "@/styles/color";

export const headerStyles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  innerBox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: { md: "30px 60px", sm: "30px", xs: "30px 20px" },
    bgcolor: "transparent",
    zIndex: 1,
    maxWidth: "xl",
    margin: "0 auto",
  },
  text: {
    fontFamily: "sans-serif",
    fontWeight: 900,
    fontSize: 28,
    color: Color.action.default,
  },
};
