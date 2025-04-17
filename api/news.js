// /pages/api/news.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const newslettersDir = path.join(process.cwd(), 'public/newsLetters');

  fs.readdir(newslettersDir, (err, folders) => {
    if (err) {
      console.error('Failed to read newsletters directory:', err);
      return res.status(500).json({ error: 'Could not read newsletters directory' });
    }

    const updates = folders.map((folderName) => {
      const folderPath = path.join(newslettersDir, folderName);

      try {
        const titlePath = path.join(folderPath, 'title.txt');
        const descriptionPath = path.join(folderPath, 'description.txt');

        const title = fs.readFileSync(titlePath, 'utf-8').trim();
        const description = fs.readFileSync(descriptionPath, 'utf-8').trim();

        // Try jpeg or png
        const possibleExtensions = ['jpeg', 'jpg', 'png'];
        let image = null;
        for (let ext of possibleExtensions) {
          const imagePath = path.join(folderPath, `image.${ext}`);
          if (fs.existsSync(imagePath)) {
            image = `/newsLetters/${folderName}/image.${ext}`; // public URL path
            break;
          }
        }

        return {
          title,
          description,
          image,
          date: folderName,
        };
      } catch (err) {
        console.warn(`Skipping folder ${folderName}:`, err.message);
        return null;
      }
    }).filter(Boolean); // remove nulls

    res.status(200).json(updates);
  });
}
