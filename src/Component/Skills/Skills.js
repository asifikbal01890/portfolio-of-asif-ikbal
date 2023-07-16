import React from 'react';
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiJsonwebtokens, SiMongodb, SiNetlify, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {

    const logos = [
        {
            icon: <FaHtml5></FaHtml5>
        },
        {
            icon: <FaCss3Alt></FaCss3Alt>
        },
        {
            icon: <IoLogoJavascript></IoLogoJavascript>
        },
        {
            icon: <FaReact></FaReact>
        },
        {
            icon: <IoLogoFirebase></IoLogoFirebase>
        },
        {
            icon: <FaBootstrap></FaBootstrap>
        },
        {
            icon: <SiTailwindcss></SiTailwindcss>
        },
        {
            icon: <FaNode></FaNode>
        },
        {
            icon: <SiExpress></SiExpress>
        },
        {
            icon: <SiMongodb></SiMongodb>
        },
        {
            icon: <SiTypescript></SiTypescript>
        },
        {
            icon: <SiNextdotjs></SiNextdotjs>
        },
        {
            icon: <SiRedux></SiRedux>
        },
        {
            icon: <SiJsonwebtokens></SiJsonwebtokens>
        },
        {
            icon: <SiVisualstudiocode></SiVisualstudiocode>
        },
        {
            icon: <FaGithub></FaGithub>
        },
        {
            icon: <FaFigma></FaFigma>
        },
        {
            icon: <SiNetlify></SiNetlify>
        },
        {
            icon: <SiVercel></SiVercel>
        },
    ]


    return (
        <div id='skills' className='text-center my-16 lg:my-56 text-white max-w-[1300px] mx-auto'>
            <h1 className='font-[Outfit] text-3xl md:text-5xl'>Professional <span className='gradient-text'>Skills</span></h1>
            <div className='mt-10 flex flex-wrap justify-center gap-6'>
                {
                    logos.map((logo, i) =>
                        <div key={i} className='text-4xl md:text-6xl gradient-border py-5 md:py-8 px-14 md:px-20 flex justify-center items-center'>
                            {logo.icon}
                        </div>)
                }
            </div>
            <h1 className='font-[Outfit] text-3xl md:text-5xl mt-20'><span className='gradient-text pr-[10px]'>Tools</span>I use</h1>
            <div>
                <div className='flex flex-wrap justify-center gap-6 mt-10'>
                    {
                        logos.slice(14, 19).map((logo, i) =>
                            <div key={i} className='text-4xl md:text-6xl gradient-border py-5 md:py-8 px-14 md:px-20 flex justify-center items-center'>
                                {logo.icon}
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;