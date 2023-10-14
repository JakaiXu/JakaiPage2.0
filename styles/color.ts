import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const Color = {
  surface: {
    default: "#343a40",
    muted: "#E9EAED",
    dark: "#212529",
  },
  action: {
    default: "#D5C455",
    dark: "#B5A34B",
  },
  state: {
    default: "#F8F8F8",
    white: "#FFFFFF",
  },
};

export type SxPropsStyles = Record<string, SxProps<Theme>>;
