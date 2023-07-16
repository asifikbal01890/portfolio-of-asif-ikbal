import React from 'react';
import Footer from '../Component/Footer/Footer';
import ContactByFb from '../Component/ContactByFb/ContactByFb';
import Skills from '../Component/Skills/Skills';
import Projects from '../Component/Projects/Projects';
import ContactByEmail from '../Component/ContactByEmail/ContactByEmail';
import HeroSection from '../Component/HeroSection/HeroSection';

const Main = () => {
    return (
        <div id='mainContent'>
            <HeroSection></HeroSection>
            <Skills></Skills>
            <Projects></Projects>
            <ContactByEmail></ContactByEmail>
            <ContactByFb></ContactByFb>
            <Footer></Footer>
        </div>
    );
};

export default Main;