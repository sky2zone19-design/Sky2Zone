import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import services from '../data/services';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <h2>Service not found</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <Helmet>
        <title>{service.name} | Expert Appliance Repair</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServicePage;
