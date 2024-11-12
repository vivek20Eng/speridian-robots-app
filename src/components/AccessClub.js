import React from 'react';

const AccessClub = () => {
  return (
    <section className="access-club">
      <div className="container">
        <div className="ticket-container">
          <div className="ticket-outline">
            <div className="tickets">
              <img 
                src="/assets/Images/Ticket.svg" 
                alt="Access Tickets" 
              />
            </div>
          </div>
        </div>
        <div className="content">
          <h2 className="title">Access the Club.</h2>
          <p className="description">
            Join our exclusive Discord community, where collectors enjoy unique benefits, 
            insider news, and early access to upcoming golden Robot collections.
          </p>
          <button className="learn-more-btn">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessClub;