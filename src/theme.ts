import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";

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
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: "0px",
          borderRadius: "none",
        },
        message: {
          width: "100%",
          padding: ".75rem 16px",
        },
        icon: {
          padding: "0.75rem 8px 0.75rem 8px",
          marginRight: 0,
        },
        standardError: {
          "& > .MuiAlert-message": {
            color: common.black,
            backgroundColor: "#FCEBE9",
            "& > p": {
              marginTop: "0.35rem",
            },
          },
          "& > .MuiAlert-icon": {
            color: common.black,
            backgroundColor: "#DD3327",
            fontSize: "24px",
          },
          "& > .MuiAlert-action": {
            padding: "12px 16px 0px 16px",
            marginRight: 0,
            "& > .MuiButtonBase-root.MuiIconButton-root": {
              padding: 0,
              "& > .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            },
          },
        },
        standardWarning: {
          backgroundColor: "#FFEEBA",
          "& > .MuiAlert-message": {
            color: common.black,
            "& > p": {
              marginTop: "0.35rem",
            },
          },
          "& > .MuiAlert-icon": {
            color: common.black,
            backgroundColor: "#FFC107",
            fontSize: "24px",
          },
          "& > .MuiAlert-action": {
            padding: "12px 16px 0px 16px",
            marginRight: 0,
            "& > .MuiButtonBase-root.MuiIconButton-root": {
              padding: 0,
              "& > .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            },
          },
        },
        standardInfo: {
          backgroundColor: "#E6F6FE",
          "& > .MuiAlert-message": {
            color: common.black,
            "& > p": {
              marginBottom: "8px",
            },
          },
          "& > .MuiAlert-icon": {
            color: common.black,
            backgroundColor: "#03A9F4",
            fontSize: "24px",
          },
          "& > .MuiAlert-action": {
            padding: "12px 16px 0px 16px",
            marginRight: 0,
            "& > .MuiButtonBase-root.MuiIconButton-root": {
              padding: 0,
              "& > .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            },
          },
        },
        standardSuccess: {
          backgroundColor: "#CDE9CE",
          "& > .MuiAlert-message": {
            color: common.black,
            "& > p": {
              marginTop: "0.35rem",
            },
          },
          "& > .MuiAlert-icon": {
            color: common.black,
            backgroundColor: "#4CAF50",
            fontSize: "24px",
          },
          "& > .MuiAlert-action": {
            padding: "12px 16px 0px 16px",
            marginRight: 0,
            "& > .MuiButtonBase-root.MuiIconButton-root": {
              padding: 0,
              "& > .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            },
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
