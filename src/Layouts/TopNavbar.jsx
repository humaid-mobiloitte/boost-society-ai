import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import TopNavbarStyles from '../styles/TopNavBarStyles'

function TopNavbar() {
  return (
    <Box sx={{...TopNavbarStyles.outerBox}}>
        {/* Logo on the extreme left */}
        <Box sx={TopNavbarStyles.logo}>
            <img src="src/assets/heroSectionImages/logo_businessBoostSociety.png" alt="logo not found" />
        </Box>

        {/* Links in the middle (hidden on small screens) */}
        <Box sx={TopNavbarStyles.links}>
            <Typography variant='body1'>About Us</Typography>
            <Typography variant='body1'>Partners & Project</Typography>
            <Typography variant='body1'>Cohort</Typography>
            <Typography variant='body1'>Accelerator</Typography>
            <Typography variant='body1'>Contact Us</Typography>
        </Box>

        {/* Signup, Login, Theme changer, and Menu Icon */}
        <Box sx={TopNavbarStyles.actions}>
            <Button variant='button'>Sign up</Button>

            {/* Login Button with Icon */}
            <Button variant='button' sx={TopNavbarStyles.loginButton}>
                Login
                <img src="src/assets/heroSectionImages/icon_on_login_button.png" alt="login icon" style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
                
            </Button>

            <Box sx={TopNavbarStyles.themeIcon}>
                <img src="src/assets/heroSectionImages/themeNavButton.png" alt="" />
            </Box> {/* Circular theme icon */}
        </Box>
    </Box>
  )
}

export default TopNavbar
