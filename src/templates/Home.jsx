import React from 'react';
import ProjectGallery from '../components/Projectgallery';
import About from '../components/about';
import FeaturedProject from '../components/Featuredproject';
const Home = () => {
    return (
        <div>
                <FeaturedProject />
                <ProjectGallery />
                <About />
        </div>

    );
};

export default Home;