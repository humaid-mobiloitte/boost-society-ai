import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, FormatQuote } from "@mui/icons-material";

const testimonials = [
  {
    name: "Michel Jochson",
    role: "Operation Coordinator",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
    img: "src/assets/testimonialCarousel/userImage.png" // Replace with actual image
  },
  {
    name: "John Doe",
    role: "Project Manager",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the use of typography.",
    img: "src/assets/testimonialCarousel/userImage.png" // Replace with actual image
  }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" fontWeight={700}>
        You Are The Center Of Our Universe
      </Typography>
      <Typography color="error" mt={1} fontWeight={600}>
        Testimonials
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <IconButton onClick={handlePrev} sx={{ bgcolor: "#D35400", color: "#fff", mx: 2 }}>
          <ArrowBackIos />
        </IconButton>
        <Card sx={{ maxWidth: 600, p: 3, textAlign: "center", boxShadow: 3 }}>
          <Avatar src={testimonials[index].img} sx={{ width: 80, height: 80, mx: "auto", mb: -4, border: "4px solid white" }} />
          <CardContent>
            <FormatQuote sx={{ fontSize: 50, color: "#F5CBA7" }} />
            <Typography variant="body1" mt={1}>{testimonials[index].text}</Typography>
            <Typography variant="subtitle1" fontWeight={600} mt={2}>{testimonials[index].name}, {testimonials[index].role}</Typography>
          </CardContent>
        </Card>
        <IconButton onClick={handleNext} sx={{ bgcolor: "#D35400", color: "#fff", mx: 2 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
