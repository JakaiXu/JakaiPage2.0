import { Color, SxPropsStyles } from "@/styles/color";
import { Box, Grid, Typography, styled } from "@mui/material";

export const heroSectionStyles: SxPropsStyles = {
  positionContainer: {
    maxWidth: 1920,
    width: "100%",
    position: "absolute",
    top: { xl: "50%", md: "50%", sm: "50%", xs:0 },
    left: "50%",
    transform: {
      xl: "translate(-50%, -50%)",
      sm: "translate(-50%, -50%)",
      xs: "translate(-50%,60%)",
    },
  },
  titleSize: {
    fontSize: { md: 80, sm: 40, xs: 36 },
    fontWeight: 900,
    color: Color.surface.dark,
  },
  gridContainer: {
    textTransform: "uppercase",
    gap: 1,
    display: "flex",
    justifyContent: {
      lg: "left",
      md: "center",
      sm: "center",
      xs: "center",
    },
  },
  arrowIcon: { fontSize: 16, marginX: 1 },
};

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    textAlign: "center",
  },
  [theme.breakpoints.only("lg")]: {
    width: "32%",
    marginLeft: "64px",
  },
  [theme.breakpoints.only("xl")]: {
    width: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
  [theme.breakpoints.not("lg")]: {
    marginLeft: 0,
  },
}));
export const StyledGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  padding: "20px",
  backgroundColor: Color.action.default,
  boxShadow: `1px 1px 2px 1px ${Color.surface.muted}`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "10px 20px 0px 20px",
    display: "flex",
    justifyContent: "center",
  },
  "&:hover": {
    backgroundColor: Color.action.dark,
  },
}));
export const DefaultTitle = styled(Typography)(() => ({
  color: Color.action.default,
  textTransform: "uppercase",
  fontWeight: "bold ",
}));
export const DefaultTextDarkBold = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: "bold",
}));
export const DefaultTextLightBold = styled(Typography)(() => ({
  color: "white",
  fontSize: 14,
  fontWeight: "bold",
}));
