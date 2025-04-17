// /pages/api/defaultText1.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'text', 'defaultText1.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading text file:', err);
      return res.status(500).json({ error: 'Unable to read text file' });
    }

    res.status(200).json({ text: data });
  });
}
