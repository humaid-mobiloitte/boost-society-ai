import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, useMediaQuery, Fade } from "@mui/material";
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
    <Box textAlign="center" py={5} position="relative">
      <Typography variant="h3" fontWeight={600} gutterBottom>
        Collaborative Partners
      </Typography>
      <Typography variant="body1" mx="auto" mb={3} sx={{ fontSize: "1.1rem" }}>
      Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        {/* left arrow */}
        <Button
          onClick={handlePrev}
          disabled={index === 0}
          sx={{
            backgroundColor: index === 0 ? "#ccc" : "#D76A03",
            width: 50,
            height: 50,
            borderRadius: "50%",
            minWidth: 0,
            "&:hover": { backgroundColor: index === 0 ? "#ccc" : "#b85802" },
          }}
        >
          <ArrowBackIos sx={{ color: "white" }} />
        </Button>

        {/* cards */}
        <Box
          display="flex"
          overflow="hidden"
          mx={2}
          width={`${itemsToShow * 320}px`}
          sx={{ position: "relative" }}
        >
          <Box
            display="flex"
            sx={{
              transform: `translateX(-${index * 280}px)`,
              transition: transitioning ? "transform 0.3s ease-in-out" : "none",
              paddingTop:'1%',
              paddingBottom:"1%",
            }}
          >
            {partners.map((partner, idx) => (
              <Card
              key={idx}
              sx={{
                width: "300px",
                textAlign: "left",
                p: 3,
                boxShadow: 3,
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "0 10px",
                position: "relative", // Ensures child elements can be positioned absolutely
                overflow: "hidden", // Prevents the image from overflowing outside
                backgroundColor: idx % 2 == 0 ? "rgba(82,49,104,0.1)" : "rgba(255,188,109,0.1)", // Alternating background colors
              }}
            >
              <img src={partner.logo} alt={partner.name} width={60} height="auto" />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {partner.name}
                </Typography>
                <Typography variant="body2">{partner.description}</Typography>
              </CardContent>
            
              {/* Stroke Image positioned at the bottom left */}
              <Box
                component="img"
                src="src/assets/collaborativePartnerSection/corner_flick.png"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "20%", // Adjust width relative to the card
                  height: "auto",
                  // opacity: 0.5, // Optional, adjust transparency if needed
                }}
              />
            </Card>
            
            ))}
          </Box>
        </Box>

          {/* right arrow */}
        <Button
          onClick={handleNext}
          disabled={index + itemsToShow >= partners.length}
          sx={{
            backgroundColor: index + itemsToShow >= partners.length ? "#ccc" : "#D76A03",
            width: 50,
            height: 50,
            borderRadius: "50%",
            minWidth: 0,
            "&:hover": { backgroundColor: index + itemsToShow >= partners.length ? "#ccc" : "#b85802" },
          }}
        >
          <ArrowForwardIos sx={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default CollaborativePartners;
