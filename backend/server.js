const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Serve static files (images) from a public folder
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Endpoint to list all images
app.get('/api/gallery', (req, res) => {
  const imagesDirectory = path.join(__dirname, 'public/images');

  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      return res.status(500).json({ error: 'Failed to load images' });
    }

    const imageUrls = files.map(file => `${req.protocol}://${req.get('host')}/images/${file}`);
    res.json(imageUrls);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
