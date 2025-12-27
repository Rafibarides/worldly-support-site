/**
 * Post-build script to generate static HTML files for each route
 * This allows GitHub Pages to serve actual content (200 status) instead of 404
 * which is required for proper Google indexing of SPAs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes that need static HTML files
const routes = [
  'about',
  'who-we-are',
  'support',
  'privacy-policy',
  'terms-of-use'
];

const distDir = path.join(__dirname, '..', 'dist');
const indexHtml = path.join(distDir, 'index.html');

// Check if dist/index.html exists
if (!fs.existsSync(indexHtml)) {
  console.error('Error: dist/index.html not found. Run build first.');
  process.exit(1);
}

// Read the index.html content
const htmlContent = fs.readFileSync(indexHtml, 'utf-8');

// Create a directory and index.html for each route
routes.forEach(route => {
  const routeDir = path.join(distDir, route);
  
  // Create the directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Write index.html to the route directory
  const routeIndexPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(routeIndexPath, htmlContent);
  
  console.log(`✓ Created ${route}/index.html`);
});

console.log('\n✅ All route HTML files generated successfully!');
console.log('   Google can now index these pages without 404 errors.');

