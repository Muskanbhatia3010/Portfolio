import React from 'react';
import Hero from '../components/Hero';
import ProjectGallery from '../components/Projectgallery';
import About from '../components/about';

const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectGallery />
            <About />
        </div>
    );
};

export default Home;