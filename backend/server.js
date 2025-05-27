const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/memberPics', express.static(path.join(__dirname, 'public/memberPics')));

// Serve members.json directly
app.use('/members.json', express.static(path.join(__dirname, 'public/members.json')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

// Optional API for gallery images
app.get('/api/gallery', (req, res) => {
  const imagesDirectory = path.join(__dirname, 'public/images');
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      return res.status(500).json({ error: 'Failed to load images' });
    }
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
    const imageUrls = files.map(file => `${baseUrl}/images/${file}`);
    res.json(imageUrls);
  });
});

// API to serve filtered team members
app.get('/api/subteam/:team', (req, res) => {
  const team = req.params.team;
  const membersFilePath = path.join(__dirname, 'public', 'members.json');

  fs.readFile(membersFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading members.json:', err);
      return res.status(500).json({ error: 'Failed to load team data' });
    }

    const allTeams = JSON.parse(data);
    const teamMembers = allTeams[team] || [];
    res.json(teamMembers);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
