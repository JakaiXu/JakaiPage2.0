import { Color } from "@/styles/color";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from '@mui/icons-material/Computer';
interface cardProps {
  item: {
    id: string;
    date: string;
    title: string;
    organisation: string;
    label: string;
    description: string;
    icon: string;
  };
}

const ExperienceCard = ({ item }: cardProps) => {
  return (
    <Box sx={styles.outContainer}>
      <Card sx={styles.card}>
        {item.label === "study" ? (
          <SchoolIcon sx={styles.icon} />
        ) : (
          <ComputerIcon sx={styles.icon} />
        )}
        <Typography sx={styles.date}>{item.date}</Typography>
        <Typography sx={styles.title}>{item.title}</Typography>
        <Stack sx={styles.stack}>
          <BusinessIcon sx={styles.businessIcon} />
          <Typography sx={styles.organisation}>{item.organisation}</Typography>
        </Stack>

        <Typography sx={{ color: Color.surface.light }}>
          {item.description}
        </Typography>
      </Card>
    </Box>
  );
};

export default ExperienceCard;
const styles = {
  outContainer: { bgcolor: "transparent", position: "relative" },
  card: {
    padding: 4,
    minHeight:{xl:265,lg:340,md:390}
  },
  icon: {
    color: Color.state.white,
    width: 40,
    height: 40,
    bgcolor: Color.action.default,
    padding: 1.5,
    borderRadius: "50%",
    position: "absolute",
    top: -30,
  },
  date: { color: Color.action.default, fontSize: 20, marginTop: 2 },
  businessIcon: {
    fontSize: 14,
    marginRight: 1,
    marginBottom: 1,
    color: Color.action.default,
  },
  organisation: {
    color: Color.surface.light,
    fontSize: 16,
    marginTop: 2,
    marginBottom: 3,
  },
  stack: { display: "flex", flexDirection: "row", alignItems: "center" },
  title: { fontSize: 24, fontWeight: 500 },
};
