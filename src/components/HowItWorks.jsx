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
        <Grid item xs={12} md={6} sx={{color:'white'}}>
          <Typography sx={{ color:'white',fontSize:{xs:'0.9rem',md:'1.2rem'}}}>{data.HowItWorks.nextStepsLabel}</Typography>
          <Typography sx={{fontSize:{xs:'1.5rem', md:'4.2rem'},color:'rgb(218, 100, 5)'}}>{data.HowItWorks.title}</Typography>
          <ul style={{listStyleType: 'none',paddingLeft:'4%'}}>
            <li>
              <Typography sx={{fontSize:{xs:'1rem', md:'2rem',color:'white',fontWeight:'600'}}} gutterBottom>
                {data.HowItWorks.prospectivePartnersTitle}
              </Typography>
              <ol style={{paddingLeft:'4%'}}>
                {data.HowItWorks.prospectivePartnersList.map((item, index) => (
                  <Typography key={index} sx={{fontSize:{xs:'0.6rem', md:'1.1rem',color:'white'}}}>
                    <li>{item}</li>
                  </Typography>
                ))}
              </ol>
            </li>
            <li>
              <Typography sx={{fontSize:{xs:'1rem', md:'2rem',color:'white',fontWeight:'600'}}} gutterBottom>
                {data.HowItWorks.studentsEntrepreneursTitle}
              </Typography>
            </li>
            <ol style={{paddingLeft:'4%'}}>
              {data.HowItWorks.studentsEntrepreneursList.map((item, index) => (
                <Typography key={index} sx={{fontSize:{xs:'0.6rem', md:'1.1rem',color:'white'}}}>
                  <li>{item}</li>
                </Typography>
              ))}
            </ol>
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