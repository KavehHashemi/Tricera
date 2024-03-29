import { createTheme } from "@mui/material/styles";

export const generateTheme = (isLightMode: boolean) => {
  const customTheme = createTheme({
    palette: {
      mode: isLightMode ? "light" : "dark",
      background: {
        default: isLightMode ? "#fff" : "#000",
        paper: isLightMode ? "#eeeeef" : "#111112",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            color: isLightMode ? "black" : "whitesmoke",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "0.5rem",
            gap: "0.1rem",
            "&:hover": {
              boxShadow: isLightMode
                ? "0px 5px 5px -3px rgba(0, 0, 0,0.2), 0px 8px 10px 1px rgba(0, 0, 0,0.14), 0px 3px 14px 2px rgba(0, 0, 0,0.12)"
                : "0px 3px 0px -1px rgb(134,137,220)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderBottom: isLightMode
              ? "0px solid #2a2a2a"
              : "1px solid #2a2a2a",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { color: isLightMode ? "black" : "whitesmoke" },
        },
      },
    },
  });
  return customTheme;
};

// export const darkThemeOptions: ThemeOptions = {
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#00f3ff",
//     },
//     secondary: {
//       main: "#8689DC",
//     },
//     background: {
//       default: "#000011",
//       paper: "#000000",
//     },
//     text: {
//       primary: "#c5c5c5",
//       secondary: "#efefef",
//     },
//   },
//   components: {
//     MuiLink: {
//       styleOverrides: {
//         root: { textDecoration: "none" },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "0.5rem",
//           gap: "0.1rem",
//           "&:hover": {
//             boxShadow: "0px 3px 0px -1px rgb(134,137,220)",
//           },
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           borderBottom: "1px solid #2a2a2a",
//         },
//       },
//     },
//   },
// shadows: [
//   "none",
//   "0px 2px 1px -1px rgba(134,137,220,0.2), 0px 1px 1px 0px rgba(134, 137, 220,0.14), 0px 1px 3px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 1px -2px rgba(134, 137, 220,0.2), 0px 2px 2px 0px rgba(134, 137, 220,0.14), 0px 1px 5px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 3px -2px rgba(134, 137, 220,0.2), 0px 3px 4px 0px rgba(134, 137, 220,0.14), 0px 1px 8px 0px rgba(134, 137, 220,0.12)",
//   "0px 2px 4px -1px rgba(134, 137, 220,0.2), 0px 4px 5px 0px rgba(134, 137, 220,0.14), 0px 1px 10px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 5px -1px rgba(134, 137, 220,0.2), 0px 5px 8px 0px rgba(134, 137, 220,0.14), 0px 1px 14px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 5px -1px rgba(134, 137, 220,0.2), 0px 6px 10px 0px rgba(134, 137, 220,0.14), 0px 1px 18px 0px rgba(134, 137, 220,0.12)",
//   "0px 4px 5px -2px rgba(134, 137, 220,0.2), 0px 7px 10px 1px rgba(134, 137, 220,0.14), 0px 2px 16px 1px rgba(134, 137, 220,0.12)",
//   "0px 5px 5px -3px rgba(134, 137, 220,0.2), 0px 8px 10px 1px rgba(134, 137, 220,0.14), 0px 3px 14px 2px rgba(134, 137, 220,0.12)",
//   "0px 5px 6px -3px rgba(134, 137, 220,0.2), 0px 9px 12px 1px rgba(134, 137, 220,0.14), 0px 3px 16px 2px rgba(134, 137, 220,0.12)",
//   "0px 6px 6px -3px rgba(134, 137, 220,0.2), 0px 10px 14px 1px rgba(134, 137, 220,0.14), 0px 4px 18px 3px rgba(134, 137, 220,0.12)",
//   "0px 6px 7px -4px rgba(134, 137, 220,0.2), 0px 11px 15px 1px rgba(134, 137, 220,0.14), 0px 4px 20px 3px rgba(134, 137, 220,0.12)",
//   "0px 7px 8px -4px rgba(134, 137, 220,0.2), 0px 12px 17px 2px rgba(134, 137, 220,0.14), 0px 5px 22px 4px rgba(134, 137, 220,0.12)",
//   "0px 7px 8px -4px rgba(134, 137, 220,0.2), 0px 13px 19px 2px rgba(134, 137, 220,0.14), 0px 5px 24px 4px rgba(134, 137, 220,0.12)",
//   "0px 7px 9px -4px rgba(134, 137, 220,0.2), 0px 14px 21px 2px rgba(134, 137, 220,0.14), 0px 5px 26px 4px rgba(134, 137, 220,0.12)",
//   "0px 8px 9px -5px rgba(134, 137, 220,0.2), 0px 15px 22px 2px rgba(134, 137, 220,0.14), 0px 6px 28px 5px rgba(134, 137, 220,0.12)",
//   "0px 8px 10px -5px rgba(134, 137, 220,0.2), 0px 16px 24px 2px rgba(134, 137, 220,0.14), 0px 6px 30px 5px rgba(134, 137, 220,0.12)",
//   "0px 8px 11px -5px rgba(134, 137, 220,0.2), 0px 17px 26px 2px rgba(134, 137, 220,0.14), 0px 6px 32px 5px rgba(134, 137, 220,0.12)",
//   "0px 9px 11px -5px rgba(134, 137, 220,0.2), 0px 18px 28px 2px rgba(134, 137, 220,0.14), 0px 7px 34px 6px rgba(134, 137, 220,0.12)",
//   "0px 9px 12px -6px rgba(134, 137, 220,0.2), 0px 19px 29px 2px rgba(134, 137, 220,0.14), 0px 7px 36px 6px rgba(134, 137, 220,0.12)",
//   "0px 10px 13px -6px rgba(134, 137, 220,0.2), 0px 20px 31px 3px rgba(134, 137, 220,0.14), 0px 8px 38px 7px rgba(134, 137, 220,0.12)",
//   "0px 10px 13px -6px rgba(134, 137, 220,0.2), 0px 21px 33px 3px rgba(134, 137, 220,0.14), 0px 8px 40px 7px rgba(134, 137, 220,0.12)",
//   "0px 10px 14px -6px rgba(134, 137, 220,0.2), 0px 22px 35px 3px rgba(134, 137, 220,0.14), 0px 8px 42px 7px rgba(134, 137, 220,0.12)",
//   "0px 11px 14px -7px rgba(134, 137, 220,0.2), 0px 23px 36px 3px rgba(134, 137, 220,0.14), 0px 9px 44px 8px rgba(134, 137, 220,0.12)",
//   "0px 11px 15px -7px rgba(134, 137, 220,0.2), 0px 24px 38px 3px rgba(134, 137, 220,0.14), 0px 9px 46px 8px rgba(134, 137, 220,0.12)",
// ],
// };

