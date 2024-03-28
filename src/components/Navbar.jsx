import React, { useState } from "react";
import logo from "../assets/DHI-logo.png"
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "../CSS/Navbar.css"
const Navbar=()=>{
    const [navOpen,setnavOpen]=useState(false);
    return(
        <div className="sticky z-10 w-full top-0 flex flex-row justify-between pl-2 lg:px-4 drop-shadow-lg  h-[90px] bg-white">
            <img src={logo} className="my-auto w-[120px] ml-4"/>
            <button className="md:hidden absolute right-0 top-0 m-6" onClick={()=>{setnavOpen(!navOpen)}}>
                {navOpen ? <IoMdClose size={30}/>:<RxHamburgerMenu size={30}/>}


            </button>
            <div className={`flex md:flex-row flex-col  text-sm my-auto md:mx-8 md:gap-4 md:w-auto nav-class nav-mobile ${navOpen? "-md:animate-[width] duration-500 w-[50%] ":"w-0 -md:animate-[width] duration-500 overflow-hidden"} gap-8 `}>
                <NavLink to={'/'} className="text-blue-500">Home</NavLink>
                <NavLink to={'/about'} className="text-blue-500">About</NavLink>
                <NavLink to={'/offerings'} className="text-blue-500">Offerings</NavLink>
                <NavLink to={'/capabilities'} className="text-blue-500">Capabilities</NavLink>
                <NavLink to={'/solutions'} className="text-blue-500">Solutions</NavLink>
                <NavLink to={'/industries'} className="text-blue-500">Industries</NavLink>
                <NavLink to={'/whydhi'} className="text-blue-500">Why DHI-AI</NavLink>
                <NavLink to={'/team'} className="text-blue-500">Our Team</NavLink>
                <NavLink to={'/contact'} className="text-blue-500">Contact Us</NavLink>
                
            
            </div>
            
            
            
            
            
            
            
            </div>
            
        
            
        
    )
}
export default Navbar;