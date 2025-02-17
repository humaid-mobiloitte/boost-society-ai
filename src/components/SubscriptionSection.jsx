import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const SubscriptionSection = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      // Handle subscription logic here
      console.log("Subscribed with email: ", values.email);
    },
  });

  return (
    <Grid container
      sx={{
        backgroundColor: "#4F2D66",
        color: "white",
        px: '5%',
        py: '2%',
      }}
    >
      <Grid item md={6} xs={12} sx={{ paddingRight: { xs: 0, md: '20%' } }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Be The First To Know
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: { xs: 0, md: '10%' }, gap: 2 }}>
        <form onSubmit={formik.handleSubmit} style={{ display: "flex", width: "100%", position: 'relative' }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              flex: 1,
              minWidth: "250px",
              height: "100%",
              borderRadius: 1,
              backgroundColor: formik.touched.email && formik.errors.email ? 'transparent' : 'white', // Background color for valid field
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #E65100, #FF6D00)",
              color: "white",
              px: 3,
              borderRadius: 1,
              textTransform: "none",
              height: "100%",
              opacity: formik.isValid && formik.values.email ? 1 : 0.5,  // Activate only when valid email is entered
              pointerEvents: formik.isValid && formik.values.email ? 'auto' : 'none', // Disable interaction for invalid email
            }}
            disabled={!formik.isValid || !formik.values.email}
          >
            Subscribe
          </Button>
        </form>

        {/* Error Message */}
        {formik.touched.email && formik.errors.email && (
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              bottom: "-20px", // Position the error message below the input field
              left: 0,
              color: 'red',
              backgroundColor: 'transparent', // Ensures the background is transparent
              paddingLeft: '8px',
              fontSize: '0.75rem', // Adjust size as needed
            }}
          >
            {formik.errors.email}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default SubscriptionSection;
