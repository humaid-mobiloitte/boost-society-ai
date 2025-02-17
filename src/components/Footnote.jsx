import { Box, Typography, Link, Grid } from "@mui/material";

const Footnote = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgba(82, 49, 104, 1)",
        color: "white",
        py: 2,
        px: "5%",
      }}
    >
      <Grid container gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left Side - Copyright Info */}
        <Grid item md={6} xs={12} >
          <Typography variant="body2" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
            © 2023 Give Me a Boost | Integral Enterprise Limited
          </Typography>
        </Grid>

        {/* Right Side - Links */}
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}> 
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              Cookies Policies
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              FAQs
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              Contact Us
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footnote;
