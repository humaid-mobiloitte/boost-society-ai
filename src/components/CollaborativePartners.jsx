import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, useMediaQuery, Fade, IconButton } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const partners = [
  {
    name: "Mobiloitte Technologies",
    description:
      "Our partnership with Mobiloitte Technologies has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/mobiloitteIcon.png",
  },
  {
    name: "Disney Enterprises",
    description:
      "Our partnership with Disney Enterprises has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/disneyIcon.png",
  },
  {
    name: "LinkedIn",
    description:
      "Our partnership with LinkedIn has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/linkedInIcon.png",
  },
  {
    name: "Mobiloitte Technologies",
    description:
      "Our partnership with Mobiloitte Technologies has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/mobiloitteIcon.png",
  },
  {
    name: "LinkedIn",
    description:
      "Our partnership with LinkedIn has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/linkedInIcon.png",
  },
  {
    name: "Mobiloitte Technologies",
    description:
      "Our partnership with Mobiloitte Technologies has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/mobiloitteIcon.png",
  },
  {
    name: "Disney Enterprises",
    description:
      "Our partnership with Disney Enterprises has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/disneyIcon.png",
  },
  {
    name: "LinkedIn",
    description:
      "Our partnership with LinkedIn has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/linkedInIcon.png",
  }
];

const CollaborativePartners = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  

  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => setTransitioning(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [transitioning]);

  const handlePrev = () => {
    if (index > 0 && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      // console.log(`I am previous index ${index}`)
    }
  };
  const isLargeScreen = useMediaQuery("(min-width:1200px)");  // lg and up
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");  // md
  const isSmallScreen = useMediaQuery("(min-width:600px) and (max-width:899px)");  // sm
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");  // xs

  const itemsPerPage = isLargeScreen ? 3.5 : isMediumScreen ? 2.5: isSmallScreen ? 1 : 1;

  const handleNext = () => {
    if (index < partners.length && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.min(prevIndex + 1, partners.length-itemsPerPage));
      // console.log(`I am next index ${index}`)
    }
  };
  
  return (
    <Box textAlign="center" position="relative" px="5%">
      <Typography variant="h3" fontWeight={600} py={5} sx={{ fontSize: { md: '2.5rem', xs: '1.5rem' } }}>
        Collaborative Partners
      </Typography>
      <Typography variant="body1" mb={3} sx={{ fontSize: { md: '1.2rem', xs: '1rem' } }}>
        Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners.
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        {/* left arrow */}
        <IconButton 
          onClick={handlePrev}
          disabled={index === 0}
          sx={{ 
            bgcolor: "#D35400", 
            color: "white",
            cursor: 'pointer',
            position: 'absolute',
            left: '4%',
            zIndex: 1,
            '&:hover': {
              bgcolor: "#D35400", // Keep the same background color on hover
              color: "white",    // Keep the same text color on hover
            } 
          }}
        >
          <ArrowBackIos color="white"/>
        </IconButton>

        {/* cards */}
        <Box
          display="flex"
          overflow="hidden"
        >
          <Box
            display="flex"
            sx={{
              transform: `translateX(-${index * (isLargeScreen ? 461 : isMediumScreen ? 381 : isSmallScreen ? 330 : isExtraSmallScreen ? (window.innerWidth * 0.94): 180)}px)`, // Adjust translateX dynamically based on screen size //ISSE CAROUSAL CHAL RHA HAI
              transition: transitioning ? "transform 0.3s ease-in-out" : "none",
              padding: '2% 0',
            }}
          >
            {partners.map((partner, idx) => (
              <Card
                key={idx}
                sx={{
                  width: { xs: "90vw",sm:'300px', md: "350px", lg: "420px" }, // Adjust card width at different breakpoints //ISSE CAROUSAL CHAL RHA HAI
                  height:'auto',
                  textAlign: "left",
                  // p: '0.5% 1.2% 1.2% 1.2%',
                  p:{md:'0.5% 1.2% 1.2% 1%', xs:'0.5% 1.2% 1.2% 2%'},
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginRight: '1%', //ISSE CAROUSAL CHAL RHA HAI
                  position: "relative",
                  borderRadius: "10px 10px 10px 0",
                  backgroundColor: idx % 2 === 0 ? "rgba(82,49,104,0.15)" : "rgba(230, 143, 45, 0.15)",
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    paddingLeft: 0
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <img src={partner.logo} alt={partner.name} width="auto" height={56} />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ fontSize: { md: '1.5rem', xs: '1rem' } }}>
                      {partner.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { md: '1rem', xs: '0.8rem', color:'rgba(63, 60, 60, 0.87)' } }}>
                      {partner.description}
                    </Typography>
                  </Box>
                </CardContent>

                {/* Learn more or arrow */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: 'center',
                    gap: 1,
                    color: '#542F03',
                    position: "relative",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Learn more</Typography>
                  <EastIcon sx={{ fontSize: '1.2rem' }} />
                </Box>

                {/* Stroke Image positioned at the bottom left */}
                <Box
                  component="img"
                  src="src/assets/collaborativePartnerSection/corner_flick.png"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "24%",
                    height: "auto",
                  }}
                />
              </Card>
            ))}
          </Box>
        </Box>

        {/* right arrow */}
        <IconButton 
          onClick={handleNext} 
          disabled={index + itemsPerPage>= partners.length}
          sx={{ 
            bgcolor: "#D35400", 
            color: "white",
            cursor: 'pointer',
            position: 'absolute',
            right: '4%',
            zIndex: 1,
            '&:hover': {
              bgcolor: "#D35400", // Keep the same background color on hover
              color: "white",    // Keep the same text color on hover
            } 
          }}
          >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CollaborativePartners;
