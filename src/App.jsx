import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServicesList from './pages/servicesList';
import ServicePage from './pages/DynamicSEO(service)';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow:'hidden', width: '100vw' }}>
        <Navbar/>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services-list" element={<ServicesList />} />
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;


      
     