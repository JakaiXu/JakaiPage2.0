import { Color } from "@/styles/color";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";
type ChildrenProps = {
  children: ReactNode;
};
function PageBackgroundPaper({ children }: ChildrenProps) {
  return (
    <Box sx={{ bgcolor: Color.state.default, height: "max-content" }}>
      {children}
    </Box>
  );
}

export default PageBackgroundPaper;
