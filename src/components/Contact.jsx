import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
  name: '',
  phone: '',
  message: '',
});


  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/your_form_id', { // replace with your Formspree form URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Failed to send message.');
        }
      })
      .catch(() => setStatus('Failed to send message.'));
  };

  return (
    <Container sx={{ mt: 12, mb: 8 }}>
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
        Contact Us
      </Typography>
      <Box maxWidth="600px" mx="auto" component="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
  fullWidth
  label="Phone Number"
  variant="outlined"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  required
  type="tel"
/>

          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#00C897',
              '&:hover': { bgcolor: '#00A87F' },
              fontWeight: 600,
              borderRadius: 3,
            }}
          >
            Send Message
          </Button>
          {status && <Typography color="primary">{status}</Typography>}
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;
