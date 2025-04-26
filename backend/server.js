require('dotenv').config(); // Load environment variables

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Serve static images from the 'public/images' folder
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

// API endpoint to list all images
app.get('/api/gallery', (req, res) => {
  const imagesDirectory = path.join(__dirname, 'public/images');

  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      return res.status(500).json({ error: 'Failed to load images' });
    }

    // If you are deployed (Railway), use process.env.BASE_URL
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;

    const imageUrls = files.map(file => `${baseUrl}/images/${file}`);
    res.json(imageUrls);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
