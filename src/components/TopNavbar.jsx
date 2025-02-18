import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import MenuIcon from './MenuIcon'; 
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { data } from '../data/data';  // Importing the data

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
    padding: '0.9% 0', // Adds vertical padding
  },
  links: {
    display: { xs: 'none', md: 'flex' }, // Hide links on small screens
    gap: {md:'1rem',xs:'0.5rem'}, // Adds space between links
    marginLeft: { xs: 'none', md: 'auto' }, // Push links to the right
    alignItems: 'center', // Align links and dividers vertically
    justifyContent: 'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '8px', md: '16px' }, // Adjusted spacing between buttons for responsiveness
  },
  loginButton: {
    border: '2px solid rgba(228, 103, 3, 1)', // Custom border for login button
    gap: {xs:'0px', md:'8px'}, // Adjusted gap between text and icon
    borderRadius: '6px',
    color: 'rgba(228, 103, 3, 1)',
    px: { xs: 1, md: 3 }, // Adjusted padding for different screen sizes
    fontSize: { xs: '0.62rem', md: '1rem' }, // Responsive font size
    height: { xs: '32px', md: '40px' }, // Responsive button height
    // height:'auto'
    // width:'auto'
  },
  signupButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'black',
    // borderRadius: '6px',
    px:1, // Adjusted padding for different screen sizes
    fontSize: { xs: '0.62rem', md: '1rem' }, // Responsive font size
    height: { xs: '32px', md: '40px' }, // Responsive button height
    // minWidth: '90px', // Ensures "Sign up" stays in one line
    marginLeft:{xs:'none', md:2}
  },
  logo: {
    width: 'auto',
    height: '70%',
  },
  menuIcon: {
    display: { xs: 'flex', md: 'none' }, // Show on small screens only
    cursor: 'pointer',
    marginRight: '2%',
    // minWidth: '40px', // Ensures clickable area for smaller screens
    // YE CHOTI SCREEN PR LOGO AUR MENU ICON KI DISTANCE SMBHALEGA
    // Adjust spacing between logo and menu icon
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
        <Box sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
          <Box sx={TopNavbarStyles.menuIcon}>
            <MenuIcon color="black" size={14} />
          </Box>
          <Box sx={TopNavbarStyles.logo}>
            <img
              src={data.topNavbar.images.logo}  // Using image from the topNavbar data
              alt={data.topNavbar.text.logoAlt}  // Using alt text from the topNavbar data
              style={{ width: '85%', height: 'auto', minWidth:'93.31px', minHeight:'25.59px' }}
            />
          </Box>
        </Box>

        <Box sx={TopNavbarStyles.links}>
          <Typography variant="body1" sx={{color:'black'}}>{data.topNavbar.text.aboutUs}</Typography>
          <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1" sx={{color:'black'}}>{data.topNavbar.text.cohort}</Typography>
          <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1" sx={{color:'black'}}>{data.topNavbar.text.accelerator}</Typography>
          <Divider orientation="vertical" flexItem sx={TopNavbarStyles.divider} />
          <Typography variant="body1" sx={{color:'black'}}>{data.topNavbar.text.contactUs}</Typography>
        </Box>

        <Box sx={TopNavbarStyles.actions}>
          <Button variant="button" sx={TopNavbarStyles.signupButton}>{data.topNavbar.text.signUpButton}</Button>
          <Button variant="button" sx={TopNavbarStyles.loginButton}>
            {data.topNavbar.text.loginButton}
            <img
              src={data.topNavbar.images.loginIcon}  // Using image from the topNavbar data
              alt={data.topNavbar.text.loginIconAlt}  // Using alt text from the topNavbar data
              style={{ marginLeft: '0.5rem', width: '1rem', height: 'auto' }}
            />
          </Button>

          <Box>
            <Brightness4Icon sx={{width:{md:'36px', xs:'24px'},height:'auto'}}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopNavbar;
