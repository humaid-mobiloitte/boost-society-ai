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
  maxWidth: "500px",
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
        py: 20, 
        px: { xs: 2, md: 10 },
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
          width: "100vw", // Adjust the size as needed
          height: "auto",
          zIndex: 2, // Ensure it's above the translucent layer
        }}
      />

      <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 3 }}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" sx={{ color: "#fff" }}>Check Out</Typography>
          <Typography variant="h4" sx={{ color: "#f97316", fontWeight: "bold", mb: 2 }}>
            How Does It Work
          </Typography>
          <Box sx={{display:'flex'}}>
            {/* b */}
          <List>
            {steps.map((step, index) => (
              <ListItem key={index}>
                <Box sx={{ width: 10, height: 10, border: "2px solid white", borderRadius: "50%", mr: 2 }} />
                <ListItemText primary={step} />
              </ListItem>
            ))}
          </List>
            <Box>
              {/* a */}
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                01. Create an account
              </Typography>
              {/* a */}
              <Typography variant="body1" paragraph>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demon strate the visual form of a document or a type face without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.{' '}
              </Typography>
          {/* a */}
          <Typography>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly visual form of docu ment or a typeface without relying on  content.
          </Typography>
          {/* a */}
          <Button variant="contained" sx={{ backgroundColor: "#f97316", mt: 2 }}>
            Explore Whitepaper
          </Button>
          </Box>
          </Box>
          
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