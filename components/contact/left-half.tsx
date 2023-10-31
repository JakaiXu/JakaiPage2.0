import { Color } from "@/styles/color";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  Input,
  List,
  ListItem,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import React from "react";

const LeftHalf = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          Contact me
        </Typography>
        <Typography variant="h5" sx={{ marginY: 1 }}>
          I&apos;m open for any suggestion or just to have a chat.
        </Typography>
        <FormControl>
          <List>
            <ListItem>
              <BoldLabel>Address:</BoldLabel>
              <ContentText>37 Waitara Avenue Sydney 2077</ContentText>
            </ListItem>
            <ListItem>
              <BoldLabel>Email:</BoldLabel>
              <ContentText>jakaixu@gmail.com</ContentText>
            </ListItem>
            <ListItem>
              <BoldLabel>Phone:</BoldLabel>
              <ContentText>0403878888</ContentText>
            </ListItem>
          </List>
        </FormControl>
        <Divider sx={{ marginBottom: 2 }} />
        <BoldLabel sx={{ display: "block" }}>Your Details:</BoldLabel>
        <StyledInput placeholder="Name" />
        <StyledInput placeholder="Email" />
        <StyledInput placeholder="Subject" />
        <TextareaElement
          placeholder="Create a message here
"
        />
        <Button variant="contained" sx={{ color: Color.state.white }}>
          Send Message
        </Button>
        <Box>
          <Typography variant="h6" sx={{ margin:'24px 0 12px 8px' }}>
            Follow me here
          </Typography>
          <ButtonGroup>
            <Button variant="outlined">
              <Link
                style={{
                  color: `${Color.action.default}`,
                  textDecoration: "none",
                }}
                href="https://www.linkedin.com/in/jakai-xu/"
              >
                FaceBook
              </Link>
            </Button>
            <Button variant="outlined">
              <Link
                style={{
                  color: `${Color.action.default}`,
                  textDecoration: "none",
                }}
                href="https://www.linkedin.com/in/jakai-xu/"
              >
                Twitter
              </Link>
            </Button>
            <Button variant="outlined">
              <Link
                style={{
                  color: `${Color.action.default}`,
                  textDecoration: "none",
                }}
                href="https://www.linkedin.com/in/jakai-xu/"
              >
                Instagram
              </Link>
            </Button>
            <Button variant="outlined">
              <Link
                style={{
                  color: `${Color.action.default}`,
                  textDecoration: "none",
                }}
                href="https://www.linkedin.com/in/jakai-xu/"
              >
                LinkedIn
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default LeftHalf;
const styles = {
  container: {
    bgcolor: Color.state.white,
    height: 750,
  },
  box: {
    paddingX: 4,
    paddingY: 8,
  },
};
const StyledInput = styled(Input)(() => ({
  width: "100%",
  height: 50,
}));
const TextareaElement = styled("textarea", {
  shouldForwardProp: (prop) =>
    !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
})(({ theme }) => ({
  width: "95%",
  fontFamily: ' "Roboto", sans-serif',
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: "1.5rem",
  marginBlock: 8,
  padding: "8px 12px",
  borderRadius: "2px 2px 0 2px",
  "& :focus": {
    border: "1px solid red",
  },
  "&: hover": {
    border: `1px solid ${Color.action.default}`,
  },
}));

const BoldLabel = styled("span")(() => ({
  fontWeight: "bold",
  marginRight: 5,
}));
const ContentText = styled("span")(() => ({
  color: Color.state.light_gray,
}));
