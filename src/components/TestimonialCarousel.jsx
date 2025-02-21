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
          spaceBetween={24}
          slidesPerView={itemsPerPage}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {data.testimonialCarousel.testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{
              paddingTop:(isLargeScreen || isMediumScreen) ? 55:25,
              paddingBottom:1}}>
              <Card
                sx={{
                  backgroundColor: (isLargeScreen || isMediumScreen) && index === (currentIndex + 1) % itemsPerPage ? "rgba(82, 49, 104, 0.1)" : "rgb(233, 233, 233)",
                  borderRadius: '16px',
                  p: 2,
                  marginTop: isLargeScreen || isMediumScreen ?
                  (index === (currentIndex + 1) % itemsPerPage ? 0 : 6) :
                  2,
                  textAlign: "center",
                  boxShadow: "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
                  // marginLeft:'20%',
                  width: isLargeScreen ?
                    (index === (currentIndex + 1) % itemsPerPage ? '97%' : '89%') :
                    isMediumScreen ?
                    (index === (currentIndex + 1) % itemsPerPage ? '96%' : '80%') :
                    '79vw', // 85vw for smaller screens
                  position: "relative",
                  overflow: "visible",
                  height: (isExtraSmallScreen||isSmallScreen) ? '25vh' : (isLargeScreen || isMediumScreen) && index === (currentIndex + 1) % itemsPerPage ? '375px' : '300px',
                  marginLeft: isLargeScreen ? 
                    (index === (currentIndex + 1) % itemsPerPage ? '-4%' : '0%') :
                    isMediumScreen ? 
                    (index === (currentIndex + 1) % itemsPerPage ? '-8%' : '0%') :
                    '0%',
                  marginBottom:2
                }}
              >
                {/* Overlay container */}
                <Box sx={{ position: "relative", width: "100%", display: 'flex', justifyContent: 'center', top: {md:'-50px',sm:'-40px',xs:'-40px'} }}>
                  <Avatar
                    src={testimonial.img}
                    sx={{
                      width: {md:70,xs:40},
                      height: {md:70,xs:40},
                    }}
                  />
                </Box>
                <Box sx={{px:'7%'}}>
                  {/* COMMENT */}
                  <Typography
                    variant="body1"
                    fontSize={
                      isLargeScreen ? 
                        (index === (currentIndex + 1) % itemsPerPage ? '18px' : '16px') :
                      isMediumScreen ? 
                        (index === (currentIndex + 1) % itemsPerPage ? '16px' : '14px') :
                      '12px'
                    }
                    fontWeight={
                      isLargeScreen || isMediumScreen ? 
                        (index === (currentIndex + 1) % itemsPerPage ? 500 : 400) :
                      300
                    }
                    color={"black"}
                    sx={{
                      // maxHeight: "120px", // Constrains comment height
                      overflow: "hidden", // Hides overflowing text
                      textOverflow: "ellipsis", // Adds "..." for long text
                      display: "-webkit-box",
                      WebkitLineClamp: 5, // Limits to 5 lines
                      WebkitBoxOrient: "vertical",
                      wordBreak: "break-word", // Ensures long words break properly
                    }}
                  >{testimonial.text}</Typography>


                  {/* ADMI KA NAAM AUR DESIGNATION */}
                  <Typography fontSize={
                      isLargeScreen ? 
                        (index === (currentIndex + 1) % itemsPerPage ? '18px' : '16px') :
                      isMediumScreen ? 
                        (index === (currentIndex + 1) % itemsPerPage ? '16px' : '14px') :
                      '12px'
                    }
                    fontWeight={
                      isLargeScreen || isMediumScreen ? 
                        (index === (currentIndex + 1) % itemsPerPage ? 500 : 400) :
                      300
                    } variant="subtitle1" textAlign={"right"} sx={{ position: 'absolute', bottom: 20, right: 20, color: 'black'}}>
                    {testimonial.name}, {testimonial.role}
                  </Typography>
                </Box>
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





