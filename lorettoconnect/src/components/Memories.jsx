import React from 'react'

import infant1 from '../assets/infant1.jpg'
import infant2 from '../assets/infant2.jpg'
import infant3 from '../assets/infant3.jpg'
import infant4 from '../assets/infant4.jpg'
import infant5 from '../assets/infant5.jpg'
import infant6 from '../assets/infant6.jpg'

const Memories = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <div className='relative'>
            <img src={infant1} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
            </div>
            </div>
            <div className='relative'>
            <img src={infant1} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
            </div>
        </div>
        <div className='relative'>
            <img src={infant1} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
            </div>
        </div>
        <div className='relative'>
            <img src={infant1} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
            </div>
        </div>
        <div className='relative'>
            <img src={infant1} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
            </div>
        </div>
        <div className='relative'>
            <img src={infant1} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
            </div>
        </div>
        
    </div>
  )
}

export default Memories