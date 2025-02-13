import React, { useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";

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

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ position: 'relative', textAlign: "center", py: 5, backgroundColor: 'rgba(251, 251, 251, 1)' }}>
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
      <Typography variant="h4" fontWeight={600} gutterBottom sx={{ zIndex: 1 }}>
        Collaborative Projects
      </Typography>
      <Typography variant="body1" maxWidth={1200} mx="auto" mb={3} sx={{ zIndex: 1 }}>
        Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners.
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button onClick={handlePrev} sx={{ backgroundColor: "#D76A03", color: "white", borderRadius: "50%", minWidth: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ArrowBackIos sx={{ color: "white" }} />
        </Button>
        {[0, 1, 2].map((offset) => {
          const projectIndex = (index + offset) % projects.length;
          return (
            <Card key={projectIndex} sx={{ width: 345, borderRadius: 2, p: 1, backgroundColor: 'rgba(82, 49, 104, 1)', zIndex: 1 }}>
              <CardMedia component="img" height="200" image={projects[projectIndex].image} alt="Project" sx={{ borderRadius: 2, zIndex: 10 }} />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'white' }} paragraph>
                  {projects[projectIndex].description}
                </Typography>
                <Button size="small" sx={{ color: "#ff9800", textAlign: 'left' }}>
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          );
        })}
        <Button onClick={handleNext} sx={{ backgroundColor: "#D76A03", color: "white", borderRadius: "50%", minWidth: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ArrowForwardIos sx={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default CollaborativeProjects;
