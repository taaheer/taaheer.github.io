import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Define your routes here
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/resume', changefreq: 'monthly', priority: 0.7 },
  { url: '/actor', changefreq: 'monthly', priority: 1.0 },
  { url: '/actor/audio', changefreq: 'monthly', priority: 0.7 },
  { url: '/actor/photos', changefreq: 'monthly', priority: 0.7 },
  { url: '/actor/videos', changefreq: 'monthly', priority: 0.7 },
  { url: '/projects', changefreq: 'monthly', priority: 0.7 },
  { url: '/my-works', changefreq: 'monthly', priority: 0.7 },
  // Add other routes as needed
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://taaheer.github.io' });
  const writeStream = createWriteStream('static/sitemap.xml');

  sitemapStream.pipe(writeStream);

  links.forEach((link) => {
    sitemapStream.write(link);
  });

  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('Sitemap has been generated!');
}

generateSitemap();
