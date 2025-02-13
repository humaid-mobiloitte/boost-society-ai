import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GavelIcon from "@mui/icons-material/Gavel";

const features = [
  { icon: <BusinessIcon />, title: "Monitor & Measure",content:'Feature: Track quantifiable and qualitative results to monitor progress and performance. Benefit: Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts.' },
  { icon: <FavoriteIcon />, title: "Scheduling Functionality",content:'Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors. Benefit: Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check.' },
  { icon: <GavelIcon />, title: "Cohort-based Learning",content:'Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Benefit: Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.' },
  { icon: <BusinessIcon />, title: "Personalized Business",content:'Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Benefit: Save time in securing capital by accessing a curated list of funding options that match.' },
];

export default function KeyFeatures() {
  return (
    <Grid
  container
  spacing={3}
  sx={{
    p: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* Left Content */}
  <Grid item xs={12} md={6}>
    <Typography variant="h6" color="error" gutterBottom>
      Key Features & Benefits
    </Typography>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Unlocking Entrepreneurs Potential:
    </Typography>
    <Typography variant="body1" gutterBottom>
      Introducing the BoostSociety.ai portal - your gateway to advanced business and technical functionality. Partner with us to host your educational, community, and business programs on our platform, benefiting from dynamic, expert-led cohorts and innovative tools. Enhance learning with interactive courses, robust community features, and seamless communication. Track progress efficiently and gain valuable insights with our monitoring tools. Elevate your organization and unlock your programs' full potential with BoostSociety.ai. Interested in joining one of our cohorts? Explore our offerings and apply TODAY!
    </Typography>
    <Button
      variant="contained"
      color="warning"
      sx={{
        my: 2,
        backgroundColor: "rgba(228, 103, 3, 1)",
        borderRadius: "6px",
      }}
    >
      View All Features →
    </Button>
  </Grid>

  {/* Right Content (Feature Cards) */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 column on xs, 2 columns on sm+
        gap: 6,
        mt: 2,
      }}
    >
      {features.map((feature, index) => (
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
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(228, 103, 3, 1)",
                  borderRadius: "50%",
                  color: "white",
                  mr: 1,
                }}
              >
                {feature.icon}
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
