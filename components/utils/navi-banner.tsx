import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CustomLink from "./custom-link";
import { Color } from "@/styles/color";
import _ from "lodash";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
const NavBanner = () => {
  const router = useRouter();
  let labelName = router.pathname;
  const navLabelName = _.chain(labelName)
    .trimStart("/")
    .map(_.startCase)
    .value();
  if (labelName === "/about") {
    labelName = labelName + " me";
  }
  if (labelName === "/contact") {
    labelName = labelName + " me";
  }
  if (labelName === "/blog") {
    labelName = labelName + " posts";
  }
  if (labelName === "/works") {
    labelName = "/portfolio";
  }
  if (labelName === "/showcase") {
    labelName = "/show cases";
  }
  if (labelName === "/download") {
    labelName = "/download Jakai Resume";
  } else labelName;
  const formateLabelName = _.chain(labelName)
    .trimStart("/")
    .split(" ")
    .map(_.startCase)
    .join(" ")
    .value();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 15,
        bgcolor: Color.state.default,
        margin:0
      }}
    >
      <Stack flexDirection="row" alignItems="center">
        <CustomLink href="/home">
          <IconButton
            sx={{
              fontSize: 16,
              fontWeight: "bold",
              color: Color.surface.light,
              "&: hover": { color: Color.action.default, background: "none" },
            }}
          >
            HOME
            <NavigateNextIcon />
          </IconButton>
        </CustomLink>
        <IconButton
          disableRipple
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            color: Color.surface.light,
            "&: hover": { background: "none" },
          }}
        >
          {navLabelName}
          <NavigateNextIcon />
        </IconButton>
      </Stack>
      <Typography
        sx={{ color: Color.state.gray, fontSize: 40, fontWeight: "bold" }}
      >
        {formateLabelName}
      </Typography>
    </Box>
  );
};

export default NavBanner;
