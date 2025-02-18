import { Box, Typography, Link, Grid } from "@mui/material";
import { data } from "../data/data";
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
      <Grid container gap={{ md: 0, xs: 2 }}>
        {/* Left Side - Copyright Info */}
        <Grid item md={6} xs={12}>
          <Typography variant="body2" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
            {data.footnote.copyright} {/* Use extracted text here */}
          </Typography>
        </Grid>

        {/* Right Side - Links */}
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", gap: "5%", justifyContent: { md: 'right' } }}>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              {data.footnote.links.terms} {/* Use extracted text here */}
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              {data.footnote.links.privacy} {/* Use extracted text here */}
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              {data.footnote.links.cookies} {/* Use extracted text here */}
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              {data.footnote.links.faqs} {/* Use extracted text here */}
            </Link>
            <Link href="#" color="inherit" underline="hover" fontFamily="outfit" sx={{ fontSize: { md: '0.9rem', xs: '0.7rem' } }}>
              {data.footnote.links.contact} {/* Use extracted text here */}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footnote;
