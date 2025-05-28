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
app.use('/memberPics', express.static(path.join(__dirname, 'public/subteams/memberPics')));
app.use('/newsPics', express.static(path.join(__dirname, 'public/newsletters/newsPics')));

// Serve .json directly
app.use('/members.json', express.static(path.join(__dirname, 'public/subteams/members.json')));
app.use('/newsletters.json', express.static(path.join(__dirname, 'public/newsletters/newsletters.json')));

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
  const membersFilePath = path.join(__dirname, 'public/subteams', 'members.json');

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


// API random team members
app.get('/api/randommembers', (req, res) => {
  const membersFilePath = path.join(__dirname, 'public/subteams', 'members.json');

  fs.readFile(membersFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading members.json:', err);
      return res.status(500).json({ error: 'Failed to load team data' });
    }

    try {
      const allTeams = JSON.parse(data);
      // Combine all member arrays into one
      const allMembers = Object.values(allTeams).flat();
      const teamMembers = getRandomItems(allMembers, 3);
      res.json(teamMembers);
    } catch (parseErr) {
      console.error('Error parsing members.json:', parseErr);
      res.status(500).json({ error: 'Failed to parse team data' });
    }
  });
});



// API to serve newsletters
app.get('/api/newsletters', (req, res) => {
  const newslettersPath = path.join(__dirname, 'public/newsletters','newsletters.json');

  fs.readFile(newslettersPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading newsletters.json:', err);
      return res.status(500).json({ error: 'Failed to load newsletters' });
    }

    try {
      const newsletters = JSON.parse(data);
      res.json(newsletters);
    } catch (parseErr) {
      console.error('Error parsing newsletters.json:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});

// GET /api/newsletters/:id
app.get('/api/newsletters/:id', (req, res) => {
  const { id } = req.params;
  const newslettersPath = path.join(__dirname, 'public/newsletters','newsletters.json');

  fs.readFile(newslettersPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading newsletters.json:', err);
      return res.status(500).json({ error: 'Failed to load newsletters' });
    }

    try {
      const newsletters = JSON.parse(data);
      const newsletter = newsletters.find(n => n.id === id);
      if (!newsletter) {
        return res.status(404).json({ error: 'Newsletter not found' });
      }
      res.json(newsletter);
    } catch (parseErr) {
      console.error('Error parsing newsletters.json:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});




function getRandomItems(arr, count) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
