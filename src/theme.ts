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
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        text: {
          fontWeight: 400,
          boxShadow: "none",
          textTransform: "none",
          textDecoration: "underline",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          position: "absolute" as "absolute",
          right: 0,
          top: 0,
          marginBottom: 0,
          bottom: 0,
          borderRadius: `8px 8px 0 0`,
          maxHeight: "100%",
        },
        paperWidthSm: {
          maxWidth: "640px",
        },
        paperWidthMd: {
          maxWidth: "800px",
        },
        paperWidthLg: {
          maxWidth: "960px",
        },
        paperScrollPaper: {
          maxHeight: "calc(100% - 24px)",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#F2F4F7",
          padding: "24px 24px 24px 48px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "24px 48px 24px 48px",
          "&.MuiDialogContent-root": {
            paddingTop: "24px",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 0,
          textTransform: "none",
          fontWeight: 400,
          borderBottom: `4px solid #E4E7EC`,
          color: "#101828",
          "&.Mui-selected": {
            color: "#101828",
            fontWeight: 500,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          overflow: "visible",
          marginBottom: 16,
          "& .MuiTabs-indicator": {
            transition: "none",
            height: "4px",
          },

          "& .MuiTabs-scroller": {
            overflow: "visible !important",
          },
        },
      },
    },
  },
});

export default theme;
