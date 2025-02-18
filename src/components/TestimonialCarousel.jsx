import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, useMediaQuery, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, FormatQuote } from "@mui/icons-material";
import { data } from "../data/data";

const TestimonialCarousel = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");  // lg and up
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");  // md
  const isSmallScreen = useMediaQuery("(min-width:600px) and (max-width:899px)");  // sm
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");  // xs
  const itemsPerPage = isLargeScreen ? 3 : isMediumScreen ? 2 : isSmallScreen ? 1 : 1;

  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => setTransitioning(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [transitioning]);

  const handleNext = () => {
    if (index < data.testimonialCarousel.testimonials.length - itemsPerPage && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.min(prevIndex + 1, data.testimonialCarousel.testimonials.length - itemsPerPage));
    }
  };

  const handlePrev = () => {
    if (index > 0 && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <Box textAlign="center" position={"relative"} py={3} px={"5%"}>
      {/* MAIN HEADING */}
      <Typography variant="h3" fontWeight={600} py={4} sx={{ fontSize: { md: '2.5rem', xs: '1.5rem' } }}>
        {data.testimonialCarousel.mainHeading}
      </Typography>

      {/* SUBHEADING */}
      <Typography variant="h3" fontWeight={600} py={3} sx={{ fontSize: { md: '2rem', xs: '1rem' } }}>
        {data.testimonialCarousel.subHeading}
      </Typography>

      {/* CAROUSEL */}
      <Box display="flex" alignItems="center">
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
          <ArrowBackIos color="white" />
        </IconButton>

        <Box display="flex" overflow="hidden">
          <Box
            display="flex"
            sx={{
              transform: `translateX(-${index * (isLargeScreen ? 461 : isMediumScreen ? 381 : isSmallScreen ? 330 : isExtraSmallScreen ? (window.innerWidth * 0.94) : 180)}px)`, // Adjust translateX dynamically based on screen size
              transition: transitioning ? "transform 0.3s ease-in-out" : "none",
              padding: '4% 0',
            }}
          >
            {data.testimonialCarousel.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: '16px',
                  p: 2,
                  textAlign: "center",
                  boxShadow: 3,
                  marginRight: '1%',
                  backgroundColor: index % 2 === 0 ? '#e1e1e1' : 'rgba(82, 49, 104, 0.1)',
                  position: "relative",
                  overflow: "visible",
                  width: { xs: "80vw", sm: '300px', md: "350px", lg: "420px" },
                  height: '300px',
                }}
              >
                {/* Overlay container */}
                <Box sx={{ position: "relative", width: "100%", display: 'flex', justifyContent: 'center', top: '-50px' }}>
                  <Avatar
                    src={testimonial.img}
                    sx={{
                      width: 70,
                      height: 70,
                    }}
                  />
                </Box>
                {/* COMMENT */}
                <Typography variant="body1" mt={4}>{testimonial.text}</Typography>

                {/* ADMI KA NAAM AUR DESIGNATION */}
                <Typography variant="subtitle1" textAlign={"right"} sx={{ position: 'absolute', bottom: 20, right: 20 }}>
                  {testimonial.name}, {testimonial.role}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
        <IconButton
          onClick={handleNext}
          disabled={index + itemsPerPage >= data.testimonialCarousel.testimonials.length}
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

export default TestimonialCarousel;