import React, { useState } from "react";
import { Box, Typography, Card, Avatar, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { data } from "../data/data";


const TestimonialCarousel = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);


  const isLargeScreen = useMediaQuery("(min-width:1200px)");  // lg and up
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");  // md
  const isSmallScreen = useMediaQuery("(min-width:600px) and (max-width:899px)");  // sm
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");  // xs
  const itemsPerPage = isLargeScreen || isMediumScreen ? 3 : 1;


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
    <Box textAlign="center" position={"relative"} py={3} px={"5%"} >
      {/* MAIN HEADING */}
      <Typography variant="h3" fontWeight={600} py={4} sx={{ fontSize: { md: '2.5rem', xs: '1.5rem' } }}>
        {data.testimonialCarousel.mainHeading}
      </Typography>


      {/* SUBHEADING */}
      <Typography variant="h3" fontWeight={600} paddingBottom={5} sx={{ fontSize: { md: '2rem', xs: '1rem' } }}>
        {data.testimonialCarousel.subHeading}
      </Typography>


      {/* CAROUSEL */}
      <Box display="flex" alignItems="center">
        <IconButton
          onClick={handlePrev}
          aria-label="Previous"
          disabled={currentIndex === 0}
          sx={{
            bgcolor: "#D35400",
            color: "white",
            cursor: 'pointer',
            position: 'absolute',
            top:'64%',
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
          spaceBetween={20}
          slidesPerView={itemsPerPage}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {data.testimonialCarousel.testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{paddingTop:55,paddingBottom:1}}>
              <Card
                sx={{
                  backgroundColor: (isLargeScreen || isMediumScreen) && index === (currentIndex + 1) % itemsPerPage ? "rgba(82, 49, 104, 0.1)" : "rgb(233, 233, 233)",
                  borderRadius: '16px',
                  p: 2,
                  marginTop: isLargeScreen || isMediumScreen ?
                  (index === (currentIndex + 1) % itemsPerPage ? 0 : 6) :
                  2,
                  textAlign: "center",
                  boxShadow: 3,
                  // marginLeft:'20%',
                  width: isLargeScreen || isMediumScreen ?
                    (index === (currentIndex + 1) % itemsPerPage ? '97%' : '89%') :
                    '79vw', // 85vw for smaller screens
                  position: "relative",
                  overflow: "visible",
                  height: isSmallScreen ? '25vh' : (isLargeScreen || isMediumScreen) && index === (currentIndex + 1) % itemsPerPage ? '395px' : '300px',
                  marginLeft: isLargeScreen ? (index === (currentIndex + 1) % itemsPerPage ? '-4%' : '0%'):'0%',
                }}
              >
                {/* Overlay container */}
                <Box sx={{ position: "relative", width: "100%", display: 'flex', justifyContent: 'center', top: {md:'-50px',sm:'-40px',xs:'-40px'} }}>
                  <Avatar
                    src={testimonial.img}
                    sx={{
                      width: {md:80,xs:40},
                      height: {md:80,xs:40},
                    }}
                  />
                </Box>
                {/* COMMENT */}
                <Typography variant="body1" fontSize={{md:'14px' ,xs:'12px'}}  color={"black"}>{testimonial.text}</Typography>


                {/* ADMI KA NAAM AUR DESIGNATION */}
                <Typography variant="subtitle1" textAlign={"right"} sx={{ position: 'absolute', bottom: 20, right: 20, color: 'black',fontSize:{md:'16px' ,xs:'10px'} }}>
                  {testimonial.name}, {testimonial.role}
                </Typography>
              </Card>


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
            top:'64%',
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


export default TestimonialCarousel;





