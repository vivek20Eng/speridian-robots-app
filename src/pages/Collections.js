import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RobotCollections = () => {
  const robots = [
    {
      id: 1,
      name: 'Wealthy D.',
      price: 1200,
      description: 'Wealth isn\'t everything, but this Robot exudes sophistication and calm. A true symbol of opulence.',
      image: 'assets/Images/Robo-1.svg',
    },
    {
      id: 2,
      name: 'Cerberus D.',
      price: 920,
      description: 'With three heads and one brain, this Robot embodies the mythological guardian with a quirky twist.',
      image: 'assets/Images/Robo-2.svg',
    },
    {
      id: 3,
      name: 'Ninja D.',
      price: 850,
      description: 'Stealthy and skilled, this Robot is a master of disguise. An intriguing addition to any collection.',
      image: 'assets/Images/Robo-3.svg',
    },
    {
        id: 1,
        name: 'Wealthy D.',
        price: 1200,
        description: 'Wealth isn\'t everything, but this Robot exudes sophistication and calm. A true symbol of opulence.',
        image: 'assets/Images/Robo-1.svg',
      },
      {
        id: 2,
        name: 'Cerberus D.',
        price: 920,
        description: 'With three heads and one brain, this Robot embodies the mythological guardian with a quirky twist.',
        image: 'assets/Images/Robo-2.svg',
      },
      {
        id: 3,
        name: 'Ninja D.',
        price: 850,
        description: 'Stealthy and skilled, this Robot is a master of disguise. An intriguing addition to any collection.',
        image: 'assets/Images/Robo-3.svg',
      },
  ];

  return (
    <>
      <Header />
      <div className="robot-collections" data-aos="fade-in" data-aos-duration="1000">
        <h1>Robots Collections</h1>
        
        <div className="robot-grid">
          {robots.map((robot) => (
            <div key={robot.id} className="robot-card">
              <div className="robot-image">
                <img 
                  src={robot.image} 
                  alt={robot.name}
                  onError={(e) => {
                    console.error(`Failed to load image: ${e.target.src}`);
                    e.target.src = '/public/assets/Images/fallback-robot.svg'; 
                  }}
                />
              </div>
              
              <h2>{robot.name}</h2>
              
              <p className="description">{robot.description}</p>
              
              <div className="price">$ {robot.price}</div>
              
              <button className="check-out-btn">
                Check it Out
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RobotCollections;