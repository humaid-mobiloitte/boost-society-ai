import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const styles = {
  boxContainer: {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "95vh",
  },
  slide: (translateX) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 1s ease-in-out",
    transform: `translateX(${translateX}%)`,
  }),
  contentBox: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    my: 6,
    background: "linear-gradient(rgba(228,103,3,1), rgba(199,52,13,1))",
    borderRadius: "10px",
    height: "60px",
    padding: "2% 10%",
    fontSize: "1.2rem",
  },
};

// ✅ Reusable Slide Component
const HeroSlide = ({ heading, subheading, image, translateX }) => (
  <Box
    sx={{
      ...styles.slide(translateX),
      backgroundImage: `url(${image})`,
    }}
  >
    <Grid container sx={{ height: "100%", zIndex: 300, py: 36 }}>
      <Grid item md={8} sx={{ color: "white", textAlign: "left" }}>
        <Typography variant="h1">{heading}</Typography>
        <Typography variant="body1" sx={{ fontSize: "1.2rem",fontWeight:'400',color:'silver' }}>
          {subheading}
        </Typography>
      </Grid>
      <Grid item md={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="warning" sx={{...styles.button,fontWeight:'600' }}>
          Know more <span style={{ fontSize: "1.2rem", marginLeft: "10px"}}>→</span>
        </Button>
      </Grid>
    </Grid>
  </Box>
);

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [translateX1, setTranslateX1] = useState(0);
  const [translateX2, setTranslateX2] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide === 1) {
        setTranslateX1(-100); // Move first slide out to the left
        setTranslateX2(0); // Move second slide in from the right
        setActiveSlide(2);
      } else {
        setTranslateX1(0); // Move first slide back in from the right
        setTranslateX2(100); // Move second slide out to the left
        setActiveSlide(1);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <Box sx={styles.boxContainer}>
      {/* First Slide */}
      <HeroSlide
        heading="Business BOOST! Society™"
        subheading="Welcome to Business BOOST! Society™. Join a community of like-minded business
        owners committed to positive impact and sustainable growth. At Business BOOST!
        Society™, we connect strategic vision with tangible results."
        image="src/assets/heroSectionImages/hero_section_background_image.png"
        translateX={translateX1}
      />

      {/* Second Slide */}
      <HeroSlide
        heading="BoostSociety.Ai"
        subheading="We offer a cutting-edge platform for hosting various programs, featuring
        expert-led cohorts & advanced tools. Explore dynamic partnership opportunities
        and see how we can elevate your organization or help you join one of our
        transformative cohorts!"
        image="src/assets/heroSectionImages/hero_section_background_image.png"
        translateX={translateX2}
      />
    </Box>
  );
}

export default HeroSection;
