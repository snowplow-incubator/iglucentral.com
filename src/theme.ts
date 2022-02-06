import { createTheme } from "@mui/material";

const fontWeight = {
  light: 300,
  normal: 400,
  bold: 500,
};

const theme = createTheme({
  palette: {
    primary: {
      light: "#A684E4",
      main: "#6638B8",
      dark: "#552E9C",
    },
  },
  typography: {
    fontFamily: "Rubik, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: fontWeight.normal,
    },
    h2: {
      fontSize: "24px",
      fontWeight: fontWeight.normal,
    },
    h3: {
      fontSize: "20px",
      letterSpacing: "0px",
      lineHeight: "28px",
      fontWeight: fontWeight.normal,
    },
    h4: {
      fontSize: "18px",
      fontWeight: fontWeight.bold,
      letterSpacing: "0px",
      lineHeight: "24px",
    },
    h5: {
      fontSize: "16px",
      fontWeight: fontWeight.bold,
    },
    body1: {
      fontSize: "16px",
      fontWeight: fontWeight.normal,
      letterSpacing: "0px",
      lineHeight: "24px",
    },
    subtitle1: {
      fontWeight: fontWeight.bold,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
