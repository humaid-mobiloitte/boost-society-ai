import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, useMediaQuery, Fade } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import EastIcon from '@mui/icons-material/East';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

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
  ,
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
  ,
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
];

const CollaborativePartners = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");
  const itemsToShow = isLargeScreen ? 4 : isMediumScreen ? 3 : 1;

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
    }
  };

  const handleNext = () => {
    if (index + itemsToShow < partners.length && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.min(prevIndex + 1, partners.length - itemsToShow));
    }
  };

  return (
    <Box textAlign="center" position="relative" px="5%">
      <Typography variant="h3" fontWeight={600} py={5} sx={{fontSize:{md:'2.5rem', xs:'1.5rem'}}}>
        Collaborative Partners
      </Typography>
      <Typography variant="body1" mb={3} sx={{fontSize:{md:'1.2rem', xs:'1rem'}}}>
      Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        {/* left arrow */}
          <ArrowCircleLeftRoundedIcon
            onClick={handlePrev}
            disabled={index === 0}
            sx={{
              fontSize:'3.2rem',
              color: index === 0 ? "#f0ab69" : "#D76A03",
              cursor:'pointer',
              position:'absolute',
              left:'4%',
              zIndex:1
            }}
          />

        {/* cards */}
        <Box
          display="flex"
          overflow="hidden"
          // mx={2}
          // width='100%'
          // sx={{ position: "relative",flexGrow:2 }}
        >
          <Box
            display="flex"
            sx={{
              transform: `translateX(-${index * 460}px)`,
              transition: transitioning ? "transform 0.3s ease-in-out" : "none",
              padding:'2% 0',
            }}
          >
            {partners.map((partner, idx) => (
              <Card
              key={idx}
              sx={{
                width: "400px",
                textAlign: "left",
                p: '0.2% 1% 1% 1%',
                boxShadow: 3,
                // minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginRight: "2.2rem",
                position: "relative", // Ensures child elements can be positioned absolutely
                overflow: "hidden", // Prevents the image from overflowing outside
                backgroundColor: idx % 2 == 0 ? "rgba(82,49,104,0.15)" : "rgba(230, 143, 45, 0.15)", // Alternating background colors
              }}
            >
              
              <CardContent
              sx={{
                display:'flex',
                flexDirection:'column',
                gap:2,
                paddingLeft:0
              }}
              >
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                <img src={partner.logo} alt={partner.name} width="auto" height={56}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                  <Typography variant="h5" fontWeight={600} sx={{fontSize:{md:'1.5rem',xs:'1rem'}}}>
                    {partner.name}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:{md:'1rem',xs:'0.8rem'}}}>{partner.description}</Typography>
                </Box>
              </CardContent>
              
              {/* LEarn more aur arrow*/}
              <Box 
                sx={{
                  display:"flex", 
                  alignItems:'center',
                  gap:1,
                  color:'#542F03',
                  position:"relative",

                }}
              >
                <Typography variant="h6" sx={{fontSize:'1.2rem'}}>Learn more</Typography>
                <EastIcon sx={{fontSize:'1.2rem'}}/>
              </Box>

              {/* Stroke Image positioned at the bottom left */}
              <Box
                component="img"
                src="src/assets/collaborativePartnerSection/corner_flick.png"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "24%", // Adjust width relative to the card
                  height: "auto",
                }}
              />
            </Card>
            
            ))}
          </Box>
        </Box>

          {/* right arrow */}
          <ArrowCircleRightRoundedIcon
            onClick={handleNext}
            disabled={index + itemsToShow >= partners.length}
            sx={{
              color: index + itemsToShow >= partners.length ? "#f0ab69" : "#D76A03",
              fontSize:'3.2rem',
              cursor:'pointer',
              position:'absolute',
              right:'4%',
              zIndex:1
            }}
          />
      </Box>
    </Box>
  );
};

export default CollaborativePartners;
