import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import EllipseOne from '../../BgLight/EllipseOne';
import html from '../../Files/image/logo/Html.png';
import css from '../../Files/image/logo/Css.png';
import js from '../../Files/image/logo/JavaScript-logo.png';
import node from '../../Files/image/logo/Node.png';
import react from '../../Files/image/logo/React.png';
import mongo from '../../Files/image/logo/MongoDB.png';
import './HeroSection.css';
import EllipseTwo from '../../BgLight/EllipseTwo';
import EllipseThree from '../../BgLight/EllipseThree';

const HeroSection = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 items-center mx-auto max-w-[1200px] mt-36'>
            <div className='text-white font-[Outfit]'>
                <h1 className='text-5xl'>Hi,</h1>
                <h1 className='text-5xl'>I am Asif Ikbal</h1>
            <TypeAnimation
                sequence={[
                    // Same String at the start will only be typed once, initially
                    'I am a MERN Stack Developer',
                    1000,
                    'I am a Frontend Developer',
                    1000,
                    'I am a React Developer',
                    1000,
                    'I am a Full Stack Developer',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '2.5em' }}
                repeat={Infinity}
            />
        </div>
            <div>
                <div className='flex gap-8 justify-between mx-[-60px]'>
                    <img className='w-20 animate-img-1 mt-[200px] mb-[-200px]' src={html} alt="" />
                    <img className='w-16 h-16 animate-img-2 mt-[100px] mb-[-100px]' src={css} alt="" />
                    <img className='w-14 h-14 animate-img-3 ' src={js} alt="" />
                    <img className='w-20 animate-img-1' src={react} alt="" />
                    <img className='w-20 h-16 animate-img-3 mt-[100px] mb-[-100px]' src={node} alt="" />
                    <img className='w-20 animate-img-2 mt-[200px] mb-[-200px]' src={mongo} alt="" />
                </div>
                <div>
                    <img className='z-10 sticky rounded-full shadow-[#26a6ba4f] shadow-2xl' src="https://i.ibb.co/4TS4MFX/Pics-Art-12-11-07-14-41.png" alt="" />
                </div>
            </div>
        </div>
        <EllipseOne></EllipseOne>
        <EllipseTwo></EllipseTwo>
        <EllipseThree></EllipseThree>
        </div>
    );
};

export default HeroSection;