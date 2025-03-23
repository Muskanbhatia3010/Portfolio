import React from 'react';
import Hero from '../components/Hero';
import ProjectGallery from '../components/Projectgallery';
import About from '../components/about';

const Home = () => {
    return (
        <div className="split-layout">
            <div className="left-panel">
                <Hero /> {/* or name, tagline, etc. */}
            </div>
        
            <div className="right-panel">
                <About />
                <ProjectGallery />
                {/* Add more sections here */}
            </div>
        </div>

    );
};

export default Home;