import { Box, Typography, TextField, Button, Grid, FormHelperText } from "@mui/material";
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
        py: {md:'2%',xs:"10%"},
      }}
    >
      <Grid item md={7} xs={12} sx={{ paddingRight: { xs: 0, md: '20%' },py: {md:'0',xs:"10%"} }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Be The First To Know
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Grid>

      <Grid item md={5} xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <form onSubmit={formik.handleSubmit} style={{ display: "flex", alignItems: 'center', width: "100%", gap: "2%" }}>
          <Box sx={{ flex: 1, position: 'relative' }}>
            <TextField
              variant="outlined"
              placeholder="Enter your email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              sx={{
                width: '100%',
                borderRadius: 1,
                backgroundColor: 'transparent', // Background color for valid field
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Ensure the input field background is white
                },
              }}
            />
            {/* Add a fixed height container for the helper text to prevent layout shift */}
            <FormHelperText sx={{ height: '24px', position: 'absolute', bottom: '-24px', left: 0, color: 'red' }}>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #E65100, #FF6D00)",
              color: "white",
              px: 3,
              py: 1.6,
              borderRadius: 1,
              textTransform: "none",
              opacity: formik.isValid && formik.values.email ? 1 : 0.5,  // Activate only when valid email is entered
              pointerEvents: formik.isValid && formik.values.email ? 'auto' : 'none', // Disable interaction for invalid email
            }}
            disabled={!formik.isValid || !formik.values.email}
          >
            Subscribe
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SubscriptionSection;