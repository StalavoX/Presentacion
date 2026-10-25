const fs = require('node:fs');
const path = require('node:path');

const packageDirectory = path.join(__dirname, '..', 'node_modules', '@fortawesome', 'fontawesome-free');
const outputDirectory = path.join(__dirname, '..', 'assets', 'vendor', 'fontawesome');

if (!fs.existsSync(packageDirectory)) {
  throw new Error('Font Awesome is not installed. Run npm install before building.');
}

fs.mkdirSync(path.join(outputDirectory, 'css'), { recursive: true });
fs.copyFileSync(
  path.join(packageDirectory, 'css', 'all.min.css'),
  path.join(outputDirectory, 'css', 'all.min.css')
);
fs.cpSync(
  path.join(packageDirectory, 'webfonts'),
  path.join(outputDirectory, 'webfonts'),
  { recursive: true }
);
