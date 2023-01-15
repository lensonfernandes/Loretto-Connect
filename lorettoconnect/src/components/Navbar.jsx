import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {FaFacebook, FaTwitter, FaYoutube,FaPinterest, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>LORETTO.Connect</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Upcoming Events</li>
        <li>Announcements</li>
        <li>Gallery</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20}/>
        <BsPerson size={20}/>
      </div>

{/* Hamburger for mobile  */}
      <div className="block md:hidden">
        <HiOutlineMenuAlt4 size={20}/>
      </div>


      <div className="absolute left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col">
      <ul >
        <h1>Loretto.Connect</h1>
        <li>Home</li>
        <li>Upcoming Events</li>
        <li>Announcements</li>
        <li>Gallery</li>
        <div>
          <button>LogIn</button>
          <button>About</button>
        </div>
        <div>
          <FaFacebook className='icon' />
          <FaTwitter  className='icon'/>
          <FaYoutube className='icon' />
          <FaPinterest  className='icon'/>
          <FaInstagram  className='icon'/>
        </div>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
