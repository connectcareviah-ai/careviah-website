import { writeFileSync } from 'fs';

const base = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '';
const routes = ['/', '/about', '/services', '/contact', '/thank-you'];
const now = new Date().toISOString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `
  <url>
    <loc>${base ? base + r : r}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('')}
</urlset>`;

writeFileSync('public/sitemap.xml', xml);
console.log('✓ sitemap.xml written to public/');
