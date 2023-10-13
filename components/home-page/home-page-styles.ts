import { SxPropsStyles } from "@/styles/color";
import { Box, styled } from "@mui/system";

export const homePageStyles: SxPropsStyles = {
  container: {
    width: "100%",
    display: "flex",
    position: "relative",
  },
  imageBox: {
    position: "absolute",
    bottom: 0,
    left: {
      lg: 0,
      md: "25%",
      sm: "13%",
      xs: "0%",
    },
  },
};

export const ConfigContainer = styled(Box)(() => ({
  width: "50%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
