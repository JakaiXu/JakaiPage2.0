import { Color, SxPropsStyles } from "@/styles/color";
import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const HomePageStyles: SxPropsStyles = {
  arrowIcon:{fontSize: 16, marginX: 1}
};

export const ConfigContainer = styled(Box)(() => ({
  width: "50%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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

export const StyledGrid = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  padding: "20px",
  boxShadow: `1px 1px 2px 1px ${Color.surface.muted}`,
}));
