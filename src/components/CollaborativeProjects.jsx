import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { data } from "../data/data";

const ProjectCard = ({ project, idx }) => (
  <Card
    key={idx}
    sx={{
      width:{lg:"87%",md:"87%",sm:'84%',xs:"79vw"},
      minHeight: { md: "393px", sm: "340px", xs: "320px" },
      borderRadius: '20px',
      p: "4%",
      backgroundColor: "rgba(82, 49, 104, 1)",
      // marginRight: "2.2rem",
      position: "relative",
    }}
  >
    <CardMedia component="img" height="60%" image={project.image} alt="Project" sx={{ borderRadius: '10px'}} />
    <CardContent sx={{ padding: 0 }}>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: { md: '1rem', sm: '0.8rem', xs: '0.8rem' }, textAlign: 'justify', padding: '5% 0' }}>
        {project.description}
      </Typography>
    </CardContent>
    <Box sx={{ display: "flex", alignItems: 'center', gap: 1, color: '#FFBC6D', position: "relative" }}>
      <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>{data.CollaborativeProjects.learnMore}</Typography>
      <EastIcon sx={{ fontSize: '1.2rem' }} />
    </Box>
  </Card>
);

const CollaborativeProjects = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Box sx={{ position: "relative", textAlign: "center", paddingTop: '1%', paddingBottom: '1.5%', backgroundColor: "rgba(251, 251, 251, 1)", px: '5%' }}>
      {/* PEECHE KA ORANGE STROKE */}
      <Box
        component="img"
        src={data.CollaborativeProjects.images.bottomStroke}
        alt="Orange Stroke"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
          display: { xs: 'none', md: 'block' }
        }}
      />
      {/* HEADING */}
      <Typography variant="h3" fontWeight={600} py={'2%'} sx={{ fontSize: { md: '2.5rem', xs: '1.5rem' } }}>
        {data.CollaborativeProjects.heading}
      </Typography>
      {/* SUBHEADING */}
      <Typography variant="body1" mx={{ md: 15, xs: 0 }} paddingBottom={5} sx={{ fontSize: { md: '1.1rem', xs: '0.9rem' }, color: 'rgba(63, 60, 60, 0.87)', fontWeight: 400 }}>
        {data.CollaborativeProjects.description}
      </Typography>

      <Box display="flex" alignItems="center" paddingBottom={"2%"}>
        <IconButton
          onClick={handlePrev}
          aria-label="Previous"
          disabled={currentIndex === 0}
          sx={{
            bgcolor: "#D35400",
            color: "white",
            cursor: 'pointer',
            position: 'absolute',
            left: '4%',
            zIndex: 2,
            '&:hover': {
              bgcolor: "#D35400",
              color: "white",
            },
            '&.Mui-disabled': {
              bgcolor: "#D35400",
              color: "white",
              opacity: 0.5,
              cursor: 'not-allowed',
            }
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={handleSlideChange}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 1.5 },
            900: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3.5 },
          }}
        >
          {data.CollaborativeProjects.projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard project={project} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>

        <IconButton
          onClick={handleNext}
          aria-label="Next"
          disabled={isEnd}
          sx={{
            bgcolor: "#D35400",
            color: "white",
            cursor: 'pointer',
            position: 'absolute',
            right: '4%',
            zIndex: 2,
            '&:hover': {
              bgcolor: "#D35400",
              color: "white",
            },
            '&.Mui-disabled': {
              bgcolor: "#D35400",
              color: "white",
              opacity: 0.5,
              cursor: 'not-allowed',
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



