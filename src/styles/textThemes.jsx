import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Outfit',
    h1: {
      fontSize: '4rem', // Large for main headings
      fontWeight: 700, // Bold
    },
    h2: {
      fontSize: '2rem', // Medium size for subheadings
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.95rem', // Default text
      fontWeight: 300,
    },
    button: {
      textTransform: 'none', // Keep button text normal case
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
});

export default theme;
