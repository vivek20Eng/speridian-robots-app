import React from 'react';

const RobotCard = ({ robot }) => {
  return (
    <div className="robot-card">
      <img src={robot.image} alt={robot.name} />
      <h3>{robot.name}</h3>
    </div>
  );
};

export default RobotCard;