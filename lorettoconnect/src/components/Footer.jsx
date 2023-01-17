import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube,FaPinterest, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
               <h1>Loretto.</h1>  
               <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
               <FaFacebook className='icon' />
          <FaTwitter  className='icon'/>
          <FaYoutube className='icon' />
          <FaPinterest  className='icon'/>
          <FaInstagram  className='icon'/>
               </div>
            </div>
           <div className='flex justify-between'>
            <ul className='lg:flex'>
            <li>About(Coming soon)</li>
            <li>Partnership(Coming soon)</li>
            <li>Careers</li>
            <li>Advertising</li>
            </ul>
            <ul className='text-right lg:flex'>
            <li>News</li>
            <li>Travel</li>
            <li>Books</li>
            <li>Feedback</li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Footer