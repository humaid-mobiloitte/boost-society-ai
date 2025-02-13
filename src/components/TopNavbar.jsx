import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import MenuIcon from './MenuIcon';

const TopNavbarStyles = {
  outerBox: {
    display: 'flex',
    justifyContent: 'space-between', // Ensures space between elements
    alignItems: 'center',
    position: 'fixed', // Fixes the navbar to the top
    left: 0, // Aligns the navbar to the left edge
    right: 0, // Aligns the navbar to the right edge
    top: 0, // Aligns the navbar to the top of the viewport
    width: '100%', // Ensures the navbar takes full width
    padding: '0.8% 0', // Adds equal padding on both sides
    overflowX: 'hidden', // Prevents horizontal scrolling
    backgroundColor: 'white', // Optional: Set a background color for visibility
    zIndex: 1000, // Ensures the navbar is above other content
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Softer shadow effect
  },
  links: {
    display: { xs: 'none', md: 'flex' }, // Hide links on small screens
    gap: '1rem', // Adds space between links
    marginLeft: { xs: 'none', md: 'auto' }, // Push links to the right
    alignItems: 'center', // Align links and dividers vertically
    justifyContent:'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px', // Space between buttons
  },
  loginButton: {
    border: '2px solid rgba(228, 103, 3, 1)', // Custom border for login button
    display: 'flex',
    alignItems: 'center',
    padding: 'auto 1%',
    gap: '1rem',
    borderRadius: '6px',
  },
  logo: {
    width: 'auto',
    height: '70%',
  },
  themeIcon: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  menuIcon: {
    display: { xs: 'flex', md: 'none' }, // Show on small screens only
    cursor: 'pointer',
  },
  divider: {
    height: '24px', // Match the height of the links
    borderRight: '1px solid rgba(0, 0, 0, 0.12)', // Light gray divider
  },
};

function TopNavbar() {
  return (
    <Box sx={{ ...TopNavbarStyles.outerBox }}>
        {/* Menu Icon for small screens */}
      <Box sx={TopNavbarStyles.menuIcon}>
        <MenuIcon color="black" size={20} />
      </Box>
      {/* Logo on the extreme left */}
      <Box sx={TopNavbarStyles.logo}>
        <img
          src="src/assets/heroSectionImages/logo_businessBoostSociety.png"
          alt="logo not found"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>

      {/* Links in the middle (hidden on small screens) */}
      <Box sx={TopNavbarStyles.links}>
        <Typography variant="body1">About Us</Typography>
        {/* <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
        <Typography variant="body1">Partners & Project</Typography> */}
        <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
        <Typography variant="body1">Cohort</Typography>
        <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
        <Typography variant="body1">Accelerator</Typography>
        <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
        <Typography variant="body1">Contact Us</Typography>
      </Box>

      {/* Signup, Login, Theme changer */}
      <Box sx={TopNavbarStyles.actions}>
        <Button variant="button">Sign up</Button>

        {/* Login Button with Icon */}
        <Button variant="button" sx={TopNavbarStyles.loginButton}>
          Login
          <img
            src="src/assets/heroSectionImages/icon_on_login_button.png"
            alt="login icon"
            style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }}
          />
        </Button>

        <Box sx={TopNavbarStyles.themeIcon}>
          <img src="src/assets/heroSectionImages/themeNavButton.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default TopNavbar;