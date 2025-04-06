const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files (images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API to list images inside a subfolder (e.g. gallery)
app.get('/api/images/:folder', (req, res) => {
  const folderName = req.params.folder;
  const folderPath = path.join(__dirname, 'public/images', folderName);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading images:', err);
      return res.status(500).json({ error: 'Unable to read image directory' });
    }

    // Filter image files only (optional)
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    const imageUrls = imageFiles.map(file => `/images/${folderName}/${file}`);
    res.json(imageUrls);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
