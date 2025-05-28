import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import GlbViewer from './GlbViewer.js';
import Default from './Default.js'
import Gallery from './Gallery.js'
import News from './News.js'
import NewslettersDetail from './NewslettersDetails.js'
import Sponsors from './Sponsors.js'
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Subteam from './Subteam.js';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <main style={{ paddingTop: '50px' }}>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/3dmodel" element={<GlbViewer />} />
          <Route path="/" element={<Default />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewslettersDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/subteam" element={<Subteam />} />
          {/* other routes here */}

        </Routes>
        <Footer />
      </Router>
    </main>
  );
}


export default App;


