import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import ACFImage from './ACFImage'
import '../assets/styles/component/_header.scss'

const Header = () => {
    const restPath = restBase + 'pages/14?_embed&_fields=acf&acf_format=standard' 
    const [restData, setData] = useState([])
    const phrases = ['#Software Engineer', '#Frontend Designer', '#Problem Solver'];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

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
        const currentPhrase = phrases[index];
        let typingSpeed = isDeleting ? 50 : 120;
    if (isDeleting && charIndex === 1) {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % phrases.length);
    }
        const timeout = setTimeout(() => {
          if (isDeleting) {
            setText(currentPhrase.substring(0, charIndex - 1));
            setCharIndex(prev => prev - 1);
          } else {
            setText(currentPhrase.substring(0, charIndex + 1));
            setCharIndex(prev => prev + 1);
          }
    
          if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
    
          if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex(prev => (prev + 1) % phrases.length);
          }
        }, typingSpeed);
    
        return () => clearTimeout(timeout);
      }, [charIndex, isDeleting, index, phrases]);
    return (
      <header className='left-panel' id='home'>
        {restData.acf?.logo && (
          <a href="/" className="site-logo-link">
            <ACFImage image={restData.acf.logo} className="site-logo" />
          </a>
        )}
        <div className='hero'>
          <div className="hero-content">
            <section>
                <h1>{restData.acf?.Name}</h1>
                <h2 className="typing-tagline">{text}<span className="cursor">|</span></h2>
            </section>
            <a className='call-to-action' href="#projects">
                <p className="btn-text">My Projects</p>
            </a>
          </div>
          <nav>
            <ul className='footer-nav'>
            <li><a
  href={window.location.pathname === '/' ? '#home' : '/#home'}
>
  Home
</a></li>
            <li><a
  href={window.location.pathname === '/' ? '#projects' : '/#projects'}
>
  Projects
</a></li>
            <li><a
  href={window.location.pathname === '/' ? '#about' : '/#about'}
>
 About
</a></li>
            <li><a
  href={window.location.pathname === '/' ? '#skills' : '/#skills'}
>
Skills
</a></li>
            <li><a
  href={window.location.pathname === '/' ? '#contact' : '/#contact'}
>
 Contact
</a></li>
            </ul>
          </nav>
          </div>
      </header>            
    )
}

export default Header
