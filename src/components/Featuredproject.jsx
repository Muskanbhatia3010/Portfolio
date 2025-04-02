import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../assets/styles/component/_featuredproject.scss';

const PhoneShowcase = () => {

  const phoneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 }
    );
  
    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }
  
    return () => {
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);
  
  return (
    <section className="phone-showcase">
        <h2>Featured Work</h2>
        <div className="phone-wrapper">
          <div className='arrow-button-wrapper'>
            <div className={`image-scale ${isVisible ? 'enter' : ''}`}>
                  <img src="/images/arrow.png" alt="arrow" />
            </div>
            <div className="tag">
              <a href="#" className="view-btn">View Project</a>
            </div>
          </div>
          <div ref={phoneRef} className={`phone-scale ${isVisible ? 'enter' : ''}`}>
              <img src="/images/Featurephone.png" className="phone-mockup" />
          </div>
        </div>
        <h3 className='ProjectName'>Travel & Event Management</h3>
        <p>
          Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.<br />
          Collaborated in 140+ projects with 50+ clients worldwide. Passionate about data analytics and visualization.
        </p>
    </section>
  );
};

export default PhoneShowcase;
