import { Box, Typography, TextField, Button, Grid, FormHelperText } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { data } from "../data/data";

const SubscriptionSection = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(data.SubscriptionSection.emailValidationError)  // Use validation text from data
        .required(data.SubscriptionSection.emailRequiredError), // Use validation text from data
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
        py: {md:'2%', xs:"10%"},
      }}
    >
      <Grid item md={7} xs={12} sx={{ paddingRight: { xs: 0, md: '20%' }, py: {md:'0', xs:"10%"} }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {data.SubscriptionSection.heading}  {/* Use heading from data */}
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {data.SubscriptionSection.subheading}  {/* Use subheading from data */}
        </Typography>
      </Grid>

      <Grid item md={5} xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <form onSubmit={formik.handleSubmit} style={{ display: "flex", alignItems: 'center', width: "100%", gap: "2%" }}>
          <Box sx={{ flex: 1, position: 'relative' }}>
            <TextField
              variant="outlined"
              placeholder={data.SubscriptionSection.placeholder}  // Use placeholder from data
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              sx={{
                width: '100%',
                borderRadius: 1,
                backgroundColor: 'transparent',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                },
              }}
            />
            <FormHelperText sx={{ height: '24px', position: 'absolute', bottom: '-24px', left: 0, color: 'red' }}>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
              color: "white",
              px: 3,
              py: 1.6,
              borderRadius: 1,
              textTransform: "none",
              opacity: formik.isValid && formik.values.email ? 1 : 0.9,
              pointerEvents: formik.isValid && formik.values.email ? 'auto' : 'none',
            }}
            disabled={!formik.isValid || !formik.values.email}
          >
            {data.SubscriptionSection.buttonText}  {/* Use button text from data */}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SubscriptionSection;
