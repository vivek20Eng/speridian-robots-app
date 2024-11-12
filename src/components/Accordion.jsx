// Accordion.jsx
import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: 'What is Robots?',
      content: 'Content for robots explanation goes here'
    },
    {
      title: 'How are the golden Robots made?',
      content: 'Content about golden robots manufacturing goes here'
    },
    {
      title: 'What benefits do I get by joining the club?',
      content: 'Content about club benefits goes here'
    },
    {
      title: 'What payment methods are accepted?',
      content: 'Content about payment methods goes here'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container" data-aos="fade-in" data-aos-duration="1000">
      <h1>Featured Robots</h1>
      {accordionData.map((item, index) => (
        <div 
          key={index} 
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
        >
          <button 
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="accordion-icon">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          <div className="accordion-content">
            <div className="accordion-content-inner">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;