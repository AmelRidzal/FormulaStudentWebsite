import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const folder = path.join(process.cwd(), 'public/images/gallery');

  try {
    const files = fs.readdirSync(folder);
    const imagePaths = files.map(name => `/images/gallery/${name}`);
    res.status(200).json(imagePaths);
  } catch (err) {
    console.error('Error reading folder', err);
    res.status(500).json({ error: 'Could not read image directory' });
  }
}
