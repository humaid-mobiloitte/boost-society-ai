import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import MenuIcon from './MenuIcon'; 
import Brightness4Icon from '@mui/icons-material/Brightness4';

const TopNavbarStyles = {
  outerBox: {
    width: '100%',
    backgroundColor: 'white', // Optional: Set a background color for visibility
    position: 'fixed', // Fixes the navbar to the top
    zIndex: 1000, // Ensures the navbar is above other content
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Softer shadow effect
  },
  innerBox: {
    display: 'flex',
    justifyContent: 'space-between', // Ensures space between elements
    alignItems: 'center',
    width: '90%', // 90% of the total width to maintain 5% padding on both sides
    margin: '0 auto', // Centers the navbar horizontally
    padding: '0.8% 0', // Adds vertical padding
  },
  links: {
    display: { xs: 'none', md: 'flex' }, // Hide links on small screens
    gap: '1rem', // Adds space between links
    marginLeft: { xs: 'none', md: 'auto' }, // Push links to the right
    alignItems: 'center', // Align links and dividers vertically
    justifyContent: 'center',
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
    // padding: '1% 32%',
    gap: '1rem',
    borderRadius: '6px',
    color:'rgba(228, 103, 3, 1)'
  },
  logo: {
    width: 'auto',
    height: '70%',
  },
  menuIcon: {
    display: { xs: 'flex', md: 'none' }, // Show on small screens only
    cursor: 'pointer',
    marginRight: '2%',
    // YE CHOTI SCREEN PR LOGO AUR MENU ICON KI DISTANCE SMBHALEGA
  },
  divider: {
    height: '24px', // Match the height of the links
    borderRight: '1px solid rgba(0, 0, 0, 0.12)', // Light gray divider
  },
};

function TopNavbar() {
  return (
    <Box sx={TopNavbarStyles.outerBox}>
      <Box sx={TopNavbarStyles.innerBox}>
        {/* Menu Icon for small screens */}
        <Box sx={TopNavbarStyles.menuIcon}>
          <MenuIcon color="black" size={18} />
        </Box>
        {/* Logo on the extreme left */}
        <Box sx={TopNavbarStyles.logo}>
          <img
            src="src/assets/heroSectionImages/logo_businessBoostSociety.png"
            alt="logo not found"
            style={{ width: '85%', height: 'auto', minWidth:'93.31px', minHeight:'25.59px' }}
          />
        </Box>

        {/* Links in the middle (hidden on small screens) */}
        <Box sx={TopNavbarStyles.links}>
          <Typography variant="body1" sx={{color:'black'}}>About Us</Typography>
          {/* <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1">Partners & Project</Typography> */}
          <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1" sx={{color:'black'}}>Cohort</Typography>
          <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1" sx={{color:'black'}}>Accelerator</Typography>
          <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1" sx={{color:'black'}}>Contact Us</Typography>
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

          <Box>
            {/* <img src="src/assets/heroSectionImages/themeNavButton.png" alt="" /> */}
            <Brightness4Icon sx={{width:'40px',height:'auto'}}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopNavbar;
