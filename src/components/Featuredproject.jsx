import React from 'react';
import '../assets/styles/component/_featuredproject.scss';

const PhoneShowcase = () => {
  return (
    <section className="phone-showcase">
      <div className="content">
        <h2>Featured Work</h2>
        <div className="phone-wrapper">
        <img src="/images/Featurephone.png" alt="Phone Mockup" className="phone-mockup" />
        <div className="tag">
          <span>Featured Project</span>
          <h3>Tryotel App</h3>
          <a href="#" className="view-btn">View Project</a>
        </div>
      </div>
        <p>
          Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.<br />
          Collaborated in 140+ projects with 50+ clients worldwide. Passionate about data analytics and visualization.
        </p>
      </div>
    </section>
  );
};

export default PhoneShowcase;
