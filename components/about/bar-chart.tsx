import { Color } from "@/styles/color";
import { Typography, Stack, LinearProgress, Grid } from "@mui/material";
import React from "react";
import _ from "lodash";
function BarChart({ label, value }: { label: string; value: number }) {
  const capitalisedLabel = _.upperCase(label);
  return (
    <Grid item xs={6} sm={6} md={4} lg={3} xl={3} sx={{ width: "100%" }}>
      <Stack
        sx={{
          flexDirection: "row",
          width: `${value}%`,
          justifyContent: "space-between",
          marginBottom: 1,
        }}
      >
        <Typography sx={{ fontSize: { md: 20, sm: 16, xs: 14 } }}>
          {capitalisedLabel}
        </Typography>
        <Typography
          sx={{
            color: Color.action.default,
            fontSize: { md: 20, sm: 16, xs: 14 },
            fontFamily: "sans-serif",
          }}
        >{`${value}%`}</Typography>
      </Stack>
      <Stack>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 10,
          }}
        />
      </Stack>
    </Grid>
  );
}

export default BarChart;
