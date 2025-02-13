import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GavelIcon from "@mui/icons-material/Gavel";

const features = [
  { icon: <BusinessIcon />, title: "Business Operations" },
  { icon: <FavoriteIcon />, title: "Legal Matters" },
  { icon: <GavelIcon />, title: "Policies" },
  { icon: <BusinessIcon />, title: "Business Operations" },
];

export default function KeyFeatures() {
  return (
    <Box sx={{ p: 3, display:'flex',alignItems:'center',justifyContent:'center' }}>
        <Box>
        <Typography variant="h6" color="error" gutterBottom>
        Key Features & Benefits
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Unlocking Entrepreneurs Potential:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Unlock your full potential through our exclusive community of
        entrepreneurs & achieve success through group accountability and support.
      </Typography>
      <Button variant="contained" color="warning" sx={{ my: 2, backgroundColor:'rgba(228, 103, 3, 1)', borderRadius:'6px' }}>
        View All Features →
      </Button>
        </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
          mt: 2,
        }}
      >
        {features.map((feature, index) => (
          <Card key={index} sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(228, 103, 3, 1)",
                    borderRadius: "50%",
                    color: "white",
                    mr: 1,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6">{feature.title}</Typography>
              </Box>
              <Typography variant="body2">
                In Publishing and Graphic Design, Lorem Ipsum is a placeholder text.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
