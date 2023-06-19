import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px", // Replace with your preferred value
          boxShadow: "none", // Replace with your preferred box-shadow
          fontFamily: "Nunito",
          fontStyle: "normal",
          textTransform: "none",
          backgroundColor: "#4475F2",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito",
          fontWeight: 600,
          fontSize: "calc(10px + 18 * (100vw / 1920))",
          lineHeight: "38px",
          color: "#444B59",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontStyle: "normal",
          color: "#444B59",
          "&.MuiTypography-h1": {
            fontFamily: "Overpass",
            fontWeight: 800,
            fontSize: "calc(15px + 16 * (100vw / 1920))",
            lineHeight: "46px",
          },
          "&.MuiTypography-h2": {
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: "calc(20px + 20 * (100vw / 1920))",
            lineHeight: "62px",
            color: "#151D21",
          },
          "&.MuiTypography-h3": {
            fontWeight: 300,
            fontSize: "calc(10px + 10 * (100vw / 1920))",
            lineHeight: "24px",
          },
          // "&.MuiTypography-h4": {
          //   fontWeight: 600,
          //   fontSize: "14px",
          //   lineHeight: "20px",
          // },
          "&.MuiTypography-body1": {
            fontFamily: "Montserrat",
            fontWeight: 300,
            fontSize: "calc(6px + 15 * (100vw / 1920))",
            lineHeight: "20px",
            leterSpacing: "0.07rem",
          },
          // "&.MuiTypography-body2": {
          //   fontWeight: 400,
          //   fontSize: "14px",
          //   lineHeight: "20px",
          // },
          "&.MuiTypography-subtitle1": {
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "calc(12px + 12 * (100vw / 1920))",
            lineHeight: "16px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          color: "#fff",
          fontSize: "calc(5px + 10 * (100vw / 1920))",
          fontWeight: 400,
          margin: "0 30px",
          "&.Mui-selected": {
            fontWeight: 600,
            color: "#fff",
            fontSize: "calc(5px + 13 * (100vw / 1920))",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito",
          fontWeight: 400,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px", // Replace with your preferred value
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4475F2",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderColor: "#4475F2",
            },
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4475F2",
            },
          },
        },
        input: {
          padding: "11px 12px",
        },
      },
    },
  },
});
