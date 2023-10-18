import { SxPropsStyles } from "@/styles/color";
import { Box, styled } from "@mui/system";

export const homePageStyles: SxPropsStyles = {
  container: {
    width: '100vw',
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  imageBox: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
};

export const ConfigContainer = styled(Box)(() => ({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
