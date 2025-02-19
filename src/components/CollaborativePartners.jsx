import React, { useState } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { data } from "../data/data";


const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const PartnerCard = ({ partner, idx }) => (
  <Card
    key={idx}
    sx={{
// width: { xs: "85vw", sm: '85vw', md: "300px", lg: "90%" },
// height: '360px',
      // width: { xs: "85vw", sm: '85vw', md: "300px", lg: "90%" },
      // height: '360px',
      // width: { xs: "85vw", sm: '85vw', md: "300px", lg: "90%" },
      // height: '360px',
      textAlign: "left",
// p: { md: '5% 2% 6% 10%', sm: '0.5% 1.2% 1.2% 2%' },
// p: { md: '5% 2% 6% 10%', sm: '0.5% 1.2% 1.2% 2%' },
      p: '3% 8% 6% 12.5%',
      boxShadow: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
// marginRight: '1%',
      position: "relative",
      borderRadius: "10px 10px 10px 0",
      backgroundColor: idx % 2 === 0 ? "rgba(82,49,104,0.15)" : "rgba(230, 143, 45, 0.15)",
//       flexGrow:1
    }}
  >
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 0, paddingBottom:'60px'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <img src={partner.logo} alt={partner.name} width="auto" height={56} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" fontWeight={600} sx={{ fontSize: { md: '1.5rem', xs: '1rem' } }}>
          {partner.name}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { md: '1rem', sm:'0.8rem', xs: '0.8rem', color: 'rgba(63, 60, 60, 0.87)' },textAlign:'justify' }}>
          {truncateText(partner.description, 200)}
        </Typography>
      </Box>
    </CardContent>

    {/* LEARN MORE */}
    <Box sx={{ display: "flex", alignItems: 'center', gap: 1, color: '#542F03'}}>
      <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>{data.CollaborativePartners.learnMore}</Typography>
      <EastIcon sx={{ fontSize: '1.2rem' }} />
    </Box>
{/* STROKE */}
    <Box component="img" src={data.CollaborativePartners.strokeImage} sx={{ position: "absolute", bottom: 0, left: 0}} />
  </Card>
);

const CollaborativePartners = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Box textAlign="center" position="relative" py="0.5%" px="5%">
      {/* HEADING */}
      <Typography variant="h3" fontWeight={600} py={4} sx={{ fontSize: { md: '2.5rem', xs: '1.5rem' } }}>
        {data.CollaborativePartners.heading}
      </Typography>
      {/* SUBHEADING */}
      <Typography variant="body1" paddingBottom={5} sx={{ fontSize: { md: '1.2rem', xs: '1rem' } }}>
        {data.CollaborativePartners.description}
      </Typography>

      <Box display="flex" alignItems="center" py={'0.5%'} >
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
          spaceBetween={"3%"}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 1.5 },
            900: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3.5 },
          }}
        >
          {data.CollaborativePartners.partners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <PartnerCard partner={partner} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          onClick={handleNext}
          aria-label="Next"
          disabled={currentIndex === data.CollaborativePartners.partners.length - 1}
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

export default CollaborativePartners;