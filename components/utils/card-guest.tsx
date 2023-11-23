import { Color } from "@/styles/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { HeaderTitle } from "@/styles/customTheme";
import { StaticImageData } from "next/image";
interface CardGuestProps {
  name: string;
  title: string;
  description: string;
  img: string;
}
function CardGuest({ name, title, description, img }: CardGuestProps) {
  return (
    <Grid
      item
      xl={3.5}
      lg={3.5}
      md={5.4}
      sm={11.8}
      xs={11.9}
      sx={styles.itemContainer}
    >
      <Stack flexDirection="row" sx={{ alignItems: "center" }}>
        <Box sx={{ position: "relative" }}>
          <Box component="img" src={img} sx={styles.profile} />
          <Box>
            <FormatQuoteIcon sx={styles.quoteIcon} />
          </Box>
        </Box>
        <Box sx={styles.titleContainer}>
          <Typography sx={styles.title}>{name}</Typography>
          <HeaderTitle sx={{ letterSpacing: 1 }}>{title}</HeaderTitle>
        </Box>
      </Stack>
      <Typography sx={styles.content}>{description}</Typography>
    </Grid>
  );
}

export default CardGuest;
const styles = {
  itemContainer: {
    height: 240,
    bgcolor: Color.state.white,
    borderRadius: 2,
    padding: 3,
    margin: "0 auto",
    marginLeft: 3,
  },
  profile: {
    borderRadius: "50%",
    width: 80,
    height: 80,
    objectFit: "cover",
  },
  quoteIcon: {
    rotate: "180deg",
    position: "absolute",
    left: 50,
    bottom: 0,
    fontSize: 40,
    width: 30,
    height: 30,
    borderRadius: "50%",
    bgcolor: Color.action.default,
    color: Color.state.white,
  },
  titleContainer: {
    marginLeft: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: {
      md: 22,
      sm: 18,
      xs: 16,
    },
    fontWeight: 900,
  },
  content: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 300,
    color: Color.state.light_gray,
  },
};
