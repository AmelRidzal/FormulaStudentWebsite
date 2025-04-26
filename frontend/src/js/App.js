import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import FbxViewer from './FbxViewer.js';
import Default from './Default.js'
import Picturs from './Picturs.js'
import News from './News.js'
import Sponsors from './Sponsors.js'
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Subteam from './Subteam.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/fbx" element={<FbxViewer />} />
        <Route path="/" element={<Default />} />
        <Route path="/pics" element={<Picturs />} />
        <Route path="/news" element={<News />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/subteam" element={<Subteam />} />
        {/* other routes here */}

      </Routes>
      <Footer />
    </Router>
  );
}


export default App;


