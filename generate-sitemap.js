// sitemap.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import services  from './src/data/services.js';


const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/services-list', changefreq: 'weekly', priority: 0.7 },
];

// Set your domain
const hostname = 'https://sky2zone.online/';
const sitemap = new SitemapStream({ hostname });

const filePath = path.resolve('public', 'sitemap.xml');
const writeStream = createWriteStream(filePath);

(async () => {
  try {
    sitemap.pipe(writeStream);

    // Add static pages
    staticRoutes.forEach(route => sitemap.write(route));

    // Add dynamic service pages
    services.forEach(service => {
      sitemap.write({
        url: `/services/${service.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
      });
    });

    sitemap.end();
    await streamToPromise(sitemap);

    console.log(`✅ Sitemap generated successfully at: ${filePath}`);
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
  }
})();
