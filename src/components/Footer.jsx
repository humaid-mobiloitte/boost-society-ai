import { Box, Typography, IconButton, Link, Grid } from "@mui/material";
import { Email, Language, Twitter, Instagram } from "@mui/icons-material";
import { data } from "../data/data";

const SubscriptionSectionStyles={
  IconButtonsStyle : {
    color: "#D35400",
  },
  LinkStyle : {
    mx: 1, 
    color: "black", 
    fontFamily:'outfit',
    fontSize:'0.82rem'
 },
 RightContentStyle:{
  fontSize:'0.82rem'
 }
}

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
          <IconButton sx={SubscriptionSectionStyles.IconButtonsStyle}><Email /></IconButton>
          <IconButton sx={SubscriptionSectionStyles.IconButtonsStyle}><Language /></IconButton>
          <IconButton sx={SubscriptionSectionStyles.IconButtonsStyle}><Twitter /></IconButton>
          <IconButton sx={SubscriptionSectionStyles.IconButtonsStyle}><Instagram /></IconButton>
        </Box>
        <Box mt={1}>
          <Link href="" underline="none" sx={SubscriptionSectionStyles.LinkStyle}>{data.footer.navigationLinks.home}</Link>
          <Link href="" underline="none" sx={SubscriptionSectionStyles.LinkStyle}>{data.footer.navigationLinks.aboutUs}</Link>
          <Link href="" underline="none" sx={SubscriptionSectionStyles.LinkStyle}>{data.footer.navigationLinks.learningLives}</Link>
          <Link href="" underline="none" sx={SubscriptionSectionStyles.LinkStyle}>{data.footer.navigationLinks.monitorMeasure}</Link>
          <Link href="" underline="none" sx={SubscriptionSectionStyles.LinkStyle}>{data.footer.navigationLinks.contactUs}</Link>
        </Box>
      </Grid>

      {/* Right: Contact Information */}
      <Grid item md={4} xs={12} textAlign={{md:"left",sm:'center',xs:'center'}} display={"flex"} justifyContent={{xs:"center",sm:'center',md:"right"}}>
        <Box>
          <Typography fontWeight="bold" sx={{...SubscriptionSectionStyles.RightContentStyle,fontSize:'0.9rem'}}>{data.footer.contactInfo.title}</Typography>
          <Typography sx={SubscriptionSectionStyles.RightContentStyle}>{data.footer.contactInfo.companyName}</Typography>
          <Typography sx={SubscriptionSectionStyles.RightContentStyle}>{data.footer.contactInfo.address}</Typography>
          <Typography sx={SubscriptionSectionStyles.RightContentStyle}>{data.footer.contactInfo.email}</Typography>
          <Typography sx={SubscriptionSectionStyles.RightContentStyle}>{data.footer.contactInfo.phone}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;