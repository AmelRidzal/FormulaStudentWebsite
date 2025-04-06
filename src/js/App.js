import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FbxViewer from '../js/FbxViewer';
import Default from './Default.js'
import Picturs from './Picturs.js'
import Update from './Updates.js'
import Sponsors from './Sponsors.jsx'

import Navbar from './Navbar';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
      <Route path="/fbx" element={<FbxViewer />} />
      <Route path="/" element={<Default />} />
      <Route path="/pics" element={<Picturs />} />
      <Route path="/upd" element={<Update />} />
        {/* other routes here */}
      <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </Router>
  );
}

export default App;


