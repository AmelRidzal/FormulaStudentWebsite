import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import FbxViewer from '../js/FbxViewer';
import Test from '../js/Test.js'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Test />} />
        {/* other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
