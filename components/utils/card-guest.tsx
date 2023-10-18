import { Color } from "@/styles/color";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { HeaderTitle } from "@/styles/customTheme";
import { Title } from "@/styles/customTheme";
interface CardGuestProps {
  name: string;
  title: string;
  description: string;
  img: string;
}
function CardGuest({ name, title, description, img }: CardGuestProps) {
  return (
    <Grid
            container
            spacing={4}
            gap={4}
            sx={{ width: "100%", margin: "0 auto",display:'flex',flexDirection:'column' }}
          >
    <Grid
      item
      xl={3.7}
      lg={3.5}
      md={5}
      sm={11}
      xs={11}
      sx={{ height: 400, bgcolor: Color.state.white, borderRadius: 2 }}
    >
      <Stack flexDirection="row" sx={{ alignItems: "center" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={img}
            sx={{ borderRadius: "50%", width: 80, height: 80 }}
          />
          <Box>
            <FormatQuoteIcon
              sx={{
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
              }}
            />
          </Box>
        </Box>
        <Box sx={{ marginLeft: 3,display:'flex',flexDirection:"column", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: {
                md: 22,
                sm: 18,
                xs: 16,
              },
              fontWeight: 900,
            }}
          >
            {name}
          </Typography>
          <HeaderTitle sx={{ letterSpacing: 1 }}>{title}</HeaderTitle>
        </Box>
      </Stack>
      <Typography
        sx={{
          marginTop: 3,
          fontSize: 18,
          fontWeight: 500,
          color: Color.state.light_gray,
        }}
      >
        {description}
      </Typography>
    </Grid>
    </Grid>
  );
}

export default CardGuest;
