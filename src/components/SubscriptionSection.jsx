import { Box, Typography, TextField, Button } from "@mui/material";

const SubscriptionSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4F2D66",
        color: "white",
        p: { xs: 3, md: 6 },
        // borderRadius: "0 0 50px 50px",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box sx={{ maxWidth: "500px" }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Be The First To Know
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <TextField
          variant="outlined"
          placeholder="Your email address"
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
      </Box>
    </Box>
  );
};

export default SubscriptionSection;
