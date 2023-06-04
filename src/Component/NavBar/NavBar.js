import React, { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaBlogger, FaCode, FaDownload, FaHome, FaUserAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
   const [open, setOpen] = useState(false); 
   const handleToggle = () =>{
      setOpen(!open); 
   }
    return (
        <>
          <div className='menuToggler z-50 ' onClick={handleToggle} >
               {
                  open ? <AiFillCloseCircle/> : <ImMenu/>
               }
         </div>
         <nav  className={`nav-menu-bar ${open ? "openMenu" : "closeMenu"}`}>
            <ul className='nav-menu' >

               <NavLink to='/' className={`text-lg ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><FaHome/></span><span className='side-text'>Home</span></NavLink>

               <NavLink to='/about' className={`text-lg ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><FaUserAlt/></span><span className='side-text'>About</span></NavLink>
               <NavLink to='/foods' className={`text-lg ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><FaDownload/></span><span className='side-text'>Resume</span></NavLink>

               <NavLink to='/skills' className={`text-lg ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaCode/></span><span className='side-text'>Skills</span></NavLink>

               <NavLink to='/blog' className={`text-lg ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaBlogger/></span><span className='side-text'>Blog</span></NavLink>

               <NavLink to='/contact' className={`text-lg ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><IoCall/></span><span className='side-text'>Contact</span></NavLink>
            </ul>
         </nav>
     </>
    );
};

export default NavBar;