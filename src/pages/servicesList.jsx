import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';

const ServicesList = () => {
  const [query, setQuery] = useState('');

  const filtered = services.filter(service =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Services</h1>
      <input
        type="text"
        placeholder="Search services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />

      <ul>
        {filtered.map(service => (
          <li key={service.id}>
            <Link to={`/services/${service.slug}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
