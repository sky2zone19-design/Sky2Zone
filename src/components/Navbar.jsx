import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Slide in direction="down">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'linear-gradient(90deg, #1e2a38 0%, #1e2a38 100%)',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: 70,
              px: { xs: 2, md: 3 },
            }}
          >
            {/* Left Section - Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Logo"
                sx={{ height: 40, width: 40, mr: 1 }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  letterSpacing: 1,
                }}
              >
                Sky2Zone
              </Typography>
            </Box>

            {/* Desktop Navigation Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/services">
                Services
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              {/* <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button> */}
            </Box>

            {/* Call Now Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                variant="contained"
                href="tel:+919360011217"
                sx={{
                  bgcolor: '#00C897',
                  color: '#fff',
                  fontWeight: 600,
                  px: 3,
                  py: 1.2,
                  borderRadius: '30px',
                  boxShadow: '0 4px 12px rgba(0, 200, 151, 0.4)',
                  textTransform: 'none',
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: '#00A87F',
                    boxShadow: '0 6px 20px rgba(0, 200, 151, 0.6)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Call Now
              </Button>
            </Box>

            {/* Hamburger Menu for Mobile */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton color="inherit" onClick={open ? handleMenuClose : handleMenuOpen}>
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/">
                  Home
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/services">
                  Services
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/about">
                  About
                </MenuItem>
                {/* <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
                  Contact
                </MenuItem> */}
                <MenuItem onClick={handleMenuClose}>
                  <Button
                    variant="contained"
                    fullWidth
                    href="tel:+919360011217"
                    sx={{
                      mt: 1,
                      bgcolor: '#00C897',
                      fontWeight: 600,
                      borderRadius: '30px',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#00A87F',
                      },
                    }}
                  >
                    Call Now
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
