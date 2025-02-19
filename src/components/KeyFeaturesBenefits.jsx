import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GavelIcon from "@mui/icons-material/Gavel";
import EastIcon from '@mui/icons-material/East';
import { data } from "../data/data";


// const features = [
//   { icon: <BusinessIcon />, title: "Monitor & Measure",content:'Feature: Track quantifiable and qualitative results to monitor progress and performance. Benefit: Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts.' },
//   { icon: <FavoriteIcon />, title: "Scheduling Functionality",content:'Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors. Benefit: Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check.' },
//   { icon: <GavelIcon />, title: "Cohort-based Learning",content:'Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Benefit: Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.' },
//   { icon: <BusinessIcon />, title: "Personalized Business",content:'Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Benefit: Save time in securing capital by accessing a curated list of funding options that match.' },
// ];

export default function KeyFeatures() {
  return (
    <Grid
  container
  spacing={{md:16, xs:2}}
  sx={{
    px: "5%",
    py:{md:'2%',xs:'7%'},
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* Left Content */}
  <Grid item xs={12} md={12} lg={6}>
    <Typography 
      variant="h6" 
      color="error"  
      sx={{
        fontSize: '1.4rem',
        fontFamily: '"Alumni Sans", sans-serif', // Apply Alumni Sans font
        mb: 1 // Add margin-bottom for spacing
      }}
    >
      {data.KeyFeatures.heading}
    </Typography>
    <Typography 
      variant="h3"  
      sx={{
        fontSize: { md: '2.5rem', xs: '1.5rem' },
        mb: 2 // Add margin-bottom for spacing
      }}
    >
      {data.KeyFeatures.subheading}
    </Typography>
    <Typography 
      variant="body1"  
      sx={{
        fontSize: { md: '1.2rem', xs: '1rem' },
        mb: 2 // Add margin-bottom for spacing
      }}
    >
      {data.KeyFeatures.description}
    </Typography>
    <Button
      variant="contained"
      sx={{
        my: 2, // Maintain vertical margin for the button
        background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
        padding: '1% 3%',
        borderRadius: "6px",
        gap: 1
      }}
    >
      {data.KeyFeatures.viewAllFeatures} <EastIcon sx={{ fontSize: { md: 20, xs: 8 } }} />
    </Button>
  </Grid>

  {/* Right Content (Feature Cards) */}
  <Grid item xs={12} md={12} lg={6}>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 column on xs, 2 columns on sm+
        gap: 6,
        mt: 2,
      }}
    >
      {data.KeyFeatures.features.map((feature, index) => (
        <Card
          key={index}
          sx={{
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "rgba(221, 221, 221, 1)", // Background color for all cards
            position: "relative", // To position the stroke
            overflow: "hidden", // Ensures the stroke doesn't break layout
          }}
        >
          {/* Orange Stroke - Positioned on the top right */}
          <Box
            component="img"
            src="src/assets/keyFeatures/topRightFlick.png"
            alt="Decorative Stroke"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: "30%", sm: "25%", md: "20%" }, // Responsive width
              maxWidth: "80px", // Limits max size on large screens
              height: "auto",
            }}
          />

          <CardContent>
            <Box sx={{ display: "flex",flexDirection:'column', alignItems: "left", mb: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundImage: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
                  borderRadius: "50%",
                  color: "white",
                  mr: 1,
                }}
              >
                <BusinessIcon />
              </Box>
              <Typography variant="h6">{feature.title}</Typography>
            </Box>
            <Typography variant="body2">{feature.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Grid>
</Grid>


  );
}
