import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Desenvolvimento from './pages/Desenvolvimento';
import Design from './pages/Design';
import Marketing from './pages/Marketing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desenvolvimento" element={<Desenvolvimento />} />
        <Route path="/design" element={<Design />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </Router>
  );
}

export default App;