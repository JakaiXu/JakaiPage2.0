import { Color } from "@/styles/color";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  List,
  ListItem,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const LeftHalf = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Typography>Contact me</Typography>
        <Typography>
          I&apos;m open for any suggestion or just to have a chat
        </Typography>
        <FormControl>
          <List>
            <ListItem>Address:37 Waitara Avenue Sydney 2077</ListItem>
            <ListItem>Email:jakaixu@gmail.com</ListItem>
            <ListItem>Phone:0403878888</ListItem>
          </List>
        </FormControl>
        <StyledInput placeholder="Name" />
        <StyledInput placeholder="Email" />
        <StyledInput placeholder="Subject" />
        <TextareaElement
          sx={{ marginY: 2 }}
          placeholder="Create a message here
"
        />
        <Button variant="contained" sx={{ color: Color.state.white }}>
          Send Message
        </Button>
        <Box>
          <Typography>Follow me here</Typography>
          <Button>FaceBook</Button>
          <Button>Twitter</Button>
          <Button>Instagram</Button>
          <Button>LinkedIn</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LeftHalf;
const styles = {
  container: {
    bgcolor: Color.state.white,
    height: 725,
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
})(
  ({ theme }) => `
    width: 95%;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    padding: 8px 12px;
    border-radius: 2px 2px 0 2px;
    color: ${
      theme.palette.mode === "dark" ? Color.state.light_gray : Color.state.gray
    };
    background: ${
      theme.palette.mode === "dark" ? Color.state.gray : Color.state.white
    };
    border: 1px solid ${
      theme.palette.mode === "dark" ? Color.state.gray : Color.state.light_gray
    };  
    &:hover {
      border-color: Color.state.default;
    }
    &:focus {
      border-color: Color.state.default;
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? Color.state.white : Color.state.default
      }
    }
    `
);
