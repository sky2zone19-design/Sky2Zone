import React from 'react';
import { Box, Typography, Container, Button, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 6 },
        mt: 'auto',
        background: 'linear-gradient(135deg, #1e2a38 0%, #2e3b45 100%)',
        color: '#E0E0E0',
        userSelect: 'none',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
            mb: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.6rem', md: '2rem' },
              color: '#FFFFFF',
              textAlign: { xs: 'center', md: 'left' },
              lineHeight: 1.3,
            }}
          >
            Need Immediate Assistance? <br /> We’re Just a Call Away!
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="tel:+919360011217"
            aria-label="Call now"
            sx={{
              px: 5,
              py: 1.8,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '50px',
              color: '#1E2A38',
              backgroundColor: '#F6D365',
              backgroundImage: 'linear-gradient(315deg, #F6D365 0%, #FDA085 74%)',
              boxShadow: '0 6px 16px rgba(255, 100, 100, 0.3)',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              '&:hover': {
                backgroundImage: 'linear-gradient(315deg, #FDA085 0%, #F6D365 74%)',
                boxShadow: '0 10px 25px rgba(255, 100, 100, 0.5)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            📞 Call Us Now
          </Button>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            height: '2px',
            mb: 4,
          }}
        />

        {/* Bottom Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '1rem',
              color: '#B0BEC5',
              letterSpacing: '0.05em',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Trusted Professionals • 24/7 Support • Licensed & Verified Experts
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 2,
              fontSize: '0.85rem',
              opacity: 0.5,
            }}
          >
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
