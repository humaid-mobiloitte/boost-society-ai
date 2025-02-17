import { Box, Typography, IconButton, Link } from "@mui/material";
import { Email, Language, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 5%",
      backgroundColor: "white",
      borderTop: "3px solid rgba(82, 49, 104, 1)",
    }}>
      {/* Left: Company Logo */}
      <Box>
        <img src="src/assets/footers/footer_logo.png" alt="Business Boost Society" style={{ height: 60 }} />
      </Box>

      {/* Center: Social Icons & Navigation */}
      <Box textAlign="center">
        <Box>
          <IconButton sx={{ color: "#D35400" }}><Email /></IconButton>
          <IconButton sx={{ color: "#D35400" }}><Language /></IconButton>
          <IconButton sx={{ color: "#D35400" }}><Twitter /></IconButton>
          <IconButton sx={{ color: "#D35400" }}><Instagram /></IconButton>
        </Box>
        <Box mt={1}>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>Home</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>About Us</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>Learning & Lives</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>Monitor & Measure</Link>
          <Link href="#" underline="none" sx={{ mx: 1, color: "black" }}>Contact Us</Link>
        </Box>
      </Box>

      {/* Right: Contact Information */}
      <Box textAlign="left">
        <Typography fontWeight="bold">Contact Us</Typography>
        <Typography>INTEGRAL ENTERPRISE LIMITED</Typography>
        <Typography>Jadala Place, 1st Floor, Ngong Lane, Off Ngong Road</Typography>
        <Typography>connect@enterprise.com</Typography>
        <Typography>Tel: +254 797 771771</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
