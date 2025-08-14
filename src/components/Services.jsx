import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const services = [
  { title: 'Home Cleaning', description: 'Thorough and professional home cleaning services.' },
  { title: 'Appliance Repair', description: 'Quick and reliable appliance repair at your doorstep.' },
  { title: 'Pest Control', description: 'Safe and effective pest control for your home or office.' },
  { title: 'Home Appliance Repair', description: 'Expert repair services for all home appliances.' },
  { title: 'AC Repair', description: 'Efficient and affordable air conditioning repair services.' },
  { title: 'Washing Machine Repair', description: 'Reliable washing machine repair to keep your laundry going.' },
  { title: 'Refrigerator Repair', description: 'Professional refrigerator repair and maintenance services.' },
  { title: 'Air Cooler Repair', description: 'Fast and effective air cooler repair services.' },
  { title: 'TV Repair', description: 'Comprehensive TV repair solutions for all brands and models.' },
  { title: 'Stove Repair', description: 'Expert stove repair to ensure your cooking never stops.' }

];

const Services = () => {
  return (
    <Container sx={{ mt: 12, mb: 8 }}>
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
