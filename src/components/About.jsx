import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ mt: 12, mb: 8 }}>
      <Typography variant="h4" fontWeight={700} mb={3} textAlign="center">
        About Us
      </Typography>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="body1" fontSize="1.1rem" lineHeight={1.8}>
          SkyZone is dedicated to providing top-quality home services with a customer-first
          approach. With years of experience in the industry, we pride ourselves on reliability,
          professionalism, and excellence. Whether it's cleaning, repairs, or maintenance — we've
          got you covered.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
