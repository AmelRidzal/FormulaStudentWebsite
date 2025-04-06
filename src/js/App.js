import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FbxViewer from '../js/FbxViewer';
import Default from './Default.js'
import Picturs from './Picturs.js'
import Update from './Updates.js'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/fbx" element={<FbxViewer />} />
      <Route path="/" element={<Default />} />
      <Route path="/pics" element={<Picturs />} />
      <Route path="/upd" element={<Update />} />
        {/* other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
