import { HeaderTitle, Title } from "@/styles/customTheme";

import { Box } from "@mui/material";
import React from "react";
interface TitleHeaderProps {
  headerLabel: string;
  titleString: string;
}
function TitleHeader({ headerLabel, titleString }: TitleHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: { lg: 30, md: 20, sm: 10, xs: 5 },
        marginBottom: { lg: 8, md: 6, sm: 4, xs: 4 },
      }}
    >
      <HeaderTitle>{headerLabel}</HeaderTitle>
      <Title>{titleString}</Title>
    </Box>
  );
}

export default TitleHeader;
