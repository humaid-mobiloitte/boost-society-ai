import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const partners = [
  {
    name: "Mobiloitte Technologies",
    description:
      "Our partnership with Mobiloitte Technologies has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/mobiloitteIcon.png",
  },
  {
    name: "Disney Enterprises",
    description:
      "Our partnership with Disney Enterprises has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/disneyIcon.png",
  },
  {
    name: "LinkedIn",
    description:
      "Our partnership with LinkedIn has been instrumental in driving technological advancements in our industry. Together, we have developed groundbreaking solutions that have revolutionized the way businesses operate.",
    logo: "src/assets/collaborativePartnerSection/linkedInIcon.png",
  },
];

const CollaborativePartners = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? partners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === partners.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box textAlign="center" py={15} position="relative">

      <Typography variant="h4" fontWeight={600} gutterBottom sx={{ zIndex: 1 }}>
        Collaborative Partners
      </Typography>
      <Typography variant="body1" maxWidth={1200} mx="auto" mb={3} sx={{ zIndex: 1 }}>
        Business Boost! Society is proud to collaborate with industry-leading partners who share our
        vision for innovation and excellence. These strategic partnerships allow us to combine our
        expertise and resources to deliver exceptional solutions to our clients. Here are some of
        our valued collaborative partners.
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        {/* Left Arrow Button */}
        <Button
          onClick={handlePrev}
          sx={{
            backgroundColor: "#D76A03",
            width: 50,
            height: 50,
            borderRadius: "50%",
            minWidth: 0,
            "&:hover": { backgroundColor: "#b85802" },
          }}
        >
          <ArrowBackIos sx={{ color: "white" }} />
        </Button>

        {/* Partner Cards */}
        {[0, 1, 2].map((offset) => {
          const partnerIndex = (index + offset) % partners.length;
          return (
            <Card key={partnerIndex} sx={{ width: "300px", textAlign: "left", p: 3, boxShadow: 3, minHeight: "256px", zIndex: 1 }}>
              <img src={partners[partnerIndex].logo} alt={partners[partnerIndex].name} width={50} height={'AUTO'} />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {partners[partnerIndex].name}
                </Typography>
                <Typography variant="body2">{partners[partnerIndex].description}</Typography>
              </CardContent>
            </Card>
          );
        })}

        {/* Right Arrow Button */}
        <Button
          onClick={handleNext}
          sx={{
            backgroundColor: "#D76A03",
            width: 50,
            height: 50,
            borderRadius: "50%",
            minWidth: 0,
            "&:hover": { backgroundColor: "#b85802" },
          }}
        >
          <ArrowForwardIos sx={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default CollaborativePartners;
