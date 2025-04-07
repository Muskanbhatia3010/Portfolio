import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { restBase } from '../utilities/Utilities';
import FeaturedImage from './FeaturedImage';
import '../assets/styles/component/_featuredproject.scss';

const PhoneShowcase = () => {

  const phoneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const restPath = restBase + 'projects/87?_embed' 
  const [restData, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(restPath)
      if ( response.ok ) {
        const data = await response.json()
        setData(data)
      }
    }
      fetchData()
  }, [restPath])

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
            <img src="/images/FinalFeature.png" alt="Feature" className='phone-mockup'/>
          </div>
        </div>
        <h3 className='ProjectName'>{restData.title?.rendered}</h3>
        <p>{restData.acf?.shortdescription}</p>
    </section>
  );
};

export default PhoneShowcase;
