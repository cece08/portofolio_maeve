const sharp = require('sharp');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const input = path.join(__dirname, 'src/assets/img/bandeau.jpg');
const outDir = path.join(__dirname, 'public/icons');

(async () => {
  for (const size of sizes) {
    await sharp(input)
      .resize(size, size, { fit: 'cover', position: 'top' })
      .toFile(path.join(outDir, `icon-${size}x${size}.png`));
    console.log(`✓ icon-${size}x${size}.png`);
  }
  console.log('Icônes générées !');
})();

