import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { restBase } from '../utilities/Utilities';
import Skill from './Skill';
import '../assets/styles/component/_featuredproject.scss';
import { useNavigate } from 'react-router-dom';

const PhoneShowcase = () => {

  const phoneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const restPath = restBase + 'projects/87?_embed' ;
  const [restData, setData] = useState([]);
  const navigate = useNavigate();
  
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
    <section className='FeaturedProject'>
        <h2>Featured Work</h2>
        <div className="Image-layout-wrapper">
          <div ref={phoneRef} className={`phone-scale ${isVisible ? 'enter' : ''}`}>
            <img src="/images/MinimalistNeutralMultiDeviceComputerMockupWebsiteLaunchInstagramPost.png" alt="Feature" className='phone-mockup'/>
          </div>
        </div>
        <h3>{restData.title?.rendered}</h3>
        <p className='description'>{restData.acf?.shortdescription}</p>
        <a className='call-to-action'  onClick={() => navigate(`/projects/87`)}>
          <p className="btn-text">View Project</p>
        </a>
    </section>
  );
};

export default PhoneShowcase;
