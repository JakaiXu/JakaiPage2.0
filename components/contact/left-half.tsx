import { Color } from "@/styles/color";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  IconButton,
  Input,
  List,
  ListItem,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";

const LeftHalf = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/contact/messagesent");
  };
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Typography sx={styles.contact}>Contact me</Typography>
        <Typography variant="h5" sx={styles.subtitle}>
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
        <Button
          variant="contained"
          sx={{ color: Color.state.white }}
          onClick={handleSubmit}
        >
          Send Message
        </Button>
        <Box>
          <Typography variant="h6" sx={{ margin: "24px 0 12px 8px" }}>
            Follow me here
          </Typography>
          {isMobile ? (
            <ButtonGroup>
              <IconButton>
                <FacebookOutlined sx={{ color: Color.action.default }} />
                <Link
                  style={{
                    color: `${Color.action.default}`,
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/jakai-xu/"
                ></Link>
              </IconButton>
              <IconButton>
                <Twitter sx={{ color: Color.action.default }} />
                <Link
                  style={{
                    color: `${Color.action.default}`,
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/jakai-xu/"
                ></Link>
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: Color.action.default }} />
                <Link
                  style={{
                    color: `${Color.action.default}`,
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/jakai-xu/"
                ></Link>
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: Color.action.default }} />
                <Link
                  style={{
                    color: `${Color.action.default}`,
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/jakai-xu/"
                ></Link>
              </IconButton>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Button variant="outlined">
                <FacebookOutlined />
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
                <Twitter />
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
                <Instagram />
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
                <LinkedIn />
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
          )}
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
    marginX: 1,
    paddingY: 8,
  },
  contact: {
    fontWeight: 900,
    fontSize: {
      lg: 44,
      md: 40,
      sm: 36,
      xs: 32,
    },
    color: Color.action.default,
    marginBottom: 2,
  },
  subtitle: { marginY: 1, color: Color.state.gray },
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

const BoldLabel = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  color: Color.state.gray,
  marginRight: 5,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
const ContentText = styled("span")(({ theme }) => ({
  color: Color.state.light_gray,
  marginLeft: 2,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