// export const lightThemeOptions: ThemeOptions = {
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#00f3ff",
//     },
//     secondary: {
//       main: "#8689DC",
//     },
//     background: {
//       default: "#eeeeee",
//       paper: "#fefefe",
//     },
//     text: {
//       primary: "#324b4d",
//     },
//   },
//   components: {
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           color: "#324b4d",
//           textDecoration: "none",
//           "&:active": { color: "inherit" },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "0.5rem",
//           gap: "0.1rem",
//           "&:hover": {
//             boxShadow:
//               "0px 5px 5px -3px rgba(0, 0, 0,0.2), 0px 8px 10px 1px rgba(0, 0, 0,0.14), 0px 3px 14px 2px rgba(0, 0, 0,0.12)",
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           color: "#324b4d",
//         },
//       },
//     },
//   },
// shadows: [
//   "none",
//   "0px 2px 1px -1px rgba(134, 137, 220,0.2), 0px 1px 1px 0px rgba(134, 137, 220,0.14), 0px 1px 3px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 1px -2px rgba(134, 137, 220,0.2), 0px 2px 2px 0px rgba(134, 137, 220,0.14), 0px 1px 5px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 3px -2px rgba(134, 137, 220,0.2), 0px 3px 4px 0px rgba(134, 137, 220,0.14), 0px 1px 8px 0px rgba(134, 137, 220,0.12)",
//   "0px 2px 4px -1px rgba(134, 137, 220,0.2), 0px 4px 5px 0px rgba(134, 137, 220,0.14), 0px 1px 10px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 5px -1px rgba(134, 137, 220,0.2), 0px 5px 8px 0px rgba(134, 137, 220,0.14), 0px 1px 14px 0px rgba(134, 137, 220,0.12)",
//   "0px 3px 5px -1px rgba(134, 137, 220,0.2), 0px 6px 10px 0px rgba(134, 137, 220,0.14), 0px 1px 18px 0px rgba(134, 137, 220,0.12)",
//   "0px 4px 5px -2px rgba(134, 137, 220,0.2), 0px 7px 10px 1px rgba(134, 137, 220,0.14), 0px 2px 16px 1px rgba(134, 137, 220,0.12)",
//   "0px 5px 5px -3px rgba(134, 137, 220,0.2), 0px 8px 10px 1px rgba(134, 137, 220,0.14), 0px 3px 14px 2px rgba(134, 137, 220,0.12)",
//   "0px 5px 6px -3px rgba(134, 137, 220,0.2), 0px 9px 12px 1px rgba(134, 137, 220,0.14), 0px 3px 16px 2px rgba(134, 137, 220,0.12)",
//   "0px 6px 6px -3px rgba(134, 137, 220,0.2), 0px 10px 14px 1px rgba(134, 137, 220,0.14), 0px 4px 18px 3px rgba(134, 137, 220,0.12)",
//   "0px 6px 7px -4px rgba(134, 137, 220,0.2), 0px 11px 15px 1px rgba(134, 137, 220,0.14), 0px 4px 20px 3px rgba(134, 137, 220,0.12)",
//   "0px 7px 8px -4px rgba(134, 137, 220,0.2), 0px 12px 17px 2px rgba(134, 137, 220,0.14), 0px 5px 22px 4px rgba(134, 137, 220,0.12)",
//   "0px 7px 8px -4px rgba(134, 137, 220,0.2), 0px 13px 19px 2px rgba(134, 137, 220,0.14), 0px 5px 24px 4px rgba(134, 137, 220,0.12)",
//   "0px 7px 9px -4px rgba(134, 137, 220,0.2), 0px 14px 21px 2px rgba(134, 137, 220,0.14), 0px 5px 26px 4px rgba(134, 137, 220,0.12)",
//   "0px 8px 9px -5px rgba(134, 137, 220,0.2), 0px 15px 22px 2px rgba(134, 137, 220,0.14), 0px 6px 28px 5px rgba(134, 137, 220,0.12)",
//   "0px 8px 10px -5px rgba(134, 137, 220,0.2), 0px 16px 24px 2px rgba(134, 137, 220,0.14), 0px 6px 30px 5px rgba(134, 137, 220,0.12)",
//   "0px 8px 11px -5px rgba(134, 137, 220,0.2), 0px 17px 26px 2px rgba(134, 137, 220,0.14), 0px 6px 32px 5px rgba(134, 137, 220,0.12)",
//   "0px 9px 11px -5px rgba(134, 137, 220,0.2), 0px 18px 28px 2px rgba(134, 137, 220,0.14), 0px 7px 34px 6px rgba(134, 137, 220,0.12)",
//   "0px 9px 12px -6px rgba(134, 137, 220,0.2), 0px 19px 29px 2px rgba(134, 137, 220,0.14), 0px 7px 36px 6px rgba(134, 137, 220,0.12)",
//   "0px 10px 13px -6px rgba(134, 137, 220,0.2), 0px 20px 31px 3px rgba(134, 137, 220,0.14), 0px 8px 38px 7px rgba(134, 137, 220,0.12)",
//   "0px 10px 13px -6px rgba(134, 137, 220,0.2), 0px 21px 33px 3px rgba(134, 137, 220,0.14), 0px 8px 40px 7px rgba(134, 137, 220,0.12)",
//   "0px 10px 14px -6px rgba(134, 137, 220,0.2), 0px 22px 35px 3px rgba(134, 137, 220,0.14), 0px 8px 42px 7px rgba(134, 137, 220,0.12)",
//   "0px 11px 14px -7px rgba(134, 137, 220,0.2), 0px 23px 36px 3px rgba(134, 137, 220,0.14), 0px 9px 44px 8px rgba(134, 137, 220,0.12)",
//   "0px 11px 15px -7px rgba(134, 137, 220,0.2), 0px 24px 38px 3px rgba(134, 137, 220,0.14), 0px 9px 46px 8px rgba(134, 137, 220,0.12)",
// ],
// };
