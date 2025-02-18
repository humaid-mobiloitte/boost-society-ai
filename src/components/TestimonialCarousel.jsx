import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, useMediaQuery, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, FormatQuote } from "@mui/icons-material";

const testimonials = [
  {
    name: "Michel Jochson",
    role: "Operation Coordinator",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
    img: "src/assets/testimonialCarousel/userImage.png" 
  },
  {
    name: "John Doe",
    role: "Project Manager",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the use of typography.",
    img: "src/assets/testimonialCarousel/userImage.png" 
  },
  {
    name: "Steve Smith",
    role: "HR Manager",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the use of typography.",
    img: "src/assets/testimonialCarousel/userImage.png" 
  },
  {
    name: "Joe Root",
    role: "Field Executive",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the use of typography.",
    img: "src/assets/testimonialCarousel/userImage.png" 
  }
];

const TestimonialCarousel = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");  // lg and up
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");  // md
  const isSmallScreen = useMediaQuery("(min-width:600px) and (max-width:899px)");  // sm
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");  // xs
  const itemsPerPage = isLargeScreen ? 3 : isMediumScreen ? 2: isSmallScreen ? 1 : 1;

  const [index, setIndex] = useState(0);
  const [transitioning,setTransitioning] = useState(false)

  useEffect(() => {
      if (transitioning) {
        const timeout = setTimeout(() => setTransitioning(false), 300);
        return () => clearTimeout(timeout);
      }
    }, [transitioning]);

  const handleNext = () => {
    if (index < testimonials.length - itemsPerPage && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length-itemsPerPage));
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
        You Are The Center Of Our Universe
      </Typography>

      {/* SUBHEADING */}
      <Typography variant="h3" fontWeight={600} py={3} sx={{ fontSize: { md: '2rem', xs: '1rem' } }}>
        Testimonials
      </Typography>

      {/* CAROUSEL */}
      <Box display="flex" justifyContent="center" alignItems="center" >
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

        <Box
          display="flex"
          overflow="hidden"
        >
          <Box
            display="flex"
            sx={{
              transform: `translateX(-${index * (isLargeScreen ? 461 : isMediumScreen ? 381 : isSmallScreen ? 330 : isExtraSmallScreen ? (window.innerWidth * 0.94): 180)}px)`, // Adjust translateX dynamically based on screen size //ISSE CAROUSAL CHAL RHA HAI
              transition: transitioning ? "transform 0.3s ease-in-out" : "none",
              padding: '4% 0',
            }}
          >
            {testimonials.map((testimonial,index)=>(
              <Card
              key={index}
              sx={{ 
                
                p: 2, 
                textAlign: "center", 
                boxShadow: 3, 
                marginRight: '1%', 
                backgroundColor: index % 2 == 0 ? '#e1e1e1':'rgba(82, 49, 104, 0.1)', 
                position: "relative", // Make the Card a reference for absolute positioning
                overflow: "visible",   // Ensure Avatar is not clipped
                width: { xs: "90vw",sm:'300px', md: "350px", lg: "420px" },
                height:'340px',
              }}
            >
              {/* Overlay container */}
              <Box sx={{ position: "relative", width: "100%", height: "100px" }}>
                <Avatar 
                  src={testimonial.img} 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    position: "absolute", 
                    top: "-50px",   // Move the Avatar upwards
                    left: "40%", 
                    // transform: "translateX(-50%)", 
                    // boxShadow: 3, // Optional: Adds depth to separate from the Card
                    // border: "3px solid white", // Optional: Gives a neat border effect
                    // backgroundColor: "white"
                    // display:'flex',
                    // justifyContent:'center'
                  }} 
                />
              </Box>
            
              <Typography variant="body1" mt={3}>{testimonial.text}</Typography>
              <Typography variant="subtitle1"   textAlign={"right"} sx={{position:'absolute',bottom:20,right:20}}>
                {testimonial.name}, {testimonial.role}
              </Typography>
            </Card>
            
            ))}
          </Box>
        </Box>
        <IconButton 
          onClick={handleNext} 
          disabled={index + itemsPerPage>= testimonials.length}
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
