import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RobotCard from '../components/RobotCard';

const Home = () => {
  const [robots, setRobots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch robot data from an API or sample data
    setRobots([
      { id: 1, name: 'Robot 1', image: '/robot1.png' },
      { id: 2, name: 'Robot 2', image: '/robot2.png' },
      { id: 3, name: 'Robot 3', image: '/robot3.png' },
    ]);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % robots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Made with heart, by a robot.</h1>
            <p>Collect unique art pieces entirely made by an android with human feelings</p>
            <Link to="/collections" className="btn">Discover More Collections</Link>
          </div>
          <div className="hero-image">
            <img src={robots[currentIndex]?.image} alt={robots[currentIndex]?.name} />
          </div>
        </section>
        <section className="featured-robots">
          <h2>Featured Robots</h2>
          <div className="robot-grid">
            {robots.map((robot) => (
              <RobotCard key={robot.id} robot={robot} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;