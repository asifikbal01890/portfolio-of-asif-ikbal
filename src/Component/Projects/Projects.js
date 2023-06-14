import React from 'react';
import tradeMotors from '../../Files/image/projectsImg/trade-motors.png';
import foodCorner from '../../Files/image/projectsImg/food-corner.png';
import videoScript from '../../Files/image/projectsImg/videoscript.png';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {

    const projectsInfo = [
        {
            id: "01",
            name: "TradeMotors",
            img: tradeMotors,
            describe: "",
            liveSite: "",
            clientSite: "",
            serverSite: ""
        },
        {
            id: "01",
            name: "TradeMotors",
            img: tradeMotors,
            describe: "",
            liveSite: "",
            clientSite: "",
            serverSite: ""
        },
        {
            id: "01",
            name: "TradeMotors",
            img: tradeMotors,
            describe: "",
            liveSite: "",
            clientSite: "",
            serverSite: ""
        }
    ]

    return (
        <div className='text-white w-[1200px] mx-auto text-center'>
            <h1 className='font-[Outfit] text-5xl'>My <span className='gradient-text'>Projects</span></h1>
            <section className='mt-20 relative grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div className='box gradient-shadow h-96'>
                    <img className='gradient-border h-full w-full' src={tradeMotors} alt="" />
                </div>
                <div className='text-start'>
                    <h1 className='text-3xl font-[Outfit] gradient-text'>Trade Motors</h1>
                    <h5 className='my-5 text-lg font-medium'>This project is implemented by ReactJS, Context, TanStack Query, React-Router-Dom, DaisyUI, Firebase, Stripe, NodeJS and ExpressJS and the database used is MongoDB.</h5>
                    <ul className='list-disc ml-5'>
                        <li>Admin with dashboard that can manage users. He can verify or delete a seller and delete a buyer.</li>
                        <li>Registration system with buyer and seller options. Creating an account requires some information and just toggling the buyer or seller button.</li>
                        <li>There is also an online payment system so that the buyer can easily purchase the motor bikes. </li>
                    </ul>
                    <div className='flex gap-3 mt-9'>
                        <Link to={'https://trade-motors.web.app/'} className='gradient-btn px-5 py-2 text-lg font-semibold'>Live Preview</Link>
                        <Link to={'https://github.com/asifikbal01890/trade-motors-client-site'} className='gradient-btn px-5 py-2 text-lg font-semibold'>GitHub Client Code</Link>
                        <Link to={'https://github.com/asifikbal01890/trade-motors-server-site'} className='gradient-btn px-5 py-2 text-lg font-semibold'>GitHub Server Code</Link>
                    </div>
                </div>
            </section>
            <section className='mt-20 relative grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div className='box gradient-shadow h-96 lg:order-2'>
                    <img className='gradient-border h-full w-full' src={foodCorner} alt="" />
                </div>
                <div className='text-start lg:order-1'>
                    <h1 className='text-3xl font-[Outfit] gradient-text'>Food Corner</h1>
                    <h5 className='my-5 text-lg font-medium'>This project is implemented by ReactJS, Context, Bootstrap, Firebase, NodeJS, ExpressJS and the database used is MongoDB.</h5>
                    <ul className='list-disc ml-5'>
                        <li>User can register by name, picture, email and password and there is another way to login through Google account with one click. </li>
                        <li>User can add food item with food name, photo and price in food card and user can order his added food. </li>
                        <li>User can add his review along with rating and his own comment for particular food and delete this own review. </li>
                    </ul>
                    <div className='flex gap-3 mt-9'>
                        <Link to={'https://food-corner-remake-2ce32.web.app/'} className='gradient-btn px-5 py-2 text-lg font-semibold'>Live Preview</Link>
                        <Link to={'https://github.com/asifikbal01890/food-corner-client-site-remake'} className='gradient-btn px-5 py-2 text-lg font-semibold'>GitHub Client Code</Link>
                        <Link to={'https://github.com/asifikbal01890/food-corner-server-site-remake'} className='gradient-btn px-5 py-2 text-lg font-semibold'>GitHub Server Code</Link>
                    </div>
                </div>
            </section>
            <section className='mt-20 relative grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div className='box gradient-shadow h-96'>
                    <img className='gradient-border h-full w-full' src={videoScript} alt="" />
                </div>
                <div className='text-start'>
                    <h1 className='text-3xl font-[Outfit] gradient-text'>VideoScript</h1>
                    <h5 className='my-5 text-lg font-medium'>This project is implemented by ReactJS, React-Router-Dom, TanStack Query, TailwindCSS, Firebase, NodeJS, ExpressJS, and the database used is MongoDB.</h5>
                    <ul className='list-disc ml-5'>
                        <li>It is a video-to-subtitle converter website. Users can add his feedback and rating for this website.</li>
                        <li>Users can make YouTube video link-to-subtitle in text format. And also he/she can download this text file.</li>
                        <li>User can register by name, picture, email and password and there is another way to login through Google or GitHub.</li>
                    </ul>
                    <div className='flex gap-3 mt-9'>
                        <Link to={'https://videoscript-d1cf1.web.app/'} className='gradient-btn px-5 py-2 text-lg font-semibold'>Live Preview</Link>
                        <Link to={'https://github.com/asifikbal01890/videoscript-client-site'} className='gradient-btn px-5 py-2 text-lg font-semibold'>GitHub Client Code</Link>
                        <Link to={'https://github.com/asifikbal01890/videoscript-server-site'} className='gradient-btn px-5 py-2 text-lg font-semibold'>GitHub Server Code</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;