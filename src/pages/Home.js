import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RobotCard from '../components/RobotCard';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedRobots from '../components/FeaturedRobots';
import AccessClub from '../components/AccessClub';
import Accordion from '../components/Accordion';
const Home = () => {
  const [robots, setRobots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const robotData = [
      { 
        id: 1, 
        name: 'Robot 1', 
        image: 'assets/Images/Robo-Banner-1.svg',
      },
      { 
        id: 2, 
        name: 'Robot 2', 
        image: 'assets/Images/Robo-Banner-2.svg',
      },
    ];
    setRobots(robotData);
  }, []);

  useEffect(() => {
    if (robots.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % robots.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [robots]);

  return (
    <div className="home-page">
      <Header />
      <main data-aos="fade-in" data-aos-duration="1000">
        <section className="hero">
          <div className="hero-content">
            <h1>Made with <span>heart</span>, by a <span>robot</span>.</h1>
            <p>Collect unique art pieces entirely made by an android with human feelings</p>
            <Link to="/collections" className="btn">Discover More Collections</Link>
          </div>
          <div className="hero-image">
            <section className="hero-radius-sec">
              {robots[currentIndex] && (
                <>
                  <div className={`robot-container ${isTransitioning ? 'transitioning' : ''}`}>
                    <img 
                      className="robot"
                      src={`/${robots[currentIndex].image}`}
                      alt={robots[currentIndex].name}
                      onError={(e) => {
                        console.error(`Failed to load image: ${e.target.src}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* <div className={`hand-container ${isTransitioning ? 'transitioning' : ''}`}>
                    <img 
                      className="hand"
                      src="/public/assets/Images/Robo-Banner-1.svg"
                      alt="Robot Hand"
                      
                    />
                  </div> */}
                </>
              )}
            </section>
          </div>
        </section>
        <FeaturesSection/>
        <FeaturedRobots/>
        <AccessClub/>
        <Accordion/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;