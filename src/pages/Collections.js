import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RobotCard from '../components/RobotCard';
import FeaturesSection from '../components/FeaturesSection';

const Collections = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    // Fetch robot data from an API or sample data
    setRobots([
      { id: 1, name: 'Robot 1', image: '/robot1.png' },
      { id: 2, name: 'Robot 2', image: '/robot2.png' },
      { id: 3, name: 'Robot 3', image: '/robot3.png' },
      { id: 4, name: 'Robot 4', image: '/robot4.png' },
      { id: 5, name: 'Robot 5', image: '/robot5.png' },
      { id: 6, name: 'Robot 6', image: '/robot6.png' },
    ]);
  }, []);

  return (
    <div className="collections-page">
      <Header />
      <FeaturesSection/>
      <Footer />
    </div>
  );
};

export default Collections;