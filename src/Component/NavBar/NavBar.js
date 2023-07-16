import React, { useState } from 'react';
import { AiFillCloseCircle, AiFillProject } from "react-icons/ai";
import { FaCode, FaDownload, FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { NavLink as RouterLink } from 'react-router-dom';
import './NavBar.css';

import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
   const [open, setOpen] = useState(false);
   const handleToggle = () => {
      setOpen(!open);
   }

   return (
      <div id='navbar'>
         <div className='menuToggler z-50 ' onClick={handleToggle} >
            {
               open ? <AiFillCloseCircle /> : <ImMenu />
            }
         </div>
         <nav className={`nav-menu-bar ${open ? "openMenu" : "closeMenu"}`}>
            <ul className='nav-menu' >
               <li>
                  {" "}
                  <ScrollLink to="home" spy={true} smooth={true} offset={-155} duration={500}
                     className={`text-lg ${({ isActive }) => isActive ? 'active' : undefined}`}
                     onClick={handleToggle}>
                     <span className='nav-icon'><FaHome /></span>
                     <span className='side-text'>Home</span>
                  </ScrollLink>
               </li>
               <li>
                  <RouterLink to="https://drive.google.com/file/d/11eJf6Pu9g2UyZApgsj_OZchZ91nDhHYz/view?usp=sharing" spy={true} smooth={true} offset={-75} duration={500}
                     className={`text-lg ${({ isActive }) => isActive ? 'active' : undefined}`}
                     onClick={handleToggle}>
                     <span className='nav-icon'><FaDownload /></span>
                     <span className='side-text'>Resume</span>
                  </RouterLink>
               </li>
               <li>
                  <ScrollLink to="skills" spy={true} smooth={true} offset={-35} duration={500}
                     className={`text-lg ${({ isActive }) => isActive ? 'active' : undefined}`}
                     onClick={handleToggle}>
                     <span className='nav-icon'><FaCode /></span>
                     <span className='side-text'>Skills</span>
                  </ScrollLink>
               </li>
               <li>
                  <ScrollLink to="projects" spy={true} smooth={true} offset={-35} duration={500}
                     className={`text-lg ${({ isActive }) => isActive ? 'active' : undefined}`}
                     onClick={handleToggle}>
                     <span className='nav-icon'><AiFillProject /></span>
                     <span className='side-text'>Projects</span>
                  </ScrollLink>
               </li>
               <li>
                  <ScrollLink to="contact" spy={true} smooth={true} offset={35} duration={500}
                     className={`text-lg ${({ isActive }) => isActive ? 'active' : undefined}`}
                     onClick={handleToggle}>
                     <span className='nav-icon'><IoCall /></span>
                     <span className='side-text'>Contact</span>
                  </ScrollLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default NavBar;