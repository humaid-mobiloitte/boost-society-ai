import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';

const boxStyles = {
  boxContainer: {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    // GPC, OG height:'95%'
    height: {lg:"90vh", md:"90vh",sm:'50vh',xs:'50vh'},
    right: 0,

  },
  slide: (translateX) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "transform 1s ease-in-out",
    transform: `translateX(${translateX}%)`,
  }),
  indicatorContainer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
  },
  indicator: (isActive) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#e46703" : "#ffffffbf",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  }),
};

const imageStyles = {
  imageContainer: {
    position: "absolute",
    // top: 0,
    // left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
};

const contentBoxStyles = {
  contentBox: {
    position: "relative",
    height: "95vh",
    width: "100vw",
    zIndex: 1,
  },
};

const buttonStyles = {
  button: {
    background: "linear-gradient(98deg, #e46703 -1.68%, #c7340d 103.45%)",
    borderRadius: "10px",
    fontFamily: "arial",
    height: { xs: "40px", sm: "45px", md: "60px" },
    padding: { xs: "0.3% 3%", md: "1% 8%" },
    fontSize: { xs: "0.8rem", md: "1.2rem" },
  }
};

// Reusable Slide Component
const HeroSlide = ({ heading, subheading, image, translateX }) => (
  <Box sx={{ ...boxStyles.slide(translateX) }}>
    <img src={image} alt="background" style={imageStyles.imageContainer} />
    <Box sx={{ ...contentBoxStyles.contentBox, px: "5%" }}>
      <Grid container sx={{ py: { xs: 12, md: 27 } }}>
        {/* left content */}
        {/* PADDING RIGHT GPC KIYA HU, WESE ZADA THA */}
        <Grid item md={7} xs={12} sx={{ color: "white", textAlign: "left", paddingRight:{md:6, xs:'5%'}, maxWidth:{md:'94%',xs:'94%'} }}>
          {/* CHOTI SCREEENS K LIYE FONT SIZE UPAR NEECHE KRKE DEKH LENA */}
          <Typography variant="h1" sx={{fontSize:{xs:'1.5rem', md:'4.2rem'}}}>{heading}</Typography>
          <Typography variant="body1" sx={{ fontSize:{xs:'0.9rem',md:'1.2rem'}, fontWeight: '400', color: '#ffffffbf' }}>
            {subheading}
          </Typography>
        </Grid>
        {/* right content */}
        <Grid item md={5} xs={12} sx={{ py: { xs: 6, md: 14 }, paddingLeft:{md:2} }}>
          <Button variant="contained" sx={{ ...buttonStyles.button, fontWeight: '550', display: 'flex', gap: {md:4,xs:1} }}>
            Know more <EastIcon sx={{fontSize:{md:24,xs:12}}}/>
          </Button>
        </Grid>
      </Grid>
    </Box>
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
    }, 16000); // Change slide every 16 seconds

    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleSlideChange = (slideNumber) => {
    if (slideNumber === 1) {
      setTranslateX1(0);
      setTranslateX2(100);
      setActiveSlide(1);
    } else {
      setTranslateX1(-100);
      setTranslateX2(0);
      setActiveSlide(2);
    }
  };

  return (
    <Box sx={boxStyles.boxContainer}>
      {/* First Slide */}
      <HeroSlide
        heading="Business BOOST! Society™"
        subheading="Welcome to Business BOOST! Society™. Join a community of like-minded business
        owners committed to positive impact and sustainable growth. At Business BOOST!
        Society™, we connect strategic vision with tangible results."
        image="src/assets/heroSectionImages/website_background_hero.png"
        translateX={translateX1}
      />

      {/* Second Slide */}
      <HeroSlide
        heading="BoostSociety.Ai"
        subheading="We offer a cutting-edge platform for hosting various programs, featuring
        expert-led cohorts & advanced tools. Explore dynamic partnership opportunities
        and see how we can elevate your organization."
        image="src/assets/heroSectionImages/hero_section_bg_img2.png"
        translateX={translateX2}
      />

      {/* Slide Indicators */}
      <Box sx={boxStyles.indicatorContainer}>
        <Box sx={boxStyles.indicator(activeSlide === 1)} onClick={() => handleSlideChange(1)} />
        <Box sx={boxStyles.indicator(activeSlide === 2)} onClick={() => handleSlideChange(2)} />
      </Box>
    </Box>
  );
}

export default HeroSection;
