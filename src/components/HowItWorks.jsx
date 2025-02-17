import { Box, Typography, Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const steps = [
  "Create an account",
  "Saving Product",
  "Choose our Plan",
  "Explore the services",
];

const CircleImage = styled("img")({
  width: "100%",
  maxWidth: "660px",
  borderRadius: "50%",
//   border: "8px solid white",
//   objectFit: "cover",
});

const HowItWorks = () => {
  return (
    <Box 
      sx={{ 
        position: "relative", 
        background: "url('src/assets/HowDoesItWork/background_blurred_image.png')", 
        color: "white", 
        py: 5, 
        px: '5%',
        overflow: "hidden", // Ensure the image doesn't overflow the container
      }}
    >
      {/* Translucent Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(77, 47, 97, 0.8)", // Adjust the opacity as needed
          zIndex: 1, // Ensure it's above the background but below other content
        }}
      />

      {/* Sticky Image */}
      <Box
        component="img"
        src="src/assets/HowDoesItWork/bottomRightStroke.png" // Replace with your image path
        alt="Sticky Image"
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "100%", // Adjust the size as needed
          height: "auto",
          zIndex: 2, // Ensure it's above the translucent layer
        }}
      />

      <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 3 }}>
        {/* Left Content */}
        <Grid item xs={12} md={6} sx={{color:'white'}}>
          <Typography sx={{ color:'white',fontSize:{xs:'0.9rem',md:'1.2rem'}}}>Next steps:</Typography>
          <Typography sx={{fontSize:{xs:'1.5rem', md:'4.2rem'},color:'rgb(218, 100, 5)}}'}} gutterBottom>
            How Does It Work
          </Typography>
          <ul>
            <li>
              For Prospective Partners:
              <ol>
                <li>Review the features and benefits on this page.</li>
                <li>Email us with information regarding your interest in a strategic partnership. You can expect a follow-up within 48-72 business hours.</li>
                <li>Join our vibrant community at BusinessBoostSociety.com to take advantage of personalized insights, expert advice, exclusive events, collaboration opportunities, and other resources.</li>
              </ol>
            </li>
          </ul>
          <ul>
            <li>
              For Students, Entrepreneurs, or Existing Business Owners Interested in a Cohort:
            </li>
            <ol>
              <li>Review the features and benefits on this page.</li>
              <li>Browse our list of cohorts, select a cohort and apply! You can expect a decision according to the info included in the application details.</li>
              <li>Join BusinessBoostSociety.com for personalized insights, expert advice, exclusive events, and collaboration opportunities.</li>
            </ol>
          </ul>
        </Grid>

        {/* Right Content (Image) */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
            //   background: "linear-gradient(45deg, #f97316, #3c205b)",
              borderRadius: "50%",
            }}
          >
            <CircleImage src="src/assets/HowDoesItWork/foregroundCircularImage.png" alt="Team Discussion" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;