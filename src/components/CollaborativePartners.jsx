import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { data } from "../data/data";
import truncateText from "./truncateFunction";


const PartnerCard = ({ partner, idx }) => (
  <Card
    key={idx}
    sx={{
      width: "79%",
      minHeight: { md: "373px", sm: "300px", xs: "300px" },
      textAlign: "left",
      p: { md: '2% 7% 5% 11%', xs: '1% 8% 3% 12.5%' },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      borderRadius: "10px 10px 10px 0",
      backgroundColor: idx % 2 === 0 ? "rgba(82,49,104,0.15)" : "rgba(230, 143, 45, 0.15)",
      border: "1px solid #dcdcdc",
    }}
  >
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <img src={partner.logo} alt={partner.name} width="auto" height={window.innerWidth >= 768 ? 56 : 24} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" fontWeight={600} sx={{ fontSize: { md: '1.5rem', xs: '1rem' } }}>
          {truncateText(partner.name, 12)}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { md: '15px', sm: '0.8rem', xs: '0.8rem', color: 'rgba(63, 60, 60, 0.87)' }, textAlign: 'justify' }}>
          {partner.description}
        </Typography>
      </Box>
    </CardContent>

    <Box sx={{ display: "flex", alignItems: 'center', gap: 1, color: '#542F03' }}>
      <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>{data.CollaborativePartners.learnMore}</Typography>
      <EastIcon sx={{ fontSize: '1.2rem' }} />
    </Box>
    <Box component="img" src={data.CollaborativePartners.strokeImage} sx={{ position: "absolute", bottom: 0, left: 0 }} />
  </Card>
);

const CollaborativePartners = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const numPartners = data.CollaborativePartners.partners.length;

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
    <Box textAlign="center" position="relative" py="0.5%" px="5%">
      <Typography variant="h3" fontWeight={600} py={4} sx={{ fontSize: { md: '2.5rem', xs: '1.5rem' } }}>
        {data.CollaborativePartners.heading}
      </Typography>
      <Typography variant="body1" mx={{ md: 15, xs: 0 }} paddingBottom={5} sx={{ fontSize: { md: '1.1rem', xs: '0.9rem' }, color: 'rgba(63, 60, 60, 0.87)', fontWeight: 400 }}>
        {data.CollaborativePartners.description}
      </Typography>

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
            left: '4%',
            zIndex: 2,
            '&:hover': {
              bgcolor: "#D35400",
              color: "white",
            },
            '&.Mui-disabled': {
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
          spaceBetween={numPartners < 4 ? 16 : "2%"}
          slidesPerView={numPartners < 4 ? numPartners : 1}
          breakpoints={{
            600: { slidesPerView: numPartners < 4 ? numPartners : 1.5 },
            700: { slidesPerView: numPartners < 4 ? numPartners : 2.5 },
            900: { slidesPerView: numPartners < 4 ? numPartners : 3 },
            1200: { slidesPerView: numPartners < 4 ? numPartners : 3.5 },
          }}
          style={{ padding: '2px', display: 'flex', justifyContent: numPartners < 4 ? 'flex-start' : 'center' }}
        >
          {data.CollaborativePartners.partners.map((partner, idx) => (
            <SwiperSlide key={idx} style={{ minWidth: numPartners < 4 ? '250px' : 'auto' }}>
              <PartnerCard partner={partner} idx={idx} />
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

export default CollaborativePartners;
