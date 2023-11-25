import ResumeFile from "@/components/about/resume-download";
import { Color } from "@/styles/color";
import { Box, Button } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function ResumeDownloadPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Box
      sx={{
        bgcolor: Color.state.default,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isClient && (
        <PDFDownloadLink document={<ResumeFile />} fileName="Jakai's CV">
          {({ loading }) =>
            loading ? (
              <Button variant="outlined">Loading...</Button>
            ) : (
              <Button variant="outlined">Download</Button>
            )
          }
        </PDFDownloadLink>
      )}
      {/* <ResumeFile /> */}
    </Box>
  );
}
