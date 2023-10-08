import { createTheme } from "@mui/material";
import { Color } from "./color";

const customTheme = createTheme({
  palette: {
    primary:{
        main:Color.action.default
    }
  },
  breakpoints:{
    values:{
        xs: 0,      // Mobile devices (portrait phones)
        sm: 600,    // Small devices (landscape phones)
        md: 960,    // Tablets and small desktops
        lg: 1280,   // Large tablets and desktops
        xl: 1920, 
    }
  }
});
export default customTheme;
