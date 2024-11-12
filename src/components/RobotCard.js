import React from 'react';

const RobotCard = ({ robot }) => {
  return (
    <div className="robot-card" data-aos="fade-in" data-aos-duration="1000">
      <img src={robot.image} alt={robot.name} />
      <h3>{robot.name}</h3>
    </div>
  );
};

export default RobotCard;