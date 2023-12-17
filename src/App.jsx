import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Stranica from './Stranica.js';
import KnopkaPage from './KnopkaPage.jsx';
import './styles.css';
import HomePage from './HomePage.jsx';
import Stranica2 from './Stranica2.jsx';  // Correct import statement
import Stranica3 from './Stranica3.jsx';  // Correct import statement

const NavigationPanel = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/stranica">Stranica</Link>      
      <Link to="/stranica2">Stranica2</Link>
      <Link to="/stranica3">Stranica3</Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <NavigationPanel />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/stranica" element={<Stranica />} />
        <Route path="/stranica2" element={<Stranica2 />} />
        <Route path="/stranica3" element={<Stranica3 />} />
      </Routes>
    </Router>
  );
};

export default App;
