import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const SubscriptionSection = () => {
  return (
    <Grid container
      sx={{
        backgroundColor: "#4F2D66",
        color: "white",
        px:'5%',
        py:'2%',
      }}
    >
      <Grid item md={6} xs={12} sx={{paddingRight:{xs:0,md:'20%'}}}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Be The First To Know
        </Typography>
        <Typography variant="body1" sx={{color:'white'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Grid>

      <Grid item md={6} xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'space-between', paddingLeft:{xs:0,md:'10%'}, gap:2}}>
        <TextField
          variant="outlined"
          placeholder="Enter your email address"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            flex: 1,
            minWidth: "250px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #E65100, #FF6D00)",
            color: "white",
            px: 3,
            borderRadius: 1,
            textTransform: "none",
          }}
        >
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

export default SubscriptionSection;
