import React from 'react';

const FeaturedRobots = () => {
  const robots = [
    {
      image: 'assets/Images/Robo-1.svg',
      name: 'Wealthy D.',
      description: 'Wealth isnot everything, but this Robot exudes sophistication and calm. A true symbol of opulence.',
      price: 1200
    },
    {
      image: 'assets/Images/Robo-2.svg',
      name: 'Cerberus D.',
      description: 'With three heads and one brain, this Robot embodies the mythological guardian with a quirky twist.',
      price: 920
    },
    {
      image: 'assets/Images/Robo-3.svg',
      name: 'Ninja D.',
      description: 'Stealthy and skilled, this Robot is a master of disguise. An intriguing addition to any collection.',
      price: 850
    }
  ];

  return (
    <section className="featured-robots" data-aos="fade-in" data-aos-duration="1000">
      <div className="container">
        <h2 className="section-title">Featured Robots</h2>
        <div className="robots-grid">
          {robots.map((robot, index) => (
            <div key={index} className="robot-card">
              <div className="robot-image">
                <img src={robot.image} alt={robot.name} />
              </div>
              <h3 className="robot-name">{robot.name}</h3>
              <p className="robot-description">{robot.description}</p>
              <p className="robot-price">$ {robot.price}</p>
              <button className="check-button">Check it Out</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRobots;