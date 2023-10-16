import { Box, Typography, createTheme, styled } from "@mui/material";
import { Color } from "./color";

const customTheme = createTheme({
  palette: {
    primary: {
      main: Color.action.default,
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Mobile devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Tablets and small desktops
      lg: 1280, // Large tablets and desktops
      xl: 1920,
    },
  },
  typography: {
    h4: {
      fontSize: 18,
      fontWeight: 400,
      color: Color.surface.light,
      marginX: 32,
      lineHeight: 2,
    },
    h5: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 36,
    },
  },
});
export default customTheme;

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: 48,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 32,
  },
  fontWeight: "bold",
  color: Color.state.gray,
  marginBottom: 30,
}));
export const HeaderTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: 60,
  },
  letterSpacing:2,
  fontSize: 16,
  fontWeight: "bold",
  color: Color.action.default,
  marginBottom: 16,
}));
export const ActionDefaultBox = styled(Box)(() => ({
  fontSize: 14,
  fontWeight: "bold",
  color: Color.state.white,
  backgroundColor: Color.action.default,
  width: 160,
  height: 50,
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}));
