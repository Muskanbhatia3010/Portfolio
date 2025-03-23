import { useState, useEffect, useRef } from 'react';
import { restBase } from '../utilities/Utilities';
import '../assets/styles/component/_hero.scss';
import '../assets/styles/templates/_home.scss'

const Hero = () => {
    const restPath = restBase + 'pages/14?_embed&_fields=acf&acf_format=standard'
    const [restData, setData] = useState([])

    const phrases = ['Software Engineer', 'Frontend Designer', 'Problem Solver'];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
        };
        fetchData();
    }, [restPath]);
    useEffect(() => {
        const currentPhrase = phrases[index];
        let typingSpeed = isDeleting ? 50 : 120;
    
        const timeout = setTimeout(() => {
          if (isDeleting) {
            setText(currentPhrase.substring(0, charIndex - 1));
            setCharIndex(prev => prev - 1);
          } else {
            setText(currentPhrase.substring(0, charIndex + 1));
            setCharIndex(prev => prev + 1);
          }
    
          if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
    
          if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex(prev => (prev + 1) % phrases.length);
          }
        }, typingSpeed);
    
        return () => clearTimeout(timeout);
      }, [charIndex, isDeleting, index, phrases]);
    

    return (
                <div className="section-card">
                    <h1>{restData.acf?.Name}</h1>
                    <h2 className="typing-tagline">{text}<span className="cursor">|</span></h2>
                </div>
    );
};

export default Hero;