import React , {useState}from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {FaFacebook, FaTwitter, FaYoutube,FaPinterest, FaInstagram } from 'react-icons/fa'

const Navbar = () => {

const [nav, setNav] = useState(false);
const [logo, setLogo] = useState(false);

let handleNav = () => {
  setNav(!nav)
  setLogo(!logo)
}

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div >
        <h1 onClick={handleNav} className={logo? 'hidden' : 'block'}>LORETTO.Connect</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Last week</li>
        <li>Happening Now</li>
        <li className='mr-60'>Memories</li>
      </ul>
      <div className="hidden md:flex">
        {/* <BiSearch size={20} className='mr-2'/> */}
        <BsPerson size={20}/>
      </div>

{/* Hamburger for mobile  */}
      <div className=" md:hidden z-10" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} className='text-black'/> :<HiOutlineMenuAlt4 size={20}/> }
        
      </div>


      <div onClick={handleNav} className={nav ? 'absolute text-black left-[0] top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col':'absolute left-[-100%] top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col'}>
      <ul >
        <h1>Loretto.Connect</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Last week</li>
        <li className='border-b'>Happening now</li>
        <li className='border-b '>Memories</li>
        <div className='flex flex-col'>
          <button className='my-6'>LogIn</button>
          <button>About</button>
        </div>
        <div className="flex justify-between my-6">
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
