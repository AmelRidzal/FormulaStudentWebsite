// /api/images.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery');

  fs.readdir(galleryPath, (err, files) => {
    if (err) {
      console.error('Error reading gallery folder:', err);
      return res.status(500).json({ error: 'Unable to read gallery folder' });
    }

    const urls = files.map(file => `/images/gallery/${file}`);
    res.status(200).json(urls);
  });
}
