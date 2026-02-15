import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/img');
const outputDir = path.join(__dirname, 'public/img/optimized');
const webpDir = path.join(__dirname, 'public/img/optimized/webp');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
}

// Function to process a single file
async function processImage(file) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const webpPath = path.join(webpDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    try {
        const metadata = await sharp(inputPath).metadata();

        // Resize large images (e.g. height > 1080)
        // We target 1920px width for max quality on typical screens, with jpeg quality 80
        // This dramatically reduces file size from 12MB+ to ~300KB
        await sharp(inputPath)
            .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(outputPath);

        // Generate WebP version for even better compression
        await sharp(inputPath)
            .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(webpPath);

        console.log(`Optimized: ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
}

// Read all files in the directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    files.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            processImage(file);
        }
    });
});
