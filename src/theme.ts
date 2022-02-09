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
    h1: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "32px",
      fontWeight: fontWeight.normal,
    },
    h2: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "28px",
      fontWeight: fontWeight.normal,
    },
    h3: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "24px",
      letterSpacing: "0px",
      lineHeight: "24px",
      fontWeight: fontWeight.normal,
    },
    h4: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "20px",
      fontWeight: fontWeight.bold,
      letterSpacing: "0px",
      lineHeight: "20px",
    },
    h5: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "18px",
      fontWeight: fontWeight.bold,
    },
    body1: {
      fontSize: "16px",
      fontWeight: fontWeight.normal,
      letterSpacing: "0px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: "14px",
      fontWeight: fontWeight.normal,
      lineHeight: "20px",
    },
    subtitle1: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "14px",
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
