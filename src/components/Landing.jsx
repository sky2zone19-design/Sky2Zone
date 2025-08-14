import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useMediaQuery,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  VerifiedUser as VerifiedIcon,
  AttachMoney as MonetizationOnIcon,
  SupportAgent as SupportAgentIcon,
  AcUnit as AcUnitIcon,
  Kitchen as KitchenIcon,
  LocalLaundryService as LocalLaundryServiceIcon,
  Microwave as MicrowaveIcon,
  Tv as TvIcon,
  Phone as PhoneIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Home as HomeIcon,
  Engineering as EngineeringIcon,
  EmojiEvents as EmojiEventsIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Enhanced Theme setup
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF3F33',
      contrastText: '#ffffff'
    },
    background: {
      default: '#f9fafc'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-2px)'
          },
          transition: 'all 0.3s ease'
        }
      }
    }
  }
});

// Service data with more details
const services = [
  {
    title: 'AC Repair',
    description: 'Split, Window & Central AC servicing and gas refill.',
    icon: <AcUnitIcon />,
    features: ['Thermostat issues', 'Cooling problems', 'Gas refill', 'Electrical repairs']
  },
  {
    title: 'Refrigerator',
    description: 'Cooling issues, compressor failure, gas leak & more.',
    icon: <KitchenIcon />,
    features: ['Compressor repair', 'Cooling system', 'Door seal replacement', 'Defrost system']
  },
  {
    title: 'Washing Machine',
    description: 'Top/Front load drum repair, motor issues, water blockage.',
    icon: <LocalLaundryServiceIcon />,
    features: ['Drum replacement', 'Motor issues', 'Water leakage', 'Control panel']
  },
  {
    title: 'Microwave Oven',
    description: 'Heating coil issues, plate not rotating, sparking, etc.',
    icon: <MicrowaveIcon />,
    features: ['Magnetron repair', 'Turntable motor', 'Control panel', 'Door switch']
  },
  {
    title: 'TV Repair',
    description: 'Screen issues, sound problems, remote control fixes & more.',
    icon: <TvIcon />,
    features: ['Screen replacement', 'Sound issues', 'Power supply', 'HDMI ports']
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'Technician arrived on time and fixed my AC in under an hour. Very professional service!'
  },
  {
    name: 'Priya Patel',
    rating: 5,
    comment: 'My refrigerator was making strange noises. The technician diagnosed and fixed it quickly at a reasonable price.'
  },
  {
    name: 'Vikram Singh',
    rating: 4,
    comment: 'Good service for my washing machine repair. Would have given 5 stars if parts were a bit cheaper.'
  }
];

function Landing() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

     {/* Hero Section */}
<Box
  sx={{
    backgroundColor: '#e3f2fd', // Light blue background
    py: { xs: 8, md: 10 },
    display: 'flex',
    alignItems: 'center',
    minHeight: { xs: '60vh', md: '50vh' }
  }}
>
  <Container maxWidth="lg">
    <Grid container alignItems="center" spacing={4}>
      <Grid item xs={12} md={8}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: '#1976d2', // Primary blue color
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Expert Appliance Repair Services
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 4,
            color: '#424242', // Dark gray for readability
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          Fast, reliable, and affordable repairs for all your home appliances. 
          Serving 10,000+ satisfied customers with same-day service.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="tel:+919360011217"
            startIcon={<PhoneIcon />}
            sx={{
              px: 4,
              borderRadius: 2
            }}
          >
            Call Now
          </Button>
      
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/services"
            sx={{
              px: 4,
              borderRadius: 2
            }}
          >
            Our Services
          </Button>
        </Box>
      </Grid>
      
    </Grid>
  </Container>
</Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {[
              { number: '10,000+', label: 'Happy Customers' },
              { number: '500+', label: 'Expert Technicians' },
              { number: '24/7', label: 'Service Available' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box textAlign="center">
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1">{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Why Choose Our Service?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              We provide top-quality appliance repair services with a commitment to excellence and customer satisfaction.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: 'Same Day Service',
                description: 'Most repairs completed the same day with our fast response team.',
                icon: <AccessTimeIcon fontSize="large" />,
                color: '#FF3F33'
              },
              {
                title: 'Certified Experts',
                description: 'Our technicians are certified and trained on all major brands.',
                icon: <VerifiedIcon fontSize="large" />,
                color: '#2E3B55'
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees. Youll know the cost before we start any work.',
                icon: <MonetizationOnIcon fontSize="large" />,
                color: '#00C853'
              },
              {
                title: 'Warranty Protected',
                description: 'All repairs come with a 90-day warranty for your peace of mind.',
                icon: <EmojiEventsIcon fontSize="large" />,
                color: '#FFAB00'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 3,
                      backgroundColor: item.color,
                      color: '#fff'
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f9fafc' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Our Services
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              Comprehensive repair services for all major home appliances
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 120,
                      backgroundColor: theme.palette.primary.light
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff'
                      }}
                    >
                      {React.cloneElement(service.icon, { sx: { fontSize: 40 } })}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <List dense sx={{ py: 0 }}>
                      {service.features.map((feature, i) => (
                        <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleIcon color="primary" sx={{ fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2' }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      size="small"
                      href="tel:+919360011217"
                    >
                      Book Now
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              How It Works
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              Getting your appliance fixed is quick and easy with our simple process
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                step: '1',
                title: 'Book a Service',
                description: 'Call us or book online to schedule an appointment at your convenience.',
                icon: <PhoneIcon color="primary" fontSize="large" />
              },
              {
                step: '2',
                title: 'Technician Arrives',
                description: 'Our expert arrives at your doorstep at the scheduled time.',
                icon: <HomeIcon color="primary" fontSize="large" />
              },
              {
                step: '3',
                title: 'Diagnosis & Repair',
                description: 'We diagnose the issue and fix it with genuine parts if needed.',
                icon: <EngineeringIcon color="primary" fontSize="large" />
              },
              {
                step: '4',
                title: 'Enjoy Your Appliance',
                description: 'Your appliance works like new again with our warranty protection.',
                icon: <CheckCircleIcon color="primary" fontSize="large" />
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      fontWeight: 700,
                      mb: 3
                    }}
                  >
                    {item.step}
                  </Box>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f9fafc' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              What Our Customers Say
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              Don't just take our word for it - hear from our satisfied customers
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: '#fff',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{
                          color: i < testimonial.rating ? '#FFC107' : '#e0e0e0',
                          fontSize: 20
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "{testimonial.comment}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    - {testimonial.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Landing;