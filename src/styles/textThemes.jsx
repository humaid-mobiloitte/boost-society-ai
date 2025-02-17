import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Outfit',
    h1: {
      fontSize: '4.2rem', // Large for main headings
      fontWeight: 700, // Bold
    },
    h2: {
      fontSize: '2rem', // Medium size for subheadings
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.5rem', // Medium size for subheadings
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.96rem', // Default text
      fontWeight: 500,
      color: "darkslategrey",
    },
    button: {
      textTransform: 'none', // Keep button text normal case
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    fontFamily: 'Outfit',
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
          color: 'white', // Set text color for List
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: 'Outfit',
          color: 'white', // Set text color for ListItemText primary text
        },
        secondary: {
          fontFamily: 'Outfit',
          color: 'white', // Set text color for secondary text
        },
      },
    },
  },
});

export default theme;
