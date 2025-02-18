import { Box, Typography, IconButton, Link, Grid } from "@mui/material";
import { Email, Language, Twitter, Instagram } from "@mui/icons-material";
import { data } from "../data/data";

const Footer = () => {
  return (
    <Grid container gap={{xs:3,sm:3,md:0}} sx={{
      display: "flex",
      alignItems: "center",
      padding: "20px 5%",
      backgroundColor: "white",
      borderTop: "3px solid rgba(82, 49, 104, 1)",
    }}>
      {/* Left: Company Logo */}
      <Grid item md={4} xs={12} display={"flex"} justifyContent={{xs:"center",sm:'center',md:"left"}}>
        <img src="src/assets/footers/footer_logo.png" alt={data.footer.companyLogoAlt} style={{ height: 60 }} />
      </Grid>

      {/* Center: Social Icons & Navigation */}
      <Grid item md={4} xs={12} textAlign="center">
        <Box>
          <IconButton sx={{ color: "#D35400" }}><Email /></IconButton>
          <IconButton sx={{ color: "#D35400" }}><Language /></IconButton>
          <IconButton sx={{ color: "#D35400" }}><Twitter /></IconButton>
          <IconButton sx={{ color: "#D35400" }}><Instagram /></IconButton>
        </Box>
        <Box mt={1}>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>{data.footer.navigationLinks.home}</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>{data.footer.navigationLinks.aboutUs}</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>{data.footer.navigationLinks.learningLives}</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>{data.footer.navigationLinks.monitorMeasure}</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>{data.footer.navigationLinks.contactUs}</Link>
        </Box>
      </Grid>

      {/* Right: Contact Information */}
      <Grid item md={4} xs={12} textAlign={{md:"left",sm:'center',xs:'center'}} display={"flex"} justifyContent={{xs:"center",sm:'center',md:"right"}}>
        <Box>
          <Typography fontWeight="bold">{data.footer.contactInfo.title}</Typography>
          <Typography>{data.footer.contactInfo.companyName}</Typography>
          <Typography>{data.footer.contactInfo.address}</Typography>
          <Typography>{data.footer.contactInfo.email}</Typography>
          <Typography>{data.footer.contactInfo.phone}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;