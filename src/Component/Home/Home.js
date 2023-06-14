import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;