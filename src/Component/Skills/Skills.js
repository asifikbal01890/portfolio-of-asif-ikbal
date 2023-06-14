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
        <div className='text-center my-56 text-white w-[1200px] mx-auto'>
            <h1 className='font-[Outfit] text-5xl'>Professional <span className='gradient-text'>Skills</span></h1>
            <div className='mt-10 grid grid-cols-5 gap-6'>
                {
                    logos.slice(0, 10).map((logo, i) =>
                        <div key={i} className='text-6xl gradient-border py-8 px-20 flex justify-center items-center'>
                            {logo.icon}
                        </div>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-4 gap-6 mt-6'>
                    {
                        logos.slice(10, 14).map((logo, i) =>
                            <div key={i} className='text-6xl gradient-border py-8 px-20 flex justify-center items-center'>
                                {logo.icon}
                            </div>)
                    }
                </div>
            </div>
            <h1 className='font-[Outfit] text-5xl mt-20'><span className='gradient-text pr-[10px]'>Tools</span>I use</h1>
            <div>
                <div className='grid grid-cols-5 gap-6 mt-10'>
                    {
                        logos.slice(14, 19).map((logo, i) =>
                            <div key={i} className='text-6xl gradient-border py-8 px-20 flex justify-center items-center'>
                                {logo.icon}
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;