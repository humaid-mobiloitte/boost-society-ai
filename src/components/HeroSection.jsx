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
      <Grid container sx={{height:'100%',width:'100vw',padding:'12%',zIndex: 300,display:'flex'}}>
        <Grid item md={8} sx={{  color: 'white',  textAlign: 'left' }}>
          <Typography variant="h1">Business Boost Society</Typography>
          <Typography variant='body1'>Unlock your full potential through our exclusive community of entrepreneurs & achieve success through group accountability and support.</Typography>
        </Grid>
        <Grid item md={4} sx={{justifyContent:'right'}}>
          <Button variant="contained" color="warning" sx={{ my: 2, backgroundColor:'rgba(228, 103, 3, 1)', borderRadius:'6px' }}>
            Know more →
          </Button>
        </Grid>  
      </Grid>
    </Box>
  )
}

export default HeroSection
