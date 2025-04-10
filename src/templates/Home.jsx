import React from 'react';
import ProjectGallery from '../components/Projectgallery';
import FeaturedProject from '../components/Featuredproject';
import About from '../components/about';
import AllSkill from '../components/AllSkill';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
                <FeaturedProject />
                <ProjectGallery />
                <AllSkill />
                <About />
        </div>

    );
};

export default Home;