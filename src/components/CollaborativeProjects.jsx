import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, useMediaQuery, IconButton } from "@mui/material";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import EastIcon from '@mui/icons-material/East';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


const projects = [
  {
    image: "src/assets/collaborativeProjectSection/firstCardImage.png",
    description: "In Publishing and Graphic Design, Lorem Ipsum is a placeholder text commonly used. In Publishing and Graphic Design, Lorem Ipsum is a placeholder text commonly used.",
  },
  {
    image: "src/assets/collaborativeProjectSection/secondCardImage.png",
    description: "In Publishing and Graphic Design, Lorem Ipsum is a placeholder text commonly used. In Publishing and Graphic Design, Lorem Ipsum is a placeholder text commonly used.",
  },
  {
    image: "src/assets/collaborativeProjectSection/thirdCardImage.png",
    description: "In Publishing and Graphic Design, Lorem Ipsum is a placeholder text commonly used. In Publishing and Graphic Design, Lorem Ipsum is a placeholder text commonly used.",
  },
];

const CollaborativeProjects = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Responsive logic for items per view
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");
  const itemsToShow = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

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
    if (index + itemsToShow < projects.length && !transitioning) {
      setTransitioning(true);
      setIndex((prevIndex) => Math.min(prevIndex + 1, projects.length - itemsToShow));
    }
  };

  return (
    <Box sx={{ position: "relative", textAlign: "center", py: 3, backgroundColor: "rgba(251, 251, 251, 1)",px:'5%' }}>
      {/* Bottom Decorative Stroke */}
      <Box
        component="img"
        src="src/assets/collaborativeProjectSection/bottom_orange_stroke.png"
        alt="Orange Stroke"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
          display:{xs:'none',md:'block'}
        }}
      />
      <Typography variant="h3" fontWeight={600} gutterBottom sx={{fontSize:{md:'2.5rem', xs:'1.5rem'}}}>
        Collaborative Projects
      </Typography>
      <Typography variant="body1"  mx="auto" mb={3} sx={{fontSize:{md:'1.2rem', xs:'1rem'}}}>
      Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners
      </Typography>

      {/* Navigation and Sliding Cards */}
      <Box display="flex" alignItems="center">
        {/* Left Arrow */}
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

        {/* Card Slider */}
        <Box
          display="flex"
          overflow="hidden"
           
          // width={`${itemsToShow * 360}px`}
          // sx={{ position: "relative" }}
        >
          <Box
            display="flex"
            sx={{
              transform: `translateX(-${index * 360}px)`,
              transition: transitioning ? "transform 0.3s ease-in-out" : "none",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            {projects.map((project, idx) => (
              <Card
                key={idx}
                sx={{
                  width: { xs: "90vw",sm:'270px', md: "330px", lg: "400px" },
                  height:'auto',
                  borderRadius: 3,
                  p:"1.5%",
                  backgroundColor: "rgba(82, 49, 104, 1)",
                  marginRight: "2.2rem",
                  // minHeight: "320px",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="60%"
                  image={project.image}
                  alt="Project"
                  sx={{ borderRadius: 2 }}
                />
                <CardContent sx={{padding:0}}>
                  <Typography variant="body2" sx={{color:'white',fontSize:{md:'1rem',sm:'0.8rem',xs:'0.8rem'},textAlign:'justify', padding:'5% 0'}}>
                    {project.description}
                  </Typography>
                </CardContent>
                <Box 
                sx={{
                  display:"flex", 
                  alignItems:'center',
                  gap:1,
                  color:'#FFBC6D',
                  position:"relative",

                }}
              >
                <Typography variant="h6" sx={{fontSize:'1.2rem'}}>Learn more</Typography>
                <EastIcon sx={{fontSize:'1.2rem'}}/>
              </Box>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Right Arrow */}
        <IconButton 
          onClick={handleNext} 
          disabled={index + itemsToShow>= projects.length}
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

export default CollaborativeProjects;
