import React from "react";
import PageBackgroundPaper from "../utils/page-background-paper";
import { Box, Typography } from "@mui/material";

const MessageSent = () => {
  return (
    <PageBackgroundPaper>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", paddingY: 20, fontSize: 22 }}
      >
        Message sent. Thanks for contacting me, I will reply you within 48 hours
        on weekday.
      </Typography>
      <Box sx={{ height: "15vh" }} />
    </PageBackgroundPaper>
  );
};

export default MessageSent;
