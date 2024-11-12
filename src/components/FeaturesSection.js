import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'assets/Images/icon-1.svg',
      title: 'Unique Creations',
      description: 'Each golden Robot is a one-of-a-kind masterpiece, created with precision and care by the robot artist.'
    },
    {
      icon: 'assets/Images/icon-2.svg',
      title: 'Cutting-Edge Technology',
      description: 'The artist combines artificial intelligence and robotics to produce art that blurs the line between man and machine.'
    },
    {
      icon: 'assets/Images/icon-3.svg',
      title: 'Exclusive Membership',
      description: 'Each collector gains access to an exclusive club, enjoying unique benefits and early previews of upcoming collections.'
    }
  ];

  return (
    <section className="features-section" data-aos="fade-in" data-aos-duration="1000">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="icon-wrapper">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;