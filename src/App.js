import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import './styles/main.scss';
import './styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </Router>
  );
};

export default App;
