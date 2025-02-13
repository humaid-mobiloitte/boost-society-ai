import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, useMediaQuery } from "@mui/material";
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
    <Box sx={{ position: "relative", textAlign: "center", py: 5, backgroundColor: "rgba(251, 251, 251, 1)" }}>
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
        }}
      />
      <Typography variant="h3" fontWeight={600} gutterBottom sx={{ zIndex: 1 }}>
        Collaborative Projects
      </Typography>
      <Typography variant="body1"  mx="auto" mb={3} sx={{ zIndex: 1 }}>
      Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners
      </Typography>

      {/* Navigation and Sliding Cards */}
      <Box display="flex" alignItems="center" justifyContent="center">
        {/* Left Arrow */}
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

        {/* Card Slider */}
        <Box
          display="flex"
          overflow="hidden"
          mx={2}
          width={`${itemsToShow * 360}px`}
          sx={{ position: "relative" }}
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
                  width: "340px",
                  borderRadius: 2,
                  p: 1,
                  backgroundColor: "rgba(82, 49, 104, 1)",
                  margin: "0 10px",
                  minHeight: "320px",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt="Project"
                  sx={{ borderRadius: 2 }}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "white" }} paragraph>
                    {project.description}
                  </Typography>
                  <Button size="small" sx={{ color: "#ff9800", textAlign: "left" }}>
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Right Arrow */}
        <Button
          onClick={handleNext}
          disabled={index + itemsToShow >= projects.length}
          sx={{
            backgroundColor: index + itemsToShow >= projects.length ? "#ccc" : "#D76A03",
            width: 50,
            height: 50,
            borderRadius: "50%",
            minWidth: 0,
            "&:hover": { backgroundColor: index + itemsToShow >= projects.length ? "#ccc" : "#b85802" },
          }}
        >
          <ArrowForwardIos sx={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default CollaborativeProjects;
