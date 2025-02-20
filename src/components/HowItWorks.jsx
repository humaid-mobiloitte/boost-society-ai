import { Box, Typography, Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { data } from "../data/data";

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
        background: `url(${data.HowItWorks.backgroundImage})`, 
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        color: "white", 
        py: 3, 
        px: '5%',
        overflow: "hidden", // Ensure the image doesn't overflow the container
      }}
    >
      <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 3 }}>
        <Grid item xs={12} md={6} sx={{ color: 'white' }}>
          {/* NEXT STEPS */}
          <Typography sx={{ color: 'white', fontSize: { xs: '0.9rem', md: '1.27rem' }, fontFamily: 'Alumni sans' }}>
            {data.HowItWorks.nextStepsLabel}
          </Typography>

          {/* HOW DOES IT WORK */}
          <Box sx={{ mb: { md: 1, sm: 0, xs: 0 } }}>
            <Typography
              sx={{
                fontSize: { xs: '1.5rem', md: '58px' },
                backgroundImage: 'linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block', // Ensure the gradient applies correctly
              }}
            >
              {data.HowItWorks.title}
            </Typography>
          </Box>

          <ul style={{ paddingLeft: '4%', listStyleType: 'none' }}>
            <li>
              {/* FOR PERSPECTIVE PARTNERS */}
              <Box sx={{ mb: { md: 2, sm: 0, xs: 0 } }}>
                <Typography sx={{ fontSize: { xs: '1rem', md: '2rem' }, color: 'white', fontWeight: '500' }} gutterBottom>
                  {data.HowItWorks.prospectivePartnersTitle}
                </Typography>
              </Box>
              {/* SUBLIST PERSPECTIVE PARTNERS */}
              <Box sx={{ mb: { md: 2, sm: 0, xs: 0 } }}>
                <ol style={{ paddingLeft: '4%' }}>
                  {data.HowItWorks.prospectivePartnersList.map((item, index) => (
                    <Typography key={index} sx={{ fontSize: { xs: '0.6rem', md: '1.1rem' }, color: 'white', fontWeight: '500' }}>
                      <li>{item}</li>
                    </Typography>
                  ))}
                </ol>
              </Box>
            </li>
            <li>
              {/* FOR STUDENTS */}
              <Box sx={{ mb: { md: 2, sm: 0, xs: 0 } }}>
                <Typography sx={{ fontSize: { xs: '1rem', md: '2rem' }, color: 'white', fontWeight: '500' }} gutterBottom>
                  {data.HowItWorks.studentsEntrepreneursTitle}
                </Typography>
              </Box>
              {/* SUBLIST FOR STUDENTS */}
              <Box sx={{ mb: { md: 1, sm: 0, xs: 0 } }}>
                <ol style={{ paddingLeft: '4%' }}>
                  {data.HowItWorks.studentsEntrepreneursList.map((item, index) => (
                    <Typography key={index} sx={{ fontSize: { xs: '0.6rem', md: '1.1rem' }, color: 'white' }}>
                      <li>{item}</li>
                    </Typography>
                  ))}
                </ol>
              </Box>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ borderRadius: "50%" }}>
            <CircleImage src={data.HowItWorks.imageSrc} alt="Team Discussion" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;