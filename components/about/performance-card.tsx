import { Color } from "@/styles/color";
import { Box, Grid, Typography } from "@mui/material";
import NumberCounter from "../utils/number-counter";

interface CardProps {
  title: string;
  data: number;
}
const PerformanceCard = ({ title = "Default Title", data = 0 }: CardProps) => {
  return (
    <Grid item xl={5} md={5} sm={12} xs={12} sx={styles.container}>
      <Typography sx={styles.title}>
        <NumberCounter finalNumber={data} />
        </Typography>
      <Typography>{title}</Typography>
      <Box sx={styles.divider} />
    </Grid>
  );
};

export default PerformanceCard;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bgcolor: Color.state.white,
    borderRadius: 1,
    height: 200,
  },
  divider: {
    position: "absolute",
    top: 0,
    width: "1px",
    height: "34%",
    bgcolor: Color.surface.muted,
  },
  title: {
    fontSize: 48,
    fontWeight: 900,
    color: Color.action.default,
  },
};
