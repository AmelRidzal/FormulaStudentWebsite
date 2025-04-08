import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import FbxViewer from '../js/FbxViewer';
import Default from './Default.js'
import Picturs from './Picturs.js'
import News from './News.js'
import Sponsors from './Sponsors.js'
import Navbar from './Navbar';
import Footer from './Footer.js';

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
        {/* other routes here */}

      </Routes>
      <Footer />
    </Router>
  );
}


export default App;


