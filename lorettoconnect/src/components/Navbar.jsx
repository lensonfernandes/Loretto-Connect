import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
            <div>
                <h1>LORETTO Connect</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Upcoming Events</li>
                <li>Announcements</li>
                <li>Gallery</li>
                
            </ul>
            <div className='flex'>
                <BiSearch />
                <BsPerson />
            </div>
    </div>
  )
}

export default Navbar