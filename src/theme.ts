import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1semibold: React.CSSProperties;
    h2semibold: React.CSSProperties;
    h3semibold: React.CSSProperties;
    h4semibold: React.CSSProperties;
    h5semibold: React.CSSProperties;
    h6semibold?: React.CSSProperties;
    body1italic?: React.CSSProperties;
    body1semibold: React.CSSProperties;
    body2italic?: React.CSSProperties;
    body2semibold: React.CSSProperties;
    subtitle1semibold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1semibold?: React.CSSProperties;
    h2semibold?: React.CSSProperties;
    h3semibold?: React.CSSProperties;
    h4semibold?: React.CSSProperties;
    h5semibold?: React.CSSProperties;
    h6semibold?: React.CSSProperties;
    body1italic?: React.CSSProperties;
    body1semibold?: React.CSSProperties;
    body2italic?: React.CSSProperties;
    body2semibold?: React.CSSProperties;
    subtitle1semibold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1semibold: true;
    h2semibold: true;
    h3semibold: true;
    h4semibold: true;
    h5semibold: true;
    h6semibold: true;
    body1italic: true;
    body1semibold: true;
    body2italic: true;
    body2semibold: true;
    subtitle1semibold: true;
  }
}

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
    text: {
      primary: "#1D2939",
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
      lineHeight: "32px",
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
      fontWeight: fontWeight.normal,
      letterSpacing: "0px",
      lineHeight: "20px",
    },
    h5: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: "18px",
      fontWeight: fontWeight.normal,
      lineHeight: "20px",
    },
    h6: {
      fontFamily: "Rubik, sans-serif",
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
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
      lineHeight: "16px",
    },
    h1semibold: {
      fontSize: "32px",
      fontWeight: fontWeight.bold,
      fontFamily: "Rubik, sans-serif",
    },
    h2semibold: {
      fontSize: "28px",
      fontWeight: fontWeight.bold,
      fontFamily: "Rubik, sans-serif",
      lineHeight: "32px",
    },
    h3semibold: {
      fontWeight: fontWeight.bold,
      fontSize: "24px",
      letterSpacing: "0px",
      lineHeight: "24px",
      fontFamily: "Rubik, sans-serif",
    },
    h4semibold: {
      fontSize: "20px",
      fontWeight: fontWeight.bold,
      letterSpacing: "0px",
      lineHeight: "20px",
      fontFamily: "Rubik, sans-serif",
    },
    h5semibold: {
      fontSize: "18px",
      fontWeight: fontWeight.bold,
      fontFamily: "Rubik, sans-serif",
      lineHeight: "20px",
    },
    h6semibold: {
      fontWeight: fontWeight.bold,
      fontFamily: "Rubik, sans-serif",
    },
    body1semibold: {
      fontSize: "16px",
      fontWeight: fontWeight.bold,
      letterSpacing: "0px",
      lineHeight: "24px",
      fontFamily: "Roboto, sans-serif",
    },
    body1italic: {
      fontSize: "16px",
      fontStyle: "italic",
      letterSpacing: "0px",
      lineHeight: "24px",
      fontWeight: fontWeight.normal,
    },
    body2semibold: {
      fontSize: "14px",
      fontWeight: fontWeight.bold,
      fontFamily: "Roboto, sans-serif",
      lineHeight: "20px",
    },
    body2italic: {
      fontSize: "14px",
      lineHeight: "20px",
      fontStyle: "italic",
      fontFamily: "Roboto, sans-serif",
      fontWeight: fontWeight.normal,
    },
    subtitle1semibold: {
      fontWeight: fontWeight.bold,
      fontSize: "14px",
      lineHeight: "16px",
      fontFamily: "Roboto, sans-serif",
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
    MuiOutlinedInput: {
      styleOverrides: {
        multiline: {
          padding: "1rem",
        },
        root: {
          "&.Mui-disabled": {
            color: "#101828",
            backgroundColor: "#E4E7EC",
          },
          "& input::placeholder": {
            color: "#667085",
            opacity: 1,
            fontSize: "14px",
            lineHeight: "20px",
          },
        },
        input: {
          padding: "10px 14px 10px 0px",
          "&.Mui-disabled": {
            WebkitTextFillColor: "#000",
          },
        },
        notchedOutline: {
          borderColor: "#D0D5DD",
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
    MuiTable: {
      styleOverrides: {
        root: {
          "& tr:last-of-type > td": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontFamily: "Rubik, sans-serif",
            textTransform: "uppercase",
          },
        },
      },
    },
  },
});

export default theme;
