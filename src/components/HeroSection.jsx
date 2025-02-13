import React from 'react'
import { Box,Typography,Grid, Button } from '@mui/material'



const style = {
  
  box1:{ 
    position: 'relative', 
    backgroundImage: "url('src/assets/heroSectionImages/hero_section_background_image.png')", 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '90vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }
}

function HeroSection() {
  return (
    <Box 
      sx={style.box1}
    >
      {/* Translucent Overlay */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(77, 47, 97, 0.75)',
          zIndex: 1 
        }} 
      />
      
      {/* Cutout Design Image */}
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: -3, 
          zIndex: 2,
          maxWidth:'100%'
        }}
      >
        <img 
          src="src/assets/heroSectionImages/hero_section_orange_scoop.png" 
          alt="Cutout Design" 
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      
      {/* Content */}
      <Grid container sx={{height:'100%',width:'100vw',paddingTop:'14%',zIndex: 300,display:'flex'}}>
        <Grid item md={8} sx={{  color: 'white',  textAlign: 'left' }}>
          <Typography variant="h1">Business Boost Society</Typography>
          <Typography variant='body1'>Unlock your full potential through our exclusive community of entrepreneurs & achieve success through group accountability and support.</Typography>
        </Grid>
        <Grid item md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button 
          variant="contained" 
          color="warning" 
          sx={{ 
            my: 6, 
            background: 'linear-gradient(rgba(228,103,3,1), rgba(199,52,13,1))', // Gradient background
            borderRadius: '10px', 
            height: '60px', 
            width: 'auto', 
            padding: '2% 10%', 
            gap: '20px', 
            fontWeight: 'bold', // Make "Know more" bold
            '& .MuiButton-endIcon': { 
              marginLeft: '0.5rem', // Increase space between text and arrow
              fontSize: '2rem', // Increase arrow size
            }
          }}
        >
          Know more <span style={{ fontSize: '1.2rem', marginLeft: '10px' }}>→</span> {/* Increased arrow size and spacing */}
        </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroSection
