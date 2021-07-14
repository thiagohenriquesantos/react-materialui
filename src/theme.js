import { createTheme } from '@material-ui/core';

export const theme = (darkMode) => (createTheme({
  spacing: 4,
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },
    background: {
      default: darkMode ? '#232323' : '#FFF',
      dark: darkMode ? '#181818' : '#f4f6f8',
      paper: darkMode ? '#232323' : '#FFF',
    },
  },
}));