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
      <Grid container justifyContent="space-between" alignItems="center">
        {/* Left Side - Copyright Info */}
        <Grid item>
          <Typography variant="body2">
            © 2023 Give Me a Boost | Integral Enterprise Limited
          </Typography>
        </Grid>

        {/* Right Side - Links */}
        <Grid item>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit" underline="hover">
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Cookies Policies
            </Link>
            <Link href="#" color="inherit" underline="hover">
              FAQs
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footnote;
